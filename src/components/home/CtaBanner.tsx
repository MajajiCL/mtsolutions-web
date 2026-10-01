import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Calendar,
  Zap,
} from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#090e17] via-slate-950 to-[#060911] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-teal-500/20 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-slate-900/90 to-[#0f172a]/90 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/50 text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono font-semibold text-cyan-300 mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Transformación Digital en Menos de 10 Días</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Listo para eliminar los tiempos muertos y maximizar tu OEE?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Agenda una sesión personalizada con uno de nuestros ingenieros de planta.
            Te mostraremos cómo conectar tus máquinas y ver tu producción en vivo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Reunión con un Experto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/beneficios"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span>Ver Beneficios y ROI</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
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
              Soporte técnico directo en español, inglés y portugués
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
