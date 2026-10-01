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
  RotateCcw,
} from "lucide-react";

export function LiveDashboardSimulator() {
  const [oee, setOee] = useState(87.6);
  const [availability, setAvailability] = useState(91.4);
  const [performance, setPerformance] = useState(96.2);
  const [quality, setQuality] = useState(99.5);
  const [activeSpeed, setActiveSpeed] = useState(412); // units per min
  const [simulatedStop, setSimulatedStop] = useState(false);

  // Live telemetry pulse
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
    <div className="w-full rounded-2xl glass-card border border-slate-700/80 shadow-2xl shadow-cyan-950/30 overflow-hidden relative">
      {/* Top Simulator Header */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="h-4 w-[1px] bg-slate-700 mx-1" />
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>MTcontrol Edge Gateway // Planta 01 - Línea Envasado</span>
          </div>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 live-indicator" />
            <span>{simulatedStop ? "PARADA DETECTADA" : "TRANSMITIENDO EN VIVO (1 Hz)"}</span>
          </div>

          <button
            onClick={() => setSimulatedStop(!simulatedStop)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              simulatedStop
                ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                : "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40"
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
      <div className="p-5 md:p-6 bg-slate-950/70">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* OEE Main Gauge */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/50 to-slate-900 border border-cyan-500/30 relative overflow-hidden">
            <div className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider flex items-center justify-between">
              <span>OEE Global</span>
              <Activity className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl lg:text-4xl font-extrabold text-white mt-2 font-mono flex items-baseline gap-1">
              {oee}
              <span className="text-sm font-normal text-cyan-400">%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${oee}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 mt-1.5 flex justify-between">
              <span>Meta: 85%</span>
              <span className={oee >= 85 ? "text-emerald-400" : "text-amber-400"}>
                {oee >= 85 ? "+2.6% Clase Mundial" : "Por debajo de meta"}
              </span>
            </div>
          </div>

          {/* Availability */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Disponibilidad</span>
              <Clock className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mt-2 font-mono flex items-baseline gap-1">
              {availability}
              <span className="text-xs font-normal text-slate-400">%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-blue-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${availability}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 mt-1.5">
              {simulatedStop ? "Parada: 3m 42s" : "7h 12m operando"}
            </div>
          </div>

          {/* Performance */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Rendimiento</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mt-2 font-mono flex items-baseline gap-1">
              {performance}
              <span className="text-xs font-normal text-slate-400">%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${performance}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 mt-1.5">
              Vel: <span className="text-slate-200 font-mono">{activeSpeed} u/min</span> (Nom: 420)
            </div>
          </div>

          {/* Quality */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Calidad (1ra Pasada)</span>
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-white mt-2 font-mono flex items-baseline gap-1">
              {quality}
              <span className="text-xs font-normal text-slate-400">%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-purple-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${quality}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 mt-1.5">
              Rechazos: <span className="text-slate-200 font-mono">14 de 28,450 u</span>
            </div>
          </div>
        </div>

        {/* Live Line Statuses & Real-time Pareto */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Machines Status */}
          <div className="lg:col-span-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2.5">
            <div className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-2">
              <span>Estado de Máquinas en Turno Actual</span>
              <span className="text-[11px] font-mono text-slate-400">OT #4492 - Lote 880</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 live-indicator" />
                  <span className="font-medium text-white">L01 // Llenadora Rotativa</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 font-mono">
                  <span>Vel: {simulatedStop ? "0" : "412"} bpm</span>
                  <span className="text-emerald-400 font-semibold">Operando</span>
                </div>
              </div>

              <div
                className={`p-2.5 rounded-lg transition-colors border flex items-center justify-between text-xs ${
                  simulatedStop
                    ? "bg-amber-950/40 border-amber-500/50"
                    : "bg-slate-800/60 border-slate-700/50"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      simulatedStop ? "bg-amber-400 animate-ping" : "bg-emerald-400"
                    }`}
                  />
                  <span className="font-medium text-white">L02 // Etiquetadora Sleeve</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 font-mono">
                  <span>
                    {simulatedStop ? "Atasco en túnel térmico" : "385 bpm"}
                  </span>
                  <span
                    className={`font-semibold ${
                      simulatedStop ? "text-amber-400" : "text-emerald-400"
                    }`}
                  >
                    {simulatedStop ? "DETENIDA (Alarma)" : "Operando"}
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-medium text-white">L03 // Encajonadora & Paletizado</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 font-mono">
                  <span>Vel: 32 cajas/min</span>
                  <span className="text-emerald-400 font-semibold">Operando</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pareto Mini Summary */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-300 flex items-center justify-between mb-2">
                <span>Pareto de Paradas (Semanal)</span>
                <BarChart2 className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="space-y-2 mt-3 text-xs">
                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>1. Cambio de Formato</span>
                    <span className="font-mono text-cyan-400">46% (3.2h)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: "46%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>2. Espera de Material</span>
                    <span className="font-mono text-amber-400">28% (1.9h)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: "28%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span>3. Falla Mecánica Faja</span>
                    <span className="font-mono text-red-400">14% (1.0h)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-red-400 h-full rounded-full" style={{ width: "14%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Energía: 142 kWh / h</span>
              <span className="text-emerald-400 font-mono flex items-center gap-1">
                <Zap className="w-3 h-3" /> Óptimo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
