import { SITE_URL, PHONE_DISPLAY, EMAIL } from "@/lib/site";

export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Primegramas",
    description:
      "Fornecimento e instalação de grama sintética há 16 anos, para jardins, condomínios, escolas, clubes e campos esportivos.",
    url: SITE_URL,
    telephone: "+551147713609",
    email: EMAIL,
    image: `${SITE_URL}/assets/logo-vertical-new.png`,
    priceRange: "R$R$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Estrada São Francisco 1820, sala 306, Edifício Comercial Start",
      addressLocality: "Taboão da Serra",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "São Paulo",
    },
    sameAs: [],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
