import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteCTA from "@/components/QuoteCTA";
import Breadcrumb from "@/components/Breadcrumb";
import PhotoSlot from "@/components/PhotoSlot";
import Icon from "@/components/Icon";

export const metadata = { title: "Linha Decorativa" };

const CARDS = [
  {
    href: "/produtos/decorativa/jardins",
    title: "Jardins e Paisagismo",
    text: "Verde o ano todo, sem rega e sem corte, em qualquer projeto de paisagismo.",
    src: "/images/jardim-decorativa-instalacao.jpeg",
    placeholder: "Foto — jardim residencial com grama decorativa",
  },
  {
    href: "/produtos/decorativa/playgrounds",
    title: "Playgrounds e Áreas Infantis",
    text: "Superfície macia e seca, com amortecimento para um playground mais seguro.",
    src: "/images/playground-desenhos.jpeg",
    placeholder: "Foto — playground com grama sintética",
  },
  {
    href: "/produtos/decorativa/condominios",
    title: "Condomínios e Áreas Comuns",
    text: "Acaba com a lama da chuva nas áreas comuns do condomínio.",
    src: "/images/condominio-playground.jpeg",
    placeholder: "Foto — área comum de condomínio com grama sintética",
  },
  {
    href: "/produtos/decorativa/eventos",
    title: "Eventos e Decoração Temática",
    text: "Cores vibrantes e instalação temporária para decoração de eventos.",
    src: "/images/evento-grama-colorida.jpeg",
    placeholder: "Foto — decoração de evento com grama sintética colorida",
  },
  {
    href: "/produtos/decorativa/piscinas",
    title: "Bordas de Piscina",
    text: "Conforto ao toque descalço e resistência à umidade constante.",
    src: "/images/piscina-borda.jpeg",
    placeholder: "Foto — borda de piscina com grama sintética",
  },
  {
    href: "/produtos/decorativa/vitrines",
    title: "Vitrines e Ambientes Comerciais",
    text: "Um ponto verde de baixa manutenção para lojas e escritórios.",
    src: "/images/vitrine-comercial.jpeg",
    placeholder: "Foto — vitrine comercial com grama sintética",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader active="produtos" />

      <section style={{ padding: "var(--space-16) 0 var(--space-16)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)" }}>
          <div style={{ marginBottom: "var(--space-8)" }}>
            <Breadcrumb items={[{ label: "Produtos", href: "/produtos" }, { label: "Linha Decorativa" }]} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-12)", alignItems: "end" }}>
            <div style={{ display: "grid", gap: "var(--space-5)" }}>
              <span className="pg-eyebrow">Linha Decorativa · 6 aplicações</span>
              <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
                Visual natural, <span style={{ fontWeight: "var(--fw-bold)" }}>resistente e macia</span>
              </h1>
              <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>
                Ideal para áreas de lazer, jardins e paisagismo. Aplicações: residências, áreas comerciais, condomínios.
              </p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--green-800)", background: "var(--green-50)", borderRadius: "var(--radius-pill)", padding: "8px 14px" }}>
                12mm a 30mm
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--green-800)", background: "var(--green-50)", borderRadius: "var(--radius-pill)", padding: "8px 14px" }}>
                garantia 1 a 3 anos
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--green-800)", background: "var(--green-50)", borderRadius: "var(--radius-pill)", padding: "8px 14px" }}>
                3 a 10 anos de vida útil
              </span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 var(--section-y)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-10)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-6)" }}>
            {CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{ border: "1px solid var(--border-subtle)", display: "block", background: "var(--surface-card)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}
              >
                <div style={{ position: "relative", height: 200 }}>
                  <PhotoSlot src={card.src} alt={card.title} placeholder={card.placeholder} />
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
