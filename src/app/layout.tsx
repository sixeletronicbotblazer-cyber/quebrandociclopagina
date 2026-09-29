import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quebrandoociclo.com.br"),
  title: "Método Quebrando o Ciclo | R$ 49,90",
  description:
    "Método Quebrando o Ciclo: 14 aulas, aplicativo e materiais práticos para construir hábitos alimentares com mais consciência e constância. Acesso por R$ 49,90.",
  openGraph: {
    title: "Método Quebrando o Ciclo",
    description:
      "14 aulas, aplicativo e ferramentas para sair do ciclo do recomeço. Acesso por R$ 49,90.",
    type: "website",
    images: ["/assets/expert-hero.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07120d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        {/* LCP: pré-carrega a imagem de fundo do hero (uma por breakpoint) */}
        <link
          rel="preload"
          as="image"
          href="/assets/hero-mobile-natalia.webp"
          media="(max-width: 700px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/expert-hero.webp"
          media="(min-width: 701px)"
          fetchPriority="high"
        />
        {children}
      </body>
    </html>
  );
}
