import React from "react";
import {
  Cpu,
  Server,
  Cloud,
  LayoutDashboard,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Conexión a Sensores o PLC",
      desc: "Nos conectamos de forma no invasiva a las señales de marcha/paro, fotoceldas, encoders o al puerto de red del PLC (Modbus, OPC-UA, Siemens).",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    },
    {
      step: "02",
      title: "Instalación del Adquisidor IoT",
      desc: "Montamos el gabinete con el hardware adquisidor MT Edge en el piso de planta. Instalación rápida en menos de medio día sin alterar la lógica de máquina.",
      icon: <Server className="w-6 h-6 text-amber-400" />,
    },
    {
      step: "03",
      title: "Transmisión y Procesamiento Cloud",
      desc: "La información viaja cifrada (SSL/TLS 256-bit) a nuestros servidores en la nube para el cálculo instantáneo de OEE, pareto de paradas y consumos.",
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
    },
    {
      step: "04",
      title: "Dashboards, Andon y Alarmas",
      desc: "Visualización en tiempo real en pantallas de planta, ordenadores y dispositivos móviles, con alertas automáticas push ante tiempos muertos.",
      icon: <LayoutDashboard className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <section className="py-24 bg-[#090e17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-semibold text-slate-300 mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Arquitectura Simple y Probada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Lo hacemos simple, porque la industria necesita agilidad
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            De la señal física al análisis estratégico en 4 pasos sin proyectos de meses de duración.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between relative group hover:translate-y-[-4px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/60 group-hover:border-cyan-500/40 transition-colors">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-mono font-black text-slate-700 group-hover:text-cyan-400 transition-colors">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-medium">
                <span>Fase {idx + 1}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
