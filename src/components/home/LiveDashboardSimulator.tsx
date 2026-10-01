"use client";

import React, { useState, useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Zap,
  Clock,
  Cpu,
  BarChart2,
  Play,
  Pause,
} from "lucide-react";

export function LiveDashboardSimulator() {
  const [oee, setOee] = useState(87.6);
  const [availability, setAvailability] = useState(91.4);
  const [performance, setPerformance] = useState(96.2);
  const [quality, setQuality] = useState(99.5);
  const [activeSpeed, setActiveSpeed] = useState(412); // units per min
  const [simulatedStop, setSimulatedStop] = useState(false);

  useEffect(() => {
    if (simulatedStop) {
      setOee(62.4);
      setAvailability(68.1);
      setActiveSpeed(0);
      return;
    }

    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 0.4;
      setOee((prev) => +(Math.min(94, Math.max(82, prev + delta))).toFixed(1));
      setActiveSpeed((prev) => Math.round(410 + Math.random() * 8));
    }, 2500);

    return () => clearInterval(interval);
  }, [simulatedStop]);

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
      {/* Top Simulator Header */}
      <div className="bg-slate-900 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          </div>
          <div className="h-4 w-[1px] bg-slate-700 mx-1" />
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Cpu className="w-4 h-4 text-sky-400" />
            <span>MTcontrol Edge Gateway // Planta 01 - Línea Envasado</span>
          </div>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
            <span>{simulatedStop ? "PARADA DETECTADA" : "TRANSMITIENDO EN VIVO (1 Hz)"}</span>
          </div>

          <button
            onClick={() => setSimulatedStop(!simulatedStop)}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              simulatedStop
                ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                : "bg-amber-500 hover:bg-amber-600 text-slate-950"
            }`}
          >
            {simulatedStop ? (
              <>
                <Play className="w-3 h-3" /> Reanudar Línea
              </>
            ) : (
              <>
                <Pause className="w-3 h-3" /> Simular Parada
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Telemetry Gauges */}
      <div className="p-6 bg-slate-50 border-b border-slate-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* OEE Main Gauge */}
          <div className="p-5 rounded-xl bg-white border-2 border-blue-500 shadow-sm relative overflow-hidden">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center justify-between">
              <span>OEE Global</span>
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 font-mono flex items-baseline gap-1">
              {oee}
              <span className="text-base font-bold text-blue-600">%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-700"
                style={{ width: `${oee}%` }}
              />
            </div>
            <div className="text-[11px] font-semibold text-slate-500 mt-2 flex justify-between">
              <span>Meta: 85%</span>
              <span className={oee >= 85 ? "text-emerald-600 font-bold" : "text-amber-600 font-bold"}>
                {oee >= 85 ? "+2.6% Clase Mundial" : "Por debajo de meta"}
              </span>
            </div>
          </div>

          {/* Availability */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>Disponibilidad</span>
              <Clock className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-slate-900 mt-2 font-mono flex items-baseline gap-1">
              {availability}
              <span className="text-sm font-semibold text-slate-500">%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-sky-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${availability}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500 mt-2 font-medium">
              {simulatedStop ? "Parada: 3m 42s" : "7h 12m operando"}
            </div>
          </div>

          {/* Performance */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>Rendimiento</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-slate-900 mt-2 font-mono flex items-baseline gap-1">
              {performance}
              <span className="text-sm font-semibold text-slate-500">%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${performance}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500 mt-2 font-medium">
              Vel: <span className="text-slate-900 font-bold">{activeSpeed} u/min</span> (Nom: 420)
            </div>
          </div>

          {/* Quality */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>Calidad (1ra Pasada)</span>
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-slate-900 mt-2 font-mono flex items-baseline gap-1">
              {quality}
              <span className="text-sm font-semibold text-slate-500">%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-purple-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${quality}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500 mt-2 font-medium">
              Rechazos: <span className="text-slate-900 font-bold">14 de 28,450 u</span>
            </div>
          </div>
        </div>

        {/* Live Line Statuses & Pareto */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Machines Status */}
          <div className="lg:col-span-2 p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-slate-800 flex items-center justify-between mb-2">
              <span>Estado de Líneas en Turno Actual</span>
              <span className="text-[11px] font-mono font-medium text-slate-500">OT #4492 - Lote 880</span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 live-dot" />
                  <span className="font-bold text-slate-900">L01 // Llenadora Rotativa</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 font-medium">
                  <span>Vel: {simulatedStop ? "0" : "412"} bpm</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Operando
                  </span>
                </div>
              </div>

              <div
                className={`p-3 rounded-lg transition-colors border flex items-center justify-between text-xs ${
                  simulatedStop
                    ? "bg-amber-50 border-amber-300"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      simulatedStop ? "bg-amber-500 animate-ping" : "bg-emerald-500"
                    }`}
                  />
                  <span className="font-bold text-slate-900">L02 // Etiquetadora Sleeve</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 font-medium">
                  <span>
                    {simulatedStop ? "Atasco en túnel térmico" : "385 bpm"}
                  </span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded border ${
                      simulatedStop
                        ? "text-amber-800 bg-amber-100 border-amber-300"
                        : "text-emerald-700 bg-emerald-50 border-emerald-200"
                    }`}
                  >
                    {simulatedStop ? "DETENIDA (Alarma)" : "Operando"}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-bold text-slate-900">L03 // Encajonadora & Paletizado</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600 font-medium">
                  <span>Vel: 32 cajas/min</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Operando
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pareto Summary */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-slate-800 flex items-center justify-between mb-2">
                <span>Pareto de Paradas (Semanal)</span>
                <BarChart2 className="w-4 h-4 text-blue-600" />
              </div>

              <div className="space-y-3 mt-3 text-xs">
                <div>
                  <div className="flex justify-between text-slate-700 font-medium mb-1">
                    <span>1. Cambio de Formato</span>
                    <span className="font-bold text-blue-700">46% (3.2h)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: "46%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-700 font-medium mb-1">
                    <span>2. Espera de Material</span>
                    <span className="font-bold text-amber-700">28% (1.9h)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: "28%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-700 font-medium mb-1">
                    <span>3. Falla Mecánica Faja</span>
                    <span className="font-bold text-red-700">14% (1.0h)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: "14%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Energía: 142 kWh / h</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-emerald-600" /> Óptimo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
