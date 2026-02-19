import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WORKON | Indumentaria Corporativa para Empresas en Argentina",
  description:
    "Ropa corporativa personalizada para empresas. Polos, camisas, buzos y más con el logo de tu empresa. Envíos a todo Argentina.",
  openGraph: {
    title: "WORKON | Indumentaria Corporativa para Empresas en Argentina",
    description:
      "Ropa corporativa personalizada para empresas. Polos, camisas, buzos y más con el logo de tu empresa. Envíos a todo Argentina.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
