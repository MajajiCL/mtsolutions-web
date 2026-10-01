import React from "react";
import Link from "next/link";
import {
  Quote,
  Star,
  CheckCircle2,
  Building2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";

export function ClientTestimonials() {
  return (
    <section className="py-24 bg-[#080d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Casos de Éxito Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Empresas que transformaron su piso de planta
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Líderes de la industria vitivinícola, farmacéutica, dispositivos médicos y agroquímica
            que confían en el software OEE de MT Solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="p-8 rounded-3xl glass-card border border-slate-700/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header Client & Flag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{study.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {study.client}
                      </h3>
                      <span className="text-xs text-slate-400">
                        {study.industry} • {study.country}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {study.modulesUsed.map((m, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative my-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <Quote className="w-6 h-6 text-cyan-500/30 absolute top-2 right-2" />
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    “{study.quote}”
                  </p>
                  <div className="mt-3 text-xs">
                    <span className="font-bold text-white">{study.leader}</span>
                    <span className="text-slate-400"> — {study.role}</span>
                  </div>
                </div>

                {/* Challenge vs Solution brief */}
                <div className="space-y-2 text-xs text-slate-400 mt-4">
                  <div>
                    <strong className="text-slate-300">Desafío: </strong>
                    {study.challenge}
                  </div>
                  <div>
                    <strong className="text-cyan-400">Solución: </strong>
                    {study.solution}
                  </div>
                </div>
              </div>

              {/* Metric Badges */}
              <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-3 gap-2">
                {study.results.map((res, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-center">
                    <div className="text-base sm:text-lg font-black font-mono text-cyan-400">
                      {res.metric}
                    </div>
                    <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to read full blog cases */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Ver más historias de éxito y artículos técnicos en nuestro Blog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
