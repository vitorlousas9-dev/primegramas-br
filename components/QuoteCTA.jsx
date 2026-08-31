import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { WHATSAPP_URL, PHONE_URL, PHONE_DISPLAY } from "@/lib/site";

export default function QuoteCTA() {
  return (
    <section style={{ padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)" }}>
        <div
          style={{
            background: "var(--surface-brand)",
            borderRadius: "var(--radius-blade)",
            padding: "var(--space-16) var(--space-12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "var(--space-10)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-4)", maxWidth: 600 }}>
            <span className="pg-eyebrow" style={{ color: "var(--green-900)" }}>
              Orçamento sem custo
            </span>
            <h2
              style={{
                color: "#fff",
                fontSize: "var(--text-display-2)",
                margin: 0,
                lineHeight: "var(--lh-tight)",
                fontWeight: "var(--fw-light)",
              }}
            >
              Diga a metragem e o uso.
              <br />
              <span style={{ fontWeight: "var(--fw-bold)" }}>Enviamos a proposta.</span>
            </h2>
            <p style={{ color: "#fff", opacity: 0.94, fontSize: "var(--text-lg)", lineHeight: "var(--lh-relaxed)" }}>
              Atendimento por telefone, WhatsApp ou e-mail, com visita técnica antes da instalação. Proposta com
              validade de 7 dias e suporte pós-venda.
            </p>
          </div>
          <div style={{ display: "grid", gap: "var(--space-3)", minWidth: 260 }}>
            <Link
              href="/contato"
              style={{
                border: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                height: "var(--control-h-lg)",
                padding: "0 var(--space-8)",
                borderRadius: "var(--radius-pill)",
                background: "var(--stone-950)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--fw-semibold)",
              }}
            >
              Solicitar orçamento
              <Icon name="arrow-right" size={18} color="#fff" />
            </Link>
            <a
              href={WHATSAPP_URL}
              style={{
                border: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                height: "var(--control-h-lg)",
                padding: "0 var(--space-8)",
                borderRadius: "var(--radius-pill)",
                background: "#fff",
                color: "var(--green-800)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
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
                textAlign: "center",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--fw-semibold)",
                color: "#fff",
                opacity: 0.9,
                paddingTop: "var(--space-1)",
              }}
            >
              ou ligue {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
