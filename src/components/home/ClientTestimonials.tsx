import React from "react";
import Link from "next/link";
import {
  Quote,
  Building2,
  ArrowRight,
} from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";

export function ClientTestimonials() {
  return (
    <section className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Casos de Éxito Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Empresas que transformaron su piso de planta
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Líderes de la industria vitivinícola, farmacéutica, dispositivos médicos y manufactura
            que confían en el software OEE de MT Solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Client & Flag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{study.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {study.client}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium">
                        {study.industry} • {study.country}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {study.modulesUsed.map((m, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-blue-700 border border-slate-200 shadow-sm"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative my-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <Quote className="w-6 h-6 text-blue-200 absolute top-3 right-3" />
                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    “{study.quote}”
                  </p>
                  <div className="mt-3 text-xs">
                    <span className="font-bold text-slate-900">{study.leader}</span>
                    <span className="text-slate-500"> — {study.role}</span>
                  </div>
                </div>

                {/* Challenge vs Solution */}
                <div className="space-y-2 text-xs text-slate-600 mt-4">
                  <div>
                    <strong className="text-slate-900">Desafío: </strong>
                    {study.challenge}
                  </div>
                  <div>
                    <strong className="text-blue-600">Solución: </strong>
                    {study.solution}
                  </div>
                </div>
              </div>

              {/* Metric Badges */}
              <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-3 gap-2">
                {study.results.map((res, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                    <div className="text-lg font-black font-mono text-blue-600">
                      {res.metric}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 line-clamp-1 mt-0.5">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Ver más casos de estudio y testimonios en nuestro Blog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
