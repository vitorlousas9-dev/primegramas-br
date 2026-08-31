import LugarTemplate from "@/components/LugarTemplate";

export const metadata = { title: "Bordas de Piscina" };

export default function Page() {
  return (
    <LugarTemplate
      breadcrumb={[
        { label: "Produtos", href: "/produtos" },
        { label: "Linha Decorativa", href: "/produtos/decorativa" },
        { label: "Bordas de Piscina" },
      ]}
      lineLabel="Linha Decorativa · Aplicação"
      title={{ light: "Bordas de", bold: "Piscina" }}
      intro="A área ao redor da piscina pede uma grama confortável ao toque descalço e resistente à exposição constante a água e sol. Os modelos mais macios da linha decorativa entregam essa combinação sem perder a aparência natural."
      heroPlaceholder="Foto — borda de piscina com grama sintética"
      benefits={[
        { icon: "sprout", title: "Conforto ao toque descalço", text: "Modelos mais macios e com mais volume, indicados para uso descalço na borda da piscina." },
        { icon: "shield-check", title: "Resistente à umidade e ao sol", text: "Fio com proteção U.V. e alta resistência ao desbotamento, mesmo com exposição constante à água e ao sol." },
        { icon: "layers", title: "Aparência natural", text: "Fios com 2 tonalidades de verde para um visual mais próximo da grama natural ao redor da piscina." },
      ]}
      idealPara={["Residências", "Clubes", "Condomínios com piscina"]}
    />
  );
}
