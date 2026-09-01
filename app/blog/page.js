import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuoteCTA from "@/components/QuoteCTA";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog",
  description:
    "Guias sobre grama sintética: preços em São Paulo, comparativo com grama natural, alturas e modelos, durabilidade, condomínios e campos society.",
};

export default function Page() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <SiteHeader active="blog" />

      <section style={{ padding: "var(--space-20) 0 var(--space-16)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-5)" }}>
          <span className="pg-eyebrow">Blog</span>
          <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
            Guias sobre <span style={{ fontWeight: "var(--fw-bold)" }}>grama sintética</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>
            Preço, durabilidade, escolha de modelo e aplicações — com a experiência de 16 anos instalando grama
            sintética em São Paulo e Portugal.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 var(--space-10)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter-inline)" }}>
          <BlogCard post={featured} featured />
        </div>
      </section>

      <section style={{ padding: "0 0 var(--section-y)" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "0 var(--gutter-inline)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <QuoteCTA />
      <SiteFooter />
    </>
  );
}
