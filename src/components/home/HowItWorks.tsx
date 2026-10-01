import React from "react";
import {
  Cpu,
  Server,
  Cloud,
  LayoutDashboard,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Conexión a Sensores o PLC",
      desc: "Nos conectamos de forma no invasiva a las señales de marcha/paro, fotoceldas, encoders o al puerto de red del PLC (Modbus, OPC-UA, Siemens).",
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
    },
    {
      step: "02",
      title: "Instalación del Adquisidor IoT",
      desc: "Montamos el gabinete con el hardware adquisidor MT Edge en el piso de planta en menos de medio día sin alterar la lógica de máquina.",
      icon: <Server className="w-6 h-6 text-amber-600" />,
    },
    {
      step: "03",
      title: "Transmisión y Análisis Cloud",
      desc: "La información viaja cifrada (SSL/TLS 256-bit) a la nube para el cálculo instantáneo de OEE, pareto de paradas y consumos.",
      icon: <Cloud className="w-6 h-6 text-sky-600" />,
    },
    {
      step: "04",
      title: "Dashboards, Andon y Alarmas",
      desc: "Visualización en tiempo real en pantallas de planta, ordenadores y smartphones, con alertas automáticas push ante tiempos muertos.",
      icon: <LayoutDashboard className="w-6 h-6 text-emerald-600" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Arquitectura Simple y Probada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Lo hacemos simple, porque la industria necesita agilidad
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            De la señal física al análisis estratégico en 4 pasos sin proyectos de meses de duración.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-300 group-hover:text-blue-600 transition-colors">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold">
                <span>Fase {idx + 1}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
