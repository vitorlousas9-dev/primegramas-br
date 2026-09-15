import { SITE_URL as BR_URL, PT_SITE_URL as PT_URL } from "./site";

const ESTE_SITE = "br";

// Páginas que são a mesma página nos dois sites, uma por país. Só elas levam
// hreflang: ligar um post do blog à home do outro site diria ao Google que são
// equivalentes, e não são. A mesma tabela existe em lib/hreflang.js do site
// PT — altere sempre nos dois, senão os links deixam de ser recíprocos e o
// Google os ignora.
export const HREFLANG_PARES = [
  { pt: "/", br: "/" },
  { pt: "/sobre", br: "/sobre" },
  { pt: "/contacto", br: "/contato" },
  { pt: "/produtos", br: "/produtos" },
  { pt: "/projetos", br: "/obras" },
];

function urlAbsoluto(base, caminho) {
  return caminho === "/" ? base : `${base}${caminho}`;
}

// `alternates` completo (canonical + languages) de uma página emparelhada. O
// conjunto de languages é idêntico nos dois lados; x-default fica no PT.
export function getHreflangAlternates(caminho) {
  const par = HREFLANG_PARES.find((p) => p[ESTE_SITE] === caminho);
  // Quebrar o build é melhor do que publicar uma página sem o par do outro lado.
  if (!par) throw new Error(`Sem par hreflang para "${caminho}"`);
  return {
    canonical: caminho,
    languages: {
      "pt-PT": urlAbsoluto(PT_URL, par.pt),
      "pt-BR": urlAbsoluto(BR_URL, par.br),
      "x-default": urlAbsoluto(PT_URL, par.pt),
    },
  };
}
