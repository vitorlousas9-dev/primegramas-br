import { Figtree, Montserrat, Saira_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const sairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-saira-condensed",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Primegramas — Grama Sintética para Jardins e Desportos",
    template: "%s — Primegramas",
  },
  description:
    "Fornecimento e instalação de grama sintética há 16 anos. Soluções para jardins, condomínios, escolas, clubes e campos esportivos, no Brasil e em Portugal.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${figtree.variable} ${montserrat.variable} ${sairaCondensed.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
