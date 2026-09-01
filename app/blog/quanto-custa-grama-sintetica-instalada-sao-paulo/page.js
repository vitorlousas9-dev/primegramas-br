import Link from "next/link";
import BlogLayout from "@/components/BlogLayout";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";

const post = getPostBySlug("quanto-custa-grama-sintetica-instalada-sao-paulo");

export const metadata = {
  alternates: { canonical: "/blog/quanto-custa-grama-sintetica-instalada-sao-paulo" },
  title: post.title,
  description:
    "Preço de grama sintética instalada em São Paulo fica entre R$ 90 e R$ 200 por m² em 2026. Veja o que muda o valor e como pedir um orçamento confiável.",
};

const FAQS = [
  {
    q: "Quanto custa o m² de grama sintética instalada?",
    a: "Em São Paulo, o total instalado (material mais mão de obra) costuma ficar entre R$ 90 e R$ 200 por m² em 2026. O valor exato depende da altura do fio, do estado da base e do tamanho da área.",
  },
  {
    q: "O preço do material é o mesmo da instalação?",
    a: "Não. O material (o rolo de grama) fica em média entre R$ 45 e R$ 90 por m². A instalação — preparo da base, manta, recortes e colagem — é cobrada à parte e varia mais, entre R$ 20 e R$ 120 por m².",
  },
  {
    q: "Por que o preço de instalação varia tanto entre orçamentos?",
    a: "Porque o estado do terreno muda o trabalho necessário. Uma base plana e pronta custa menos para instalar do que um terreno com desnível, entulho ou sem drenagem, que exige preparo antes da grama entrar.",
  },
  {
    q: "O que preciso informar para receber um orçamento confiável?",
    a: "Metragem aproximada, o uso do espaço, o que existe hoje no local (terra, cimento, grama natural) e se há desnível ou empoçamento quando chove. Fotos da área agilizam bastante a resposta.",
  },
];

