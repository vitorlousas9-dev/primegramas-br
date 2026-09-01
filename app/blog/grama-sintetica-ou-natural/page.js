import Link from "next/link";
import BlogLayout from "@/components/BlogLayout";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";

const post = getPostBySlug("grama-sintetica-ou-natural");

export const metadata = {
  alternates: { canonical: "/blog/grama-sintetica-ou-natural" },
  title: post.title,
  description:
    "Comparação honesta entre grama sintética e natural: custo em 10 anos, manutenção, calor, sombra e drenagem. Inclui os casos em que a natural ainda é melhor.",
};

const FAQS = [
  {
    q: "Grama sintética esquenta mais que a natural?",
    a: "Sim. Sob sol direto, a grama sintética pode ficar bem mais quente que a natural, que se mantém abaixo da temperatura ambiente. Sombreamento parcial, fio mais claro ou uma passada de mangueira antes do uso ajudam a administrar isso.",
  },
  {
    q: "Grama sintética funciona em local com pouco sol?",
    a: "Funciona melhor que a natural, na verdade. Embaixo de árvore densa, entre prédios ou sobre laje, a grama natural não forma um tapete uniforme. É justamente nesses casos que a sintética costuma ser a única solução que funciona bem.",
  },
  {
    q: "Vale mais a pena no primeiro ano ou no longo prazo?",
    a: "No primeiro ano, a grama natural é mais barata de implantar. A conta vira a favor da sintética a partir de alguns anos, quando se soma o gasto recorrente com corte, rega, adubo e replantio das áreas que a natural perde na sombra ou na passagem.",
  },
  {
    q: "A grama sintética parece artificial de perto?",
    a: "Os modelos com fio bicolor, que misturam verde com tons de palha, e alturas de 25 a 30mm reproduzem bem a variação de um gramado real. O que entrega uma grama sintética de baixa qualidade é a cor verde chapada e o fio curto e duro — não o fato de ser sintética.",
  },
];

