// Limite de pedidos por IP, em memória, com janela deslizante de 10 minutos.
// Na Vercel cada instância quente tem o seu próprio Map, por isso é "melhor
// esforço": a deduplicação por telefone/email na RPC é a segunda linha de defesa.

const JANELA_MS = 10 * 60 * 1000;
const MAX_POR_IP = 5;
// Travão global contra spam distribuído (muitos IPs, poucos pedidos cada).
const MAX_GLOBAL = 60;
// Evita que o Map cresça sem limite se alguém varrer milhares de IPs.
const MAX_IPS = 5000;

const porIp = new Map();
let todos = [];

export function clientIp(request) {
  const encadeado = request.headers.get("x-forwarded-for");
  const primeiro = encadeado ? encadeado.split(",")[0].trim() : "";
  return primeiro || request.headers.get("x-real-ip")?.trim() || "unknown";
}

// Os carimbos estão por ordem, logo basta cortar o prefixo que saiu da janela.
function dentroDaJanela(carimbos, agora) {
  let i = 0;
  while (i < carimbos.length && agora - carimbos[i] >= JANELA_MS) i += 1;
  return i === 0 ? carimbos : carimbos.slice(i);
}

function segundosAteLibertar(carimbos, agora) {
  return Math.max(1, Math.ceil((carimbos[0] + JANELA_MS - agora) / 1000));
}

export function checkRateLimit(ip, agora = Date.now()) {
  todos = dentroDaJanela(todos, agora);
  for (const [chave, carimbos] of porIp) {
    const vivos = dentroDaJanela(carimbos, agora);
    if (vivos.length === 0) porIp.delete(chave);
    else if (vivos !== carimbos) porIp.set(chave, vivos);
  }

  const meus = porIp.get(ip) || [];
  if (meus.length >= MAX_POR_IP) {
    return { ok: false, retryAfterSeconds: segundosAteLibertar(meus, agora) };
  }
  if (todos.length >= MAX_GLOBAL) {
    return { ok: false, retryAfterSeconds: segundosAteLibertar(todos, agora) };
  }

  // Reinserir põe o IP no fim: o Map fica ordenado do menos ao mais recente,
  // e é pela frente que se descarta quando passa do limite.
  porIp.delete(ip);
  porIp.set(ip, [...meus, agora]);
  todos.push(agora);
  while (porIp.size > MAX_IPS) porIp.delete(porIp.keys().next().value);

  return { ok: true, retryAfterSeconds: 0 };
}
