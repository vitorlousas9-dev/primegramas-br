const labelStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "11px",
  fontWeight: "var(--fw-bold)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
};

const controlStyle = {
  height: "var(--control-h-md)",
  width: "100%",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--radius-md)",
  background: "#fff",
  padding: "0 var(--space-4)",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-sm)",
  color: "var(--text-strong)",
};

export function Field({ label, hint, children }) {
  return (
    <label style={{ display: "grid", gap: "var(--space-2)" }}>
      <span style={labelStyle}>{label}</span>
      {children}
      {hint && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{hint}</span>}
    </label>
  );
}

export function Input({ label, placeholder, hint, suffix, name, type = "text" }) {
  return (
    <Field label={label} hint={hint}>
      {suffix ? (
        <span style={{ position: "relative", display: "block" }}>
          <input name={name} type={type} placeholder={placeholder} style={{ ...controlStyle, paddingRight: 40 }} />
          <span
            style={{
              position: "absolute",
              right: "var(--space-4)",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "var(--text-sm)",
              color: "var(--text-muted)",
            }}
          >
            {suffix}
          </span>
        </span>
      ) : (
        <input name={name} type={type} placeholder={placeholder} style={controlStyle} />
      )}
    </Field>
  );
}

export function Select({ label, placeholder, options, name }) {
  return (
    <Field label={label}>
      <select name={name} defaultValue="" style={{ ...controlStyle, appearance: "auto", color: "var(--text-strong)" }}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </Field>
  );
}

export function Textarea({ label, placeholder, rows = 4, name }) {
  return (
    <Field label={label}>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        style={{ ...controlStyle, height: "auto", padding: "var(--space-3) var(--space-4)", resize: "vertical" }}
      />
    </Field>
  );
}
