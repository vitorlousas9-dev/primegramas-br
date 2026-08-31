import Link from "next/link";

export default function Breadcrumb({ items, dark = false }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--space-2)",
        alignItems: "center",
        fontSize: "var(--text-sm)",
        color: dark ? "var(--stone-300)" : "var(--text-muted)",
        flexWrap: "wrap",
      }}
    >
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          {i > 0 && <span>·</span>}
          {item.href ? (
            <Link
              href={item.href}
              style={{ border: 0, color: dark ? "var(--stone-300)" : "var(--text-muted)", fontWeight: "var(--fw-semibold)" }}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: dark ? "#fff" : "var(--text-strong)", fontWeight: "var(--fw-semibold)" }}>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
