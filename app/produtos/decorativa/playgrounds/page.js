import LugarTemplate from "@/components/LugarTemplate";

export const metadata = {
  alternates: { canonical: "/produtos/decorativa/playgrounds" },
  title: "Playgrounds e Áreas Infantis",
  description: "Grama sintética para playgrounds e áreas infantis, com superfície macia, seca e amortecimento para um espaço mais seguro.",
};

export default function Page() {
  return (
    <LugarTemplate
      breadcrumb={[
        { label: "Produtos", href: "/produtos" },
        { label: "Linha Decorativa", href: "/produtos/decorativa" },
        { label: "Playgrounds e Áreas Infantis" },
      ]}
      lineLabel="Linha Decorativa · Aplicação"
      title={{ light: "Playgrounds e", bold: "Áreas Infantis" }}
      intro="Áreas infantis pedem uma superfície macia, uniforme e sem barro. Combinado ao amortecedor Shock Pad, o gramado sintético reduz o risco de lesões em quedas e mantém o espaço seguro para uso diário."
      heroSrc="/images/playground-desenhos.jpeg"
      heroAlt="Playground com grama sintética decorativa e desenhos coloridos"
      heroPlaceholder="Foto — playground com grama sintética"
      benefits={[
        {
          icon: "shield-check",
          title: "Amortecimento com Shock Pad",
          text: "Manta em E.V.A. instalada sob o gramado — a grama sintética por si só não amortece quedas, e o Shock Pad é o aliado para um playground mais seguro.",
        },
        { icon: "layers", title: "Superfície uniforme", text: "Sem barro, poças ou buracos, mesmo com uso intenso e chuva." },
        {
          icon: "sprout",
          title: "Cores vibrantes disponíveis",
          text: "Modelo colorido em amarelo, vermelho, azul, preto, branco, roxo ou rosa, para ambientes lúdicos e personalizados.",
        },
        { icon: "clock", title: "Feito para tráfego constante", text: "Boa relação entre custo e durabilidade para áreas de circulação frequente de crianças." },
      ]}
      idealPara={["Escolas e creches", "Condomínios", "Buffets infantis"]}
    />
  );
}
