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
  Sparkles,
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
    mtcontrol: <Activity className="w-10 h-10 text-cyan-400" />,
    mtweight: <Scale className="w-10 h-10 text-amber-400" />,
    mtenergy: <Zap className="w-10 h-10 text-emerald-400" />,
    mtflow: <Workflow className="w-10 h-10 text-purple-400" />,
  };

  return (
    <div className="pt-28 pb-24 bg-[#090e17] min-h-screen">
      <JsonLd data={[breadcrumbs, softwareSchema]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <Link href="/suite" className="hover:text-cyan-400 transition-colors">
            Suite
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-cyan-400 font-semibold">{product.name}</span>
        </nav>

        {/* Product Hero */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-slate-700 shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {product.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Módulo Cloud & Edge IoT
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {product.name}
              </h1>
              <p className="text-xl font-medium text-cyan-300">
                {product.tagline}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {product.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contacto"
                  className="px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                >
                  <span>{product.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#calculadora"
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all"
                >
                  Calcular Ahorro
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 text-center">
                <div className="p-3 w-16 h-16 mx-auto rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-3">
                  {icons[product.id]}
                </div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                  {product.heroStat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {product.heroStat.label}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Solved */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Desafíos operativos que resuelve {product.name}
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Elimina los obstáculos que frenan la productividad de tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.challengesSolved.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✕
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
            <h2 className="text-2xl font-bold text-white mb-4">
              Funcionalidades Clave
            </h2>
            <div className="space-y-4">
              {product.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800"
                >
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>{feat.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs & KPIs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* KPIs Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <BarChart2 className="w-4 h-4" />
                <span>KPIs e Indicadores Medidos</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {product.kpisMeasured.map((kpi, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <Server className="w-4 h-4 text-amber-400" />
                <span>Especificaciones Técnicas</span>
              </h3>
              <div className="space-y-4">
                {product.technicalSpecs.map((spec, idx) => (
                  <div key={idx}>
                    <div className="text-xs font-bold text-slate-200 mb-1.5">
                      {spec.category}
                    </div>
                    <ul className="space-y-1 text-xs text-slate-400">
                      {spec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-cyan-400">✓</span>
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
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 mb-16">
            <Quote className="w-8 h-8 text-cyan-500/30 mb-3" />
            <p className="text-slate-200 text-base sm:text-lg italic leading-relaxed">
              “{product.clientQuote.quote}”
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
              <div>
                <div className="font-bold text-white text-sm">
                  {product.clientQuote.author}
                </div>
                <div className="text-xs text-slate-400">
                  {product.clientQuote.role} —{" "}
                  <strong className="text-cyan-400">
                    {product.clientQuote.company}
                  </strong>
                </div>
              </div>
              <Link
                href="/contacto"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Ver más testimonios →
              </Link>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0f1d35] to-slate-900 border border-cyan-500/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Comienza a monitorear con {product.name} hoy mismo
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Instalación en menos de 10 días. Conectamos tus primeras máquinas con soporte completo de nuestros ingenieros.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contacto"
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/20"
            >
              Agendar Demostración de {product.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
