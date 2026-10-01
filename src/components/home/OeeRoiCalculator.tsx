"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function OeeRoiCalculator() {
  const [machines, setMachines] = useState(4);
  const [shiftsPerDay, setShiftsPerDay] = useState(2); // 8h or 16h
  const [costPerHour, setCostPerHour] = useState(350); // USD / hr
  const [currentOee, setCurrentOee] = useState(58); // %

  // Calculations
  const hoursPerDay = shiftsPerDay * 8;
  const daysPerYear = 300;
  const totalPlannedHoursYear = machines * hoursPerDay * daysPerYear;

  // Unproductive hours due to current low OEE
  const unproductiveHoursYear = totalPlannedHoursYear * ((100 - currentOee) / 100);
  const totalAnnualLoss = unproductiveHoursYear * costPerHour;

  // Realistic projected improvement with MTcontrol (+12% OEE)
  const projectedOee = Math.min(88, currentOee + 12);
  const recoveredHoursYear = totalPlannedHoursYear * ((projectedOee - currentOee) / 100);
  const annualRecoveredProfit = recoveredHoursYear * costPerHour;

  // Estimated ROI in months (assuming approx SaaS investment)
  const estimatedAnnualCost = machines * 4500; // rough SaaS ballpark
  const roiMonths = +((estimatedAnnualCost / annualRecoveredProfit) * 12).toFixed(1);

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora Interactiva de ROI & OEE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ¿Cuánto dinero está perdiendo tu planta en tiempos muertos no registrados?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Ajusta los parámetros de tu fábrica para calcular el costo real de las detenciones
            y la rentabilidad que puedes recuperar implementando la suite de MT Solutions.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80">
            {/* Control 1: Machines */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-200">
                  Líneas o Máquinas Críticas en Planta:
                </label>
                <span className="text-base font-bold font-mono text-cyan-400 bg-cyan-950/60 px-3 py-0.5 rounded border border-cyan-500/30">
                  {machines} {machines === 1 ? "máquina" : "máquinas"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={machines}
                onChange={(e) => setMachines(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 línea</span>
                <span>15 líneas</span>
                <span>30 líneas</span>
              </div>
            </div>

            {/* Control 2: Shifts / Operation */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-200">
                  Turnos de Operación Diaria:
                </label>
                <span className="text-base font-bold font-mono text-cyan-400 bg-cyan-950/60 px-3 py-0.5 rounded border border-cyan-500/30">
                  {shiftsPerDay} {shiftsPerDay === 1 ? "turno (8h/día)" : shiftsPerDay === 2 ? "turnos (16h/día)" : "turnos 24/7 (24h/día)"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="3"
                value={shiftsPerDay}
                onChange={(e) => setShiftsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 Turno (8h)</span>
                <span>2 Turnos (16h)</span>
                <span>3 Turnos Continuo (24h)</span>
              </div>
            </div>

            {/* Control 3: Cost per hour */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-200">
                  Costo Estimado de Parada de Línea (USD/hora):
                </label>
                <span className="text-base font-bold font-mono text-amber-400 bg-amber-950/60 px-3 py-0.5 rounded border border-amber-500/30">
                  ${costPerHour} USD/h
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={costPerHour}
                onChange={(e) => setCostPerHour(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>$50/h (Media)</span>
                <span>$500/h (Pesada)</span>
                <span>$2,000/h (Crítica)</span>
              </div>
            </div>

            {/* Control 4: Estimated Current OEE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-200">
                  OEE Estimado Actual en Planta (%):
                </label>
                <span className="text-base font-bold font-mono text-purple-400 bg-purple-950/60 px-3 py-0.5 rounded border border-purple-500/30">
                  {currentOee}%
                </span>
              </div>
              <input
                type="range"
                min="35"
                max="80"
                value={currentOee}
                onChange={(e) => setCurrentOee(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>35% (Sin control)</span>
                <span>55% (Promedio Latam)</span>
                <span>80% (Optimizado)</span>
              </div>
            </div>
          </div>

          {/* Results Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0c1427] p-6 sm:p-8 rounded-2xl border-2 border-cyan-500/40 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Resultados de Diagnóstico Proyectado</span>
              </div>
              <h3 className="text-lg font-bold text-white">Impacto Económico Estimado</h3>

              {/* Loss Metric */}
              <div className="mt-5 p-3.5 rounded-xl bg-red-950/30 border border-red-500/30">
                <div className="flex items-center justify-between text-xs text-red-300 mb-1">
                  <span>Pérdida Anual Actual por Ineficiencias:</span>
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                </div>
                <div className="text-2xl font-mono font-extrabold text-red-400">
                  {formatCurrency(totalAnnualLoss, "USD")} / año
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Equivalente a {formatNumber(Math.round(unproductiveHoursYear))} horas improductivas.
                </div>
              </div>

              {/* Recovered Value Metric */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/40">
                <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold mb-1">
                  <span>Ahorro / Ganancia Neta Anual Recuperable:</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-mono font-black text-emerald-300">
                  +{formatCurrency(annualRecoveredProfit, "USD")}
                </div>
                <div className="text-xs text-emerald-400/90 mt-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    OEE proyectado de <strong>{currentOee}%</strong> a <strong>{projectedOee}%</strong> (+12 pts)
                  </span>
                </div>
              </div>

              {/* Payback period */}
              <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                <span className="text-slate-300">Retorno de Inversión (ROI Estimado):</span>
                <span className="font-mono font-bold text-cyan-400 text-sm">
                  {roiMonths < 1 ? "< 1 mes" : `${roiMonths} meses`}
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link
                href="/contacto"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all group"
              >
                <span>Solicitar Auditoría OEE Personalizada</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Sin compromiso. Evaluamos tu piso de planta en menos de 48 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
