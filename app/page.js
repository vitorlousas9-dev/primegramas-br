import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteSection from "@/components/QuoteSection";
import BenefitCard from "@/components/BenefitCard";
import PhotoSlot from "@/components/PhotoSlot";
import Icon from "@/components/Icon";
import StarRating from "@/components/StarRating";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { getHreflangAlternates } from "@/lib/hreflang";

export const metadata = {
  alternates: getHreflangAlternates("/"),
};

const arrowLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  width: "max-content",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--fw-bold)",
  color: "var(--green-700)",
  border: 0,
  borderBottom: "2px solid var(--green-200)",
  paddingBottom: 2,
};

export default function Home() {
  return (
    <>
      <SiteHeader active="inicio" />

      <section style={{ position: "relative", minHeight: 620, display: "grid", alignItems: "center", overflow: "hidden" }}>
        <PhotoSlot src="/images/jardim-residencial-lawn.jpeg" alt="Jardim residencial com grama sintética Primegramas" placeholder="Foto de obra entregue — jardim ou campo, largura total" priority />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, color-mix(in oklab, var(--stone-950) 84%, transparent) 0%, color-mix(in oklab, var(--stone-950) 58%, transparent) 46%, transparent 80%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-24) var(--gutter-inline)", width: "100%", pointerEvents: "none" }}>
          <div style={{ maxWidth: 680, display: "grid", gap: "var(--space-6)" }}>
            <span className="pg-eyebrow" style={{ color: "var(--green-300)" }}>
              Grama sintética · Brasil e Portugal
            </span>
            <h1 style={{ color: "#fff", fontSize: "var(--text-display-1)", lineHeight: "var(--lh-tight)", fontWeight: "var(--fw-light)", margin: 0 }}>
              Soluções em Grama Sintética: <span style={{ fontWeight: "var(--fw-bold)" }}>Qualidade e Excelência</span> para Seu Projeto
            </h1>
            <p style={{ color: "var(--stone-200)", fontSize: "var(--text-lg)", lineHeight: "var(--lh-relaxed)", maxWidth: 560 }}>
              Há 20 anos transformando espaços com um produto durável, sustentável e com a aparência natural que você precisa.
            </p>
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", pointerEvents: "auto", marginTop: "var(--space-2)" }}>
              <a
                href="#orcamento"
                style={{
                  border: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  height: "var(--control-h-lg)",
                  padding: "0 var(--space-8)",
                  borderRadius: "var(--radius-pill)",
                  background: "var(--green-500)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--fw-semibold)",
                  boxShadow: "var(--shadow-brand)",
                }}
              >
                Solicitar Orçamento
                <Icon name="arrow-right" size={18} color="#fff" />
              </a>
              <Link
                href="/produtos"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "var(--control-h-lg)",
                  padding: "0 var(--space-8)",
                  borderRadius: "var(--radius-pill)",
                  background: "color-mix(in oklab, #fff 14%, transparent)",
                  border: "1px solid color-mix(in oklab, #fff 55%, transparent)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--fw-semibold)",
                }}
              >
                Ver Produtos
              </Link>
            </div>
            <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)" }}>
                <StarRating size={16} />
                +5.000 clientes satisfeitos
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)" }}>
                <Icon name="shield-check" size={18} color="var(--green-400)" />
                Garantia de 1 a 3 anos
              </span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y) 0" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "0 var(--gutter-inline)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-16)",
            alignItems: "center",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-5)", alignContent: "start" }}>
            <span className="pg-eyebrow">Quem somos</span>
            <h2 style={{ fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
              Referência em <span style={{ fontWeight: "var(--fw-bold)" }}>fornecimento e instalação</span> de grama sintética
            </h2>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)", maxWidth: 520 }}>
              São 20 anos atendendo condomínios, escolas, clubes, construtoras e donos de quadras, com soluções práticas e personalizadas para cada projeto.
            </p>
            <Link href="/sobre" style={arrowLinkStyle}>
              Ver mais sobre a Primegramas
              <Icon name="arrow-right" size={16} color="var(--green-700)" />
            </Link>
          </div>
          <div style={{ position: "relative", height: 340, borderRadius: "var(--radius-blade)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
            <PhotoSlot src="/images/instalacao-em-andamento.jpeg" alt="Instalação de grama sintética em andamento" placeholder="Foto da equipe ou de uma instalação em andamento" />
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-12)" }}>
          <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: 620 }}>
            <span className="pg-eyebrow">Benefícios da grama sintética</span>
            <h2 style={{ fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
              Área verde <span style={{ fontWeight: "var(--fw-bold)" }}>sem corte, sem rega, sem lama</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "var(--space-5)" }}>
            <BenefitCard
              icon="shield-check"
              title="Durabilidade"
              text="Fio 100% polietileno virgem e base de polipropileno com camadas de látex: de 3 a 10 anos de vida útil conforme o modelo e o tráfego."
            />
            <BenefitCard
              icon="clock"
              title="Baixa manutenção"
              text="Sem corte, sem adubo e sem replantio. A limpeza é simples e o espaço fica pronto para uso todos os dias do ano."
            />
            <BenefitCard
              icon="sprout"
              title="Sustentabilidade"
              text="Economia de água e fim do uso de defensivos. Foco na redução do impacto ambiental em cada projeto."
            />
            <BenefitCard
              icon="home"
              title="Estética"
              text="Modelos monofilados e bicolores com aparência natural, de 12mm a 50mm, com tratamento contra desbotamento."
              solid
              blade
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-12)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--space-8)", flexWrap: "wrap" }}>
            <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: 560 }}>
              <span className="pg-eyebrow">Linha de produtos</span>
              <h2 style={{ fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
                Duas linhas, <span style={{ fontWeight: "var(--fw-bold)" }}>um modelo certo</span> para cada uso
              </h2>
            </div>
            <Link href="/produtos" style={arrowLinkStyle}>
              Ver todos os produtos
              <Icon name="arrow-right" size={16} color="var(--green-700)" />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-6)" }}>
            <Link
              href="/produtos/decorativa"
              style={{
                display: "block",
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ position: "relative", height: 260 }}>
                <PhotoSlot src="/images/jardim-moderno-entardecer.jpeg" alt="Jardim residencial com grama sintética decorativa" placeholder="Foto — jardim ou área de lazer com grama decorativa" />
              </div>
              <div style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-3)" }}>
                <span className="pg-eyebrow">7 modelos · 12mm a 30mm</span>
                <h3 style={{ fontSize: "var(--text-heading-1)", margin: 0, fontWeight: "var(--fw-bold)" }}>Linha Decorativa</h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>
                  Visual natural, resistente e macia. Ideal para áreas de lazer, jardins e paisagismo.
                </p>
                <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--fw-bold)", color: "var(--green-700)", marginTop: "var(--space-2)" }}>
                  Ver a linha
                  <Icon name="arrow-right" size={16} color="var(--green-700)" />
                </span>
              </div>
            </Link>
            <Link
              href="/produtos/esportiva"
              style={{
                display: "block",
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ position: "relative", height: 260 }}>
                <PhotoSlot src="/images/campo-futebol.jpeg" alt="Campo esportivo com grama sintética" placeholder="Foto — campo de futebol ou quadra com grama esportiva" />
              </div>
              <div style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-3)" }}>
                <span className="pg-eyebrow">4 modelos · 20mm a 50mm</span>
                <h3 style={{ fontSize: "var(--text-heading-1)", margin: 0, fontWeight: "var(--fw-bold)" }}>Linha Esportiva</h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>
                  Alta resistência e performance para prática esportiva, com drenagem rápida e absorção de impacto.
                </p>
                <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--fw-bold)", color: "var(--green-700)", marginTop: "var(--space-2)" }}>
                  Ver a linha
                  <Icon name="arrow-right" size={16} color="var(--green-700)" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-inverse)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-12)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--space-8)", flexWrap: "wrap" }}>
            <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: 560 }}>
              <span className="pg-eyebrow" style={{ color: "var(--green-400)" }}>
                Motivos para nos contratar
              </span>
              <h2 style={{ color: "#fff", fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
                Tradição, <span style={{ fontWeight: "var(--fw-bold)" }}>sucesso comprovado</span> e laudo técnico
              </h2>
            </div>
            <Link href="/sobre" style={{ ...arrowLinkStyle, color: "var(--green-400)", borderBottomColor: "var(--green-800)" }}>
              Ver nossos diferenciais
              <Icon name="arrow-right" size={16} color="var(--green-400)" />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-8)" }}>
            {[
              ["20 anos", "Pioneiros no mercado", "Tradição, qualidade e confiança construídas desde a primeira instalação."],
              ["+5.000", "Clientes satisfeitos", "Sucesso comprovado em obras de pequeno e grande porte, no Brasil e em Portugal."],
              ["Laudo", "Qualidade excepcional", "Todos os produtos com laudos técnicos e certificações."],
            ].map(([stat, title, text]) => (
              <div key={title} style={{ display: "grid", gap: "var(--space-3)", alignContent: "start", borderTop: "2px solid var(--green-500)", paddingTop: "var(--space-6)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)", fontWeight: "var(--fw-bold)", color: "#fff", lineHeight: 1 }}>{stat}</span>
                <h3 style={{ color: "#fff", fontSize: "var(--text-heading-3)", margin: 0 }}>{title}</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--stone-400)", lineHeight: "var(--lh-relaxed)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <QuoteSection origem="homepage" />
      <SiteFooter />
    </>
  );
}
