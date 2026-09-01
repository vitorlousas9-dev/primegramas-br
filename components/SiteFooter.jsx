import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { WHATSAPP_URL, PHONE_URL, PHONE_DISPLAY, EMAIL } from "@/lib/site";

const linkStyle = { border: 0, fontSize: "var(--text-sm)", color: "var(--stone-300)" };

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--surface-inverse)",
        color: "var(--text-on-dark)",
        paddingTop: "var(--space-20)",
        paddingBottom: "var(--space-8)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--gutter-inline)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "var(--space-10)",
        }}
      >
        <div style={{ display: "grid", gap: "var(--space-4)", alignContent: "start" }}>
          <Image
            src="/assets/logo-vertical-white.png"
            alt="Primegramas"
            width={140}
            height={92}
            style={{ height: 92, width: "auto", objectFit: "contain", objectPosition: "left" }}
          />
          <p style={{ fontSize: "var(--text-sm)", color: "var(--stone-400)", lineHeight: "var(--lh-relaxed)", maxWidth: 280 }}>
            Fornecimento e instalação de grama sintética há 20 anos. Do orçamento à entrega, sempre à disposição.
          </p>
          <a
            href={WHATSAPP_URL}
            style={{
              border: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 44,
              padding: "0 var(--space-5)",
              borderRadius: "var(--radius-pill)",
              background: "var(--whatsapp)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--fw-semibold)",
              width: "max-content",
            }}
          >
            <Image src="/assets/whatsapp-icon-white.png" alt="" width={18} height={18} />
            Falar no WhatsApp
          </a>
        </div>

        <div style={{ display: "grid", gap: "var(--space-3)", alignContent: "start" }}>
          <span className="pg-eyebrow" style={{ color: "var(--green-400)" }}>
            Produtos
          </span>
          <Link href="/produtos/decorativa" style={linkStyle}>
            Linha Decorativa
          </Link>
          <Link href="/produtos/esportiva" style={linkStyle}>
            Linha Esportiva
          </Link>
          <Link href="/produtos" style={linkStyle}>
            Todas as linhas
          </Link>
        </div>

        <div style={{ display: "grid", gap: "var(--space-3)", alignContent: "start" }}>
          <span className="pg-eyebrow" style={{ color: "var(--green-400)" }}>
            Empresa
          </span>
          <Link href="/sobre" style={linkStyle}>
            Quem somos
          </Link>
          <Link href="/obras" style={linkStyle}>
            Obras
          </Link>
          <Link href="/depoimentos" style={linkStyle}>
            Depoimentos
          </Link>
          <Link href="/contato" style={linkStyle}>
            Contato
          </Link>
        </div>

        <div style={{ display: "grid", gap: "var(--space-3)", alignContent: "start" }}>
          <span className="pg-eyebrow" style={{ color: "var(--green-400)" }}>
            Contato
          </span>
          <a href={PHONE_URL} style={{ ...linkStyle, display: "flex", gap: 8, alignItems: "center" }}>
            <Icon name="phone" size={15} color="var(--green-400)" />
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} style={{ ...linkStyle, display: "flex", gap: 8, alignItems: "center" }}>
            <Icon name="mail" size={15} color="var(--green-400)" />
            {EMAIL}
          </a>
        </div>

        <div style={{ display: "grid", gap: "var(--space-5)", alignContent: "start" }}>
          <span className="pg-eyebrow" style={{ color: "var(--green-400)" }}>
            Unidades
          </span>
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--fw-bold)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              São Paulo
            </span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--stone-400)", lineHeight: "var(--lh-relaxed)" }}>
              Edifício Comercial Start
              <br />
              Estrada São Francisco 1820, sala 306
              <br />
              Taboão da Serra — SP
            </span>
          </div>
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--fw-bold)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              Portugal
            </span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--stone-400)", lineHeight: "var(--lh-relaxed)" }}>
              Estrada de Sassoeiros, 96A
              <br />
              2775-530 Carcavelos
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "var(--space-16) auto 0",
          padding: "var(--space-6) var(--gutter-inline) 0",
          borderTop: "1px solid var(--stone-800)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--space-4)",
        }}
      >
        <span className="pg-tagline" style={{ color: "var(--stone-600)" }}>
          Grama sintética para jardins e desportos
        </span>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--stone-600)" }}>© 2026 Primegramas</span>
      </div>
    </footer>
  );
}
