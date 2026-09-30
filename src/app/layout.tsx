import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { PRICE } from "@/comercial";

/** URL pública definitiva da página (deploy Vercel do repo quebrandociclopagina). */
const SITE_URL = "https://quebrandociclopagina.vercel.app";

/** Preço em formato numérico para dados estruturados (49.90), derivado de PRICE. */
const PRICE_SCHEMA = PRICE.replace("R$ ", "").replace(",", ".");

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
  metadataBase: new URL(SITE_URL),
  title: "Método Quebrando o Ciclo | 14 Aulas e Aplicativo",
  description:
    "Entenda seus hábitos e aprenda a continuar com 14 aulas, aplicativo interativo e materiais práticos. Acesso por R$49,90 em pagamento único.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Método Quebrando o Ciclo | 14 Aulas e Aplicativo",
    description:
      "Entenda seus hábitos e aprenda a continuar com 14 aulas, aplicativo interativo e materiais práticos. Acesso por R$49,90 em pagamento único.",
    url: SITE_URL,
    siteName: "Método Quebrando o Ciclo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/hero-natalia-rosa-desktop-1920x1080.webp",
        width: 1920,
        height: 1080,
        alt: "Natália Cavalcante, nutricionista criadora do Método Quebrando o Ciclo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Método Quebrando o Ciclo | 14 Aulas e Aplicativo",
    description:
      "Entenda seus hábitos e aprenda a continuar com 14 aulas, aplicativo interativo e materiais práticos. Acesso por R$49,90 em pagamento único.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07120d",
};

/** Dados estruturados: um único Product + Offer, sem dados não confirmados. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Método Quebrando o Ciclo",
  description:
    "Programa digital de educação alimentar com 14 aulas em dois módulos, aplicativo interativo com missões, checklist e receitas, e materiais práticos de consulta.",
  image: `${SITE_URL}/assets/app-mockup-premium.webp`,
  url: `${SITE_URL}/`,
  offers: {
    "@type": "Offer",
    price: PRICE_SCHEMA,
    priceCurrency: "BRL",
    url: `${SITE_URL}/`,
  },
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
          href="/assets/hero-natalia-rosa-mobile-1080x1600.webp"
          media="(max-width: 700px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/hero-natalia-rosa-desktop-1920x1080.webp"
          media="(min-width: 701px)"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
