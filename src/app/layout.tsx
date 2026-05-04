import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Eduardo Proença | Currículo Node.js, TypeScript e Next.js",
  description:
    "Currículo interativo de Eduardo Proença, desenvolvedor Full Stack com foco em Node.js, JavaScript, TypeScript, Next.js, tRPC, Prisma e PostgreSQL.",
  keywords: [
    "Eduardo Proença",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "tRPC",
    "Prisma",
    "PostgreSQL",
    "Vercel",
  ],
  authors: [{ name: "Eduardo Proença" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
