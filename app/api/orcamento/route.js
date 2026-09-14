import { NextResponse } from "next/server";
import { clean, normalizeLead, validateLead } from "@/lib/lead-validation";

// Onde os pedidos são entregues. Aceita qualquer serviço que receba um POST em
// JSON (Zapier, Make, n8n, Formspree, um webhook próprio...). Sem esta variável
// definida não há como entregar o lead — ver a nota em `deliver()`.
const WEBHOOK_URL = process.env.ORCAMENTO_WEBHOOK_URL;

async function deliver(lead) {
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
    console.info("[orcamento] ORCAMENTO_WEBHOOK_URL não definido. Pedido recebido:", lead);
    return;
  }

  throw new Error("ORCAMENTO_WEBHOOK_URL não está definido");
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
