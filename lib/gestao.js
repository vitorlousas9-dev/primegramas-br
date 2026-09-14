import { createClient } from "@supabase/supabase-js";

// Ligação à app de Gestão Interna (Supabase). Usa a service role key, por isso
// só pode ser importado em código de servidor — nunca num componente cliente.
// A chave anónima não serve: as tabelas `leads` e `lead_history` não estão
// abertas a escrita pública, e é assim que devem ficar.
const URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Finalidade do formulário (USOS em components/QuoteForm.jsx) → PLACES da
// Gestão Interna. O que não tem equivalente fica sem lugar em vez de adivinhar.
const LUGARES = {
  "Jardim ou área de lazer": "Jardim",
  "Condomínio": "Condomínio",
  "Playground": "Playground",
  "Quadra poliesportiva": "Poliesportiva",
  "Campo de futebol": "Futebol-Society",
  "Evento ou vitrine": "Eventos",
};

export function isGestaoConfigured() {
  return Boolean(URL && SERVICE_KEY);
}

function client() {
  return createClient(URL, SERVICE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

// E.164 para o link de WhatsApp da ficha funcionar. isPhone já garante 10/11
// dígitos, ou 12/13 começando por 55.
export function toE164(telefone) {
  const d = String(telefone || "").replace(/\D/g, "");
  return "+" + ((d.length === 12 || d.length === 13) && d.startsWith("55") ? d : "55" + d);
}

// A metragem é texto livre: vale "A x B" ou só o primeiro número. No formato
// brasileiro "1.500" é milhar e a vírgula é a casa decimal.
export function parseMetragem(raw) {
  const s = String(raw || "");
  const tok = (t) => (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(t) ? t.replace(/\./g, "").replace(",", ".") : t.replace(",", "."));
  const dim = s.match(/(\d+(?:[.,]\d+)?)\s*[x×*]\s*(\d+(?:[.,]\d+)?)/i);
  let area = dim
    ? Number.parseFloat(tok(dim[1])) * Number.parseFloat(tok(dim[2]))
    : Number.parseFloat(tok((s.match(/\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:[.,]\d+)?/) || [""])[0]));
  if (!Number.isFinite(area) || area <= 0 || area > 1e6) area = 0;
  return Math.round(area * 100) / 100;
}

// hasOwn porque a finalidade vem do browser e "constructor" não pode virar lugar.
export function placeFromFinalidade(finalidade) {
  return Object.hasOwn(LUGARES, finalidade) ? LUGARES[finalidade] : null;
}

/**
 * Envia o pedido para a Gestão Interna, como lead do Brasil. A função
 * `create_lead_from_site` no Supabase decide se cria um lead novo ou se anexa
 * ao que já existe — a deduplicação (telefone ou email, nunca entre países)
 * acontece lá dentro, numa só transação.
 *
 * Devolve { leadId, created }.
 */
export async function registarLead(lead) {
  // O texto original da metragem vai na nota: a conversão pode ter perdido algo.
  const nota = [
    lead.finalidade && `Finalidade: ${lead.finalidade}.`,
    lead.metragem && `Metragem informada: ${lead.metragem}.`,
    lead.detalhes && `Detalhes: ${lead.detalhes}`,
  ]
    .filter(Boolean)
    .join(" ");

  const { data, error } = await client().rpc("create_lead_from_site", {
    p_country: "BR",
    p_name: lead.nome,
    p_phone: toE164(lead.telefone),
    p_email: lead.email || "",
    p_nif: "",
    p_city: lead.cidade || "",
    p_area: parseMetragem(lead.metragem),
    p_place: placeFromFinalidade(lead.finalidade),
    p_note: nota,
  });

  if (error) throw new Error(`Gestão Interna: ${error.message}`);

  const row = Array.isArray(data) ? data[0] : data;
  return { leadId: row?.lead_id, created: Boolean(row?.created) };
}
