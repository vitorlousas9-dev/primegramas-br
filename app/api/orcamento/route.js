import { NextResponse } from "next/server";
import { registarLead, isGestaoConfigured } from "@/lib/gestao";
import { clean, normalizeLead, validateLead } from "@/lib/lead-validation";

// Webhook opcional (Zapier, Make, n8n...). Com a Gestão Interna configurada é só
// uma cópia; sem ela passa a ser a única entrega do pedido — ver `deliver()`.
const WEBHOOK_URL = process.env.ORCAMENTO_WEBHOOK_URL;

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

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Pedido inválido." }, { status: 400 });
  }

  // Campo escondido por CSS: só um bot o preenche. Respondemos 200 para não lhe
  // dar pistas de que foi detectado.
  if (clean(body.website, 100)) return NextResponse.json({ ok: true });

  const data = normalizeLead(body);
  const errors = validateLead(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    await deliver({ ...data, origem: clean(body.origem, 60) || "site", recebidoEm: new Date().toISOString() });
  } catch (error) {
    console.error("[orcamento] falha ao entregar o pedido:", error);
    return NextResponse.json(
      { ok: false, message: "Não foi possível enviar o pedido. Tente pelo WhatsApp ou telefone." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
