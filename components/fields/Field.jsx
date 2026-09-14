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
  // Longhands em vez do atalho `border`: ao limpar o erro, o React remove só o
  // borderColor e um atalho conflitante deixaria a borda vermelha presa.
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "var(--border-default)",
  borderRadius: "var(--radius-md)",
  background: "#fff",
  padding: "0 var(--space-4)",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-sm)",
  color: "var(--text-strong)",
};

function controlWithError(error) {
  return error ? { ...controlStyle, borderColor: "var(--danger)", background: "var(--danger-surface)" } : controlStyle;
}

export function Field({ label, hint, error, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} style={{ display: "grid", gap: "var(--space-2)" }}>
      <span style={labelStyle}>{label}</span>
      {children}
      {error ? (
        <span
          id={htmlFor ? `${htmlFor}-error` : undefined}
          role="alert"
          style={{ fontSize: "var(--text-xs)", color: "var(--danger)", fontWeight: "var(--fw-semibold)" }}
        >
          {error}
        </span>
      ) : (
        hint && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{hint}</span>
      )}
    </label>
  );
}

// `error` marca o campo em vermelho e o liga à mensagem por aria-describedby,
// para que um leitor de tela anuncie o motivo da falha.
function a11y(name, error) {
  return error ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : null;
}

export function Input({ label, placeholder, hint, suffix, name, type = "text", error, ...rest }) {
  const control = controlWithError(error);
  return (
    <Field label={label} hint={hint} error={error} htmlFor={name}>
      {suffix ? (
        <span style={{ position: "relative", display: "block" }}>
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            style={{ ...control, paddingRight: 40 }}
            {...a11y(name, error)}
            {...rest}
          />
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
        <input id={name} name={name} type={type} placeholder={placeholder} style={control} {...a11y(name, error)} {...rest} />
      )}
    </Field>
  );
}

export function Select({ label, placeholder, options, name, error, ...rest }) {
  return (
    <Field label={label} error={error} htmlFor={name}>
      <select
        id={name}
        name={name}
        // Sem `value` vindo de fora o campo fica não-controlado e começa no
        // placeholder; com `value` seria erro passar também um defaultValue.
        {...(rest.value === undefined ? { defaultValue: "" } : null)}
        style={{ ...controlWithError(error), appearance: "auto", color: "var(--text-strong)" }}
        {...a11y(name, error)}
        {...rest}
      >
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

export function Textarea({ label, placeholder, rows = 4, name, error, ...rest }) {
  return (
    <Field label={label} error={error} htmlFor={name}>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        style={{ ...controlWithError(error), height: "auto", padding: "var(--space-3) var(--space-4)", resize: "vertical" }}
        {...a11y(name, error)}
        {...rest}
      />
    </Field>
  );
}
