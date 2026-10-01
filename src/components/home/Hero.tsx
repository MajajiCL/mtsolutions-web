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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Radial glow background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-xs font-semibold text-slate-200">
              Pioneros en IoT Industrial & Software OEE desde 2009
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-cyan-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> +150 Plantas Conectadas
            </span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Monitoreo de producción en tiempo real para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
              plantas más eficientes y rentables
            </span>
          </h1>

          {/* Subtitle Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            En <strong>MT Solutions</strong> recolectamos datos directamente del piso de planta,
            calculando el <strong>OEE</strong> al instante, detectando tiempos muertos ocultos,
            digitalizando el pesaje y ahorrando hasta un <strong>35% en energía</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Agendar Demostración en Vivo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#calculadora"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              <span>Calcular ROI de Planta</span>
            </a>
          </div>

          {/* Trust bullet features */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Instalación no invasiva en horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Integración con SAP, Oracle y PLCs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Retorno de inversión en &lt; 6 meses</span>
            </div>
          </div>
        </div>

        {/* Live Simulator Showcase */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-3">
            <span className="text-[11px] uppercase tracking-widest font-mono text-slate-500 flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Telemetría interactiva de piso de planta
            </span>
          </div>
          <LiveDashboardSimulator />
        </div>
      </div>
    </section>
  );
}
