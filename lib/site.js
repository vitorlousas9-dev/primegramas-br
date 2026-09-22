export const WHATSAPP_URL = "https://wa.me/5511932245642?text=" + encodeURIComponent("Olá vim pelo site e gostaria de solicitar um orçamento");
export const WHATSAPP_DISPLAY = "(11) 93224-5642";
export const PHONE_E164 = "+551141124329";
export const PHONE_URL = `tel:${PHONE_E164}`;
export const PHONE_DISPLAY = "(11) 4112-4329";
export const EMAIL = "comercial@primegramas.com.br";
// Sem www: é o domínio principal desde 22/09/2026, como no site PT.
export const SITE_URL = "https://primegramas.com.br";
// Sem www: desde 22/09/2026 o domínio principal do site PT é primegramas.pt.
export const PT_SITE_URL = "https://primegramas.pt";

// A navegação é agrupada: "Início" fica a cargo do logotipo e "Contato" do botão
// de orçamento, o que deixa a barra com quatro entradas em vez de seis.
export const NAV_LINKS = [
  {
    key: "solucoes",
    label: "Soluções",
    children: [
      {
        href: "/produtos",
        label: "Produtos",
        key: "produtos",
        icon: "layers",
        desc: "Linhas decorativa e esportiva, de 12mm a 50mm.",
      },
      {
        href: "/servicos",
        label: "Serviços",
        key: "servicos",
        icon: "ruler",
        desc: "Instalação especializada e consultoria técnica.",
      },
    ],
  },
  { href: "/obras", label: "Obras", key: "obras" },
  { href: "/sobre", label: "Sobre", key: "sobre" },
  { href: "/blog", label: "Blog", key: "blog" },
];
