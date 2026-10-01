"use client";

import React from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  BarChart3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { LiveDashboardSimulator } from "./LiveDashboardSimulator";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-gradient bg-subtle-grid border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
            </span>
            <span className="text-xs font-bold text-slate-800">
              Pioneros en Software OEE & IoT Industrial desde 2009
            </span>
            <span className="hidden sm:inline-block text-slate-300">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-blue-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> +150 Plantas Conectadas
            </span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Monitoreo de producción en tiempo real para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-600">
              ser más eficientes y rentables
            </span>
          </h1>

          {/* Subtitle Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            En <strong>MT Solutions</strong> recolectamos datos directamente del piso de planta,
            midiendo el desempeño <strong>OEE al instante</strong>, eliminando tiempos muertos,
            digitalizando el pesaje y ahorrando hasta un <strong>35% en energía</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Agendar Demostración en Vivo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#calculadora"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-base text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <span>Calcular Ahorro de Planta</span>
            </a>
          </div>

          {/* Trust features */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Instalación no invasiva en horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Integración con SAP, Oracle y PLCs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Retorno de inversión en &lt; 6 meses</span>
            </div>
          </div>
        </div>

        {/* Live Simulator Showcase */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-3">
            <span className="text-[11px] uppercase tracking-widest font-bold text-slate-500 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Simulador interactivo de telemetría en tiempo real
            </span>
          </div>
          <LiveDashboardSimulator />
        </div>
      </div>
    </section>
  );
}
