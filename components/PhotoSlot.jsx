import Image from "next/image";
import Icon from "./Icon";

// Fills its positioned parent. Pass `src` for a real photo; otherwise renders
// a clearly-labelled placeholder so the client knows exactly what to drop in.
export default function PhotoSlot({ src, alt = "", placeholder, priority = false, sizes = "100vw" }) {
  if (src) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />;
  }
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "repeating-linear-gradient(135deg, var(--surface-sunken), var(--surface-sunken) 10px, var(--stone-100) 10px, var(--stone-100) 20px)",
        border: "1px dashed var(--border-default)",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "var(--space-6)",
      }}
    >
      <div style={{ display: "grid", gap: "var(--space-2)", justifyItems: "center", maxWidth: 320 }}>
        <Icon name="image" size={26} color="var(--stone-400)" />
        <span
          style={{
            fontSize: "var(--text-xs)",
            fontWeight: "var(--fw-semibold)",
            color: "var(--text-muted)",
            lineHeight: "var(--lh-relaxed)",
          }}
        >
          {placeholder}
        </span>
      </div>
    </div>
  );
}
