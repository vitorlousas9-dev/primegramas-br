import LugarTemplate from "@/components/LugarTemplate";

export const metadata = { title: "Condomínios e Áreas Comuns" };

export default function Page() {
  return (
    <LugarTemplate
      breadcrumb={[
        { label: "Produtos", href: "/produtos" },
        { label: "Linha Decorativa", href: "/produtos/decorativa" },
        { label: "Condomínios e Áreas Comuns" },
      ]}
      lineLabel="Linha Decorativa · Aplicação"
      title={{ light: "Condomínios e", bold: "Áreas Comuns" }}
      intro="Áreas comuns de condomínio sofrem o ano inteiro com terra exposta, poças na chuva e jardinagem constante. A grama sintética entrega um espaço verde acabado, pronto para uso todos os dias, sem depender de manutenção recorrente."
      heroSrc="/images/condominio-playground.jpeg"
      heroPlaceholder="Foto — área comum de condomínio com grama sintética"
      benefits={[
        { icon: "layers", title: "Base firme ao solo", text: "Polipropileno com 2 camadas de látex garante aderência e sustentação dos fios mesmo em áreas de passagem constante." },
        { icon: "shield-check", title: "Alta resistência", text: "Modelos bicolores com alto nível de proteção U.V., indicados para o uso frequente de moradores." },
        { icon: "clock", title: "Sem lama, sem manutenção", text: "Acaba com a lama da chuva e a manutenção de jardim recorrente nas áreas comuns." },
        { icon: "home", title: "Durabilidade de 3 a 10 anos", text: "Conforme o modelo indicado e o tráfego da área, com garantia de 1 a 3 anos." },
      ]}
      idealPara={["Síndicos e administradoras", "Condomínios residenciais", "Construtoras"]}
    />
  );
}
