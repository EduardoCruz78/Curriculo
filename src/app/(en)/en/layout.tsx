import type { Metadata } from "next";
import { archivo } from "../../fonts";
import { content } from "@/data/resume";
import "../../globals.css";

const t = content.en;

export const metadata: Metadata = {
  metadataBase: new URL("https://curriculo-psi-drab.vercel.app"),
  title: t.meta.title,
  description: t.meta.description,
  authors: [{ name: "Eduardo Proença" }],
  alternates: { canonical: "/en", languages: { "pt-BR": "/", en: "/en" } },
  openGraph: { title: t.meta.title, description: t.meta.description, locale: "en_US", type: "profile" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
