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
  const [shiftsPerDay, setShiftsPerDay] = useState(2);
  const [costPerHour, setCostPerHour] = useState(350);
  const [currentOee, setCurrentOee] = useState(58);

  const hoursPerDay = shiftsPerDay * 8;
  const daysPerYear = 300;
  const totalPlannedHoursYear = machines * hoursPerDay * daysPerYear;

  const unproductiveHoursYear = totalPlannedHoursYear * ((100 - currentOee) / 100);
  const totalAnnualLoss = unproductiveHoursYear * costPerHour;

  const projectedOee = Math.min(88, currentOee + 12);
  const recoveredHoursYear = totalPlannedHoursYear * ((projectedOee - currentOee) / 100);
  const annualRecoveredProfit = recoveredHoursYear * costPerHour;

  const estimatedAnnualCost = machines * 4500;
  const roiMonths = +((estimatedAnnualCost / annualRecoveredProfit) * 12).toFixed(1);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora Interactiva de ROI & OEE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
            ¿Cuánto dinero pierde tu planta en tiempos muertos no registrados?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Ajusta los parámetros de tu fábrica para estimar el costo real de las detenciones
            y la rentabilidad neta recuperable con MT Solutions.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            {/* Control 1: Machines */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Líneas o Máquinas Críticas en Planta:
                </label>
                <span className="text-base font-black font-mono text-blue-700 bg-white px-3 py-0.5 rounded-lg border border-blue-200 shadow-sm">
                  {machines} {machines === 1 ? "máquina" : "máquinas"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={machines}
                onChange={(e) => setMachines(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                <span>1 línea</span>
                <span>15 líneas</span>
                <span>30 líneas</span>
              </div>
            </div>

            {/* Control 2: Shifts */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Turnos de Operación Diaria:
                </label>
                <span className="text-base font-black font-mono text-blue-700 bg-white px-3 py-0.5 rounded-lg border border-blue-200 shadow-sm">
                  {shiftsPerDay} {shiftsPerDay === 1 ? "turno (8h)" : shiftsPerDay === 2 ? "turnos (16h)" : "turnos 24/7 (24h)"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="3"
                value={shiftsPerDay}
                onChange={(e) => setShiftsPerDay(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                <span>1 Turno (8h)</span>
                <span>2 Turnos (16h)</span>
                <span>3 Turnos Continuo (24h)</span>
              </div>
            </div>

            {/* Control 3: Cost per hour */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  Costo Estimado de Parada de Línea (USD/hora):
                </label>
                <span className="text-base font-black font-mono text-amber-700 bg-white px-3 py-0.5 rounded-lg border border-amber-200 shadow-sm">
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
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                <span>$50/h (Media)</span>
                <span>$500/h (Pesada)</span>
                <span>$2,000/h (Crítica)</span>
              </div>
            </div>

            {/* Control 4: Estimated Current OEE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  OEE Estimado Actual en Planta (%):
                </label>
                <span className="text-base font-black font-mono text-purple-700 bg-white px-3 py-0.5 rounded-lg border border-purple-200 shadow-sm">
                  {currentOee}%
                </span>
              </div>
              <input
                type="range"
                min="35"
                max="80"
                value={currentOee}
                onChange={(e) => setCurrentOee(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                <span>35% (Sin control)</span>
                <span>55% (Promedio Latam)</span>
                <span>80% (Optimizado)</span>
              </div>
            </div>
          </div>

          {/* Results Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl text-white shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Diagnóstico Proyectado</span>
              </div>
              <h3 className="text-xl font-black text-white">Impacto Económico Estimado</h3>

              {/* Loss Metric */}
              <div className="mt-5 p-4 rounded-xl bg-red-950/60 border border-red-500/40">
                <div className="flex items-center justify-between text-xs text-red-300 font-bold mb-1">
                  <span>Pérdida Anual por Ineficiencias:</span>
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                </div>
                <div className="text-2xl font-mono font-black text-red-400">
                  {formatCurrency(totalAnnualLoss, "USD")} / año
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Equivalente a {formatNumber(Math.round(unproductiveHoursYear))} horas improductivas.
                </div>
              </div>

              {/* Recovered Value Metric */}
              <div className="mt-4 p-5 rounded-xl bg-emerald-950/70 border border-emerald-500/50">
                <div className="flex items-center justify-between text-xs text-emerald-300 font-bold mb-1">
                  <span>Ganancia Neta Anual Recuperable:</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-mono font-black text-emerald-300">
                  +{formatCurrency(annualRecoveredProfit, "USD")}
                </div>
                <div className="text-xs text-emerald-300 font-semibold mt-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    OEE de <strong>{currentOee}%</strong> a <strong>{projectedOee}%</strong> (+12 pts)
                  </span>
                </div>
              </div>

              {/* Payback period */}
              <div className="mt-4 flex items-center justify-between p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                <span className="text-slate-300">Retorno de Inversión (ROI Estimado):</span>
                <span className="font-mono font-bold text-sky-400 text-sm">
                  {roiMonths < 1 ? "< 1 mes" : `${roiMonths} meses`}
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link
                href="/contacto"
                className="w-full py-4 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg transition-all group"
              >
                <span>Solicitar Auditoría OEE Personalizada</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Sin costo ni compromiso para tu planta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
