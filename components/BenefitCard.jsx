import Icon from "./Icon";

export default function BenefitCard({ icon, title, text, solid = false, blade = false }) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: blade ? "var(--radius-blade)" : "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        padding: "var(--space-6)",
        display: "grid",
        gap: "var(--space-4)",
        alignContent: "start",
      }}
    >
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: "var(--radius-pill)",
          background: solid ? "var(--green-500)" : "var(--surface-brand-soft)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Icon name={icon} size={22} color={solid ? "#fff" : "var(--green-700)"} />
      </span>
      <h3 style={{ fontSize: "var(--text-heading-3)", margin: 0 }}>{title}</h3>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)" }}>{text}</p>
    </div>
  );
}
