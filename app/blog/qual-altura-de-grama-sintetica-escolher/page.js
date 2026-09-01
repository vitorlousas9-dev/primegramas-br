import Link from "next/link";
import BlogLayout from "@/components/BlogLayout";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";

const post = getPostBySlug("qual-altura-de-grama-sintetica-escolher");

export const metadata = {
  alternates: { canonical: "/blog/qual-altura-de-grama-sintetica-escolher" },
  title: post.title,
  description:
    "Entenda o que muda entre 12mm, 20mm, 30mm e 50mm, qual altura usar em cada ambiente e o que olhar além do milímetro na hora de escolher.",
};

const FAQS = [
  {
    q: "Qual altura de grama sintética é melhor para jardim?",
    a: "Entre 25mm e 30mm. Essa faixa entrega mais conforto ao toque e aparência mais próxima da grama natural, ideal para áreas de contemplação e paisagismo.",
  },
  {
    q: "12mm ou 20mm: qual escolher?",
    a: "12mm é mais firme e indicado para circulação intensa, vitrines e bordas de piscina. 20mm equilibra conforto e resistência, sendo a escolha mais comum para playgrounds, condomínios e quintais de uso diário.",
  },
  {
    q: "Posso usar grama esportiva de 50mm no jardim de casa?",
    a: "Não é recomendado. A altura de 40 a 50mm é pensada para amortecer impacto esportivo e o resultado visual em jardim residencial lembra um campo, não um gramado decorativo.",
  },
  {
    q: "O que importa mais que a altura na hora de escolher?",
    a: "O material do fio. Polietileno virgem com tratamento U.V. dura muito mais e mantém a cor, independentemente da altura escolhida. Fio reciclado ou sem proteção solar desbota e endurece cedo, mesmo em um modelo alto.",
  },
];

export default function Page() {
  return (
    <BlogLayout post={post} faqs={FAQS} related={getRelatedPosts(post.slug)}>
      <p className="pg-lede">
        O milímetro indica a altura do fio. Como regra prática: <strong>12mm a 20mm</strong> para áreas de
        circulação, playground e borda de piscina; <strong>25mm a 30mm</strong> para jardim, onde se quer conforto
        e aparência; <strong>40mm a 50mm</strong> apenas para uso esportivo.
      </p>

      <h2>O que a altura realmente muda</h2>
      <p>
        Fio mais alto é mais macio ao toque e mais parecido com grama natural. Fio mais baixo é mais firme, aguenta
        melhor pisoteio constante e é mais fácil de limpar. Não existe altura "melhor" — existe altura adequada ao
        uso. O erro clássico é escolher pela foto e não pela função.
      </p>

      <div className="pg-scroller">
        <table>
          <thead>
            <tr>
              <th>Altura</th>
              <th>Sensação</th>
              <th>Onde funciona bem</th>
              <th>Onde evitar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>12mm</strong>
              </td>
              <td>Firme, baixa</td>
              <td>Vitrine, corredor, área comercial, circulação intensa, borda de piscina</td>
              <td>Jardim onde se quer sentar ou deitar</td>
            </tr>
            <tr>
              <td>
                <strong>20mm</strong>
              </td>
              <td>Equilibrada</td>
              <td>Playground, condomínio, área de lazer, pet, quintal de uso diário</td>
              <td>Campo esportivo</td>
            </tr>
            <tr>
              <td>
                <strong>30mm</strong>
              </td>
              <td>Macia, densa</td>
              <td>Jardim residencial, paisagismo, varanda, área de contemplação</td>
              <td>Passagem de alto tráfego — o fio deita com o tempo</td>
            </tr>
            <tr>
              <td>
                <strong>40–50mm</strong>
              </td>
              <td>Alta, esportiva</td>
              <td>Campo society, futebol, quadras</td>
              <td>Jardim — o resultado parece um campo dentro de casa</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Além do milímetro: o que separa uma grama boa de uma ruim</h2>

      <h3>O material do fio</h3>
      <p>
        O ponto mais importante e o menos divulgado. Fio de <strong>polietileno virgem</strong> é macio, resistente
        e mantém a cor. Fio de material reciclado custa menos e entrega menos: endurece, desbota e quebra antes.
        Vale perguntar isso diretamente ao fornecedor — a resposta separa o mercado em dois.
      </p>

      <h3>Proteção contra raios U.V.</h3>
      <p>
        O sol de São Paulo castiga. Sem tratamento anti-U.V., o verde vira um tom acinzentado em poucas estações.
        Com tratamento, a cor se mantém ao longo de{" "}
        <Link href="/blog/quanto-tempo-dura-grama-sintetica">toda a vida útil do produto</Link>.
      </p>

      <h3>A densidade (dtex)</h3>
      <p>
        Duas gramas de mesma altura podem ter quantidades muito diferentes de fio por metro. Quanto mais densa,
        mais cheia e realista fica — e mais ela resiste ao pisoteio sem deitar. Uma grama de 30mm pouco densa
        parece rala e decepciona.
      </p>

      <h3>A base do produto</h3>
      <p>
        Por baixo, a manta de polipropileno com camadas de látex é o que segura os fios no lugar. Base bem feita
        não solta fio quando a grama é escovada ou aspirada. É o item que define se o gramado vai "descabelar" com
        o uso.
      </p>

      <h3>Monocolor ou bicolor</h3>
      <p>
        Fio bicolor mistura verde com tons de palha e reproduz a variação de um{" "}
        <Link href="/blog/grama-sintetica-ou-natural">gramado real</Link>. Monocolor tem verde uniforme — o que,
        dependendo do tom, entrega na hora que a grama é artificial. Para jardim residencial, bicolor faz diferença
        visível.
      </p>

      <div className="pg-callout">
        <b>Três erros que aparecem toda semana</b>
        <p>
          <strong>1.</strong> Usar 12mm em jardim para economizar — fica com aparência de carpete.{" "}
          <strong>2.</strong> Usar 30mm em corredor de passagem — o fio deita e nunca mais levanta no caminho
          pisado. <strong>3.</strong> Comprar grama esportiva de 50mm para o quintal achando que "mais alto é
          melhor" — o resultado é um mini-campo, não um jardim.
        </p>
      </div>

      <h2>Um roteiro rápido de decisão</h2>
      <ol>
        <li>
          <strong>Como o espaço será usado?</strong> Passagem, permanência ou esporte.
        </li>
        <li>
          <strong>Quanta gente pisa por dia?</strong> Tráfego alto pede fio mais baixo e denso.
        </li>
        <li>
          <strong>Vai receber sol direto?</strong> Se sim, tratamento U.V. é inegociável.
        </li>
        <li>
          <strong>Alguém vai sentar ou deitar ali?</strong> Se sim, suba para 25–30mm.
        </li>
        <li>
          <strong>Tem criança ou pet?</strong> Priorize facilidade de limpeza e drenagem.
        </li>
      </ol>
      <p>
        A Primegramas trabalha com modelos de 12mm a 50mm, com fio 100% polietileno virgem, base de polipropileno
        com camadas de látex e tratamento contra desbotamento — divididos entre a{" "}
        <Link href="/produtos/decorativa">linha decorativa</Link> e a{" "}
        <Link href="/produtos/esportiva">linha esportiva</Link>.
      </p>

      <div className="pg-inline-cta">
        <b>Ainda em dúvida entre dois modelos?</b>
        <p>
          Conte onde a grama vai ser instalada e nós indicamos a altura certa — e mandamos amostra para você sentir
          o fio antes de decidir. Fale pelo{" "}
          <a href="https://wa.me/551141124329?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento">
            WhatsApp
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
