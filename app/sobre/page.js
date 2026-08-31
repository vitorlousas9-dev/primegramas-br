import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteCTA from "@/components/QuoteCTA";
import PhotoSlot from "@/components/PhotoSlot";
import BenefitCard from "@/components/BenefitCard";
import Icon from "@/components/Icon";

export const metadata = { title: "Sobre" };

const DIFERENCIAIS = [
  { icon: "message-circle", title: "Atendimento personalizado", text: "Cada cliente fala com quem entende do produto, do primeiro contato ao pós-venda." },
  { icon: "layers", title: "Equipe técnica especializada", text: "Da preparação da base à aplicação do gramado, em obras de pequeno e grande porte." },
  { icon: "shield-check", title: "Alta durabilidade e garantia", text: "Produtos com garantia de 1 a 3 anos e vida útil de 3 a 10 anos, conforme o modelo." },
  { icon: "trophy", title: "Casos de sucesso e recomendação", text: "Amplos casos de sucesso e recomendação no mercado." },
];

const MOTIVOS = [
  ["16 anos", "Pioneiros no mercado", "16 anos de tradição, qualidade e confiança."],
  ["+5.000", "Sucesso comprovado", "Mais de 5.000 clientes satisfeitos."],
  ["Laudo", "Qualidade excepcional", "Todos os produtos com laudos técnicos e certificações."],
];

export default function Page() {
  return (
    <>
      <SiteHeader active="sobre" />

      <section style={{ padding: "var(--space-20) 0 var(--section-y)" }}>
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
            <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
              16 anos de <span style={{ fontWeight: "var(--fw-bold)" }}>grama sintética instalada</span>
            </h1>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>
              A Primegramas é referência no fornecimento e instalação de grama sintética de alta qualidade. Com uma trajetória sólida,
              estamos há 16 anos atendendo a diversos setores, oferecendo soluções práticas e personalizadas para cada cliente. Nossa
              missão é transformar espaços com um produto durável, sustentável e com a aparência natural que você precisa.
            </p>
          </div>
          <div style={{ position: "relative", height: 420, borderRadius: "var(--radius-blade)", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
            <PhotoSlot placeholder="Foto da equipe técnica ou de uma obra entregue" />
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-12)" }}>
          <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: 620 }}>
            <span className="pg-eyebrow">Missão e valores</span>
            <h2 style={{ fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
              O que orienta <span style={{ fontWeight: "var(--fw-bold)" }}>cada projeto</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-5)" }}>
            <BenefitCard icon="shield-check" title="Excelência" text="Compromisso com a excelência em cada projeto." />
            <BenefitCard icon="sprout" title="Sustentabilidade" text="Foco na sustentabilidade, reduzindo o impacto ambiental." />
            <BenefitCard icon="message-circle" title="Atendimento" text="Dedicação ao atendimento personalizado." blade />
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
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-5)", alignContent: "start" }}>
            <span className="pg-eyebrow">Nossos diferenciais</span>
            <h2 style={{ fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
              Por que os projetos <span style={{ fontWeight: "var(--fw-bold)" }}>voltam para nós</span>
            </h2>
            <div style={{ position: "relative", height: 280, borderRadius: "var(--radius-lg)", overflow: "hidden", marginTop: "var(--space-4)" }}>
              <PhotoSlot placeholder="Foto — instalação em condomínio ou quadra" />
            </div>
          </div>
          <div style={{ display: "grid", gap: 0, alignContent: "start" }}>
            {DIFERENCIAIS.map((item, i) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "var(--space-4)",
                  alignItems: "flex-start",
                  padding: "var(--space-6) 0",
                  borderBottom: i < DIFERENCIAIS.length - 1 ? "1px solid var(--border-subtle)" : "none",
                }}
              >
                <Icon name={item.icon} size={20} color="var(--green-600)" />
                <div style={{ display: "grid", gap: "var(--space-1)" }}>
                  <h3 style={{ fontSize: "var(--text-heading-3)", margin: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-inverse)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-12)" }}>
          <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: 620 }}>
            <span className="pg-eyebrow" style={{ color: "var(--green-400)" }}>
              Motivos para nos contratar
            </span>
            <h2 style={{ color: "#fff", fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
              Três razões, <span style={{ fontWeight: "var(--fw-bold)" }}>todas verificáveis</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-8)" }}>
            {MOTIVOS.map(([stat, title, text]) => (
              <div key={title} style={{ display: "grid", gap: "var(--space-3)", alignContent: "start", borderTop: "2px solid var(--green-500)", paddingTop: "var(--space-6)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)", fontWeight: "var(--fw-bold)", color: "#fff", lineHeight: 1 }}>{stat}</span>
                <h3 style={{ color: "#fff", fontSize: "var(--text-heading-3)", margin: 0 }}>{title}</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--stone-400)", lineHeight: "var(--lh-relaxed)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
