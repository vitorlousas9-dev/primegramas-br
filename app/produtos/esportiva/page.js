import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteCTA from "@/components/QuoteCTA";
import Breadcrumb from "@/components/Breadcrumb";
import PhotoSlot from "@/components/PhotoSlot";
import Icon from "@/components/Icon";

export const metadata = { title: "Linha Esportiva" };

const CARDS = [
  {
    href: "/produtos/esportiva/campos",
    title: "Campos de Futebol e Society",
    text: "Drenagem rápida e absorção de impacto para manter o jogo em qualquer clima.",
    placeholder: "Foto — campo de futebol society com grama esportiva",
  },
  {
    href: "/produtos/esportiva/tenis-padel",
    title: "Tênis e Padel",
    text: "Perfil baixo e alta resistência para o ritmo de jogo em quadra.",
    placeholder: "Foto — quadra de tênis ou padel com grama esportiva",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader active="produtos" />

      <section style={{ position: "relative", minHeight: 460, display: "grid", alignItems: "end", overflow: "hidden", background: "var(--stone-950)" }}>
        <PhotoSlot src="/images/campo-futebol.jpeg" alt="Campo esportivo com grama sintética" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, color-mix(in oklab, var(--stone-950) 88%, transparent) 0%, color-mix(in oklab, var(--stone-950) 55%, transparent) 55%, color-mix(in oklab, var(--stone-950) 20%, transparent) 100%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-16) var(--gutter-inline)", width: "100%" }}>
          <div style={{ marginBottom: "var(--space-6)" }}>
            <Breadcrumb items={[{ label: "Produtos", href: "/produtos" }, { label: "Linha Esportiva" }]} dark />
          </div>
          <div style={{ display: "grid", gap: "var(--space-5)", maxWidth: 680 }}>
            <span className="pg-eyebrow" style={{ color: "var(--green-400)" }}>
              Linha Esportiva · 2 aplicações
            </span>
            <h1
              style={{
                fontFamily: "var(--font-condensed)",
                color: "#fff",
                fontSize: "var(--text-display-1)",
                margin: 0,
                fontWeight: "var(--fw-bold)",
                lineHeight: 1,
                textTransform: "uppercase",
                letterSpacing: 0,
              }}
            >
              Alta resistência e performance
            </h1>
            <p style={{ color: "var(--stone-200)", fontSize: "var(--text-lg)", lineHeight: "var(--lh-relaxed)", maxWidth: 560 }}>
              Fios projetados para absorção de impacto e durabilidade. Aplicações: campos de futebol, quadras de tênis e poliesportivas.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-10)" }}>
          <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: 620 }}>
            <span className="pg-eyebrow">Aplicações</span>
            <h2 style={{ fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
              Encontre a aplicação <span style={{ fontWeight: "var(--fw-bold)" }}>certa para a sua quadra ou campo</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-6)" }}>
            {CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{ border: "1px solid var(--border-subtle)", display: "block", background: "var(--surface-card)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}
              >
                <div style={{ position: "relative", height: 200 }}>
                  <PhotoSlot src={card.href.includes("campos") ? "/images/campo-futebol.jpeg" : undefined} placeholder={card.placeholder} />
                </div>
                <div style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-2)" }}>
                  <h3 style={{ fontSize: "var(--text-heading-2)", margin: 0, fontWeight: "var(--fw-bold)" }}>{card.title}</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>{card.text}</p>
                  <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--fw-bold)", color: "var(--green-700)", marginTop: "var(--space-2)" }}>
                    Ver mais
                    <Icon name="arrow-right" size={16} color="var(--green-700)" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