export default function Page() {
  return (
    <BlogLayout post={post} faqs={FAQS} related={getRelatedPosts(post.slug)}>
      <p className="pg-lede">
        Em 2026, o custo de grama sintética instalada na Grande São Paulo fica, na maior parte dos projetos, entre{" "}
        <strong>R$ 90 e R$ 200 por metro quadrado</strong> — somando material e mão de obra. A faixa é larga porque
        três coisas mudam muito o valor: a altura do fio, o estado da base onde a grama vai ser assentada e o
        tamanho da área.
      </p>

      <h2>Material e instalação são dois preços diferentes</h2>
      <p>
        A confusão mais comum em orçamento de grama sintética é comparar um preço de material com um preço de
        serviço completo. São coisas distintas:
      </p>
      <div className="pg-scroller">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Faixa de mercado (2026)</th>
              <th>O que entra</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Material</strong>
              </td>
              <td>R$ 45 – R$ 90 / m²</td>
              <td>O rolo de grama. Varia conforme altura, densidade e qualidade do fio.</td>
            </tr>
            <tr>
              <td>
                <strong>Instalação</strong>
              </td>
              <td>R$ 20 – R$ 120 / m²</td>
              <td>Preparo da base, nivelamento, manta, recortes, colagem e acabamento.</td>
            </tr>
            <tr>
              <td>
                <strong>Total instalado</strong>
              </td>
              <td>R$ 90 – R$ 200 / m²</td>
              <td>O número que interessa para comparar propostas.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Repare na amplitude da instalação. Um quintal com contrapiso plano e pronto fica perto do piso da faixa. Um
        terreno com terra batida, desnível e entulho para remover fica perto do teto — porque o serviço vira uma
        pequena obra antes de a grama sequer chegar.
      </p>

      <h2>O que faz o preço subir ou cair</h2>

      <h3>1. A altura do fio</h3>
      <p>
        Uma grama de 12mm custa bem menos que uma de 30mm, simplesmente porque leva menos matéria-prima. Mas o
        barato só compensa se a altura for adequada ao uso — 12mm em uma área de circulação intensa vira gasto
        repetido, não economia.
      </p>

      <h3>2. O estado da base</h3>
      <p>
        Este é o item que mais surpreende quem pede orçamento por telefone. Grama sintética não corrige terreno:
        ela copia o que está embaixo. Uma base irregular vira um gramado ondulado, e sem caimento e drenagem a água
        empoça. Por isso o preço de instalação varia tanto — quem cota sem ver a área está chutando.
      </p>

      <h3>3. O tamanho e o formato da área</h3>
      <p>
        Áreas grandes e retangulares têm o menor preço por metro: menos recorte, menos emenda, menos perda de
        material. Áreas pequenas, recortadas, com canteiros e curvas, custam mais por metro — mesmo sendo mais
        baratas no total.
      </p>

      <h3>4. O acesso ao local</h3>
      <p>
        Um rolo de grama sintética é pesado e volumoso. Apartamento sem elevador de serviço, quintal com acesso só
        pela casa ou obra em andar alto: tudo isso entra no cálculo da mão de obra.
      </p>

      <div className="pg-callout">
        <b>Cuidado com o barato</b>
        <p>
          Existe grama sintética muito abaixo dessas faixas no mercado. Quase sempre a diferença está no fio:
          polietileno reciclado no lugar de virgem, ou ausência de tratamento contra raios U.V. O resultado aparece
          entre o primeiro e o segundo verão — o gramado desbota, endurece e começa a soltar fio. Trocar em três
          anos custa mais caro do que ter feito certo na primeira vez.
        </p>
      </div>

      <h2>Quanto custa por tipo de projeto</h2>
      <div className="pg-scroller">
        <table>
          <thead>
            <tr>
              <th>Projeto</th>
              <th>Altura usual</th>
              <th>Observação sobre o custo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Jardim residencial</strong>
              </td>
              <td>20 – 30mm</td>
              <td>Prioriza conforto e aparência; recortes elevam o valor por m².</td>
            </tr>
            <tr>
              <td>
                <strong>Borda de piscina</strong>
              </td>
              <td>12 – 20mm</td>
              <td>Área recortada e exigência de drenagem bem executada.</td>
            </tr>
            <tr>
              <td>
                <strong>Playground</strong>
              </td>
              <td>12 – 20mm</td>
              <td>Pode exigir camada de amortecimento sob a grama — item à parte.</td>
            </tr>
            <tr>
              <td>
                <strong>Área comum de condomínio</strong>
              </td>
              <td>12 – 20mm</td>
              <td>Metragem grande derruba o preço por m².</td>
            </tr>
            <tr>
              <td>
                <strong>Campo society</strong>
              </td>
              <td>40 – 50mm</td>
              <td>Base e drenagem pesam tanto quanto a grama no orçamento.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Como pedir um orçamento que não muda depois</h2>
      <p>
        Um orçamento fechado por telefone quase sempre é revisado na hora da obra. Para receber uma proposta que se
        sustenta, tenha em mãos:
      </p>
      <ul>
        <li>
          <strong>A metragem aproximada</strong> — comprimento × largura já resolve.
        </li>
        <li>
          <strong>O uso</strong> — jardim, playground, pet, quadra, vitrine. Isso define a altura e o modelo.
        </li>
        <li>
          <strong>O que existe hoje no local</strong> — terra, grama natural, cimento, pedrisco, piso.
        </li>
        <li>Se há desnível ou empoçamento quando chove.</li>
        <li>
          <strong>Fotos da área</strong> — resolvem metade das dúvidas antes da visita.
        </li>
      </ul>
      <p>
        Com essas informações, dá para chegar a uma faixa confiável já no primeiro contato. O valor final é
        fechado na visita técnica, quando a base é avaliada de perto.
      </p>

      <h2>Vale a pena o investimento?</h2>
      <p>
        A conta que costuma decidir não é o preço do metro quadrado, e sim o custo ao longo dos anos. Grama
        sintética é um desembolso único, com{" "}
        <Link href="/blog/quanto-tempo-dura-grama-sintetica">vida útil que vai de 3 a 10 anos</Link> conforme o
        modelo e o tráfego. Grama natural é um custo mensal permanente: corte, rega, adubo e replantio das áreas
        que morrem na sombra. Em área de sombra, embaixo de laje ou em ponto de circulação intensa, a{" "}
        <Link href="/blog/grama-sintetica-ou-natural">grama natural simplesmente não pega</Link> — e aí o
        investimento na sintética se paga ainda mais rápido.
      </p>

      <div className="pg-inline-cta">
        <b>Peça o valor exato</b>
        <p>
          A Primegramas faz visita técnica antes de fechar a proposta — sem custo e sem compromisso. Envie a
          metragem pelo <a href="https://wa.me/5511932245642?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento">WhatsApp</a> ou{" "}
          <Link href="/contato">peça um orçamento</Link> e receba a faixa de preço no mesmo dia.
        </p>
      </div>
    </BlogLayout>
  );
}
