import LugarTemplate from "@/components/LugarTemplate";

export const metadata = { title: "Eventos e Decoração Temática" };

export default function Page() {
  return (
    <LugarTemplate
      breadcrumb={[
        { label: "Produtos", href: "/produtos" },
        { label: "Linha Decorativa", href: "/produtos/decorativa" },
        { label: "Eventos e Decoração Temática" },
      ]}
      lineLabel="Linha Decorativa · Aplicação"
      title={{ light: "Eventos e", bold: "Decoração Temática" }}
      intro="Para eventos e cenografia, a grama sintética entra e sai do espaço sem deixar rastro, com cores que vão do verde tradicional a tons vibrantes para decoração temática."
      heroSrc="/images/evento-grama-colorida.jpeg"
      heroPlaceholder="Foto — decoração de evento com grama sintética colorida"
      benefits={[
        { icon: "sprout", title: "7 cores disponíveis", text: "Amarelo, vermelho, azul, preto, branco, roxo e rosa, além do verde tradicional, para ambientes personalizados." },
        { icon: "layers", title: "Fácil de instalar e remover", text: "Indicada para uso temporário, sem obra e sem resíduo no espaço depois do evento." },
        { icon: "shield-check", title: "Resistente ao trânsito do evento", text: "Suporta o fluxo de pessoas de um evento sem perder a aparência." },
      ]}
      idealPara={["Empresas de eventos", "Cenógrafos e decoradores", "Buffets e espaços para festas"]}
    />
  );
}
