import { NextResponse } from "next/server";
import { registarLead, isGestaoConfigured } from "@/lib/gestao";
import { clean, normalizeLead, validateLead } from "@/lib/lead-validation";
import { checkRateLimit, clientIp } from "@/lib/rateLimit";
import { SITE_URL } from "@/lib/site";

// Webhook opcional (Zapier, Make, n8n...). Com a Gestão Interna configurada é só
// uma cópia; sem ela passa a ser a única entrega do pedido — ver `deliver()`.
const WEBHOOK_URL = process.env.ORCAMENTO_WEBHOOK_URL;

// Um pedido legítimo tem uns poucos KB; mais do que isso é lixo ou ataque.
const MAX_BODY_BYTES = 16384;
const SITE_HOST = new URL(SITE_URL).hostname;

const MSG_FALHA = "Não foi possível enviar o pedido. Tente pelo WhatsApp ou telefone.";
const MSG_RECUSADO = "Pedido recusado.";
const MSG_LIMITE = "Muitos pedidos seguidos. Aguarde alguns minutos ou fale com a gente pelo WhatsApp.";

// Quando o lead já está na Gestão Interna, uma falha aqui não perde nada. Por
// isso o erro fica no log em vez de derrubar o pedido.
async function notificarWebhook(lead, resultado) {
  if (!WEBHOOK_URL) return;
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, ...resultado }),
    });
    if (!res.ok) throw new Error(`respondeu ${res.status}`);
  } catch (error) {
    console.error("[orcamento] webhook falhou (lead já gravado):", error);
  }
}

async function deliver(lead) {
  if (isGestaoConfigured()) {
    const resultado = await registarLead(lead);
    console.info(
      `[orcamento] lead ${resultado.leadId} ${resultado.created ? "criado" : "já existia"} na Gestão Interna`,
    );
    await notificarWebhook(lead, resultado);
    return;
  }

  // Sem a Gestão Interna o webhook é o único destino, então a falha dele tem de
  // chegar ao visitante.
  if (WEBHOOK_URL) {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);
    return;
  }

  // Em desenvolvimento basta ver o pedido no terminal. Em produção preferimos
  // devolver erro (e mostrar o WhatsApp ao visitante) a fingir que recebemos um
  // pedido que na verdade se perdeu.
  if (process.env.NODE_ENV !== "production") {
    console.info("[orcamento] Gestão Interna e ORCAMENTO_WEBHOOK_URL não definidos. Pedido recebido:", lead);
    return;
  }

  throw new Error("Nem SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY nem ORCAMENTO_WEBHOOK_URL estão definidos");
}

// Sem `origin` não bloqueamos: há clientes legítimos que o omitem. Com ele, só
// aceitamos o próprio site (com ou sem www), os endereços Vercel deste projeto
// e, fora de produção, localhost em qualquer porta.
function originPermitida(origin) {
  if (!origin) return true;
  let host;
  try {
    host = new URL(origin).hostname;
  } catch {
    return false;
  }
  const apex = SITE_HOST.replace(/^www\./, "");
  if (host === apex || host === `www.${apex}`) return true;
  // Qualquer `.vercel.app` deixaria passar o deploy de outra pessoa; só valem
  // os deste projeto, que a Vercel expõe em runtime.
  const vercel = [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL, process.env.VERCEL_PROJECT_PRODUCTION_URL];
  if (vercel.filter(Boolean).includes(host)) return true;
  return process.env.NODE_ENV !== "production" && (host === "localhost" || host === "127.0.0.1");
}

export async function POST(request) {
  // Recusar pelo cabeçalho poupa ler o corpo; mas ele pode faltar ou mentir,
  // por isso o tamanho real é medido de novo depois de lido — em bytes, porque
  // contar caracteres deixava passar texto acentuado muito acima do limite.
  const contentLength = Number.parseInt(request.headers.get("content-length") || "", 10);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, message: MSG_FALHA }, { status: 413 });
  }

  let body;
  try {
    const bytes = await request.arrayBuffer();
    if (bytes.byteLength > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, message: MSG_FALHA }, { status: 413 });
    }
    body = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return NextResponse.json({ ok: false, message: "Pedido inválido." }, { status: 400 });
  }
  // JSON válido que não é objeto ("null", "3") quebraria a leitura dos campos.
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, message: "Pedido inválido." }, { status: 400 });
  }

  if (!originPermitida(request.headers.get("origin"))) {
    return NextResponse.json({ ok: false, message: MSG_RECUSADO }, { status: 403 });
  }

  // Campo escondido por CSS: só um bot o preenche. Respondemos 200 para não lhe
  // dar pistas de que foi detectado.
  if (clean(body.website, 100)) return NextResponse.json({ ok: true });

  const data = normalizeLead(body);
  const errors = validateLead(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Só depois da isca e da validação: se o lixo gastasse o limite global, uma
  // onda de spam bloquearia os visitantes reais sem entregar nada.
  const limite = checkRateLimit(clientIp(request));
  if (!limite.ok) {
    return NextResponse.json(
      { ok: false, message: MSG_LIMITE },
      { status: 429, headers: { "Retry-After": String(limite.retryAfterSeconds) } },
    );
  }

  try {
    await deliver({ ...data, origem: clean(body.origem, 60) || "site", recebidoEm: new Date().toISOString() });
  } catch (error) {
    console.error("[orcamento] falha ao entregar o pedido:", error);
    return NextResponse.json({ ok: false, message: MSG_FALHA }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
