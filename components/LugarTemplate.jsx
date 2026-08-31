import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import QuoteCTA from "./QuoteCTA";
import BenefitCard from "./BenefitCard";
import Breadcrumb from "./Breadcrumb";
import PhotoSlot from "./PhotoSlot";
import Icon from "./Icon";

export default function LugarTemplate({
  breadcrumb,
  lineLabel,
  title,
  condensed = false,
  intro,
  heroPlaceholder,
  heroSrc,
  benefits,
  idealPara,
}) {
  return (
    <>
      <SiteHeader active="produtos" />

      <section style={{ padding: "var(--space-12) 0 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)" }}>
          <Breadcrumb items={breadcrumb} />
        </div>
      </section>

      <section style={{ padding: "var(--space-6) 0 0" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 var(--gutter-inline)",
            display: "grid",
            gap: "var(--space-5)",
          }}
        >
          <span className="pg-eyebrow">{lineLabel}</span>
          {condensed ? (
            <h1
              style={{
                fontFamily: "var(--font-condensed)",
                fontSize: "var(--text-display-2)",
                margin: 0,
                fontWeight: "var(--fw-bold)",
                lineHeight: 1,
                textTransform: "uppercase",
                letterSpacing: 0,
              }}
            >
              {title}
            </h1>
          ) : (
            <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
              {title.light} <span style={{ fontWeight: "var(--fw-bold)" }}>{title.bold}</span>
            </h1>
          )}
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>{intro}</p>
        </div>
      </section>

      <section style={{ padding: "var(--space-10) 0 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)" }}>
          <div
            style={{
              position: "relative",
              height: 400,
              borderRadius: "var(--radius-blade)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <PhotoSlot src={heroSrc} placeholder={heroPlaceholder} alt="" />
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y) 0 var(--space-16)" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "0 var(--gutter-inline)",
            display: "grid",
            gap: "var(--space-8)",
          }}
        >
          <span className="pg-eyebrow">Benefícios técnicos</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-5)" }}>
            {benefits.map((b, i) => (
              <BenefitCard key={i} icon={b.icon} title={b.title} text={b.text} solid={i === benefits.length - 1} blade={i === benefits.length - 1} />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "var(--space-4)",
              background: "var(--surface-sunken)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-6)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              <Icon name="users" size={18} color="var(--green-700)" />
              <span className="pg-eyebrow">Ideal para</span>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
              {idealPara.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--text-body)",
                    background: "#fff",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-pill)",
                    padding: "6px 12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
