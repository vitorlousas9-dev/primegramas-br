import Link from "next/link";
import BlogLayout from "@/components/BlogLayout";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";

const post = getPostBySlug("quanto-tempo-dura-grama-sintetica");

export const metadata = {
  alternates: { canonical: "/blog/quanto-tempo-dura-grama-sintetica" },
  title: post.title,
  description:
    "Grama sintética dura de 3 a 10 anos conforme o modelo e o uso. Veja o que encurta a vida útil, a rotina de limpeza correta e o que nunca fazer no gramado.",
};

const FAQS = [
  {
    q: "Quantos anos dura a grama sintética?",
    a: "Entre 3 e 10 anos, dependendo do modelo, da qualidade do fio e do tráfego que a área recebe. Um jardim de uso leve com produto de linha chega tranquilamente ao topo dessa faixa.",
  },
  {
    q: "Como limpar grama sintética no dia a dia?",
    a: "Semanalmente, retire folhas e detritos com vassoura ou soprador. Escove mensalmente no sentido contrário aos fios. Para sujeira, use água corrente e sabão neutro — não é preciso produto elaborado.",
  },
  {
    q: "O que nunca fazer na grama sintética?",
    a: "Evite água sanitária pura, produtos abrasivos, jato de alta pressão de perto (descola o fio da base) e qualquer fonte de calor direto como churrasqueira ou cigarro — o fio é termoplástico e derrete.",
  },
  {
    q: "Grama sintética funciona bem com cachorro?",
    a: "Sim. Não morre com urina, ao contrário da grama natural, e é lavável. O cuidado extra é enxaguar a área de xixi com água e, se o odor persistir, usar uma solução de água com vinagre branco em partes iguais.",
  },
];

export default function Page() {
  return (
    <BlogLayout post={post} faqs={FAQS} related={getRelatedPosts(post.slug)}>
      <p className="pg-lede">
        A vida útil vai de <strong>3 a 10 anos</strong>, dependendo do modelo, da qualidade do fio e,
        principalmente, do tráfego que a área recebe. Um jardim de uso leve com produto de linha chega
        tranquilamente ao topo dessa faixa. Uma área de passagem intensa com produto barato não passa da base.
      </p>

      <h2>O que encurta a vida útil</h2>
      <ul>
        <li>
          <strong>Fio reciclado no lugar de polietileno virgem.</strong> Endurece, quebra e desbota cedo. É o fator
          número um.
        </li>
        <li>
          <strong>Ausência de proteção U.V.</strong> O verde vira cinza-esverdeado em poucas estações de sol forte.
        </li>
        <li>
          <strong>Base malfeita.</strong> Terreno irregular gera ondulações, e ondulação concentra pisoteio em
          pontos específicos, que se desgastam primeiro.
        </li>
        <li>
          <strong>Drenagem inexistente.</strong> Água parada embaixo da manta apodrece o que estiver ali e
          favorece mau cheiro.
        </li>
        <li>
          <strong>Falta de escovação.</strong> Fio deitado por acomodação parece desgastado mesmo estando novo — e,
          com o tempo, deita de vez.
        </li>
      </ul>

      <h2>A rotina de manutenção, por frequência</h2>
      <div className="pg-scroller">
        <table>
          <thead>
            <tr>
              <th>Quando</th>
              <th>O que fazer</th>
              <th>Por quê</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Semanal</strong>
              </td>
              <td>Retirar folhas, galhos e detritos com vassoura ou soprador</td>
              <td>Matéria orgânica acumulada retém umidade e favorece limo</td>
            </tr>
            <tr>
              <td>
                <strong>Mensal</strong>
              </td>
              <td>Escovar no sentido contrário ao dos fios, com escova de cerdas duras</td>
              <td>Levanta o fio deitado e devolve o aspecto de gramado cheio</td>
            </tr>
            <tr>
              <td>
                <strong>Conforme uso</strong>
              </td>
              <td>Lavar com água corrente e sabão neutro</td>
              <td>Remove poeira e resíduos sem agredir o fio</td>
            </tr>
            <tr>
              <td>
                <strong>Anual</strong>
              </td>
              <td>Conferir emendas, bordas e escoamento da água</td>
              <td>Corrigir cedo evita descolamento e empoçamento</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        É isso. Sem corte, sem adubo, sem rega programada, sem replantio. A manutenção da grama sintética é
        basicamente limpeza — e é justamente essa diferença de rotina que costuma{" "}
        <Link href="/blog/grama-sintetica-ou-natural">justificar o investimento</Link>.
      </p>

      <h2>O que nunca fazer</h2>
      <ul>
        <li>
          <strong>Água sanitária pura ou produtos abrasivos.</strong> Atacam o fio e mancham de forma irreversível.
        </li>
        <li>
          <strong>Lavadora de alta pressão no jato forte e de perto.</strong> Descola o fio da base.
        </li>
        <li>
          <strong>Churrasqueira, fogueira ou ponta de cigarro sobre a grama.</strong> O fio é termoplástico: ele
          derrete, e o furo não tem conserto — só remendo.
        </li>
        <li>
          <strong>Móvel pesado parado no mesmo ponto por meses.</strong> Marca o fio. Se for inevitável, mude de
          lugar de vez em quando.
        </li>
        <li>
          <strong>Arrastar vaso ou móvel</strong> em vez de levantar.
        </li>
      </ul>

      <h2>Tem cachorro? Dois cuidados a mais</h2>
      <p>
        Grama sintética funciona muito bem com pets — não morre com urina, como a natural, e não vira lama. Mas
        exige atenção ao odor: as fezes devem ser recolhidas normalmente, e a área de xixi deve ser enxaguada com
        água. Quando o cheiro persistir, uma solução de água com vinagre branco em partes iguais neutraliza sem
        danificar o fio. A drenagem bem executada resolve a maior parte do problema antes dele começar.
      </p>

      <h2>Como saber que chegou a hora de trocar</h2>
      <p>Os sinais são claros e aparecem juntos:</p>
      <ul>
        <li>Fio permanentemente deitado, que não levanta mesmo depois de escovado</li>
        <li>Cor visivelmente desbotada, sobretudo comparando área de sol com área de sombra</li>
        <li>Fios soltando ao passar a mão, indicando que a base perdeu aderência</li>
        <li>Emendas abrindo ou bordas descolando</li>
        <li>Água empoçando onde antes escoava</li>
      </ul>

      <div className="pg-callout">
        <b>Garantia e vida útil não são a mesma coisa</b>
        <p>
          Garantia é o prazo em que o fabricante responde por defeito do produto — na Primegramas, de 1 a 3 anos
          conforme o modelo. Vida útil é quanto tempo o gramado continua bonito e funcional em uso normal, e
          costuma ser bem maior. Quando comparar propostas, confira os dois números e peça a garantia por escrito.
        </p>
      </div>

      <div className="pg-inline-cta">
        <b>Sua grama já tem alguns anos?</b>
        <p>
          Se você não sabe se dá para recuperar ou se é hora de trocar, mande uma foto pelo{" "}
          <a href="https://wa.me/5511932245642?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento">
            WhatsApp
          </a>{" "}
          — em muitos casos uma escovação profissional resolve.
        </p>
      </div>
    </BlogLayout>
  );
}
