import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { getOrganizationSchema, getWebSiteSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MT Solutions | Software OEE y Monitoreo de Producción en Tiempo Real",
    template: "%s | MT Solutions",
  },
  description:
    "En MT Solutions recolectamos datos del piso de planta midiendo en tiempo real el desempeño (OEE), detectando paradas, digitalizando pesaje y optimizando energía.",
  keywords: [
    "Software OEE",
    "Monitoreo de produccion en tiempo real",
    "OEE industrial",
    "IoT industrial",
    "MTcontrol",
    "MTweight",
    "MTenergy",
    "MTflow",
    "Control de paradas de planta",
    "Eficiencia de planta manufacturera",
    "Pesaje industrial digital",
    "ISO 50001 energia",
  ],
  authors: [{ name: "MT Solutions", url: SITE_URL }],
  creator: "MT Solutions",
  publisher: "MT Solutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/en",
      "pt-BR": "/br",
    },
  },
  openGraph: {
    title: "MT Solutions | Software OEE para la Mejora de Planta",
    description:
      "Recolectamos datos del piso de planta en tiempo real para hacer tu fábrica más eficiente, reducir tiempos muertos y optimizar energía.",
    url: SITE_URL,
    siteName: "MT Solutions",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/og-mtsolutions.jpg",
        width: 1200,
        height: 630,
        alt: "MT Solutions Software OEE y Monitoreo Industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MT Solutions | Software OEE para la Mejora de Planta",
    description:
      "Monitoreo de producción en tiempo real, OEE, pesaje digital y gestión energética para fábricas inteligentes.",
    images: ["/images/og-mtsolutions.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <JsonLd data={[orgSchema, webSiteSchema]} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090e17] text-slate-100 antialiased font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
