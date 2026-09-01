import Link from "next/link";
import BlogLayout from "@/components/BlogLayout";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";

const post = getPostBySlug("campo-society-grama-sintetica-custo-e-medidas");

export const metadata = {
  alternates: { canonical: "/blog/campo-society-grama-sintetica-custo-e-medidas" },
  title: post.title,
  description:
    "Quanto custa montar um campo society com grama sintética, medidas mais usadas, preparo de base, drenagem e o que avaliar antes de fechar o orçamento.",
};

const FAQS = [
  {
    q: "Quanto custa um campo society com grama sintética?",
    a: "O material de grama esportiva 50mm parte de R$ 70 a R$ 80 por m², com a instalação em faixa semelhante ou maior conforme o estado do terreno. Num campo de 1.500 m² (50m × 30m), o projeto completo fica na casa das centenas de milhares de reais, incluindo base e drenagem.",
  },
  {
    q: "Qual a medida padrão de um campo society?",
    a: "Não há uma medida única obrigatória, mas 50m × 30m é o formato mais comum no Brasil. As dimensões variam entre 45m × 25m e 55m × 35m conforme o espaço disponível.",
  },
  {
    q: "40mm ou 50mm para campo society?",
    a: "50mm é o padrão mais adotado, com mais amortecimento e melhor proteção para a articulação do jogador em uso intenso. 40mm aparece em projetos com orçamento mais ajustado ou quadras de uso misto.",
  },
  {
    q: "O que mais pesa no orçamento além da grama?",
    a: "A base: terraplenagem, compactação, caimento e drenagem. É o item que decide se o campo fica jogável depois da chuva e o que mais frequentemente é subestimado em orçamentos baratos.",
  },
];

