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
  Gauge,
  BarChart3,
  BellRing,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

export function BentoSuiteShowcase() {
  const [activeTab, setActiveTab] = useState<"control" | "weight" | "energy" | "flow">("control");

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Suite Modular B2B</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Una plataforma modular construida para el piso de planta
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Monitorea el OEE, digitaliza el pesaje, reduce el consumo de energía y controla las órdenes de trabajo desde un único entorno cloud.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("control")}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 ${
              activeTab === "control"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>MTcontrol (OEE & Paradas)</span>
          </button>

          <button
            onClick={() => setActiveTab("weight")}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 ${
              activeTab === "weight"
                ? "bg-amber-600 text-white shadow-md shadow-amber-500/25 scale-105"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>MTweight (Pesaje & Mermas)</span>
          </button>

          <button
            onClick={() => setActiveTab("energy")}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 ${
              activeTab === "energy"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25 scale-105"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>MTenergy (ISO 50001)</span>
          </button>

          <button
            onClick={() => setActiveTab("flow")}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2.5 ${
              activeTab === "flow"
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/25 scale-105"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Workflow className="w-4 h-4" />
            <span>MTflow (Digitalización OT)</span>
          </button>
        </div>

        {/* Tab 1: MTcontrol */}
        {activeTab === "control" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                Módulo Principal OEE
              </span>
              <h3 className="text-3xl font-black text-slate-950">
                MTcontrol: Visibilidad total del estado de tus máquinas
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Captura automáticamente la disponibilidad, el rendimiento y la calidad. Detecta tiempos muertos en el segundo exacto y genera análisis de Pareto por causa raíz.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Eliminación total de planillas en papel y digitación manual.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Alarmas automáticas push a mantención ante detenciones.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Integración en tiempo real con SAP S/4HANA y Power BI.</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/suite/mtcontrol"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-md"
                >
                  <span>Explorar MTcontrol a Fondo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 text-white shadow-xl">
              <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                <span>DASHBOARD EN VIVO // LÍNEA DE EMBOTELLADO</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" /> EN LÍNEA
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 bg-slate-800 rounded-xl text-center">
                  <div className="text-[10px] uppercase text-slate-400">OEE Actual</div>
                  <div className="text-2xl font-black font-mono text-sky-400">88.2%</div>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl text-center">
                  <div className="text-[10px] uppercase text-slate-400">Cadencia</div>
                  <div className="text-2xl font-black font-mono text-emerald-400">420 u/m</div>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl text-center">
                  <div className="text-[10px] uppercase text-slate-400">Paradas Turno</div>
                  <div className="text-2xl font-black font-mono text-amber-400">22 min</div>
                </div>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl text-xs space-y-2">
                <div className="font-bold text-slate-200">Top Causas de Parada (Pareto):</div>
                <div className="flex justify-between text-slate-300">
                  <span>1. Cambio de Formato (SMED)</span>
                  <span className="font-mono font-bold text-blue-400">45%</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>2. Falta de Envase en Tolva</span>
                  <span className="font-mono font-bold text-amber-400">30%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: MTweight */}
        {activeTab === "weight" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                Control de Pesaje & Recetas
              </span>
              <h3 className="text-3xl font-black text-slate-950">
                MTweight: Control de pesaje y dosificación en línea
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dispositivo electrónico conectado a balanzas industriales para auditar recetas, validar tolerancias de peso y registrar estadísticas de eficiencia por operador.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Elimina el sobrellenado (giveaway) y desperdicio de materia prima.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Validación de peso con feedback visual verde/rojo para el operario.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Trazabilidad completa por lote y pesaje para auditorías de calidad.</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/suite/mtweight"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-600 text-white hover:bg-amber-700 transition-all inline-flex items-center gap-2 shadow-md"
                >
                  <span>Explorar MTweight</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 text-white shadow-xl">
              <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                <span>TERMINAL BALANZA // PUESTO DOSIFICADO</span>
                <span className="text-amber-400 font-bold">BALANZA ACTIVA</span>
              </div>
              <div className="p-6 bg-slate-800 rounded-2xl text-center border-2 border-emerald-500 mb-4">
                <div className="text-xs uppercase text-slate-400">Peso en Tiempo Real</div>
                <div className="text-4xl font-black font-mono text-emerald-400 my-1">
                  1,250.4 g
                </div>
                <div className="text-xs text-emerald-400 font-bold">
                  ✓ DENTRO DE TOLERANCIA (1,250g ± 5g)
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-800 rounded-xl">
                  <span className="text-slate-400 block">Lotes Pesados:</span>
                  <span className="font-bold text-white text-sm">48 unidades / hora</span>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl">
                  <span className="text-slate-400 block">Desviación Estándar:</span>
                  <span className="font-bold text-emerald-400 text-sm">± 0.82 g</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: MTenergy */}
        {activeTab === "energy" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Eficiencia Energética & ISO 50001
              </span>
              <h3 className="text-3xl font-black text-slate-950">
                MTenergy: Ahorra hasta un 35% en energía industrial
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Correlaciona el consumo de kWh, gas o vapor con las unidades producidas en tiempo real, detectando consumos parásitos durante tiempos muertos.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Detección de compresores y motores encendidos en vacío.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Cálculo del costo energético exacto por producto (kWh / SKU).</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Soporte para certificación en norma ISO 50001 y sustentabilidad.</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/suite/mtenergy"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-all inline-flex items-center gap-2 shadow-md"
                >
                  <span>Explorar MTenergy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 text-white shadow-xl">
              <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                <span>CORRELACIÓN ENERGÍA VS PRODUCCIÓN</span>
                <span className="text-emerald-400 font-bold">ISO 50001 COMPLIANT</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-4 bg-slate-800 rounded-xl">
                  <div className="text-[10px] uppercase text-slate-400">Consumo Específico</div>
                  <div className="text-2xl font-black font-mono text-emerald-400">0.042 kWh/u</div>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-1">-18% vs Línea Base</div>
                </div>
                <div className="p-4 bg-slate-800 rounded-xl">
                  <div className="text-[10px] uppercase text-slate-400">Pérdida en Paradas</div>
                  <div className="text-2xl font-black font-mono text-rose-400">2.4 kWh</div>
                  <div className="text-[10px] text-rose-400 font-semibold mt-1">Alarma de Vacío</div>
                </div>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl text-xs flex justify-between text-slate-300">
                <span>Demanda Máxima Contratada:</span>
                <span className="font-mono font-bold text-sky-400">184 kW / 250 kW</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: MTflow */}
        {activeTab === "flow" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                Digitalización de Procesos & OT
              </span>
              <h3 className="text-3xl font-black text-slate-950">
                MTflow: Trazabilidad digital de Órdenes de Trabajo
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Plataforma no-code para digitalizar listas de chequeo, inspecciones de calidad y control de tiempos de ciclo en puestos manuales y automáticos.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>Seguimiento del avance de la Orden de Trabajo en tiempo real.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>Formularios dinámicos táctiles para operadores con validaciones.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                  <span>Generación automática del dossier de lote en PDF.</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/suite/mtflow"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-purple-600 text-white hover:bg-purple-700 transition-all inline-flex items-center gap-2 shadow-md"
                >
                  <span>Explorar MTflow</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900 text-white shadow-xl">
              <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
                <span>ORDEN DE TRABAJO #8849 // ETAPA 3 DE 4</span>
                <span className="text-purple-400 font-bold">EN PROGRESO (74%)</span>
              </div>
              <div className="space-y-2 mb-4 text-xs">
                <div className="p-3 bg-slate-800 rounded-xl flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Puesto 1: Despeje de Línea & Limpieza
                  </span>
                  <span className="text-emerald-400 font-bold">Completado</span>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Puesto 2: Dosificación & Pesaje Receta
                  </span>
                  <span className="text-emerald-400 font-bold">Completado</span>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl flex items-center justify-between border border-purple-500">
                  <span className="flex items-center gap-2 font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-purple-400 live-dot" />
                    Puesto 3: Envasado & Inspección Visual
                  </span>
                  <span className="text-purple-300 font-bold">En curso</span>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 text-right">
                Tiempo de ciclo: <strong>14m 20s</strong> (Meta: 15m)
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
