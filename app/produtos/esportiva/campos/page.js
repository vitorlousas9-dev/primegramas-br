import LugarTemplate from "@/components/LugarTemplate";

export const metadata = { title: "Campos de Futebol e Society" };

export default function Page() {
  return (
    <LugarTemplate
      breadcrumb={[
        { label: "Produtos", href: "/produtos" },
        { label: "Linha Esportiva", href: "/produtos/esportiva" },
        { label: "Campos de Futebol e Society" },
      ]}
      lineLabel="Linha Esportiva · Aplicação"
      title="Campos de Futebol e Society"
      condensed
      intro="Campos de futebol e society exigem um gramado com boa absorção de impacto e drenagem rápida, para manter a jogabilidade mesmo depois da chuva. A altura de fio recomendada para essa aplicação é de 40 a 60mm."
      heroSrc="/images/campo-futebol.jpeg"
      heroSrc="/images/campo-futebol.jpeg"
      heroPlaceholder="Foto — campo de futebol society com grama esportiva"
      benefits={[
        { icon: "droplets", title: "Drenagem rápida", text: "Absorção rápida de água, evita poças e garante jogabilidade mesmo na chuva." },
        { icon: "ruler", title: "Altura de fio de 40 a 60mm", text: "Faixa recomendada para campos de futebol society, priorizando amortecimento e sensação de jogo." },
        { icon: "shield-check", title: "Preenchimento para amortecimento", text: "Areia, borracha ou outros materiais garantem estabilidade e uma sensação de jogo mais próxima do gramado natural." },
        { icon: "sun", title: "Resistência U.V.", text: "Tratamento contra desbotamento pela exposição solar constante do campo." },
      ]}
      idealPara={["Donos de campos society", "Escolinhas de futebol", "Clubes"]}
    />
  );
}
