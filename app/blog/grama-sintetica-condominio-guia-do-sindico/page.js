import Link from "next/link";
import BlogLayout from "@/components/BlogLayout";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";

const post = getPostBySlug("grama-sintetica-condominio-guia-do-sindico");

export const metadata = {
  alternates: { canonical: "/blog/grama-sintetica-condominio-guia-do-sindico" },
  title: post.title,
  description:
    "Guia para síndicos: onde a grama sintética resolve na área comum, o que a norma de playground exige, como aprovar em assembleia e o que cobrar do fornecedor.",
};

const FAQS = [
  {
    q: "Grama sintética substitui o piso de segurança do playground?",
    a: "Não sozinha. A ABNT NBR 16071 trata da segurança dos brinquedos e do local de instalação. A grama sintética resolve a superfície — seca, limpa, sem lama — mas, quando há altura de queda relevante, ela deve ser instalada sobre uma camada de amortecimento adequada, não substituí-la.",
  },
  {
    q: "Quem responde pela instalação de grama sintética na área comum?",
    a: "O síndico responde pela conservação das áreas comuns e deve contratar profissionais habilitados para obras que envolvam segurança, como playgrounds. Guardar a documentação técnica da obra protege a administração.",
  },
  {
    q: "Como justificar o investimento em assembleia?",
    a: "Comparando com o custo recorrente que o condomínio já paga: jardinagem periódica, água de irrigação, adubo, replantio de áreas mortas e limpeza extra por lama. Somado ao longo de um ano, esse valor costuma superar o investimento único na grama sintética dividido pela vida útil do produto.",
  },
  {
    q: "Quanto tempo leva a obra em um condomínio?",
    a: "Depende do estado da base. Área com contrapiso pronto e nivelado é rápida. Área com terra, desnível ou necessidade de drenagem exige preparo antes e estende o prazo — por isso a visita técnica é o passo que define tanto o preço quanto o cronograma.",
  },
];

