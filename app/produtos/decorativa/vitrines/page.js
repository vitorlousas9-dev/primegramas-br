import LugarTemplate from "@/components/LugarTemplate";

export const metadata = { title: "Vitrines e Ambientes Comerciais" };

export default function Page() {
  return (
    <LugarTemplate
      breadcrumb={[
        { label: "Produtos", href: "/produtos" },
        { label: "Linha Decorativa", href: "/produtos/decorativa" },
        { label: "Vitrines e Ambientes Comerciais" },
      ]}
      lineLabel="Linha Decorativa · Aplicação"
      title={{ light: "Vitrines e", bold: "Ambientes Comerciais" }}
      intro="Lojas, escritórios e vitrines usam a grama sintética para criar um ponto verde de baixa manutenção, tanto em ambientes internos quanto externos, sem o cuidado que a grama natural exigiria em um espaço comercial."
      heroPlaceholder="Foto — vitrine comercial com grama sintética"
      benefits={[
        { icon: "clock", title: "Baixa manutenção", text: "Sem rega e sem corte — mantém o visual pronto para atender o público todos os dias." },
        { icon: "layers", title: "Para ambientes internos e externos", text: "Modelos indicados tanto para vitrines internas quanto para fachadas e áreas externas do comércio." },
        { icon: "sprout", title: "Opção colorida disponível", text: "Modelo em cores vibrantes para vitrines temáticas e ações sazonais." },
      ]}
      idealPara={["Lojas e vitrines", "Escritórios", "Showrooms"]}
    />
  );
}
