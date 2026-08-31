"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { NAV_LINKS, WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/site";

const navLinkStyle = {
  position: "relative",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--fw-semibold)",
  color: "var(--text-body)",
  whiteSpace: "nowrap",
  paddingBottom: 3,
  border: 0,
};

function ActiveUnderline() {
  return (
    <span
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        background: "var(--green-500)",
      }}
    />
  );
}

export default function SiteHeader({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          background: "color-mix(in oklab, #fff 88%, transparent)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "0 var(--gutter-inline)",
            height: 78,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            columnGap: "var(--space-6)",
          }}
        >
          <Link
            href="/"
            style={{ border: 0, display: "flex", alignItems: "center", flexShrink: 0, justifySelf: "start" }}
          >
            <Image src="/assets/logo-vertical-new.png" alt="Primegramas" width={160} height={52} style={{ height: 52, width: "auto" }} priority />
          </Link>

          <nav
            className="pg-nav-wide"
            style={{ display: "flex", gap: "var(--space-6)", alignItems: "center", justifySelf: "center" }}
          >
            {NAV_LINKS.map((link) => (
              <Link key={link.key} href={link.href} style={navLinkStyle}>
                {link.label}
                {active === link.key && <ActiveUnderline />}
              </Link>
            ))}
          </nav>
          <div
            className="pg-actions-wide"
            style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexShrink: 0, justifySelf: "end" }}
          >
            <a
              href={WHATSAPP_URL}
              style={{
                border: 0,
                display: "flex",
                alignItems: "center",
                gap: 6,
                whiteSpace: "nowrap",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--fw-semibold)",
                color: "var(--whatsapp-dark)",
              }}
            >
              <Image src="/assets/whatsapp-logo-green.png" alt="" width={16} height={16} />
              {WHATSAPP_DISPLAY}
            </a>
            <Link
              href="/contato"
              style={{
                border: 0,
                display: "flex",
                alignItems: "center",
                height: 36,
                padding: "0 var(--space-5)",
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
              Solicitar orçamento
            </Link>
          </div>

          <button
            className="pg-menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{
              width: 44,
              height: 44,
              display: "none",
              placeItems: "center",
              border: "1px solid var(--border-default)",
              background: "#fff",
              borderRadius: "var(--radius-pill)",
              cursor: "pointer",
              color: "var(--text-strong)",
              justifySelf: "end",
              gridColumn: 3,
            }}
          >
            <Icon name="menu" size={20} />
          </button>
        </div>

        {open && (
          <nav
            className="pg-mobile-nav"
            style={{
              borderTop: "1px solid var(--border-subtle)",
              background: "#fff",
              padding: "var(--space-4) var(--gutter-inline) var(--space-6)",
              display: "grid",
              gap: "var(--space-1)",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  border: 0,
                  padding: "var(--space-3) 0",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--fw-semibold)",
                  color: "var(--text-strong)",
                  borderBottom: i < NAV_LINKS.length - 1 ? "1px solid var(--border-subtle)" : "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-3)" }}>
              <Link
                href="/contato"
                onClick={() => setOpen(false)}
                style={{
                  border: 0,
                  display: "flex",
                  alignItems: "center",
                  height: 44,
                  padding: "0 var(--space-6)",
                  borderRadius: "var(--radius-pill)",
                  background: "var(--green-500)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--fw-semibold)",
                }}
              >
                Solicitar orçamento
              </Link>
              <a
                href={WHATSAPP_URL}
                style={{
                  border: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  height: 44,
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
        @media (max-width: 979px) {
          .pg-nav-wide,
          .pg-actions-wide {
            display: none !important;
          }
          .pg-menu-btn {
            display: grid !important;
          }
        }
        @media (min-width: 980px) {
          .pg-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
