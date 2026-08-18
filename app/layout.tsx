import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
const sans = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Leonardo Dariva | UI/UX Designer & Front-end Developer",
  description: "Portfólio de Leonardo Dariva, UI/UX Designer e Front-end Developer. Interfaces digitais claras, funcionais e pensadas para pessoas.",
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    title: "Leonardo Dariva | UI/UX Designer & Front-end Developer",
    description: "Portfólio de Leonardo Dariva, UI/UX Designer e Front-end Developer. Interfaces digitais claras, funcionais e pensadas para pessoas.",
    images: ["/social-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Dariva | UI/UX Designer & Front-end Developer",
    description: "Portfólio de Leonardo Dariva, UI/UX Designer e Front-end Developer. Interfaces digitais claras, funcionais e pensadas para pessoas.",
    images: ["/social-preview.png"],
  },
  other: { "codex-preview": "development" },
};
// Após o primeiro deploy, adicionar canonical e og:url com a URL pública definitiva
// e, se necessário, substituir as imagens relativas acima por URLs absolutas.
const themeInitializer = `try{var t=localStorage.getItem("theme"),l=localStorage.getItem("portfolio-locale");document.documentElement.dataset.theme=t==="light"?"light":"dark";document.documentElement.lang=l==="en"?"en":"pt-BR"}catch(e){document.documentElement.dataset.theme="dark"}`;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" suppressHydrationWarning><head><meta name="theme-color" content="#111111" /><script dangerouslySetInnerHTML={{ __html: themeInitializer }} /></head><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>; }
