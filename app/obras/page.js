import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteCTA from "@/components/QuoteCTA";
import PhotoSlot from "@/components/PhotoSlot";

export const metadata = { title: "Obras" };

export default function Page() {
  return (
    <>
      <SiteHeader active="obras" />

      <section style={{ padding: "var(--space-20) 0 var(--space-16)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-5)" }}>
          <span className="pg-eyebrow">Obras</span>
          <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
            Projetos <span style={{ fontWeight: "var(--fw-bold)" }}>entregues</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>
            Uma seleção de obras de instalação de grama sintética em condomínios, escolas, clubes e residências.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 var(--section-y)" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "0 var(--gutter-inline)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-5)",
          }}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: i === 2 ? "var(--radius-blade)" : "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <PhotoSlot placeholder="Foto da obra" />
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
