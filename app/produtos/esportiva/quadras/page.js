import LugarTemplate from "@/components/LugarTemplate";

export const metadata = { title: "Quadras Poliesportivas" };

export default function Page() {
  return (
    <LugarTemplate
      breadcrumb={[
        { label: "Produtos", href: "/produtos" },
        { label: "Linha Esportiva", href: "/produtos/esportiva" },
        { label: "Quadras Poliesportivas" },
      ]}
      lineLabel="Linha Esportiva · Aplicação"
      title="Quadras Poliesportivas"
      condensed
      intro="Quadras poliesportivas recebem esportes e usos diferentes ao longo do dia, o que pede um gramado resistente com um perfil mais baixo. É a aplicação indicada para o fio de menor altura dentro da linha esportiva."
      heroPlaceholder="Foto — quadra poliesportiva com grama esportiva"
      benefits={[
        { icon: "ruler", title: "Perfil mais baixo, alta resistência", text: "Fio de menor altura da linha esportiva, indicado para uso recreativo intenso e multiuso." },
        { icon: "layers", title: "Fio 100% polietileno virgem", text: "Sem material reciclado, para maior resistência ao desgaste do uso diário." },
        { icon: "droplets", title: "Drenagem rápida", text: "Evita poças e mantém a quadra em condições de uso mesmo depois da chuva." },
      ]}
      idealPara={["Escolas", "Clubes", "Condomínios", "Prefeituras"]}
    />
  );
}
