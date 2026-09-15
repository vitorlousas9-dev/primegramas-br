import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import QuoteCTA from "./QuoteCTA";
import Breadcrumb from "./Breadcrumb";
import PhotoSlot from "./PhotoSlot";
import Icon from "./Icon";
import BlogCard from "./BlogCard";
import { SITE_URL } from "@/lib/site";

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export default function BlogLayout({ post, faqs, related, children }) {
  // Um FAQPage sem perguntas é marcação inválida para o Google, e a seção vazia
  // ficaria só com o título — os dois aparecem apenas quando há FAQs.
  const hasFaqs = faqs?.length > 0;
  const faqJsonLd = hasFaqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Primegramas" },
    publisher: {
      "@type": "Organization",
      name: "Primegramas",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo-vertical-new.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <SiteHeader active="blog" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <section style={{ padding: "var(--space-12) 0 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)" }}>
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.category }]} />
        </div>
      </section>

      <section style={{ padding: "var(--space-6) 0 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-5)" }}>
          <span className="pg-eyebrow">{post.category}</span>
          <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-bold)", lineHeight: "var(--lh-snug)" }}>
            {post.title}
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-muted)", lineHeight: "var(--lh-relaxed)", margin: 0 }}>{post.dek}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: "var(--text-sm)", color: "var(--text-subtle)" }}>
              <Icon name="calendar" size={15} color="var(--stone-400)" />
              {formatDate(post.date)}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: "var(--text-sm)", color: "var(--text-subtle)" }}>
              <Icon name="clock" size={15} color="var(--stone-400)" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--space-10) 0 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)" }}>
          <div
            style={{
              position: "relative",
              height: 420,
              borderRadius: "var(--radius-blade)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <PhotoSlot src={post.cover} alt={post.coverAlt} placeholder="Foto do post" priority />
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y) 0 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)" }}>
          <article className="pg-article">{children}</article>
        </div>
      </section>

      {hasFaqs && (
        <section style={{ padding: "var(--space-16) 0 0" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 var(--gutter-inline)" }}>
            <span className="pg-eyebrow">Perguntas frequentes</span>
            <h2 style={{ fontSize: "var(--text-display-3)", margin: "var(--space-3) 0 var(--space-6)", fontWeight: "var(--fw-light)" }}>
              Dúvidas <span style={{ fontWeight: "var(--fw-bold)" }}>rápidas</span> sobre o assunto
            </h2>
            <div>
              {faqs.map((f, i) => (
                <details key={i} className="pg-faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {related?.length > 0 && (
        <section style={{ padding: "var(--space-20) 0 0" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-8)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--space-6)", flexWrap: "wrap" }}>
              <span className="pg-eyebrow">Continue lendo</span>
              <Link
                href="/blog"
                style={{
                  border: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--fw-bold)",
                  color: "var(--green-700)",
                }}
              >
                Ver todos os posts
                <Icon name="arrow-right" size={16} color="var(--green-700)" />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-6)" }}>
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
