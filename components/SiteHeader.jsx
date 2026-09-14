"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

// `color` e `background` ficam de fora e vivem na classe .pg-nav-item: um
// estilo inline ganharia sempre às regras de :hover e [data-active].
const navItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: 4,
  height: 38,
  padding: "0 var(--space-3)",
  borderRadius: "var(--radius-pill)",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--fw-semibold)",
  whiteSpace: "nowrap",
  border: 0,
  cursor: "pointer",
};

// Um item conta como ativo quando é a própria página ou quando a página atual
// é um dos seus filhos (ex.: "Produtos" acende o menu "Soluções").
function isItemActive(item, active) {
  if (item.key === active) return true;
  return (item.children || []).some((child) => child.key === active);
}

export default function SiteHeader({ active }) {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileGroup, setMobileGroup] = useState(null);
  const pathname = usePathname();
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  // Navegar fecha tudo — sem isto o painel fica aberto por cima da página nova.
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileGroup(null);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return undefined;

    function onPointerDown(event) {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenMenu(null);
    }
    function onKeyDown(event) {
      if (event.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Pequeno atraso ao sair: dá tempo do mouse atravessar o espaço entre o botão
  // e o painel sem que este se feche no meio do percurso.
  function scheduleClose() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }
  function cancelClose() {
    clearTimeout(closeTimer.current);
  }

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: "var(--surface-inverse)",
          borderBottom: "1px solid var(--stone-800)",
          color: "var(--text-on-dark)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "0 var(--gutter-inline)",
            height: 78,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-6)",
          }}
        >
          <Link href="/" style={{ border: 0, display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image
              src="/assets/logo-vertical-white.png"
              alt="Primegramas"
              width={160}
              height={52}
              style={{ height: 52, width: "auto" }}
              priority
            />
          </Link>

          <nav ref={navRef} className="pg-nav-wide" style={{ display: "flex", gap: "var(--space-1)", alignItems: "center" }}>
            {NAV_LINKS.map((item) => {
              const itemActive = isItemActive(item, active);

              if (!item.children) {
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="pg-nav-item"
                    data-active={itemActive ? "true" : undefined}
                    style={navItemStyle}
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = openMenu === item.key;

              return (
                <div
                  key={item.key}
                  style={{ position: "relative" }}
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(item.key);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className="pg-nav-item"
                    data-active={itemActive ? "true" : undefined}
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(expanded ? null : item.key)}
                    style={navItemStyle}
                  >
                    {item.label}
                    <Icon
                      name="chevron-down"
                      size={15}
                      style={{
                        transition: "transform 160ms ease",
                        transform: expanded ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>

                  {expanded && (
                    <div
                      className="pg-dropdown"
                      style={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        left: "50%",
                        translate: "-50% 0",
                        width: 340,
                        background: "var(--stone-900)",
                        border: "1px solid var(--stone-800)",
                        borderRadius: "var(--radius-lg)",
                        boxShadow: "var(--shadow-lg)",
                        padding: "var(--space-2)",
                        display: "grid",
                        gap: 2,
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className="pg-dropdown-item"
                          data-active={child.key === active ? "true" : undefined}
                          style={{
                            border: 0,
                            display: "grid",
                            gridTemplateColumns: "auto 1fr",
                            gap: "var(--space-3)",
                            alignItems: "start",
                            padding: "var(--space-3)",
                            borderRadius: "var(--radius-sm)",
                          }}
                        >
                          <span
                            className="pg-dropdown-icon"
                            style={{
                              display: "grid",
                              placeItems: "center",
                              width: 36,
                              height: 36,
                              borderRadius: "var(--radius-sm)",
                            }}
                          >
                            <Icon name={child.icon} size={18} />
                          </span>
                          <span style={{ display: "grid", gap: 2 }}>
                            <span
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "var(--text-sm)",
                                fontWeight: "var(--fw-semibold)",
                                color: "var(--text-on-dark)",
                              }}
                            >
                              {child.label}
                            </span>
                            <span
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "var(--text-xs)",
                                color: "var(--stone-400)",
                                lineHeight: "var(--lh-normal)",
                              }}
                            >
                              {child.desc}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="pg-actions-wide" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Link
              href="/contato"
              style={{
                border: 0,
                display: "flex",
                alignItems: "center",
                height: 42,
                padding: "0 var(--space-6)",
                borderRadius: "var(--radius-pill)",
                background: "var(--green-500)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--fw-semibold)",
                whiteSpace: "nowrap",
                boxShadow: "var(--shadow-brand)",
              }}
            >
              Solicitar Orçamento
            </Link>
          </div>

          <button
            className="pg-menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            style={{
              width: 44,
              height: 44,
              display: "none",
              placeItems: "center",
              border: "1px solid var(--stone-800)",
              background: "var(--stone-900)",
              borderRadius: "var(--radius-pill)",
              cursor: "pointer",
              color: "var(--text-on-dark)",
              flexShrink: 0,
            }}
          >
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>

        {open && (
          <nav
            className="pg-mobile-nav"
            style={{
              borderTop: "1px solid var(--stone-800)",
              background: "var(--surface-inverse)",
              padding: "var(--space-3) var(--gutter-inline) var(--space-6)",
              display: "grid",
              gap: 2,
              maxHeight: "calc(100dvh - 78px)",
              overflowY: "auto",
            }}
          >
            {NAV_LINKS.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      border: 0,
                      padding: "var(--space-3) var(--space-2)",
                      borderRadius: "var(--radius-sm)",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--fw-semibold)",
                      color: isItemActive(item, active) ? "var(--green-400)" : "var(--text-on-dark)",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = mobileGroup === item.key;

              return (
                <div key={item.key}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileGroup(expanded ? null : item.key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "var(--space-3)",
                      padding: "var(--space-3) var(--space-2)",
                      borderRadius: "var(--radius-sm)",
                      border: 0,
                      background: "transparent",
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--fw-semibold)",
                      color: isItemActive(item, active) ? "var(--green-400)" : "var(--text-on-dark)",
                    }}
                  >
                    {item.label}
                    <Icon
                      name="chevron-down"
                      size={18}
                      style={{
                        transition: "transform 160ms ease",
                        transform: expanded ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>

                  {expanded && (
                    <div
                      style={{
                        display: "grid",
                        gap: 2,
                        paddingLeft: "var(--space-2)",
                        marginBottom: "var(--space-2)",
                        borderLeft: "2px solid var(--stone-800)",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          style={{
                            border: 0,
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--space-3)",
                            padding: "var(--space-3)",
                            fontFamily: "var(--font-body)",
                            fontSize: "var(--text-sm)",
                            fontWeight: "var(--fw-semibold)",
                            color: child.key === active ? "var(--green-400)" : "var(--stone-300)",
                          }}
                        >
                          <Icon name={child.icon} size={17} color="var(--green-400)" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              <Link
                href="/contato"
                onClick={() => setOpen(false)}
                style={{
                  border: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 48,
                  padding: "0 var(--space-6)",
                  borderRadius: "var(--radius-pill)",
                  background: "var(--green-500)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--fw-semibold)",
                }}
              >
                Solicitar Orçamento
              </Link>
              <a
                href={WHATSAPP_URL}
                style={{
                  border: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 48,
                  padding: "0 var(--space-6)",
                  borderRadius: "var(--radius-pill)",
                  background: "var(--whatsapp)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--fw-semibold)",
                }}
              >
                <Image src="/assets/whatsapp-icon-white.png" alt="" width={18} height={18} />
                Falar no WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>
      <div style={{ height: 79 }} />

      <a
        href={WHATSAPP_URL}
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 45,
          border: 0,
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          background: "var(--whatsapp)",
          color: "#fff",
          height: 54,
          padding: "0 var(--space-6)",
          borderRadius: "var(--radius-pill)",
          boxShadow: "var(--shadow-lg)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--fw-semibold)",
          letterSpacing: "0.01em",
        }}
      >
        <Image src="/assets/whatsapp-icon-white.png" alt="" width={22} height={22} />
        Resposta em minutos
      </a>

      <style jsx global>{`
        .pg-nav-item {
          background: transparent;
          color: var(--stone-300);
          transition: background-color 160ms ease, color 160ms ease;
        }
        .pg-nav-item:hover {
          background: var(--stone-900);
          color: var(--text-on-dark);
        }
        .pg-nav-item[data-active="true"] {
          background: var(--stone-900);
          color: var(--green-400);
        }
        .pg-dropdown {
          animation: pg-dropdown-in 160ms ease both;
        }
        @keyframes pg-dropdown-in {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
        }
        .pg-dropdown-item {
          transition: background-color 160ms ease;
        }
        .pg-dropdown-icon {
          background: var(--stone-800);
          color: var(--green-400);
          transition: background-color 160ms ease;
        }
        .pg-dropdown-item:hover,
        .pg-dropdown-item[data-active="true"] {
          background: var(--stone-800);
        }
        .pg-dropdown-item:hover .pg-dropdown-icon,
        .pg-dropdown-item[data-active="true"] .pg-dropdown-icon {
          background: color-mix(in oklab, var(--green-400) 22%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .pg-dropdown {
            animation: none;
          }
        }
        @media (max-width: 1023px) {
          .pg-nav-wide,
          .pg-actions-wide {
            display: none !important;
          }
          .pg-menu-btn {
            display: grid !important;
          }
        }
        @media (min-width: 1024px) {
          .pg-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
