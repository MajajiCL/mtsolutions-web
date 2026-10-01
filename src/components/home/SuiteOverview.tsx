"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Scale,
  Zap,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { PRODUCTS, ProductModule } from "@/data/products";

export function SuiteOverview() {
  const [activeId, setActiveId] = useState<string>("mtcontrol");
  const activeProduct: ProductModule = PRODUCTS[activeId] || PRODUCTS.mtcontrol;

  const icons: Record<string, React.ReactNode> = {
    mtcontrol: <Activity className="w-6 h-6 text-blue-600" />,
    mtweight: <Scale className="w-6 h-6 text-amber-600" />,
    mtenergy: <Zap className="w-6 h-6 text-emerald-600" />,
    mtflow: <Workflow className="w-6 h-6 text-purple-600" />,
  };

  return (
    <section className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Nuestra Suite Modular</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Una solución para cada necesidad de planta
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Cuatro módulos especializados que se implementan de forma independiente o interconectada,
            adaptándose a la infraestructura existente de tu fábrica.
          </p>
        </div>

        {/* Product Module Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {Object.values(PRODUCTS).map((p) => {
            const isSelected = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`p-5 rounded-2xl text-left transition-all relative border flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-blue-600 shadow-lg shadow-blue-500/10 ring-2 ring-blue-600/20 translate-y-[-2px]"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isSelected
                        ? "bg-blue-50 border-blue-200"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    {icons[p.id]}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-slate-200 text-slate-600 border-slate-300"
                    }`}
                  >
                    {p.badge.split("&")[0]}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {p.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                  {activeProduct.badge}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Sincronización Cloud 24/7
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                  {activeProduct.name}: {activeProduct.tagline}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  {activeProduct.fullDescription}
                </p>
              </div>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeProduct.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 pl-6">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href={`/suite/${activeProduct.slug}`}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center gap-2 shadow-md shadow-blue-500/20 group"
                >
                  <span>Ver detalles de {activeProduct.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contacto"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-all"
                >
                  Solicitar Cotización
                </Link>
              </div>
            </div>

            {/* Right Metric & Client Proof (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Stat Highlight Card */}
              <div className="p-8 rounded-2xl bg-white border-2 border-blue-500 shadow-sm">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Impacto Cuantificado
                </div>
                <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono mt-2">
                  {activeProduct.heroStat.value}
                </div>
                <div className="text-sm font-semibold text-slate-600 mt-1">
                  {activeProduct.heroStat.label}
                </div>
              </div>

              {/* Real Client Quote */}
              {activeProduct.clientQuote && (
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-slate-700 italic text-sm leading-relaxed mb-4">
                    “{activeProduct.clientQuote.quote}”
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <div className="font-bold text-slate-900 text-xs">
                        {activeProduct.clientQuote.author}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {activeProduct.clientQuote.role}
                      </div>
                    </div>
                    <div className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                      {activeProduct.clientQuote.company}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
