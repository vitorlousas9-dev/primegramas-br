import LugarTemplate from "@/components/LugarTemplate";

export const metadata = {
  alternates: { canonical: "/produtos/decorativa/jardins" },
  title: "Jardins e Paisagismo",
  description: "Grama sintética para jardins e paisagismo, verde o ano todo, sem rega e sem corte, em qualquer projeto residencial.",
};

export default function Page() {
  return (
    <LugarTemplate
      breadcrumb={[
        { label: "Produtos", href: "/produtos" },
        { label: "Linha Decorativa", href: "/produtos/decorativa" },
        { label: "Jardins e Paisagismo" },
      ]}
      lineLabel="Linha Decorativa · Aplicação"
      title={{ light: "Jardins e", bold: "Paisagismo" }}
      intro="Substitui a grama natural em jardins residenciais e projetos de paisagismo sem abrir mão do verde o ano inteiro. Sem rega, sem corte e sem desgaste por sol ou chuva — o visual do projeto se mantém como no dia da instalação."
      heroSrc="/images/jardim-decorativa-instalacao.jpeg"
      heroAlt="Instalação de grama sintética decorativa em jardim residencial"
      heroPlaceholder="Foto — jardim residencial com grama decorativa"
      benefits={[
        { icon: "sprout", title: "Verde o ano todo", text: "Sem estação seca ou período de recuperação — o jardim mantém a cor e a densidade em qualquer clima." },
        { icon: "layers", title: "Fios bicolores", text: "Modelos com 2 tonalidades de verde reproduzem a variação natural da grama, para um efeito mais realista." },
        { icon: "shield-check", title: "Resistência U.V.", text: "Fio 100% polietileno virgem com tratamento contra desbotamento pela exposição solar." },
        { icon: "clock", title: "Sem manutenção de jardim", text: "Sem corte, adubo ou replantio — só a limpeza simples do dia a dia." },
      ]}
      idealPara={["Residências", "Paisagistas e arquitetos", "Construtoras"]}
    />
  );
}
