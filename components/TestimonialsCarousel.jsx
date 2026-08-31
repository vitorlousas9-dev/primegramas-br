"use client";

import { useRef } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { TestimonialCard } from "./TestimonialCard";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function TestimonialsCarousel() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section style={{ background: "var(--surface-sunken)", padding: "var(--section-y) 0" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--gutter-inline)",
          display: "grid",
          gap: "var(--space-10)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--space-6)", flexWrap: "wrap" }}>
          <div style={{ display: "grid", gap: "var(--space-3)", maxWidth: 560 }}>
            <span className="pg-eyebrow">Depoimentos</span>
            <h2 style={{ fontSize: "var(--text-display-3)", margin: 0, fontWeight: "var(--fw-light)" }}>
              Quem já <span style={{ fontWeight: "var(--fw-bold)" }}>recebeu a obra</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              style={{
                width: 44,
                height: 44,
                borderRadius: "var(--radius-pill)",
                border: "1px solid var(--border-default)",
                background: "#fff",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                color: "var(--text-strong)",
              }}
            >
              <Icon name="chevron-left" size={20} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Próximo"
              style={{
                width: 44,
                height: 44,
                borderRadius: "var(--radius-pill)",
                border: "1px solid var(--border-default)",
                background: "#fff",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                color: "var(--text-strong)",
              }}
            >
              <Icon name="chevron-right" size={20} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "var(--space-5)",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "var(--space-3)",
            scrollbarWidth: "thin",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} name={t.name} text={t.text} variant="carousel" />
          ))}
        </div>

        <Link
          href="/depoimentos"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            width: "max-content",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--fw-bold)",
            color: "var(--green-700)",
            border: 0,
            borderBottom: "2px solid var(--green-200)",
            paddingBottom: 2,
          }}
        >
          Ver todos os depoimentos
          <Icon name="arrow-right" size={16} color="var(--green-700)" />
        </Link>
      </div>
    </section>
  );
}