export default function Page() {
  return (
    <BlogLayout post={post} faqs={FAQS} related={getRelatedPosts(post.slug)}>
      <p className="pg-lede">
        Em condomínio, grama sintética resolve três problemas de uma vez: acaba com a lama nas áreas de passagem,
        elimina o custo mensal recorrente de jardinagem e recupera as áreas de sombra onde a grama natural nunca
        pegou. Mas há um ponto técnico sobre playground que precisa estar claro antes da contratação.
      </p>

      <h2>Onde faz mais diferença</h2>
      <ul>
        <li>
          <strong>Playground e área infantil</strong> — superfície seca, sem barro e sem poeira, utilizável logo
          após a chuva.
        </li>
        <li>
          <strong>Pet place</strong> — não morre com urina e é lavável, ao contrário do gramado natural.
        </li>
        <li>
          <strong>Área de convivência e espaço gourmet</strong> — verde constante em local de uso intenso.
        </li>
        <li>
          <strong>Corredores e caminhos entre blocos</strong> — exatamente onde a grama natural sempre fica pelada.
        </li>
        <li>
          <strong>Deck e entorno de piscina</strong> — conforto ao pé descalço e menos calor que o piso claro.
        </li>
        <li>
          <strong>Jardim de fachada e portaria</strong> — o cartão de visita do condomínio, sempre uniforme.
        </li>
        <li>
          <strong>Áreas sobre laje e garagem</strong> — onde a natural é inviável por falta de solo e de sol.
        </li>
      </ul>

      <h2>Playground: o ponto técnico que muda tudo</h2>
      <p>
        A instalação de playground em condomínio segue a <strong>ABNT NBR 16071</strong>, que trata da segurança
        dos equipamentos, do local de instalação e da rotina de inspeção e manutenção. E há um detalhe que costuma
        ser mal explicado no mercado:
      </p>

      <div className="pg-callout">
        <b>Grama sintética sozinha não é piso de amortecimento</b>
        <p>
          A grama sintética resolve muito bem a superfície — seca, limpa, confortável e sem lama. Mas ela,
          isoladamente, não absorve o impacto de queda como um piso emborrachado específico para essa função.
          Quando há brinquedos com altura de queda relevante, o correto é instalar a grama sobre uma camada de
          amortecimento adequada à altura dos equipamentos, e não substituir o piso de segurança pela grama.
          Fornecedor que promete o contrário está criando um problema de responsabilidade para o síndico.
        </p>
      </div>

      <p>
        Vale registrar também que o síndico responde pela conservação das áreas comuns, e projetos que envolvem
        segurança devem ser conduzidos com profissional habilitado. Guardar a documentação técnica da obra protege
        a administração em caso de questionamento.
      </p>

      <h2>Como levar a proposta para a assembleia</h2>
      <p>
        A objeção previsível é o valor do investimento. O argumento que costuma virar a votação é a comparação com
        o custo recorrente que o condomínio já paga:
      </p>
      <div className="pg-scroller">
        <table>
          <thead>
            <tr>
              <th>Custo atual (recorrente)</th>
              <th>Depois da troca</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jardinagem periódica de corte e aparo</td>
              <td>Eliminado nas áreas convertidas</td>
            </tr>
            <tr>
              <td>Água de irrigação no rateio</td>
              <td>Eliminado</td>
            </tr>
            <tr>
              <td>Adubo, defensivo e replantio de áreas mortas</td>
              <td>Eliminado</td>
            </tr>
            <tr>
              <td>Limpeza extra por lama em dia de chuva</td>
              <td>Muito reduzida</td>
            </tr>
            <tr>
              <td>Reclamação recorrente de morador</td>
              <td>Resolvida</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Some o gasto anual dessas linhas e compare com{" "}
        <Link href="/blog/quanto-custa-grama-sintetica-instalada-sao-paulo">o investimento único</Link> dividido
        pela vida útil do produto. Na maioria dos condomínios, o número fala sozinho. Vale ainda apresentar: prazo
        de execução, se a área fica interditada durante a obra, garantia por escrito e fotos de obras semelhantes
        já entregues.
      </p>

      <h2>O que exigir de qualquer fornecedor</h2>
      <ol>
        <li>
          <strong>Visita técnica antes da proposta.</strong> Orçamento fechado sem ver a base é orçamento que vai
          mudar.
        </li>
        <li>
          <strong>Especificação escrita do produto</strong> — altura, tipo de fio (exija polietileno virgem),
          densidade e proteção U.V.
        </li>
        <li>
          <strong>Laudo técnico e certificações</strong> do material.
        </li>
        <li>
          <strong>Garantia formalizada</strong>, com prazo e cobertura claros.
        </li>
        <li>
          <strong>Descrição do preparo da base e da drenagem</strong> — é o item que separa uma obra que dura de
          uma que empoça no primeiro verão.
        </li>
        <li>
          <strong>Referências verificáveis</strong> de outros condomínios atendidos.
        </li>
      </ol>

      <h2>Quanto tempo leva a obra</h2>
      <p>
        Depende quase inteiramente da base. Área com contrapiso pronto e nivelado é rápida. Área com terra,
        desnível ou necessidade de drenagem exige preparo antes e estende o prazo. Por isso a visita técnica é o
        passo que define tanto o preço quanto o cronograma — e é ela que permite programar a interdição da área com
        aviso adequado aos moradores.
      </p>

      <div className="pg-inline-cta">
        <b>Proposta para apresentar em assembleia</b>
        <p>
          A Primegramas atende condomínios há 20 anos e faz visita técnica com proposta formal para apresentação em
          assembleia — incluindo especificação do produto, prazo e garantia por escrito.{" "}
          <Link href="/produtos/decorativa/condominios">Veja aplicações em condomínio</Link> ou fale com a equipe
          comercial pelo{" "}
          <a href="https://wa.me/5511932245642?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento">
            WhatsApp
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
