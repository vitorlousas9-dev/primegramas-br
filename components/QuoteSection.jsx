import Image from "next/image";
import Icon from "./Icon";
import QuoteForm from "./QuoteForm";
import { WHATSAPP_URL, PHONE_URL, PHONE_DISPLAY } from "@/lib/site";

const GARANTIAS = [
  { icon: "clock", title: "Resposta no mesmo dia", text: "Pedidos recebidos em horário comercial são respondidos em poucas horas." },
  { icon: "ruler", title: "Visita técnica sem custo", text: "Medimos o espaço e conferimos a base antes de fechar o orçamento." },
  { icon: "shield-check", title: "Proposta detalhada", text: "Preço fechado por escrito, sem custo que aparece no meio da obra." },
];

export default function QuoteSection({ origem = "homepage" }) {
  return (
    <section id="orcamento" style={{ background: "var(--surface-brand)", padding: "var(--section-y) 0", scrollMarginTop: 78 }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--gutter-inline)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: "var(--space-12)",
          alignItems: "start",
        }}
      >
        <div style={{ display: "grid", gap: "var(--space-6)", alignContent: "start" }}>
          <span className="pg-eyebrow" style={{ color: "var(--green-900)" }}>
            Orçamento sem custo
          </span>
          <h2 style={{ color: "#fff", fontSize: "var(--text-display-2)", margin: 0, lineHeight: "var(--lh-tight)", fontWeight: "var(--fw-light)" }}>
            Diga a metragem e o uso.
            <br />
            <span style={{ fontWeight: "var(--fw-bold)" }}>Enviamos a proposta.</span>
          </h2>

          <div style={{ display: "grid", gap: "var(--space-5)", marginTop: "var(--space-2)" }}>
            {GARANTIAS.map((item) => (
              <div key={item.title} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-4)", alignItems: "start" }}>
                <span
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "var(--radius-pill)",
                    background: "rgba(255,255,255,0.18)",
                    color: "#fff",
                  }}
                >
                  <Icon name={item.icon} size={19} />
                </span>
                <span style={{ display: "grid", gap: 2 }}>
                  <span style={{ color: "#fff", fontSize: "var(--text-base)", fontWeight: "var(--fw-semibold)" }}>{item.title}</span>
                  <span style={{ color: "#fff", opacity: 0.9, fontSize: "var(--text-sm)", lineHeight: "var(--lh-relaxed)" }}>{item.text}</span>
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center", marginTop: "var(--space-2)" }}>
            <a
              href={WHATSAPP_URL}
              style={{
                border: 0,
                display: "flex",
                alignItems: "center",
                gap: 10,
                height: "var(--control-h-md)",
                padding: "0 var(--space-6)",
                borderRadius: "var(--radius-pill)",
                background: "#fff",
                color: "var(--green-800)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--fw-semibold)",
              }}
            >
              <Image src="/assets/whatsapp-logo-green.png" alt="" width={18} height={18} />
              Falar no WhatsApp
            </a>
            <a
              href={PHONE_URL}
              style={{
                border: 0,
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--fw-semibold)",
                color: "#fff",
                opacity: 0.92,
              }}
            >
              ou ligue {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <QuoteForm origem={origem} />
      </div>
    </section>
  );
}
