import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Icon from "@/components/Icon";

export const metadata = { title: "Página não encontrada" };

const SHORTCUTS = [
  { href: "/produtos/decorativa", label: "Linha Decorativa" },
  { href: "/produtos/esportiva", label: "Linha Esportiva" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Solicitar orçamento" },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <section style={{ padding: "var(--space-24) 0", minHeight: "50vh" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", padding: "0 var(--gutter-inline)", display: "grid", gap: "var(--space-6)", justifyItems: "start" }}>
          <span className="pg-eyebrow">Erro 404</span>
          <h1 style={{ fontSize: "var(--text-display-2)", margin: 0, fontWeight: "var(--fw-light)", lineHeight: "var(--lh-snug)" }}>
            Essa página não <span style={{ fontWeight: "var(--fw-bold)" }}>foi encontrada</span>
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text-body)", lineHeight: "var(--lh-relaxed)" }}>
            O endereço pode ter mudado ou o link estar incorreto. Veja alguns caminhos úteis:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
            {SHORTCUTS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={{
                  border: "1px solid var(--border-default)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  height: 44,
                  padding: "0 var(--space-5)",
                  borderRadius: "var(--radius-pill)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--fw-semibold)",
                  color: "var(--text-strong)",
                }}
              >
                {s.label}
                <Icon name="arrow-right" size={15} color="var(--green-700)" />
              </Link>
            ))}
          </div>
          <Link href="/" style={{ border: 0, fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: "var(--green-700)" }}>
            Ou volte para a página inicial
          </Link>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
