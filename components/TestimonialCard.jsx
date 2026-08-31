import StarRating from "./StarRating";

export function TestimonialCard({ name, text, variant = "grid" }) {
  const isCarousel = variant === "carousel";
  return (
    <div
      style={
        isCarousel
          ? {
              scrollSnapAlign: "start",
              flex: "0 0 340px",
              background: "var(--surface-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-sm)",
              padding: "var(--space-6)",
              display: "grid",
              gap: "var(--space-4)",
              alignContent: "start",
            }
          : {
              background: "var(--surface-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-sm)",
              padding: "var(--space-8)",
              display: "grid",
              gap: "var(--space-5)",
              alignContent: "start",
            }
      }
    >
      <StarRating size={isCarousel ? 18 : 20} />
      {isCarousel ? (
        <>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>{text}</p>
          <div style={{ display: "grid", gap: 2, marginTop: "var(--space-2)" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-heading-3)",
                fontWeight: "var(--fw-bold)",
                color: "var(--text-strong)",
              }}
            >
              {name}
            </span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Avaliação no Google</span>
          </div>
        </>
      ) : (
        <>
          <p style={{ fontSize: "var(--text-base)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>{text}</p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-4)",
              alignItems: "center",
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "var(--space-5)",
            }}
          >
            <span
              style={{
                width: 48,
                height: 48,
                borderRadius: "var(--radius-pill)",
                background: "var(--soil-100)",
                display: "grid",
                placeItems: "center",
                fontFamily: "var(--font-display)",
                fontWeight: "var(--fw-bold)",
                color: "var(--soil-700)",
              }}
            >
              {name.charAt(0)}
            </span>
            <div style={{ display: "grid", gap: 2 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-heading-3)",
                  fontWeight: "var(--fw-bold)",
                  color: "var(--text-strong)",
                }}
              >
                {name}
              </span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>Avaliação no Google</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
