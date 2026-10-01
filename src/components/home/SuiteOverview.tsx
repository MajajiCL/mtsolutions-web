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
    mtcontrol: <Activity className="w-6 h-6" />,
    mtweight: <Scale className="w-6 h-6" />,
    mtenergy: <Zap className="w-6 h-6" />,
    mtflow: <Workflow className="w-6 h-6" />,
  };

  return (
    <section className="py-24 bg-[#080d16] relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Nuestra Suite Modular</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Una solución integral para cada necesidad de planta
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Nuestros cuatro módulos se implementan de forma independiente o interconectada,
            adaptándose a la infraestructura existente de tu fábrica.
          </p>
        </div>

        {/* Product Module Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {Object.values(PRODUCTS).map((p) => {
            const isSelected = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all relative border flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-950/40 translate-y-[-2px]"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isSelected
                        ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400"
                        : "bg-slate-800 border-slate-700 text-slate-400"
                    }`}
                  >
                    {icons[p.id]}
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                      isSelected
                        ? "bg-cyan-950 text-cyan-300 border-cyan-500/40"
                        : "bg-slate-900 text-slate-500 border-slate-800"
                    }`}
                  >
                    {p.badge.split("&")[0]}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{p.name}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {p.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Card */}
        <div className="rounded-3xl glass-card border border-slate-700 p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                  {activeProduct.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Sincronización Cloud 24/7
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeProduct.name}: {activeProduct.tagline}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                  {activeProduct.fullDescription}
                </p>
              </div>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeProduct.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800"
                  >
                    <div className="font-semibold text-white text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 pl-6">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href={`/suite/${activeProduct.slug}`}
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:from-cyan-300 hover:to-teal-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 group"
                >
                  <span>Explorar detalles de {activeProduct.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contacto"
                  className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 border border-slate-700 hover:text-white hover:bg-slate-800 transition-all"
                >
                  Solicitar Cotización
                </Link>
              </div>
            </div>

            {/* Right Metric & Client Proof (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Stat Highlight Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0d162a] border border-cyan-500/30 relative">
                <div className="text-xs font-mono text-cyan-400 uppercase">
                  Impacto Cuantificado
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white font-mono mt-2">
                  {activeProduct.heroStat.value}
                </div>
                <div className="text-sm font-medium text-slate-300 mt-1">
                  {activeProduct.heroStat.label}
                </div>
              </div>

              {/* Real Client Quote */}
              {activeProduct.clientQuote && (
                <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-300 italic text-sm leading-relaxed mb-4">
                    “{activeProduct.clientQuote.quote}”
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <div>
                      <div className="font-bold text-white text-xs">
                        {activeProduct.clientQuote.author}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {activeProduct.clientQuote.role}
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/20">
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
