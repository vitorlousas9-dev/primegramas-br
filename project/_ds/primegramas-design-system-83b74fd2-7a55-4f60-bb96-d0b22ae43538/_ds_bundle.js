/* @ds-bundle: {"format":4,"namespace":"PrimegramasDesignSystem_83b74f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ContactCard","sourcePath":"components/patterns/ContactCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"df1e06a01223","components/core/Button.jsx":"2625ced0b276","components/core/Card.jsx":"4c28a80f7eb8","components/core/Icon.jsx":"5b6b6fda090c","components/core/IconButton.jsx":"ca37f2e66cc0","components/core/Tag.jsx":"1dc8b2c187d6","components/feedback/Dialog.jsx":"4a911442695b","components/feedback/Toast.jsx":"32be62358624","components/feedback/Tooltip.jsx":"bfe44544a65a","components/forms/Checkbox.jsx":"7a2a816fb780","components/forms/Input.jsx":"59d05efe9d7e","components/forms/Radio.jsx":"84c0467d3cf9","components/forms/Select.jsx":"26775e56da82","components/forms/Switch.jsx":"2c761ed1e611","components/forms/Textarea.jsx":"4495d225dc27","components/navigation/Tabs.jsx":"3c95283d0ae5","components/patterns/ContactCard.jsx":"c0523cdf2f31","ui_kits/quote-desk/Conversation.jsx":"4bec973ec4a5","ui_kits/quote-desk/Pipeline.jsx":"2ca4b4ef87af","ui_kits/quote-desk/QuoteBuilder.jsx":"43aa0ac2f7bc","ui_kits/quote-desk/Shell.jsx":"7a04e6252c47","ui_kits/website/Catalog.jsx":"dc6548022d3a","ui_kits/website/Chrome.jsx":"dac3f8b31884","ui_kits/website/Home.jsx":"4b77a8c8998c","ui_kits/website/QuoteRequest.jsx":"50dd0a144ac3","ui_kits/website/Works.jsx":"54b5fcc97734","ui_kits/website/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PrimegramasDesignSystem_83b74f = window.PrimegramasDesignSystem_83b74f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  brand: {
    background: 'var(--surface-brand)',
    color: '#FFFFFF'
  },
  soft: {
    background: 'var(--surface-brand-soft)',
    color: 'var(--green-800)'
  },
  neutral: {
    background: 'var(--stone-100)',
    color: 'var(--text-body)'
  },
  success: {
    background: 'var(--success-surface)',
    color: 'var(--success)'
  },
  warning: {
    background: 'var(--warning-surface)',
    color: 'var(--warning)'
  },
  danger: {
    background: 'var(--danger-surface)',
    color: 'var(--danger)'
  },
  info: {
    background: 'var(--info-surface)',
    color: 'var(--info)'
  }
};
function Badge({
  tone = 'soft',
  dot = false,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 24,
      padding: '0 var(--space-3)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 var(--space-5)',
    fontSize: 'var(--text-sm)',
    gap: 'var(--space-2)'
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 var(--space-6)',
    fontSize: 'var(--text-sm)',
    gap: 'var(--space-2)'
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 var(--space-8)',
    fontSize: 'var(--text-base)',
    gap: 'var(--space-3)'
  }
};
const variants = {
  primary: {
    background: 'var(--surface-brand)',
    color: 'var(--text-on-green)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-brand)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-default)',
    boxShadow: 'var(--shadow-xs)'
  },
  dark: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-dark)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-accent)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  whatsapp: {
    background: 'var(--whatsapp)',
    color: '#FFFFFF',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)'
  }
};
const hovers = {
  primary: {
    background: 'var(--green-hover)'
  },
  secondary: {
    background: 'var(--surface-sunken)',
    borderColor: 'var(--border-strong)'
  },
  dark: {
    background: 'var(--stone-800)'
  },
  ghost: {
    background: 'var(--surface-brand-soft)'
  },
  whatsapp: {
    background: 'var(--whatsapp-dark)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      borderRadius: shape === 'blade' ? 'var(--radius-blade)' : shape === 'square' ? 'var(--radius-md)' : 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-instant) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
      ...sizes[size],
      ...v,
      ...(hover && !disabled ? hovers[variant] || {} : {}),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = 'default',
  blade = false,
  interactive = false,
  padding = 'var(--space-6)',
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    earth: {
      background: 'var(--surface-card-alt)',
      border: '1px solid var(--soil-200)',
      color: 'var(--soil-800)'
    },
    brand: {
      background: 'var(--surface-brand-soft)',
      border: '1px solid var(--green-200)',
      color: 'var(--green-900)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid var(--stone-800)',
      color: 'var(--text-on-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: blade ? 'var(--radius-blade)' : 'var(--radius-lg)',
      padding,
      boxShadow: hover && interactive ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover && interactive ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = CDN + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      background: color,
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = sizes[size] || sizes.md;
  const skins = {
    primary: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-green)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    }
  };
  const hoverSkins = {
    primary: {
      background: 'var(--green-hover)'
    },
    secondary: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-strong)'
    },
    ghost: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: s,
      height: s,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      flex: 'none',
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
      ...skins[variant],
      ...(hover && !disabled ? hoverSkins[variant] : {}),
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  icon,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 32,
      padding: '0 var(--space-4)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      background: selected ? 'var(--green-500)' : hover ? 'var(--soil-100)' : 'var(--soil-50)',
      color: selected ? '#FFFFFF' : 'var(--soil-700)',
      border: '1px solid ' + (selected ? 'transparent' : 'var(--soil-200)'),
      cursor: onRemove || rest.onClick ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), icon, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remover",
    style: {
      border: 0,
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      lineHeight: 1,
      fontSize: 14,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 480,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)',
      background: 'var(--overlay-scrim)',
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)',
      animation: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-8)',
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-heading-2)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-normal)'
    }
  }, description)), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  success: {
    icon: '✓',
    accent: 'var(--success)',
    surface: 'var(--success-surface)'
  },
  info: {
    icon: 'i',
    accent: 'var(--info)',
    surface: 'var(--info-surface)'
  },
  warning: {
    icon: '!',
    accent: 'var(--warning)',
    surface: 'var(--warning-surface)'
  },
  danger: {
    icon: '!',
    accent: 'var(--danger)',
    surface: 'var(--danger-surface)'
  }
};
function Toast({
  tone = 'success',
  title,
  message,
  onDismiss,
  style
}) {
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-4) var(--space-5)',
      maxWidth: 400,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: t.surface,
      color: t.accent,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-xs)'
    }
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2,
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-normal)'
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Fechar",
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-semibold)',
      padding: '6px var(--space-3)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (checked ? 'var(--green-600)' : 'var(--border-strong)'),
      background: checked ? 'var(--green-500)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 6,
      borderLeft: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(-45deg) translateY(-1px)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      fontWeight: 'var(--fw-medium)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-strong)',
  background: 'var(--surface-card)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--green-500)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? 'var(--ring-focus)' : 'none',
  transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
});
function Field({
  label,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  size = 'md',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'lg' ? 'var(--control-h-lg)' : size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)';
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: rest.id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: h,
      padding: '0 var(--space-4)',
      ...shell(focus, !!error),
      ...(rest.disabled ? {
        background: 'var(--surface-sunken)',
        color: 'var(--text-muted)',
        cursor: 'not-allowed'
      } : {}),
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      color: 'inherit',
      height: '100%'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontSize: 'var(--text-xs)',
      display: 'flex'
    }
  }, suffix)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (checked ? 'var(--green-600)' : 'var(--border-strong)'),
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: checked,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--green-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      fontWeight: 'var(--fw-medium)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-strong)',
  background: 'var(--surface-card)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--green-500)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? 'var(--ring-focus)' : 'none',
  transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
});
function Field({
  label,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: rest.id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-h-md)',
      padding: '0 var(--space-10) 0 var(--space-4)',
      appearance: 'none',
      font: 'inherit',
      fontSize: 'var(--text-sm)',
      ...shell(focus, !!error),
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 'var(--space-4)',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      fontSize: 11,
      pointerEvents: 'none'
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: 3,
      background: checked ? 'var(--green-500)' : 'var(--stone-300)',
      transition: 'background var(--dur-base) var(--ease-standard)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: '#FFFFFF',
      boxShadow: 'var(--shadow-xs)',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      fontWeight: 'var(--fw-medium)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = (focus, invalid) => ({
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)',
  color: 'var(--text-strong)',
  background: 'var(--surface-card)',
  border: '1px solid ' + (invalid ? 'var(--danger)' : focus ? 'var(--green-500)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? 'var(--ring-focus)' : 'none',
  transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
});
function Field({
  label,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: rest.id
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: 'var(--space-3) var(--space-4)',
      resize: 'vertical',
      lineHeight: 'var(--lh-normal)',
      ...shell(focus, !!error),
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const active = value ?? (items[0] && (items[0].value || items[0]));
  const norm = items.map(i => typeof i === 'string' ? {
    label: i,
    value: i
  } : i);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: variant === 'pill' ? 'var(--space-2)' : 'var(--space-6)',
      borderBottom: variant === 'underline' ? '1px solid var(--border-subtle)' : 'none',
      background: variant === 'pill' ? 'var(--surface-sunken)' : 'transparent',
      padding: variant === 'pill' ? 'var(--space-1)' : 0,
      borderRadius: variant === 'pill' ? 'var(--radius-pill)' : 0,
      ...style
    }
  }, rest), norm.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        border: 0,
        cursor: 'pointer',
        background: variant === 'pill' && on ? 'var(--surface-card)' : 'transparent',
        boxShadow: variant === 'pill' && on ? 'var(--shadow-xs)' : 'none',
        borderRadius: variant === 'pill' ? 'var(--radius-pill)' : 0,
        padding: variant === 'pill' ? '8px var(--space-5)' : '0 0 var(--space-3)',
        marginBottom: variant === 'underline' ? -1 : 0,
        borderBottom: variant === 'underline' ? '2px solid ' + (on ? 'var(--green-500)' : 'transparent') : 'none',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: '0.01em',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
      }
    }, t.icon, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-subtle)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ContactCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CornerMark({
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: 22,
      height: 22,
      color: 'var(--green-500)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: 1.5,
      background: 'currentColor',
      transform: 'translateY(-50%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: 1.5,
      background: 'currentColor',
      transform: 'translateX(-50%)'
    }
  }));
}
function ContactInfo({
  icon,
  label,
  value,
  span = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-3) 0',
      gridColumn: span > 1 ? 'span ' + span : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--green-600)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, value)));
}
function ContactCard({
  title = 'Fale com a nossa equipe',
  description = 'Se tiver dúvidas sobre os nossos produtos ou precisar de ajuda, preencha o formulário. Nunca deixamos você sem resposta.',
  eyebrow,
  contactInfo = [],
  cornerMarks = true,
  formTitle,
  formPanelStyle,
  style,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      width: '100%',
      overflow: 'hidden',
      ...style
    }
  }, props), cornerMarks && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CornerMark, {
    style: {
      top: -11,
      left: -11
    }
  }), /*#__PURE__*/React.createElement(CornerMark, {
    style: {
      top: -11,
      right: -11
    }
  }), /*#__PURE__*/React.createElement(CornerMark, {
    style: {
      bottom: -11,
      left: -11
    }
  }), /*#__PURE__*/React.createElement(CornerMark, {
    style: {
      bottom: -11,
      right: -11
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'var(--space-10)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, eyebrow), "          ", /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-heading-1)',
      margin: 0,
      fontWeight: 'var(--fw-light)',
      lineHeight: 'var(--lh-tight)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: 440
    }
  }, description)), contactInfo.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 'var(--space-2) var(--space-6)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-4)'
    }
  }, contactInfo.map((info, i) => /*#__PURE__*/React.createElement(ContactInfo, _extends({
    key: i
  }, info))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderLeft: '1px solid var(--border-subtle)',
      padding: 'var(--space-8)',
      display: 'grid',
      gap: 'var(--space-5)',
      alignContent: 'start',
      ...formPanelStyle
    }
  }, formTitle && /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, formTitle), children));
}
Object.assign(__ds_scope, { ContactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ContactCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quote-desk/Conversation.jsx
try { (() => {
const {
  Button,
  Icon,
  IconButton,
  Card,
  Badge,
  Tooltip
} = window.PrimegramasDesignSystem_83b74f;
const THREAD = [['in', 'Boa tarde. Sou síndica do Condomínio Vale Verde e queríamos trocar a grama da área comum.', '14:02'], ['out', 'Boa tarde, Ana! Agradecemos o contato. É instalação nova ou troca de grama existente, e qual a metragem aproximada?', '14:09'], ['in', 'É troca. São cerca de 2.400 m², piso em concreto.', '14:15'], ['out', 'Perfeito. Para essa metragem podemos levar amostras na visita técnica e fechar o modelo ideal. Temos disponibilidade quinta-feira às 10h, sem custo.', '14:21'], ['in', 'Quinta às 10h está bom. Obrigada.', '14:24'], ['out', 'Combinado! Após a visita, a proposta é enviada com validade de 7 dias. Agradecemos a confiança e ficamos à disposição para qualquer dúvida.', '14:25']];
function Conversation({
  setView
}) {
  const [draft, setDraft] = React.useState('Prezada Ana, boa tarde. Segue nossa proposta: 2.400 m² em 40mm Esportiva, com mão de obra e cola inclusas. Validade de 7 dias. Agradecemos a confiança e aguardamos seu retorno.');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      height: 'calc(100vh - 70px - 2 * var(--space-8))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--soil-200)',
      color: 'var(--soil-800)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 14
    }
  }, "AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, "Ana Correia \xB7 Vale Verde"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "WhatsApp \xB7 (11) 91234-5678")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Aguardando"), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Ligar"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17
    }),
    label: "Ligar"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => setView('orcamento')
  }, "Abrir proposta"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      overflow: 'auto',
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start',
      background: 'var(--surface-sunken)'
    }
  }, THREAD.map(([dir, text, time], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      justifySelf: dir === 'in' ? 'start' : 'end',
      maxWidth: '72%',
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: dir === 'in' ? 'var(--surface-card)' : 'var(--green-500)',
      color: dir === 'in' ? 'var(--text-body)' : '#fff',
      border: dir === 'in' ? '1px solid var(--border-subtle)' : '1px solid transparent',
      borderRadius: dir === 'in' ? 'var(--radius-lg) var(--radius-lg) var(--radius-lg) 4px' : 'var(--radius-lg) var(--radius-lg) 4px var(--radius-lg)',
      padding: 'var(--space-4) var(--space-5)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-relaxed)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-subtle)',
      justifySelf: dir === 'in' ? 'start' : 'end'
    }
  }, time)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    rows: 3,
    style: {
      width: '100%',
      font: 'inherit',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      padding: 'var(--space-3) var(--space-4)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      resize: 'none',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Anexar PDF"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "paperclip",
      size: 17
    }),
    label: "Anexar",
    variant: "ghost"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Inserir resposta guardada"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "message-square-quote",
      size: 17
    }),
    label: "Resposta guardada",
    variant: "ghost"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "sm",
    style: {
      marginLeft: 'auto'
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16
    })
  }, "Enviar")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Respostas salvas"), ['Confirmação de visita técnica', 'Proposta em anexo', 'Prazo de instalação', 'Condições de garantia', 'Script de follow-up (3-5 dias)'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    style: {
      textAlign: 'left',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: '10px var(--space-4)',
      cursor: 'pointer',
      font: 'inherit',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, t))), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Hist\xF3rico"), [['Contato recebido', '28 ago'], ['Visita técnica agendada', '29 ago'], ['Proposta por enviar', '—']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, d))))));
}
Object.assign(window, {
  Conversation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quote-desk/Conversation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quote-desk/Pipeline.jsx
try { (() => {
const {
  Button,
  Icon,
  IconButton,
  Badge,
  Card,
  Tabs,
  Tooltip
} = window.PrimegramasDesignSystem_83b74f;
const LEADS = [['PROP-2026-0431', 'Condomínio Vale Verde', 'São Paulo, SP', '2.400', '40mm Esportiva', 'Aguardando', 'warning', 'WhatsApp'], ['PROP-2026-0430', 'Escola Municipal Girassol', 'Curitiba, PR', '860', '20mm Fibrilada', 'Pendente', 'info', 'E-mail'], ['PROP-2026-0429', 'Clube Recreativo Oeste', 'Belo Horizonte, MG', '1.200', '30mm Delta', 'Aprovado', 'success', 'WhatsApp'], ['PROP-2026-0428', 'Maria Fonseca', 'Campinas, SP', '78', '20mm Soft Garden', 'Rascunho', 'neutral', 'Telefone'], ['PROP-2026-0427', 'Creche Passo a Passo', 'Campinas, SP', '340', '12mm Color', 'Pendente', 'info', 'WhatsApp'], ['PROP-2026-0426', 'Residencial Vista Alegre', 'Porto Alegre, RS', '1.750', '30mm Delta Bicolor', 'Não aprovado', 'danger', 'E-mail']];
function Pipeline({
  setView
}) {
  const [tab, setTab] = React.useState('todos');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8)',
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Balc\xE3o de or\xE7amentos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-heading-1)',
      margin: 0,
      fontWeight: 'var(--fw-light)'
    }
  }, "Propostas ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "em aberto"))), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    items: ['Todos', 'Rascunhos', 'Pendentes', 'Aguardando'],
    style: {
      display: 'inline-flex'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, [['Rascunhos', '4', 'plus-circle'], ['Visitas técnicas agendadas', '6', 'ruler'], ['Propostas pendentes', '5', 'send'], ['Aprovadas este mês', '7', 'check-circle']].map(([l, v, ic], i) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    tone: i === 3 ? 'brand' : 'default',
    padding: "var(--space-5)",
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: i === 3 ? 'var(--green-700)' : 'var(--text-subtle)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 34,
      lineHeight: 1,
      color: i === 3 ? 'var(--green-800)' : 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: i === 3 ? 'var(--green-900)' : 'var(--text-muted)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, l)))), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--surface-sunken)'
    }
  }, ['Proposta', 'Cliente', 'Metragem', 'Modelo', 'Status', 'Canal', ''].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: 'var(--space-4) var(--space-5)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, LEADS.map(([ref, client, city, area, prod, state, tone, canal]) => /*#__PURE__*/React.createElement("tr", {
    key: ref,
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, ref), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 'var(--space-4) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, client), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, city))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, area, "m\xB2"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, prod), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 'var(--space-4) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    dot: tone === 'success'
  }, state)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, canal), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      textAlign: 'right',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Abrir conversa"
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 15
    }),
    label: "Conversa",
    onClick: () => setView('conversa')
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => setView('orcamento')
  }, "Proposta")))))))));
}
Object.assign(window, {
  Pipeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quote-desk/Pipeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quote-desk/QuoteBuilder.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Input,
  Select,
  Switch,
  Checkbox,
  Toast,
  Tooltip,
  IconButton
} = window.PrimegramasDesignSystem_83b74f;
function QuoteBuilder({
  setView
}) {
  const [area, setArea] = React.useState(2400);
  const [install, setInstall] = React.useState(true);
  const [glue, setGlue] = React.useState(true);
  const [saved, setSaved] = React.useState(false);
  const unit = 62;
  const mat = area * unit;
  const inst = install ? area * 24 : 0;
  const canLatas = Math.ceil(area / 20);
  const glueCost = glue ? canLatas * 145 : 0;
  const total = mat + inst + glueCost;
  const brl = n => 'R$ ' + n.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    }),
    label: "Voltar",
    onClick: () => setView('pipeline')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "PROP-2026-0431"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-heading-1)',
      margin: 0
    }
  }, "Condom\xEDnio Vale Verde")), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    style: {
      marginLeft: 'auto'
    }
  }, "Aguardando")), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Espa\xE7o"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Metragem medida",
    suffix: "m\xB2",
    value: area,
    onChange: e => setArea(Number(e.target.value) || 0)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Modelo",
    options: ['20mm Soft Garden', '40mm Esportiva', '30mm Delta Bicolor'],
    defaultValue: "40mm Esportiva"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Subpiso",
    options: ['Concreto', 'Berço de brita', 'A definir na visita']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      flexWrap: 'wrap',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: install,
    onChange: () => setInstall(!install),
    label: "Incluir m\xE3o de obra"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: glue,
    onChange: () => setGlue(!glue),
    label: "Cola de contato (1 lata / 20m\xB2)"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Linhas do or\xE7amento"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    })
  }, "Adicionar linha")), [['Grama 40mm Esportiva · R$ 62,00/m²', mat], ['Mão de obra · R$ 24,00/m²', inst], ['Cola de contato · ' + canLatas + ' latas × R$ 145,00', glueCost]].filter(l => l[1] > 0).map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      padding: 'var(--space-4) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, brl(val)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Total \xB7 entrada de 40%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 34,
      lineHeight: 1,
      color: 'var(--green-700)'
    }
  }, brl(total))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    blade: true,
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--green-800)'
    }
  }, "Enviar proposta \xB7 validade 7 dias"), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    block: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 17
    }),
    onClick: () => {
      setSaved(true);
      setView('conversa');
    }
  }, "Enviar por WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 17
    })
  }, "Enviar por e-mail (Tiny)"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    block: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 17
    })
  }, "Descarregar PDF")), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Contato"), [['user', 'Ana Correia · Síndica'], ['phone', '(11) 91234-5678'], ['mail', 'sindica@valeverde.com.br'], ['map-pin', 'Rua das Palmeiras, São Paulo']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 17,
    color: "var(--green-600)"
  }), t))), /*#__PURE__*/React.createElement(Card, {
    tone: "earth",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 20,
    color: "var(--soil-600)"
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, "Visita t\xE9cnica dia 4 de setembro, 10h"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--soil-700)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Levar amostras. Confirmar acesso \xE0 \xE1rea comum com a s\xEDndica antes da visita."), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Confirmado com o cliente"
  }))), saved && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Proposta enviada",
    message: "Enviada por WhatsApp para Ana Correia. Follow-up autom\xE1tico em 3 a 5 dias se n\xE3o houver resposta.",
    onDismiss: () => setSaved(false)
  })));
}
Object.assign(window, {
  QuoteBuilder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quote-desk/QuoteBuilder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/quote-desk/Shell.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Badge,
  Tooltip
} = window.PrimegramasDesignSystem_83b74f;
function DeskShell({
  view,
  setView,
  children
}) {
  const nav = [['pipeline', 'layout-list', 'Propostas'], ['orcamento', 'file-text', 'Proposta'], ['conversa', 'message-circle', 'Conversas']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '236px 1fr',
      minHeight: '100vh',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-inverse)',
      padding: 'var(--space-6) var(--space-5)',
      display: 'grid',
      alignContent: 'start',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-vertical-white.png",
    alt: "Primegramas",
    style: {
      height: 70,
      objectFit: 'contain',
      objectPosition: 'left'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid',
      gap: 'var(--space-1)'
    }
  }, nav.map(([k, icon, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setView(k),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      padding: '10px var(--space-4)',
      borderRadius: 'var(--radius-md)',
      background: view === k ? 'color-mix(in oklab,var(--green-500) 20%,transparent)' : 'transparent',
      color: view === k ? '#fff' : 'var(--stone-400)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.01em',
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    color: view === k ? 'var(--green-400)' : 'var(--stone-500)'
  }), label))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--stone-800)',
      paddingTop: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--stone-600)'
    }
  }, "Esta semana"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--stone-300)'
    }
  }, "Propostas"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: '#fff'
    }
  }, "18")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--stone-300)'
    }
  }, "Aprovadas"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--green-400)'
    }
  }, "7")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 70,
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: '0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 40,
      padding: '0 var(--space-4)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      maxWidth: 360,
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Procurar cliente, projeto ou n\xBA de proposta",
    style: {
      flex: 1,
      border: 0,
      background: 'transparent',
      outline: 'none',
      font: 'inherit',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Nova proposta"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    }),
    label: "Nova proposta",
    variant: "primary"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Notifica\xE7\xF5es"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 18
    }),
    label: "Notifica\xE7\xF5es"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      paddingLeft: 'var(--space-4)',
      borderLeft: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--green-500)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 13
    }
  }, "RS"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, "Rui Santos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-muted)'
    }
  }, "Comercial")))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      overflow: 'auto'
    }
  }, children)));
}
Object.assign(window, {
  DeskShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quote-desk/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Catalog.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Tag,
  Tabs,
  Tooltip
} = window.PrimegramasDesignSystem_83b74f;
const PRODUCTS = [{
  name: '20mm Soft Garden',
  h: '20 mm',
  price: 'Sob consulta',
  use: 'decorativa',
  tone: 'Fio 100% polietileno virgem',
  badge: 'Mais procurada'
}, {
  name: '30mm Delta Bicolor',
  h: '30 mm',
  price: 'Sob consulta',
  use: 'decorativa',
  tone: 'Efeito natural bicolor'
}, {
  name: '12mm Color',
  h: '12 mm',
  price: 'Sob consulta',
  use: 'decorativa',
  tone: 'Amarelo, vermelho, azul, preto, branco, roxo, rosa'
}, {
  name: '40mm Esportiva',
  h: '40 mm',
  price: 'Sob consulta',
  use: 'esportiva',
  tone: 'Drenagem rápida, preenchimento em areia ou borracha',
  badge: 'Uso intenso'
}, {
  name: '50mm Esportiva',
  h: '50 mm',
  price: 'Sob consulta',
  use: 'esportiva',
  tone: 'Campos de futebol'
}, {
  name: '20mm Fibrilada',
  h: '20 mm',
  price: 'Sob consulta',
  use: 'decorativa',
  tone: 'Playground, eventos, quintal'
}];
function Catalog({
  go
}) {
  const [tab, setTab] = React.useState('todos');
  const [tags, setTags] = React.useState(['Com instalação']);
  const list = PRODUCTS.filter(p => tab === 'todos' || p.use === tab);
  const toggle = t => setTags(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderBottom: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-16)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-inline)',
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Cat\xE1logo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-2)',
      margin: 0,
      maxWidth: 700,
      lineHeight: 'var(--lh-tight)',
      fontWeight: 'var(--fw-light)'
    }
  }, "Grama sint\xE9tica ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "por altura e por uso")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-muted)',
      maxWidth: 620,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Fio 100% polietileno virgem, prote\xE7\xE3o UV e sistema antibacteriano em todas as linhas. Valor sob consulta \u2014 enviamos a proposta em at\xE9 7 dias de validade."), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      label: 'Todos',
      value: 'todos'
    }, {
      label: 'Decorativa',
      value: 'decorativa',
      count: 4
    }, {
      label: 'Esportiva',
      value: 'esportiva',
      count: 2
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter-inline) var(--section-y)',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Filtros"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, ['Com instalação', 'Só material', 'Pet friendly', 'Anti-UV'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: tags.includes(t),
    onClick: () => toggle(t)
  }, t)))), /*#__PURE__*/React.createElement(Card, {
    tone: "earth",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ruler",
    size: 22,
    color: "var(--soil-600)"
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, "N\xE3o sabe a metragem?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--soil-700)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Vamos ao local com amostras para uma visita t\xE9cnica, sem custo."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => go('orcamento')
  }, "Agendar visita t\xE9cnica"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 170
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'pg-prod-' + i,
    shape: "rect",
    placeholder: 'Amostra — ' + p.name
  }), p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, p.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading-3)',
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, p.h)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, p.tone), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-heading-3)',
      color: 'var(--green-700)'
    }
  }, p.price), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Solicitar proposta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Proposta")))))))));
}
Object.assign(window, {
  Catalog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  Icon,
  IconButton
} = window.PrimegramasDesignSystem_83b74f;
function SiteHeader({
  page,
  go
}) {
  const links = [['home', 'Início'], ['catalogo', 'Catálogo'], ['obras', 'Projetos'], ['orcamento', 'Proposta']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'color-mix(in oklab,#fff 88%,transparent)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-inline)',
      height: 78,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      border: 0,
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "Primegramas",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginLeft: 'auto',
      flexShrink: 1,
      minWidth: 0,
      overflow: 'hidden'
    }
  }, links.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      border: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      color: page === k ? 'var(--text-strong)' : 'var(--text-muted)',
      borderBottom: '2px solid ' + (page === k ? 'var(--green-500)' : 'transparent'),
      paddingBottom: 2
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "pg-header-contact",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+551140028922",
    className: "pg-header-phone",
    style: {
      border: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--green-600)"
  }), "(11) 4002-8922"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('orcamento'),
    style: {
      flexShrink: 0,
      whiteSpace: 'nowrap'
    }
  }, "Solicitar proposta"))));
}
function SiteFooter({
  go
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--green-400)'
    }
  }, title), items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--stone-300)'
    }
  }, i)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-dark)',
      paddingTop: 'var(--space-16)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-inline)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-vertical-white.png",
    alt: "Primegramas",
    style: {
      height: 96,
      objectFit: 'contain',
      objectPosition: 'left'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--stone-400)',
      maxWidth: 280,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Grama sint\xE9tica para condom\xEDnios, escolas, clubes e campos. Do atendimento \xE0 instala\xE7\xE3o, sempre \xE0 disposi\xE7\xE3o.")), col('Soluções', ['Condomínios e jardins', 'Escolas e creches', 'Campos e quadras', 'Playgrounds e eventos', 'Materiais e acessórios']), col('Empresa', ['Sobre nós', 'Projetos entregues', 'Garantia e certificações', 'Trabalhe conosco']), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--green-400)'
    }
  }, "Contato"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--stone-300)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: "var(--green-400)"
  }), "(11) 4002-8922"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--stone-300)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15,
    color: "var(--green-400)"
  }), "contato@primegramas.com.br"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--stone-300)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15,
    color: "var(--green-400)"
  }), "S\xE3o Paulo, SP \xB7 e Portugal"), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "sm",
    style: {
      marginTop: 'var(--space-2)'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 16
    })
  }, "Falar no WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: 'var(--space-12) auto 0',
      padding: 'var(--space-6) var(--gutter-inline) 0',
      borderTop: '1px solid var(--stone-800)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-tagline",
    style: {
      color: 'var(--stone-600)'
    }
  }, "Grama sint\xE9tica para condom\xEDnios, escolas, clubes e campos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--stone-600)'
    }
  }, "\xA9 2026 Primegramas")));
}
function WhatsAppFloat() {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 40,
      border: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      background: 'var(--whatsapp)',
      color: '#fff',
      height: 54,
      padding: '0 var(--space-6)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.01em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 20,
    color: "#fff"
  }), "Resposta em minutos");
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  WhatsAppFloat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Tag
} = window.PrimegramasDesignSystem_83b74f;
function Section({
  children,
  tone,
  style
}) {
  const bg = tone === 'sunken' ? 'var(--surface-sunken)' : tone === 'inverse' ? 'var(--surface-inverse)' : 'transparent';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      paddingTop: 'var(--section-y)',
      paddingBottom: 'var(--section-y)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-inline)'
    }
  }, children));
}
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 560,
      display: 'grid',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "pg-hero",
    shape: "rect",
    fit: "cover",
    placeholder: "Foto de obra \u2014 jardim de condom\xEDnio, largura total"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, color-mix(in oklab,var(--stone-950) 82%,transparent) 0%, color-mix(in oklab,var(--stone-950) 55%,transparent) 48%, transparent 78%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-24) var(--gutter-inline)',
      width: '100%',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow",
    style: {
      color: 'var(--green-300)'
    }
  }, "Grama sint\xE9tica \xB7 Brasil e Portugal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-display-1)',
      lineHeight: 'var(--lh-tight)',
      fontWeight: 'var(--fw-light)',
      margin: 0
    }
  }, "Desfrute da sua", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "\xE1rea verde"), /*#__PURE__*/React.createElement("br", null), "sem complica\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--stone-200)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: 520
    }
  }, "Instalamos grama sint\xE9tica em condom\xEDnios, escolas, clubes e campos esportivos. Fio 100% polietileno virgem, prote\xE7\xE3o UV e sistema antibacteriano."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('orcamento'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Solicitar proposta"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "whatsapp",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    })
  }, "Falar no WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, [['shield-check', 'Garantia de 1 a 3 anos'], ['ruler', 'Visita técnica gratuita'], ['clock', 'Nunca sem resposta']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: '#fff',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--green-400)"
  }), t))))));
}
function Services() {
  const items = [['home', 'Condomínios e jardins', 'Áreas comuns e privadas sem manutenção — sem corte, sem rega.'], ['graduation-cap', 'Escolas e creches', 'Fio macio e resistente, com opção de amortecedor shock pad.'], ['trophy', 'Campos e quadras', 'Linha esportiva com drenagem rápida — 20 a 50mm, futebol, tênis, padel.'], ['sprout', 'Playgrounds e eventos', 'Grama decorativa colorida ou natural, montagem rápida.']];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "O que fazemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-3)',
      margin: 0,
      fontWeight: 'var(--fw-light)'
    }
  }, "Quatro tipos de espa\xE7o, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "duas linhas de grama"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      maxWidth: 320,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "A escolha do modelo depende do uso e do tr\xE1fego. Indicamos o modelo certo na visita t\xE9cnica.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)'
    }
  }, items.map(([icon, title, desc], i) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true,
    blade: i === 0,
    tone: i === 0 ? 'brand' : 'default',
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: i === 0 ? 'var(--green-500)' : 'var(--surface-brand-soft)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: i === 0 ? '#fff' : 'var(--green-700)'
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading-3)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: i === 0 ? 'var(--green-900)' : 'var(--text-muted)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, desc))))));
}
function Process() {
  const steps = [['Atendimento', 'Entendemos a finalidade, a metragem e se será instalação nova ou troca.'], ['Proposta', 'Enviamos por WhatsApp ou e-mail, com validade de 7 dias.'], ['Instalação', 'Base preparada, colada ou grampeada, entregue em 5 a 7 dias úteis.'], ['Pós-venda', 'Garantia de 1 a 3 anos e suporte contínuo.']];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "inverse"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow",
    style: {
      color: 'var(--green-400)'
    }
  }, "Como trabalhamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-display-3)',
      margin: 0,
      fontWeight: 'var(--fw-light)'
    }
  }, "Do primeiro contato \xE0 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "grama instalada"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8)'
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start',
      borderTop: '2px solid var(--green-500)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--green-400)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-heading-3)',
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--stone-400)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, d))))));
}
function Works() {
  const works = [['Condomínio Vale Verde', 'São Paulo, SP', '2.400 m²'], ['Escola Municipal Girassol', 'Curitiba, PR', '860 m²'], ['Clube Recreativo Oeste', 'Belo Horizonte, MG', '1.200 m²']];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Projetos entregues"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-3)',
      margin: 0,
      fontWeight: 'var(--fw-light)'
    }
  }, "Trabalho ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "entregue"), ", n\xE3o renderizado")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Ver todos os projetos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, works.map(([name, city, area], i) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      borderRadius: i === 1 ? 'var(--radius-blade)' : 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 210
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'pg-work-' + i,
    shape: "rect",
    placeholder: 'Foto — ' + name
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading-3)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, city), /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, area))))))));
}
function Reassurance({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand)',
      borderRadius: 'var(--radius-blade)',
      padding: 'var(--space-16) var(--space-12)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-10)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-display-2)',
      margin: 0,
      lineHeight: 'var(--lh-tight)',
      fontWeight: 'var(--fw-light)'
    }
  }, "Conte-nos sobre o espa\xE7o.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "Cuidamos do resto.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#fff',
      opacity: 0.92,
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Visita t\xE9cnica gratuita, proposta com validade de 7 dias. Agradecemos a confian\xE7a e ficamos \xE0 disposi\xE7\xE3o para qualquer ajuste.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    onClick: () => go('orcamento'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Solicitar proposta"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    })
  }, "Falar no WhatsApp"))));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Works, null), /*#__PURE__*/React.createElement(Reassurance, {
    go: go
  }));
}
Object.assign(window, {
  Home,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteRequest.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Toast,
  Dialog,
  ContactCard
} = window.PrimegramasDesignSystem_83b74f;
function QuoteRequest() {
  const [step, setStep] = React.useState(1);
  const [canal, setCanal] = React.useState('wa');
  const [ok, setOk] = React.useState(true);
  const [sent, setSent] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-sunken)',
      paddingTop: 'var(--section-y-tight)',
      paddingBottom: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-inline)',
      display: 'grid',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(ContactCard, {
    eyebrow: "Solicitar proposta",
    title: "Conte-nos sobre o espa\xE7o",
    description: "Dois minutos para preencher. Nunca deixamos voc\xEA sem resposta \u2014 a proposta chega com validade de 7 dias e sem compromisso.",
    formTitle: step === 1 ? 'Etapa 1 · O espaço' : 'Etapa 2 · Contato',
    contactInfo: [{
      icon: 'phone',
      label: 'Telefone',
      value: '(11) 4002-8922'
    }, {
      icon: 'mail',
      label: 'E-mail',
      value: 'contato@primegramas.com.br'
    }, {
      icon: 'ruler',
      label: 'Visita técnica',
      value: 'Gratuita, com amostras'
    }, {
      icon: 'map-pin',
      label: 'Atendimento',
      value: 'São Paulo, SP e Portugal'
    }]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center',
      marginBottom: 'var(--space-1)'
    }
  }, [1, 2].map(n => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      background: step >= n ? 'var(--green-500)' : 'var(--stone-200)',
      color: step >= n ? '#fff' : 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600
    }
  }, n), n === 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      background: step > 1 ? 'var(--green-500)' : 'var(--stone-200)'
    }
  })))), step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
    label: "Finalidade",
    placeholder: "Escolher\u2026",
    options: ['Instalação nova', 'Troca de grama existente']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tipo de espa\xE7o",
    placeholder: "Escolher\u2026",
    options: ['Condomínio', 'Jardim privado', 'Escola ou creche', 'Clube esportivo', 'Campo ou quadra', 'Playground']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Metragem aproximada",
    suffix: "m\xB2",
    placeholder: "120"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Deseja incluir instala\xE7\xE3o?",
    placeholder: "Escolher\u2026",
    options: ['Sim, com instalação', 'Só o material']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Detalhes do projeto",
    rows: 3,
    placeholder: "\xC1rea comum de condom\xEDnio, piso em concreto, duas zonas com sombra permanente\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: () => setStep(2),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Continuar")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Maria Silva"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefone",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15
    }),
    placeholder: "(11) 91234-5678"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15
    }),
    placeholder: "maria@exemplo.com.br"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Como prefere que respondamos?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "canal",
    checked: canal === 'wa',
    onChange: () => setCanal('wa'),
    label: "WhatsApp"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "canal",
    checked: canal === 'tel',
    onChange: () => setCanal('tel'),
    label: "Telefone"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "canal",
    checked: canal === 'email',
    onChange: () => setCanal('email'),
    label: "E-mail"
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    checked: ok,
    onChange: e => setOk(e.target.checked),
    label: "Autorizo o contato sobre esta proposta",
    description: "Usamos os dados apenas para responder \xE0 sua solicita\xE7\xE3o."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, "Voltar"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setConfirm(true),
    disabled: !ok
  }, "Enviar solicita\xE7\xE3o")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    blade: true,
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 24,
    color: "var(--green-700)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading-3)',
      margin: 0,
      color: 'var(--green-900)'
    }
  }, "Nunca sem resposta"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--green-900)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Prefere mais r\xE1pido? Fale com a gente direto pelo WhatsApp."), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 17
    })
  }, "Falar no WhatsApp")), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Inclu\xEDdo em cada proposta"), [['ruler', 'Visita técnica com amostras'], ['layers', 'Preparação da base'], ['shield-check', 'Garantia de 1 a 3 anos'], ['file-text', 'Validade de 7 dias']].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--green-600)"
  }), t))), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Projeto entregue"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "2.400 m\xB2")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "\"Pedimos a visita numa quinta e na semana seguinte j\xE1 estava instalado. Equipe deixou tudo limpo.\""), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "S\xEDndica \xB7 Condom\xEDnio Vale Verde, S\xE3o Paulo")))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 96,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Solicita\xE7\xE3o enviada",
    message: "Agradecemos a confian\xE7a \u2014 em breve entramos em contato com sua proposta.",
    onDismiss: () => setSent(false)
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    title: "Enviar solicita\xE7\xE3o?",
    description: "Vamos preparar sua proposta e retornar pelo canal escolhido.",
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(false)
    }, "Revisar dados"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setConfirm(false);
        setSent(true);
        setStep(1);
      }
    }, "Enviar solicita\xE7\xE3o"))
  }));
}
Object.assign(window, {
  QuoteRequest
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteRequest.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Works.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge,
  Tag,
  Card
} = window.PrimegramasDesignSystem_83b74f;
const WORKS = [['Condomínio Vale Verde', 'São Paulo, SP', '2.400 m²', 'Condomínio'], ['Escola Municipal Girassol', 'Curitiba, PR', '860 m²', 'Escola'], ['Clube Recreativo Oeste', 'Belo Horizonte, MG', '1.200 m²', 'Esportivo'], ['Creche Passo a Passo', 'Campinas, SP', '340 m²', 'Playground'], ['Residencial Vista Alegre', 'Porto Alegre, RS', '1.750 m²', 'Condomínio'], ['Complexo Municipal', 'Salvador, BA', '3.100 m²', 'Esportivo']];
function WorksPage({
  go
}) {
  const [filter, setFilter] = React.useState('Todos');
  const list = WORKS.filter(w => filter === 'Todos' || w[3] === filter);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y-tight) var(--gutter-inline) var(--space-8)',
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pg-eyebrow"
  }, "Projetos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-2)',
      margin: 0,
      maxWidth: 760,
      lineHeight: 'var(--lh-tight)',
      fontWeight: 'var(--fw-light)'
    }
  }, "Mais de ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "400 espa\xE7os"), " entregues"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, ['Todos', 'Condomínio', 'Escola', 'Esportivo', 'Playground'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onClick: () => setFilter(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-inline) var(--section-y)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, list.map(([name, city, area, kind], i) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 200
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: 'pg-obra-' + i,
    shape: "rect",
    placeholder: 'Foto — ' + name
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-heading-3)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, kind)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, city), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--green-700)'
    }
  }, area)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-inline) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    padding: "var(--space-10)",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-heading-1)',
      margin: 0,
      maxWidth: 520
    }
  }, "O seu espa\xE7o \xE9 o pr\xF3ximo?"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('orcamento'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Solicitar proposta"))));
}
Object.assign(window, {
  WorksPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Works.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ContactCard = __ds_scope.ContactCard;

})();
