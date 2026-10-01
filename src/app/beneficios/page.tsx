import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Clock,
  Zap,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Calculator,
} from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Beneficios de un Software OEE para la Mejora de Planta",
  description:
    "Descubre cómo un software OEE elimina las 6 grandes pérdidas de manufactura, reduce los tiempos muertos y multiplica el retorno de inversión en tu planta.",
  alternates: {
    canonical: "/beneficios",
  },
};

export default function BeneficiosPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Beneficios OEE", url: "/beneficios" },
  ]);

  const sixLosses = [
    {
      title: "1. Averías y Fallas de Equipos",
      factor: "Disponibilidad",
      desc: "Paradas no programadas por fallas mecánicas, eléctricas o falta de mantenimiento preventivo.",
      solution: "Detección inmediata y alerta al equipo de mantención en el minuto 0.",
    },
    {
      title: "2. Preparación y Ajustes (Setups / SMED)",
      factor: "Disponibilidad",
      desc: "Tiempos excesivos durante cambios de molde, formato o limpieza entre órdenes de trabajo.",
      solution: "Cronometraje automático de la parada y comparativa de tiempo estándar de cambio.",
    },
    {
      title: "3. Microparadas y Atascos Menores",
      factor: "Rendimiento",
      desc: "Detenciones breves de menos de 2 minutos que no se anotan en el papel pero que suman hasta 2 horas al día.",
      solution: "Registro automático por pulsos de sensor sin intervención del operador.",
    },
    {
      title: "4. Velocidad Reducida",
      factor: "Rendimiento",
      desc: "Máquinas que operan por debajo de su velocidad de diseño nominal debido a desajustes o material defectuoso.",
      solution: "Monitoreo continuo de cadencia nominal vs real segundo a segundo.",
    },
    {
      title: "5. Defectos de Calidad y Retrabajos",
      factor: "Calidad",
      desc: "Piezas producidas con defectos que deben ser descartadas como scrap o reprocesadas.",
      solution: "Contabilización de descartes y análisis de causas por lote de producción.",
    },
    {
      title: "6. Pérdidas en Puesta en Marcha",
      factor: "Calidad",
      desc: "Mermas de material durante el calentamiento, estabilización o arranque inicial de la línea.",
      solution: "Curva de rampa de arranque y control estricto de tolerancias de pesaje.",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#090e17] min-h-screen">
      <JsonLd data={breadcrumb} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Excelencia Operacional</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            ¿Por qué implementar un Software OEE en tu planta?
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            El OEE (Overall Equipment Effectiveness) es el indicador global más potente para
            descubrir la capacidad oculta de tus máquinas sin comprar nuevos equipos.
          </p>
        </div>

        {/* Before vs After Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Gestión Tradicional en Papel vs. MT Solutions en Tiempo Real
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before Card */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-red-500/30">
              <div className="flex items-center gap-2 text-red-400 font-bold text-lg mb-6">
                <XCircle className="w-6 h-6" />
                <span>Gestión Tradicional (Planillas y Excel)</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Datos recopilados a mano al final del turno con sesgo y falta de precisión.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Las microparadas de 1 a 3 minutos son invisibles y se pierden en el registro.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Supervisores y directores reaccionan cuando el problema ya ocurrió hace 24 horas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Horas de trabajo administrativo gastadas transcribiendo datos a hojas de cálculo.</span>
                </li>
              </ul>
            </div>

            {/* After Card */}
            <div className="p-8 rounded-3xl bg-slate-900 border-2 border-cyan-500/50 shadow-xl shadow-cyan-950/30">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg mb-6">
                <CheckCircle2 className="w-6 h-6" />
                <span>Con MT Solutions Software OEE</span>
              </div>
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Captura de pulsos directo desde la máquina con precisión de milisegundos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Cada microparada y cambio de velocidad se contabiliza y clasifica al instante.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Alarmas automáticas push a mantención ante detenciones prolongadas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Reportes en tiempo real, integración con SAP/Power BI y cero burocracia en papel.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6 Big Losses Breakdown */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Cómo MT Solutions combate las 6 Grandes Pérdidas de Manufactura
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Las principales fugas de rentabilidad en el piso de planta y su solución automatizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixLosses.map((loss, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      Factor: {loss.factor}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {loss.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {loss.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-300">
                  <strong className="text-cyan-400">Solución MT: </strong>
                  {loss.solution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to calculator */}
        <div className="text-center p-10 rounded-3xl bg-slate-900/90 border border-slate-800">
          <Calculator className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Calcula el impacto económico de tu planta
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mt-2">
            Utiliza nuestra calculadora para proyectar las horas de producción y dinero recuperables.
          </p>
          <div className="mt-6">
            <Link
              href="/#calculadora"
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:from-cyan-300 transition-all inline-flex items-center gap-2"
            >
              <span>Ir a la Calculadora de ROI</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
