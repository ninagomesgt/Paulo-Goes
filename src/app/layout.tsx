import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Paulo Goes Concept Hair — Cortes e Mechas | Rio de Janeiro",
    template: "%s | Paulo Goes Concept Hair",
  },
  description:
    "Cortes e mechas que valorizam sua beleza sem perder a naturalidade. Paulo Goes Concept Hair — Norte Shopping, Rio de Janeiro.",
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {props.children}
      </body>
    </html>
  );
}