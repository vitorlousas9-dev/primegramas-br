const STAR_PATH =
  "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.771l-7.416 3.642 1.48-8.279-6.064-5.828 8.332-1.151z";

export default function StarRating({ count = 5, size = 18 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="var(--warning)"
          style={{ flex: "none" }}
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}
