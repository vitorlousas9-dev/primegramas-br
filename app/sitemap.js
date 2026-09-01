import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog-posts";

const STATIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/sobre", priority: 0.7, changeFrequency: "monthly" },
  { path: "/servicos", priority: 0.7, changeFrequency: "monthly" },
  { path: "/produtos", priority: 0.8, changeFrequency: "monthly" },
  { path: "/produtos/decorativa", priority: 0.8, changeFrequency: "monthly" },
  { path: "/produtos/decorativa/jardins", priority: 0.7, changeFrequency: "monthly" },
  { path: "/produtos/decorativa/playgrounds", priority: 0.7, changeFrequency: "monthly" },
  { path: "/produtos/decorativa/condominios", priority: 0.7, changeFrequency: "monthly" },
  { path: "/produtos/decorativa/eventos", priority: 0.6, changeFrequency: "monthly" },
  { path: "/produtos/decorativa/piscinas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/produtos/decorativa/vitrines", priority: 0.6, changeFrequency: "monthly" },
  { path: "/produtos/esportiva", priority: 0.8, changeFrequency: "monthly" },
  { path: "/produtos/esportiva/campos", priority: 0.7, changeFrequency: "monthly" },
  { path: "/produtos/esportiva/quadras", priority: 0.7, changeFrequency: "monthly" },
  { path: "/produtos/esportiva/tenis-padel", priority: 0.7, changeFrequency: "monthly" },
  { path: "/obras", priority: 0.6, changeFrequency: "monthly" },
  { path: "/depoimentos", priority: 0.5, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contato", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap() {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postEntries = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
