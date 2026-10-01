import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Scale,
  Zap,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { JsonLd } from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nuestra Suite de Software OEE & IoT Industrial",
  description:
    "Descubre MTcontrol, MTweight, MTenergy y MTflow. Módulos integrados para monitoreo de producción, pesaje digital, eficiencia energética y control de OT.",
  alternates: {
    canonical: "/suite",
  },
};

export default function SuiteIndexPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Suite de Productos", url: "/suite" },
  ]);

  const icons: Record<string, React.ReactNode> = {
    mtcontrol: <Activity className="w-8 h-8 text-blue-600" />,
    mtweight: <Scale className="w-8 h-8 text-amber-600" />,
    mtenergy: <Zap className="w-8 h-8 text-emerald-600" />,
    mtflow: <Workflow className="w-8 h-8 text-purple-600" />,
  };

  return (
    <div className="pt-32 pb-24 bg-[#f8fafc] min-h-screen">
      <JsonLd data={breadcrumb} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Suite Industrial Completa</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Módulos diseñados para transformar tu fábrica
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Nuestros 4 módulos especializados cubren todo el ciclo operativo:
            desde la captura de pulsos de máquina hasta el costo energético por unidad y pesaje de receta.
          </p>
        </div>

        {/* 4 Products Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(PRODUCTS).map((p) => (
            <div
              key={p.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    {icons[p.id]}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {p.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {p.name}
                </h2>
                <div className="text-sm font-semibold text-slate-500 mt-1">
                  {p.tagline}
                </div>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {p.shortDescription}
                </p>

                {/* Features highlight */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                  {p.keyFeatures.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xl font-black font-mono text-slate-900">
                    {p.heroStat.value}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {p.heroStat.label}
                  </div>
                </div>

                <Link
                  href={`/suite/${p.slug}`}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/20"
                >
                  <span>Ver {p.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
