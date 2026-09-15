import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteCTA from "@/components/QuoteCTA";
import PhotoSlot from "@/components/PhotoSlot";
import { getHreflangAlternates } from "@/lib/hreflang";

export const metadata = {
  alternates: getHreflangAlternates("/obras"),
  title: "Obras",
  description: "Uma seleção de obras de instalação de grama sintética em condomínios, escolas, clubes e residências entregues pela Primegramas.",
};

const OBRAS = [
  { src: "/images/obra-escola-01.jpeg", alt: "Grama sintética instalada em playground escolar" },
  { src: "/images/obra-escola-02.jpeg", alt: "Grama sintética instalada em playground com balanços" },
  { src: "/images/obra-grama-colorida.jpeg", alt: "Grama sintética colorida instalada em área de playground" },
  { src: "/images/obra-piscina-02.jpeg", alt: "Grama sintética instalada ao redor de piscina residencial" },
  { src: "/images/obra-playground-crianca.jpeg", alt: "Criança brincando sobre grama sintética instalada" },
  { src: "/images/piscina-borda.jpeg", alt: "Borda de piscina com grama sintética instalada" },
  { src: "/images/condominio-playground.jpeg", alt: "Playground de condomínio com grama sintética instalada" },
  { src: "/images/quadra-padel.jpeg", alt: "Quadra de padel com grama sintética instalada" },
  { src: "/images/quadra-poliesportiva.jpeg", alt: "Quadra poliesportiva com grama sintética instalada" },
];

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
          {OBRAS.map((obra, i) => (
            <div
              key={obra.src}
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: i === 2 ? "var(--radius-blade)" : "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <PhotoSlot src={obra.src} alt={obra.alt} placeholder="Foto da obra" />
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
