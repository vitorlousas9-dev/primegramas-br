import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteCTA from "@/components/QuoteCTA";
import PhotoSlot from "@/components/PhotoSlot";
import Icon from "@/components/Icon";
import { getHreflangAlternates } from "@/lib/hreflang";

export const metadata = {
  alternates: getHreflangAlternates("/produtos"),
  title: "Produtos",
  description: "Linha Decorativa e Linha Esportiva de grama sintética, de 12mm a 50mm, com fio 100% polietileno virgem e garantia de 1 a 3 anos.",
};

export default function Page() {
  return (
    <>
      <SiteHeader active="produtos" />

      <section style={{ padding: "var(--space-20) 0 var(--space-16)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-5)" }}>
          <span className="pg-eyebrow">Linha de produtos</span>
          <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
            A grama certa para cada espaço da sua <span style={{ fontWeight: "var(--fw-bold)" }}>casa, condomínio ou clube</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>
            Do jardim ao campo society, temos uma linha pensada pra cada tipo de uso — sempre com durabilidade comprovada e sem a manutenção que a grama natural exige.
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
          }}
        >
          <Link
            href="/produtos/decorativa"
            style={{ border: "1px solid var(--border-subtle)", display: "block", background: "var(--surface-card)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}
          >
            <div style={{ position: "relative", height: 240 }}>
              <PhotoSlot src="/images/jardim-decorativa-instalacao.jpeg" alt="Instalação de grama sintética decorativa em jardim residencial" placeholder="Foto — jardim residencial com grama decorativa" />
            </div>
            <div style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-3)" }}>
              <span className="pg-eyebrow">6 aplicações</span>
              <h2 style={{ fontSize: "var(--text-heading-1)", margin: 0, fontWeight: "var(--fw-bold)" }}>Linha Decorativa</h2>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>
                Visual natural, resistente e macia. Ideal para áreas de lazer, jardins e paisagismo.
              </p>
              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-1)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--green-800)", background: "var(--green-50)", borderRadius: "var(--radius-pill)", padding: "5px 10px" }}>
                  12 a 30mm
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--green-800)", background: "var(--green-50)", borderRadius: "var(--radius-pill)", padding: "5px 10px" }}>
                  3 a 10 anos
                </span>
              </div>
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--fw-bold)", color: "var(--green-700)", marginTop: "var(--space-2)" }}>
                Ver aplicações
                <Icon name="arrow-right" size={16} color="var(--green-700)" />
              </span>
            </div>
          </Link>

          <Link
            href="/produtos/esportiva"
            style={{ border: "1px solid var(--border-subtle)", display: "block", background: "var(--surface-card)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}
          >
            <div style={{ position: "relative", height: 240 }}>
              <PhotoSlot src="/images/campo-futebol.jpeg" alt="Campo esportivo com grama sintética" placeholder="Foto — campo society ou quadra poliesportiva" />
            </div>
            <div style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-3)" }}>
              <span className="pg-eyebrow">2 aplicações</span>
              <h2 style={{ fontSize: "var(--text-heading-1)", margin: 0, fontWeight: "var(--fw-bold)" }}>Linha Esportiva</h2>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>
                Alta resistência e performance para prática esportiva. Fios projetados para absorção de impacto e durabilidade.
              </p>
              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-1)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--green-800)", background: "var(--green-50)", borderRadius: "var(--radius-pill)", padding: "5px 10px" }}>
                  20 a 50mm
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--green-800)", background: "var(--green-50)", borderRadius: "var(--radius-pill)", padding: "5px 10px" }}>
                  drenagem rápida
                </span>
              </div>
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--fw-bold)", color: "var(--green-700)", marginTop: "var(--space-2)" }}>
                Ver aplicações
                <Icon name="arrow-right" size={16} color="var(--green-700)" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)", padding: "var(--section-y-tight) 0" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "0 var(--gutter-inline)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "var(--space-8)",
          }}
        >
          {[
            ["Base", "Polipropileno com 2 a 3 camadas de látex, para aderência ao solo e sustentação dos fios."],
            ["Fio", "Polietileno virgem, sem material reciclado, ao contrário de muitos importados."],
            ["Proteção U.V.", "Tratamento contra desbotamento pela exposição solar."],
            ["Garantia", "De 1 a 3 anos conforme o modelo, com laudo técnico e certificações."],
          ].map(([label, text]) => (
            <div key={label} style={{ display: "grid", gap: "var(--space-2)" }}>
              <span className="pg-eyebrow">{label}</span>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
