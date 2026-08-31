import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteCTA from "@/components/QuoteCTA";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials";

export const metadata = { title: "Depoimentos" };

export default function Page() {
  return (
    <>
      <SiteHeader active="depoimentos" />

      <section style={{ padding: "var(--space-20) 0 var(--section-y-tight)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-5)" }}>
          <span className="pg-eyebrow">Depoimentos</span>
          <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
            Avaliações de <span style={{ fontWeight: "var(--fw-bold)" }}>quem recebeu a obra</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>
            Oito avaliações 5 estrelas de clientes reais no Google.
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
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-6)",
            alignItems: "start",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} name={t.name} text={t.text} variant="grid" />
          ))}
        </div>
      </section>

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