export default function Page() {
  return (
    <BlogLayout post={post} faqs={FAQS} related={getRelatedPosts(post.slug)}>
      <p className="pg-lede">
        Um campo society com grama sintética de 50mm custa, em referências de mercado de 2026, a partir de{" "}
        <strong>R$ 70 a R$ 80 por m² só de material</strong>, com a instalação em faixa semelhante ou maior
        conforme o estado do terreno. Num campo de 50m × 30m, isso coloca o projeto na casa das centenas de
        milhares de reais — e a maior variável não é a grama, é a base.
      </p>

      <h2>As medidas mais usadas</h2>
      <p>
        Não existe uma medida única obrigatória para society: as dimensões variam conforme a federação e o espaço
        disponível. No Brasil, a maioria dos campos fica entre <strong>45m × 25m e 55m × 35m</strong>, e{" "}
        <strong>50m × 30m</strong> é o formato mais comum. Antes de dimensionar, reserve também a área de recuo
        lateral e de fundo — o campo não termina na linha, ele precisa de folga para alambrado e circulação.
      </p>
      <div className="pg-scroller">
        <table>
          <thead>
            <tr>
              <th>Formato</th>
              <th>Área de jogo</th>
              <th>Perfil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>45m × 25m</td>
              <td>1.125 m²</td>
              <td>Compacto, para terreno limitado</td>
            </tr>
            <tr>
              <td>50m × 30m</td>
              <td>1.500 m²</td>
              <td>Padrão mais comum em centros de treinamento</td>
            </tr>
            <tr>
              <td>55m × 35m</td>
              <td>1.925 m²</td>
              <td>Amplo, mais próximo do futebol de campo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Onde o dinheiro realmente vai</h2>
      <p>
        Quem orça um campo pensando só no{" "}
        <Link href="/blog/quanto-custa-grama-sintetica-instalada-sao-paulo">preço do rolo de grama</Link> tem uma
        surpresa. O orçamento se divide, grosso modo, em:
      </p>
      <ul>
        <li>
          <strong>Terraplenagem e sub-base</strong> — nivelamento, compactação e definição do caimento.
        </li>
        <li>
          <strong>Drenagem</strong> — camada drenante e escoamento. Em São Paulo, com chuva concentrada de verão, é
          o que decide se o campo fica jogável.
        </li>
        <li>
          <strong>Manta geotêxtil</strong> — separa a base do material drenante e impede a mistura das camadas.
        </li>
        <li>
          <strong>Grama esportiva 50mm</strong> — o material propriamente dito.
        </li>
        <li>
          <strong>Instalação</strong> — desenrolar, alinhar, cortar, emendar e fixar.
        </li>
        <li>
          <strong>Marcação de linhas</strong> — feita em grama branca recortada e emendada, não pintada.
        </li>
        <li>
          <strong>Enchimento</strong>, quando o sistema especificado pedir.
        </li>
        <li>
          <strong>Alambrado, iluminação, traves e redes</strong> — frequentemente esquecidos na conta inicial.
        </li>
      </ul>

      <div className="pg-callout">
        <b>A base é onde os campos baratos falham</b>
        <p>
          É tentador economizar no que fica embaixo, porque ninguém vê. Só que é exatamente ali que aparecem os
          problemas: poça d'água que interdita o campo depois da chuva, ondulação que altera o rolamento da bola e
          afundamento localizado nas áreas de maior pisoteio. Refazer a base depois significa levantar toda a
          grama. Vale mais economizar em qualquer outro item do projeto.
        </p>
      </div>

      <h2>40mm ou 50mm?</h2>
      <p>
        Para society, <strong>50mm</strong> é o padrão mais adotado: entrega mais amortecimento, protege melhor a
        articulação do jogador e suporta uso intenso. <strong>40mm</strong> aparece em projetos com orçamento mais
        apertado ou em quadras de uso misto. Além da altura, verifique a densidade do fio e o tipo de fibra — uma
        grama de 50mm pouco densa desgasta rápido nas áreas de maior disputa, como as grandes áreas e o meio de
        campo. Veja mais em{" "}
        <Link href="/blog/qual-altura-de-grama-sintetica-escolher">como escolher a altura certa</Link>.
      </p>

      <h2>Manutenção de um campo é diferente de um jardim</h2>
      <p>
        Campo tem tráfego incomparavelmente maior, e a manutenção existe para manter o desempenho, não só a
        aparência:
      </p>
      <ul>
        <li>
          <strong>Escovação periódica</strong> para levantar o fio, com atenção redobrada às áreas mais disputadas.
        </li>
        <li>
          <strong>Descompactação e redistribuição do enchimento</strong>, quando o sistema utilizar.
        </li>
        <li>
          <strong>Limpeza de detritos</strong> e verificação das emendas, principalmente nas linhas.
        </li>
        <li>
          <strong>Inspeção da drenagem</strong> antes do período de chuvas.
        </li>
      </ul>

      <h2>A conta que interessa a quem aluga horário</h2>
      <p>
        Para o dono de quadra, o retorno vem de dois lugares. O primeiro é a disponibilidade: campo de grama
        natural encharcado cancela horário e devolve dinheiro; campo sintético com drenagem correta continua
        jogável logo depois da chuva. O segundo é o custo operacional que desaparece — corte, irrigação, adubação e
        recuperação de áreas gastas. Ao dimensionar o investimento, projete a receita por horário nos meses de
        chuva com e sem cancelamento. Costuma ser o número que fecha a decisão.
      </p>

      <h2>Antes de fechar o orçamento</h2>
      <ol>
        <li>O terreno já está nivelado ou precisa de terraplenagem?</li>
        <li>Como a água escoa hoje quando chove forte?</li>
        <li>A proposta detalha a base e a drenagem, ou só cita a grama?</li>
        <li>Qual a altura, a densidade e o tipo de fio especificados?</li>
        <li>A marcação de linhas está inclusa?</li>
        <li>Alambrado, iluminação e traves estão no escopo ou serão contratados à parte?</li>
        <li>Qual a garantia, por escrito, do produto e da instalação?</li>
      </ol>

      <div className="pg-inline-cta">
        <b>Receba um pré-orçamento</b>
        <p>
          A Primegramas executa{" "}
          <Link href="/produtos/esportiva/campos">campos e quadras com linha esportiva</Link> de 20mm a 50mm, com
          visita técnica para avaliar terreno e drenagem antes da proposta. Envie as medidas do seu espaço pelo{" "}
          <a href="https://wa.me/5511932245642?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento">
            WhatsApp
          </a>
          .
        </p>
      </div>
    </BlogLayout>
  );
}
