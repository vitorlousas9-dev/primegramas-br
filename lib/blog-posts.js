export const BLOG_POSTS = [
  {
    slug: "quanto-custa-grama-sintetica-instalada-sao-paulo",
    category: "Preço e orçamento",
    title: "Quanto custa grama sintética instalada em São Paulo? Preços por m² em 2026",
    dek: "Faixas de preço reais para material e instalação, o que faz o orçamento subir ou descer, e como pedir uma proposta que não muda na hora da obra.",
    date: "2026-09-01",
    readingTime: "9 min de leitura",
    cover: "/images/medicao-tecnica.jpeg",
    coverAlt: "Medição técnica de área para orçamento de grama sintética",
  },
  {
    slug: "grama-sintetica-condominio-guia-do-sindico",
    category: "Condomínios",
    title: "Grama sintética em condomínio: onde usar, normas e o que o síndico precisa saber",
    dek: "Onde a grama sintética resolve na área comum, o que a norma de playground exige e como levar a proposta para a assembleia.",
    date: "2026-09-01",
    readingTime: "8 min de leitura",
    cover: "/images/condominio-playground.jpeg",
    coverAlt: "Playground de condomínio com grama sintética instalada",
  },
  {
    slug: "grama-sintetica-ou-natural",
    category: "Comparativo",
    title: "Grama sintética ou natural: qual compensa mais em São Paulo?",
    dek: "Comparação honesta de custo em 10 anos, manutenção, sombra, calor e drenagem — incluindo os casos em que a natural ainda é melhor.",
    date: "2026-09-01",
    readingTime: "7 min de leitura",
    cover: "/images/jardim-residencial-lawn.jpeg",
    coverAlt: "Jardim residencial com gramado bem cuidado",
  },
  {
    slug: "qual-altura-de-grama-sintetica-escolher",
    category: "Guia de produto",
    title: "12mm, 20mm, 30mm ou 50mm: qual altura de grama sintética escolher",
    dek: "O que muda entre as alturas, onde cada uma funciona melhor e o que olhar além do milímetro na hora de escolher.",
    date: "2026-09-01",
    readingTime: "7 min de leitura",
    cover: "/images/jardim-moderno-entardecer.jpeg",
    coverAlt: "Jardim moderno com grama sintética ao entardecer",
  },
  {
    slug: "quanto-tempo-dura-grama-sintetica",
    category: "Durabilidade",
    title: "Quanto tempo dura a grama sintética? Durabilidade e manutenção na prática",
    dek: "De 3 a 10 anos conforme o modelo e o uso. O que encurta a vida útil, a rotina de limpeza correta e o que nunca fazer no gramado.",
    date: "2026-09-01",
    readingTime: "8 min de leitura",
    cover: "/images/instalacao-em-andamento.jpeg",
    coverAlt: "Instalação de grama sintética em andamento",
  },
  {
    slug: "campo-society-grama-sintetica-custo-e-medidas",
    category: "Uso esportivo",
    title: "Campo society com grama sintética: custo, medidas, base e drenagem",
    dek: "Quanto custa montar um campo, as medidas mais usadas, para onde vai o dinheiro do orçamento e o que avaliar antes de fechar.",
    date: "2026-09-01",
    readingTime: "8 min de leitura",
    cover: "/images/campo-futebol.jpeg",
    coverAlt: "Campo society com grama sintética esportiva",
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug, count = 3) {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count);
}
