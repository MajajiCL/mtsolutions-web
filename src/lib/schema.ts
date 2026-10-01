export const SITE_URL = "https://mtsolutions.io";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "MT Solutions",
    alternateName: "MT Solutions Software OEE & IoT Industrial",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo-mtsolutions.png`,
      caption: "MT Solutions - Software OEE y Monitoreo de Producción",
    },
    description:
      "Líder en Software OEE, monitoreo de producción en tiempo real, control de pesaje, eficiencia energética y digitalización de procesos industriales para manufactura.",
    foundingDate: "2009",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+56 9 8806 5917",
        contactType: "sales",
        areaServed: "CL",
        availableLanguage: ["Spanish", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+57 310 2206133",
        contactType: "sales",
        areaServed: "CO",
        availableLanguage: ["Spanish", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+55 27 99929 7926",
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["Portuguese", "Spanish", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+52 1 348 151 5394",
        contactType: "sales",
        areaServed: "MX",
        availableLanguage: ["Spanish", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+51 986 366 255",
        contactType: "sales",
        areaServed: "PE",
        availableLanguage: ["Spanish", "English"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/mtsolutions-io/",
      "https://www.youtube.com/@mtsolutions",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "MT Solutions",
    description: "Software OEE para la mejora de planta y monitoreo en tiempo real",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "es-ES",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getSoftwareAppSchema(product: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    url: product.url,
    applicationCategory: product.applicationCategory || "BusinessApplication",
    operatingSystem: product.operatingSystem || "Cloud, Web-based, IoT Edge",
    author: {
      "@id": `${SITE_URL}/#organization`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Demostración gratuita y cotización personalizada por planta/máquina",
    },
    featureList: [
      "Monitoreo OEE en tiempo real",
      "Detección automática de paradas y tiempos muertos",
      "Gráficos de Pareto de detenciones",
      "Alarmas tempranas multidispositivo",
      "Integración con SAP, Oracle, Power BI y PLCs",
    ],
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "es",
    author: {
      "@type": "Organization",
      name: article.authorName || "MT Solutions",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    image: article.imageUrl || `${SITE_URL}/images/og-default.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}
