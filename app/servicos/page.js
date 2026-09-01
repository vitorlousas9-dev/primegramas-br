import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteCTA from "@/components/QuoteCTA";
import PhotoSlot from "@/components/PhotoSlot";
import Icon from "@/components/Icon";

export const metadata = {
  alternates: { canonical: "/servicos" },
  title: "Serviços",
  description: "Instalação especializada e consultoria técnica em grama sintética, da preparação da base à aplicação do gramado pronto para uso.",
};

const STEPS = [
  ["01", "Consulta e orçamento", "Atendimento por telefone, WhatsApp ou e-mail para entender a finalidade, a metragem e as condições do piso."],
  ["02", "Escolha do produto", "Indicamos o modelo certo para o uso e o tráfego do espaço, entre as linhas decorativa e esportiva."],
  ["03", "Instalação", "Com visita técnica prévia, para conferir a base e o acesso antes da execução."],
  ["04", "Entrega e garantia", "Gramado pronto para uso, com garantia do modelo e suporte pós-venda."],
];

export default function Page() {
  return (
    <>
      <SiteHeader active="servicos" />

      <section style={{ padding: "var(--space-20) 0 var(--section-y-tight)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-5)" }}>
          <span className="pg-eyebrow">Serviços</span>
          <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
            Instalação e <span style={{ fontWeight: "var(--fw-bold)" }}>consultoria técnica</span>
          </h1>
        </div>
      </section>

      <section style={{ padding: "0 0 var(--section-y)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "var(--space-6)" }}>
          <article style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-blade)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ position: "relative", height: 240 }}>
              <PhotoSlot src="/images/jardim-decorativa-instalacao.jpeg" alt="Equipe preparando a base e instalando a grama sintética" placeholder="Foto — equipe preparando a base ou colando o gramado" />
            </div>
            <div style={{ padding: "var(--space-8)", display: "grid", gap: "var(--space-4)" }}>
              <span style={{ width: 44, height: 44, borderRadius: "var(--radius-pill)", background: "var(--green-500)", display: "grid", placeItems: "center" }}>
                <Icon name="layers" size={22} color="#fff" />
              </span>
              <h2 style={{ fontSize: "var(--text-heading-1)", margin: 0 }}>Instalação especializada</h2>
              <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>
                Nossa equipe técnica especializada oferece serviços de instalação, desde a preparação da base à aplicação do gramado
                pronto para uso. Atuamos em obras de pequeno e grande porte, sempre com o compromisso de entregar qualidade e excelência.
              </p>
            </div>
          </article>
          <article style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ position: "relative", height: 240 }}>
              <PhotoSlot src="/images/medicao-tecnica.jpeg" alt="Visita técnica e medição da área para instalação" placeholder="Foto — visita técnica, medição da área" />
            </div>
            <div style={{ padding: "var(--space-8)", display: "grid", gap: "var(--space-4)" }}>
              <span style={{ width: 44, height: 44, borderRadius: "var(--radius-pill)", background: "var(--surface-brand-soft)", display: "grid", placeItems: "center" }}>
                <Icon name="ruler" size={22} color="var(--green-700)" />
              </span>
              <h2 style={{ fontSize: "var(--text-heading-1)", margin: 0 }}>Consultoria técnica</h2>
              <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>
                Prestamos suporte técnico especializado para orientar nossos clientes na escolha do melhor produto, de acordo com suas
                necessidades e especificidades do projeto.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section style={{ background: "var(--surface-inverse)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-12)" }}>
          <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: 620 }}>
            <span className="pg-eyebrow" style={{ color: "var(--green-400)" }}>
              Processo de compras
            </span>
            <h2 style={{ color: "#fff", fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
              Do primeiro contato à <span style={{ fontWeight: "var(--fw-bold)" }}>garantia</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "var(--space-8)" }}>
            {STEPS.map(([num, title, text]) => (
              <div key={num} style={{ display: "grid", gap: "var(--space-3)", alignContent: "start", borderTop: "2px solid var(--green-500)", paddingTop: "var(--space-6)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--green-400)" }}>{num}</span>
                <h3 style={{ color: "#fff", fontSize: "var(--text-heading-3)", margin: 0 }}>{title}</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--stone-400)", lineHeight: "var(--lh-relaxed)" }}>{text}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--stone-400)", borderTop: "1px solid var(--stone-800)", paddingTop: "var(--space-6)" }}>
            Aceitamos diversas formas de pagamento e parcelamento.
          </p>
        </div>
      </section>

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