export default function Page() {
  return (
    <BlogLayout post={post} faqs={FAQS} related={getRelatedPosts(post.slug)}>
      <p className="pg-lede">
        A resposta curta: grama sintética compensa quando o espaço tem sombra, circulação constante ou pouca
        disponibilidade para manutenção — três condições muito comuns em São Paulo. A natural continua melhor em
        áreas amplas, ensolaradas, de uso leve e com quem cuide delas de verdade.
      </p>

      <h2>O custo não está no primeiro dia, está no décimo ano</h2>
      <p>
        Comparar as duas pelo preço inicial leva a uma conclusão errada. A natural começa muito mais barata e vai
        cobrando o resto ao longo do tempo. Veja onde cada uma gasta:
      </p>
      <div className="pg-scroller">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Grama natural</th>
              <th>Grama sintética</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Investimento inicial</strong>
              </td>
              <td>Baixo</td>
              <td>Alto</td>
            </tr>
            <tr>
              <td>
                <strong>Corte</strong>
              </td>
              <td>A cada 15–30 dias, o ano todo</td>
              <td>Nunca</td>
            </tr>
            <tr>
              <td>
                <strong>Água</strong>
              </td>
              <td>Rega constante no calor</td>
              <td>Só na limpeza eventual</td>
            </tr>
            <tr>
              <td>
                <strong>Adubo e defensivo</strong>
              </td>
              <td>Periódico</td>
              <td>Nenhum</td>
            </tr>
            <tr>
              <td>
                <strong>Replantio</strong>
              </td>
              <td>Áreas de sombra e passagem morrem</td>
              <td>Não se aplica</td>
            </tr>
            <tr>
              <td>
                <strong>Substituição</strong>
              </td>
              <td>Não há data</td>
              <td>
                Após a <Link href="/blog/quanto-tempo-dura-grama-sintetica">vida útil</Link> do modelo
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        O item que costuma passar despercebido é o replantio. Em muitos quintais e áreas comuns, o gramado natural
        nunca fica bonito por inteiro: há sempre uma faixa pelada no caminho de passagem e uma mancha morta embaixo
        da árvore. Isso significa refazer trechos todo ano, sem nunca resolver.
      </p>

      <h2>Água: um argumento com peso extra em São Paulo</h2>
      <p>
        Manter um gramado natural verde durante o verão paulista consome água em volume relevante, e a cidade já
        viveu mais de uma crise de abastecimento nas últimas décadas. Em condomínio, esse gasto entra no rateio e
        aparece na conta de todo mundo. É um dos motivos pelos quais a troca costuma ser aprovada em assembleia com
        facilidade.
      </p>

      <h2>Sombra e laje: onde a natural simplesmente não pega</h2>
      <p>
        Grama natural precisa de sol direto. Embaixo de árvore densa, entre prédios, em corredor lateral, em
        varanda ou sobre laje, ela nunca forma um tapete uniforme — vira terra exposta, que vira lama quando chove
        e poeira quando seca. Esses são os casos em que a sintética não é preferência estética, é a única solução
        que funciona.
      </p>

      <h2>Chuva: o fim da lama</h2>
      <p>
        Com base bem executada e caimento correto, a água atravessa a grama sintética e escoa. Na prática, isso
        muda a rotina de quem tem criança ou cachorro: a área continua utilizável logo depois da chuva, sem barro
        entrando em casa.
      </p>

      <div className="pg-callout">
        <b>A desvantagem que ninguém deveria esconder</b>
        <p>
          Grama sintética esquenta sob sol direto — bem mais que a natural, que se mantém abaixo da temperatura
          ambiente. Em pleno sol de tarde, no auge do verão, a superfície pode ficar desconfortável para pé
          descalço. Isso se administra com sombreamento, escolha de fio mais claro ou uma passada de mangueira
          antes do uso, mas precisa entrar na decisão. Se o seu objetivo principal é criar uma área mais fresca em
          pleno sol, a grama natural entrega isso melhor.
        </p>
      </div>

      <h2>Quando escolher cada uma</h2>
      <div className="pg-scroller">
        <table>
          <thead>
            <tr>
              <th>Escolha sintética se…</th>
              <th>Escolha natural se…</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A área tem sombra ou fica sobre laje</td>
              <td>A área é ampla, plana e recebe sol o dia todo</td>
            </tr>
            <tr>
              <td>Há circulação diária, criança ou pet</td>
              <td>O uso é leve e ocasional</td>
            </tr>
            <tr>
              <td>Ninguém tem tempo ou equipe para manutenção</td>
              <td>Existe jardineiro ou rotina de cuidado estabelecida</td>
            </tr>
            <tr>
              <td>A lama depois da chuva é um problema recorrente</td>
              <td>O terreno drena bem naturalmente</td>
            </tr>
            <tr>
              <td>Você quer o mesmo visual o ano inteiro</td>
              <td>O efeito térmico de resfriamento é prioridade</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>E a aparência?</h2>
      <p>
        É a dúvida que mais aparece — e a resposta mudou nos últimos anos. Os modelos atuais usam fios bicolores,
        que misturam verde com tons de palha para reproduzir a variação natural de um gramado real, e alturas
        maiores deixam o toque mais macio. De perto, um{" "}
        <Link href="/blog/qual-altura-de-grama-sintetica-escolher">modelo bom de 30mm</Link> engana muita gente. O
        que entrega uma grama sintética barata não é o fato de ser sintética: é a cor verde chapada, uniforme
        demais, e o fio curto e duro.
      </p>

      <div className="pg-inline-cta">
        <b>Ainda em dúvida sobre o seu caso?</b>
        <p>
          O mais rápido é mostrar a área. A Primegramas avalia sol, sombra e drenagem na visita técnica e indica se
          a sintética resolve — inclusive quando a resposta é não. Fale pelo{" "}
          <a href="https://wa.me/551141124329?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento">
            WhatsApp
          </a>{" "}
          ou <Link href="/contato">solicite um orçamento</Link>.
        </p>
      </div>
    </BlogLayout>
  );
}
