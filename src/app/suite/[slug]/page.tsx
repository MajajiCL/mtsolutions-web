import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Activity,
  Scale,
  Zap,
  Workflow,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  BarChart2,
  Server,
  Quote,
  ChevronRight,
} from "lucide-react";
import { PRODUCTS, PRODUCT_LIST } from "@/data/products";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  getSoftwareAppSchema,
  getBreadcrumbSchema,
  SITE_URL,
} from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_LIST.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `/suite/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | MT Solutions`,
      description: product.metaDescription,
      url: `${SITE_URL}/suite/${product.slug}`,
      type: "article",
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Suite", url: "/suite" },
    { name: product.name, url: `/suite/${product.slug}` },
  ]);

  const softwareSchema = getSoftwareAppSchema({
    name: product.name,
    description: product.metaDescription,
    url: `${SITE_URL}/suite/${product.slug}`,
    applicationCategory: "BusinessApplication",
  });

  const icons: Record<string, React.ReactNode> = {
    mtcontrol: <Activity className="w-10 h-10 text-blue-600" />,
    mtweight: <Scale className="w-10 h-10 text-amber-600" />,
    mtenergy: <Zap className="w-10 h-10 text-emerald-600" />,
    mtflow: <Workflow className="w-10 h-10 text-purple-600" />,
  };

  return (
    <div className="pt-28 pb-24 bg-[#f8fafc] min-h-screen">
      <JsonLd data={[breadcrumbs, softwareSchema]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/suite" className="hover:text-blue-600 transition-colors">
            Suite
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-blue-600 font-bold">{product.name}</span>
        </nav>

        {/* Product Hero */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {product.badge}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Módulo Cloud & Edge IoT
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                {product.name}
              </h1>
              <p className="text-xl font-bold text-blue-700">
                {product.tagline}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {product.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contacto"
                  className="px-7 py-3.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex items-center gap-2"
                >
                  <span>{product.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#calculadora"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-all"
                >
                  Calcular Ahorro
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              <div className="p-8 rounded-2xl bg-slate-50 border-2 border-blue-500 shadow-sm text-center">
                <div className="p-4 w-20 h-20 mx-auto rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-4">
                  {icons[product.id]}
                </div>
                <div className="text-4xl sm:text-5xl font-black font-mono text-slate-900">
                  {product.heroStat.value}
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-2">
                  {product.heroStat.label}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Solved */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Desafíos operativos que resuelve {product.name}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Elimina los obstáculos que frenan la productividad de tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.challengesSolved.map((c, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-lg bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-sm font-black shrink-0 mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features & Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Features (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-black text-slate-950 mb-4">
              Funcionalidades Clave
            </h2>
            <div className="space-y-4">
              {product.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
                >
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>{feat.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-7.5 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs & KPIs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* KPIs Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-2">
                <BarChart2 className="w-4 h-4" />
                <span>KPIs e Indicadores Medidos</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {product.kpisMeasured.map((kpi, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                <Server className="w-4 h-4 text-amber-600" />
                <span>Especificaciones Técnicas</span>
              </h3>
              <div className="space-y-4">
                {product.technicalSpecs.map((spec, idx) => (
                  <div key={idx}>
                    <div className="text-xs font-bold text-slate-900 mb-1.5">
                      {spec.category}
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {spec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Quote */}
        {product.clientQuote && (
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm mb-16">
            <Quote className="w-8 h-8 text-blue-200 mb-3" />
            <p className="text-slate-800 text-base sm:text-lg italic leading-relaxed">
              “{product.clientQuote.quote}”
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
              <div>
                <div className="font-bold text-slate-900 text-sm">
                  {product.clientQuote.author}
                </div>
                <div className="text-xs text-slate-500">
                  {product.clientQuote.role} —{" "}
                  <strong className="text-blue-700">
                    {product.clientQuote.company}
                  </strong>
                </div>
              </div>
              <Link
                href="/contacto"
                className="text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Solicitar demo →
              </Link>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-3xl bg-slate-900 text-white">
          <h2 className="text-2xl sm:text-3xl font-black">
            Comienza a monitorear con {product.name} hoy mismo
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
            Instalación en menos de 10 días. Conectamos tus primeras máquinas con soporte completo de nuestros ingenieros.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contacto"
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-sky-400 text-slate-950 hover:bg-sky-300 shadow-lg"
            >
              Agendar Demostración de {product.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
