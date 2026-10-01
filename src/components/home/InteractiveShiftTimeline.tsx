"use client";

import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  Sparkles,
  Info,
  Play,
  Pause,
  Filter,
  BarChart2,
} from "lucide-react";

interface TimelineBlock {
  id: string;
  start: string;
  end: string;
  duration: string;
  type: "running" | "unplanned_stop" | "changeover" | "idle" | "quality_check";
  title: string;
  category: string;
  operator: string;
  color: string;
  bgClass: string;
  speed?: string;
  lossCost?: string;
}

export function InteractiveShiftTimeline() {
  const [selectedBlockId, setSelectedBlockId] = useState<string>("b3");
  const [activeView, setActiveView] = useState<"shift" | "operator">("shift");

  const timelineBlocks: TimelineBlock[] = [
    {
      id: "b1",
      start: "08:00",
      end: "09:45",
      duration: "1h 45m",
      type: "running",
      title: "Producción Nominal // Lote 4492",
      category: "Tiempo Operativo",
      operator: "M. González (Línea 1)",
      color: "emerald",
      bgClass: "bg-emerald-500 hover:bg-emerald-400",
      speed: "418 bpm (Nominal: 420)",
    },
    {
      id: "b2",
      start: "09:45",
      end: "10:12",
      duration: "27 min",
      type: "changeover",
      title: "Cambio de Formato (SMED)",
      category: "Parada Planificada",
      operator: "M. González & Equipo Mantenimiento",
      color: "amber",
      bgClass: "bg-amber-500 hover:bg-amber-400",
      lossCost: "$157 USD",
    },
    {
      id: "b3",
      start: "10:12",
      end: "10:34",
      duration: "22 min",
      type: "unplanned_stop",
      title: "Atasco en Túnel de Etiquetado",
      category: "Avería No Programada (Pérdida Crítica)",
      operator: "J. Morales (Técnico Electromecánico)",
      color: "red",
      bgClass: "bg-rose-500 hover:bg-rose-400 animate-pulse",
      lossCost: "$385 USD",
    },
    {
      id: "b4",
      start: "10:34",
      end: "12:15",
      duration: "1h 41m",
      type: "running",
      title: "Producción a Régimen // Lote 4493",
      category: "Tiempo Operativo",
      operator: "M. González",
      color: "emerald",
      bgClass: "bg-emerald-500 hover:bg-emerald-400",
      speed: "422 bpm (100.4% Vel)",
    },
    {
      id: "b5",
      start: "12:15",
      end: "12:30",
      duration: "15 min",
      type: "quality_check",
      title: "Muestreo y Control de Calidad (MTflow)",
      category: "Inspección de Lote",
      operator: "C. Ramírez (Supervisora Calidad)",
      color: "blue",
      bgClass: "bg-blue-500 hover:bg-blue-400",
    },
    {
      id: "b6",
      start: "12:30",
      end: "16:00",
      duration: "3h 30m",
      type: "running",
      title: "Producción Continua // Turno Tarde",
      category: "Tiempo Operativo",
      operator: "M. González",
      color: "emerald",
      bgClass: "bg-emerald-500 hover:bg-emerald-400",
      speed: "415 bpm",
    },
  ];

  const selectedBlock =
    timelineBlocks.find((b) => b.id === selectedBlockId) || timelineBlocks[2];

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
      {/* Header Bar */}
      <div className="bg-slate-900 px-5 py-4 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          </div>
          <div className="h-4 w-[1px] bg-slate-700 mx-1" />
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Cpu className="w-4 h-4 text-sky-400" />
            <span>MTcontrol // Vista de Turno en Vivo (Shift Timeline)</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
          <button
            onClick={() => setActiveView("shift")}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              activeView === "shift"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Vista de Turno (8h)
          </button>
          <button
            onClick={() => setActiveView("operator")}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              activeView === "operator"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Vista Tablet Operador
          </button>
        </div>
      </div>

      {/* Live OEE Summary Cards */}
      <div className="p-6 bg-slate-50 border-b border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-white border-2 border-blue-500 shadow-sm">
            <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider flex justify-between">
              <span>OEE Global</span>
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-3xl font-black font-mono text-slate-900 mt-1">
              87.4%
            </div>
            <div className="text-[11px] text-emerald-600 font-bold mt-1">
              +2.4% sobre meta (85%)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex justify-between">
              <span>Disponibilidad</span>
              <Clock className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 mt-1">
              91.2%
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              7h 18m / 8h turno
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex justify-between">
              <span>Rendimiento</span>
              <BarChart2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 mt-1">
              96.5%
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              Velocidad: 418 bpm
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex justify-between">
              <span>Calidad</span>
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 mt-1">
              99.3%
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              Scrap: 18 de 24,100 u
            </div>
          </div>
        </div>

        {/* Visual Shift Timeline Bar (Gantt style) */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex flex-wrap items-center justify-between text-xs font-bold text-slate-800 mb-1">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 live-dot" />
              Línea 01 // Envasadora Rotativa (Turno 08:00 - 16:00)
            </span>
            <span className="text-slate-500 font-normal text-[11px]">
              Haz clic en cualquier bloque para ver la causa y costo
            </span>
          </div>

          {/* Timeline Bar Container */}
          <div className="w-full bg-slate-100 h-12 rounded-xl p-1 flex gap-1 overflow-hidden border border-slate-200">
            {timelineBlocks.map((block) => {
              const isSelected = block.id === selectedBlockId;
              const widthPerc =
                block.id === "b1"
                  ? "22%"
                  : block.id === "b2"
                  ? "6%"
                  : block.id === "b3"
                  ? "5%"
                  : block.id === "b4"
                  ? "22%"
                  : block.id === "b5"
                  ? "4%"
                  : "41%";

              return (
                <button
                  key={block.id}
                  onClick={() => setSelectedBlockId(block.id)}
                  style={{ width: widthPerc }}
                  className={`h-full rounded-lg transition-all relative flex items-center justify-center text-white text-[10px] font-bold cursor-pointer ${
                    block.bgClass
                  } ${
                    isSelected
                      ? "ring-2 ring-slate-900 ring-offset-2 scale-[1.02] z-10"
                      : "opacity-95"
                  }`}
                  title={`${block.title} (${block.start} - ${block.end})`}
                >
                  <span className="truncate px-1 hidden sm:inline">
                    {block.start}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline Time Axis Scale */}
          <div className="flex justify-between text-[11px] font-mono font-semibold text-slate-400 px-1">
            <span>08:00</span>
            <span>10:00</span>
            <span>12:00</span>
            <span>14:00</span>
            <span>16:00</span>
          </div>

          {/* Legend Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-slate-600 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-500 inline-block" />
              <span>Produciendo (Conforme)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-500 inline-block" />
              <span>Cambio de Formato (SMED)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-rose-500 inline-block" />
              <span>Parada No Programada (Avería)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-blue-500 inline-block" />
              <span>Control Calidad</span>
            </div>
          </div>
        </div>

        {/* Selected Event Details Modal Box */}
        <div className="mt-4 p-5 rounded-xl bg-white border-2 border-slate-300 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                  selectedBlock.type === "running"
                    ? "bg-emerald-100 text-emerald-800"
                    : selectedBlock.type === "unplanned_stop"
                    ? "bg-rose-100 text-rose-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {selectedBlock.category}
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                {selectedBlock.start} → {selectedBlock.end} ({selectedBlock.duration})
              </span>
            </div>
            <h4 className="text-base font-black text-slate-900">
              {selectedBlock.title}
            </h4>
            <div className="text-xs text-slate-500">
              Operador asignado: <strong className="text-slate-800">{selectedBlock.operator}</strong>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {selectedBlock.speed && (
              <div className="text-right">
                <div className="text-[10px] uppercase font-bold text-slate-400">Cadencia Real</div>
                <div className="text-sm font-black font-mono text-emerald-600">{selectedBlock.speed}</div>
              </div>
            )}
            {selectedBlock.lossCost && (
              <div className="text-right p-2 rounded-lg bg-rose-50 border border-rose-200">
                <div className="text-[10px] uppercase font-bold text-rose-600">Costo Pérdida</div>
                <div className="text-sm font-black font-mono text-rose-700">{selectedBlock.lossCost}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
