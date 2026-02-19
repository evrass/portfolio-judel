import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Judel Sita Moussounda | Ingénieur Logiciel Full-Stack & DevOps",
  description: "Portfolio de Judel Vianey SITA MOUSSOUNDA - Ingénieur logiciel spécialisé en développement full-stack, architecture cloud et DevOps/DevSecOps. +3 ans d'expérience.",
  keywords: ["Ingénieur Logiciel", "Full-Stack", "DevOps", "Cloud", "AWS", "React", "Node.js", "Kubernetes"],
  authors: [{ name: "Judel Sita Moussounda" }],
  openGraph: {
    title: "Judel Sita Moussounda | Portfolio",
    description: "Ingénieur Full-Stack & DevOps spécialisé en architectures cloud scalables",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-dark text-white antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}