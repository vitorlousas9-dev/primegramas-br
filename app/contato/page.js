import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/Icon";
import { Input, Select, Textarea } from "@/components/fields/Field";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, PHONE_URL, PHONE_DISPLAY, EMAIL, SITE_URL } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/contato" },
  title: "Contato",
  description: "Solicite um orçamento de grama sintética sem custo. Atendimento por telefone, WhatsApp ou e-mail, com visita técnica antes da instalação.",
};

const USOS = [
  "Jardim ou área de lazer",
  "Condomínio",
  "Escola ou creche",
  "Playground",
  "Quadra poliesportiva",
  "Campo de futebol",
  "Evento ou vitrine",
  "Outro",
];

function ContactRow({ href, iconSlot, title, subtitle, mono = false }) {
  return (
    <a href={href} style={{ border: 0, display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
      <span style={{ background: "var(--surface-sunken)", borderRadius: "var(--radius-md)", padding: "var(--space-3)", display: "grid", placeItems: "center" }}>
        {iconSlot}
      </span>
      <span style={{ display: "grid", gap: 2 }}>
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-strong)" }}>{title}</span>
        <span style={{ fontFamily: mono ? "var(--font-mono)" : undefined, fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{subtitle}</span>
      </span>
    </a>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader active="contato" />

      <section style={{ padding: "var(--space-20) 0 var(--section-y-tight)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-5)" }}>
          <span className="pg-eyebrow">Contato</span>
          <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
            Peça seu <span style={{ fontWeight: "var(--fw-bold)" }}>orçamento</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>
            Conte a finalidade, a metragem aproximada e as condições do piso. Respondemos por WhatsApp, telefone ou e-mail — nunca
            deixamos você sem resposta.
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
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "var(--space-6)",
            alignItems: "start",
          }}
        >
          <form
            style={{
              background: "var(--surface-sunken)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-blade)",
              padding: "var(--space-10)",
              display: "grid",
              gap: "var(--space-5)",
            }}
          >
            <span className="pg-eyebrow">Formulário de orçamento</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-5)" }}>
              <Input label="Nome" name="nome" placeholder="Seu nome completo" />
              <Input label="Telefone / WhatsApp" name="telefone" placeholder="(11) 90000-0000" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-5)" }}>
              <Input label="E-mail" name="email" type="email" placeholder="nome@empresa.com.br" />
              <Input label="Cidade / UF" name="cidade" placeholder="São Paulo — SP" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-5)" }}>
              <Select label="Finalidade" name="finalidade" placeholder="Selecione o uso" options={USOS} />
              <Input label="Metragem aproximada" name="metragem" placeholder="120" suffix="m²" hint="Se não souber, informamos na visita técnica." />
            </div>
            <Textarea
              label="Sobre o espaço"
              name="detalhes"
              placeholder="Instalação nova ou troca, condição do piso (concreto, brita, terra), prazo desejado."
              rows={4}
            />
            <button
              type="button"
              style={{
                height: "var(--control-h-lg)",
                border: 0,
                borderRadius: "var(--radius-pill)",
                background: "var(--green-500)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                fontWeight: "var(--fw-semibold)",
                cursor: "pointer",
                boxShadow: "var(--shadow-brand)",
              }}
            >
              Solicitar orçamento
            </button>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>
              Proposta com validade de 7 dias. Aceitamos diversas formas de pagamento e parcelamento.
            </p>
          </form>

          <div style={{ display: "grid", gap: "var(--space-6)", alignContent: "start" }}>
            <div
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                padding: "var(--space-8)",
                display: "grid",
                gap: "var(--space-5)",
              }}
            >
              <span className="pg-eyebrow">Fale direto com o comercial</span>
              <ContactRow
                href={WHATSAPP_URL}
                iconSlot={<img src="/assets/whatsapp-logo-green.png" alt="" width={20} height={20} />}
                title="WhatsApp"
                subtitle={WHATSAPP_DISPLAY}
                mono
              />
              <ContactRow href={PHONE_URL} iconSlot={<Icon name="phone" size={20} color="var(--green-600)" />} title="Telefone" subtitle={PHONE_DISPLAY} mono />
              <ContactRow href={`mailto:${EMAIL}`} iconSlot={<Icon name="mail" size={20} color="var(--green-600)" />} title="E-mail" subtitle={EMAIL} />
              <ContactRow href={SITE_URL} iconSlot={<Icon name="arrow-right" size={20} color="var(--green-600)" />} title="Site" subtitle="www.primegramas.com.br" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-5)" }}>
              <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: "var(--space-6)", display: "grid", gap: "var(--space-3)", alignContent: "start" }}>
                <Icon name="map-pin" size={20} color="var(--green-600)" />
                <h2 style={{ fontSize: "var(--text-heading-3)", margin: 0 }}>Escritório São Paulo</h2>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>
                  Edifício Comercial Start
                  <br />
                  Estrada São Francisco 1820, sala 306
                  <br />
                  Taboão da Serra — SP
                </p>
              </div>
              <div style={{ background: "var(--surface-card-alt)", border: "1px solid var(--soil-200)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", padding: "var(--space-6)", display: "grid", gap: "var(--space-3)", alignContent: "start" }}>
                <Icon name="map-pin" size={20} color="var(--soil-600)" />
                <h2 style={{ fontSize: "var(--text-heading-3)", margin: 0 }}>Unidade Portugal</h2>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--soil-700)", lineHeight: "var(--lh-relaxed)" }}>
                  Estrada Malveira da Serra 1920
                  <br />
                  Lisboa — Cascais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
