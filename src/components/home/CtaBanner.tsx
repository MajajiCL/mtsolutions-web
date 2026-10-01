import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Zap,
} from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-500/40 text-xs font-mono font-bold text-sky-300 mb-4">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>Transformación Digital en Menos de 10 Días</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            ¿Listo para eliminar los tiempos muertos y maximizar tu OEE?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Agenda una sesión personalizada con nuestros ingenieros de planta.
            Te mostraremos cómo conectar tus máquinas y ver tu producción en vivo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-xl shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Reunión con un Experto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/beneficios"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-base text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Ver Beneficios de OEE</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Sin permanencia obligatoria
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Piloto en tus primeras máquinas
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Soporte técnico directo por país
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
