import LugarTemplate from "@/components/LugarTemplate";

export const metadata = { title: "Tênis e Padel" };

export default function Page() {
  return (
    <LugarTemplate
      breadcrumb={[
        { label: "Produtos", href: "/produtos" },
        { label: "Linha Esportiva", href: "/produtos/esportiva" },
        { label: "Tênis e Padel" },
      ]}
      lineLabel="Linha Esportiva · Aplicação"
      title="Tênis e Padel"
      condensed
      intro="Quadras de tênis e padel pedem um gramado de perfil mais baixo, com boa resistência ao uso intenso e sem perder a estabilidade nas jogadas. A base em polipropileno com látex sustenta os fios mesmo com o desgaste do jogo."
      heroSrc="/images/quadra-padel.jpeg"
      heroPlaceholder="Foto — quadra de tênis ou padel com grama esportiva"
      benefits={[
        { icon: "ruler", title: "Perfil mais baixo", text: "Fios de menor altura, adequados ao tipo de jogo e ao deslocamento em quadras de tênis e padel." },
        { icon: "layers", title: "Base firme", text: "Polipropileno com camadas de látex garantem aderência ao solo e sustentação dos fios mesmo em uso intenso." },
        { icon: "droplets", title: "Drenagem rápida", text: "Evita poças na quadra e mantém as condições de jogo mesmo depois da chuva." },
      ]}
      idealPara={["Clubes", "Academias esportivas", "Condomínios com quadra"]}
    />
  );
}
