import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
const sans = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Leonardo Dariva — UI/UX Designer & Front-end Developer",
  description: "Portfólio profissional de Leonardo Dariva.",
  other: { "codex-preview": "development" },
};
const themeInitializer = `try{var t=localStorage.getItem("theme"),l=localStorage.getItem("portfolio-locale");document.documentElement.dataset.theme=t==="light"?"light":"dark";document.documentElement.lang=l==="en"?"en":"pt-BR"}catch(e){document.documentElement.dataset.theme="dark"}`;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeInitializer }} /></head><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>; }
