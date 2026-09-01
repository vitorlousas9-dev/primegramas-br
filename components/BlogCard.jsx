import Link from "next/link";
import PhotoSlot from "./PhotoSlot";
import Icon from "./Icon";

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export default function BlogCard({ post, featured = false }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{
        border: "1px solid var(--border-subtle)",
        display: "grid",
        gridTemplateRows: featured ? undefined : "auto",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div style={{ position: "relative", height: featured ? 320 : 200 }}>
        <PhotoSlot src={post.cover} alt={post.coverAlt} placeholder="Foto do post" />
      </div>
      <div style={{ padding: featured ? "var(--space-8)" : "var(--space-6)", display: "grid", gap: "var(--space-3)" }}>
        <span className="pg-eyebrow">{post.category}</span>
        <h3
          style={{
            fontSize: featured ? "var(--text-heading-1)" : "var(--text-heading-3)",
            margin: 0,
            fontWeight: "var(--fw-bold)",
            lineHeight: "var(--lh-snug)",
          }}
        >
          {post.title}
        </h3>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)", margin: 0 }}>{post.dek}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginTop: "var(--space-1)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "var(--text-xs)", color: "var(--text-subtle)" }}>
            <Icon name="calendar" size={13} color="var(--stone-400)" />
            {formatDate(post.date)}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "var(--text-xs)", color: "var(--text-subtle)" }}>
            <Icon name="clock" size={13} color="var(--stone-400)" />
            {post.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
