import React from "react";
import {
  Database,
  Cpu,
  Layers,
  FileSpreadsheet,
  Network,
  Share2,
  CheckCircle2,
} from "lucide-react";

export function IntegrationsSection() {
  const erps = ["SAP S/4HANA", "SAP Business One", "Oracle NetSuite", "QAD Enterprise", "Microsoft Dynamics 365", "Infor"];
  const biTools = ["Microsoft Power BI", "Google Looker Studio", "Tableau", "Excel Avanzado (Direct Query)", "REST API Webhooks"];
  const plcs = ["Siemens S7-1200/1500", "Rockwell Allen-Bradley", "Omron", "Schneider Modicon", "Modbus TCP/RTU", "OPC-UA"];

  return (
    <section className="py-20 bg-[#090e17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-semibold text-slate-300 mb-3">
            <Share2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ecosistema Conectado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Se integra sin fisuras con tu stack existente
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            No necesitas cambiar tus sistemas ERP, balanzas ni autómatas. MT Solutions conecta
            el piso de planta con las herramientas corporativas que ya utilizas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: ERPs */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Sistemas ERP</h3>
                <span className="text-xs text-slate-400">Descarga de OTs y consumos</span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {erps.map((e, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: PLCs & Hardware */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">PLCs & Sensores</h3>
                <span className="text-xs text-slate-400">Conectividad directa industrial</span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {plcs.map((p, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: BI & Analytics */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Business Intelligence</h3>
                <span className="text-xs text-slate-400">Dashboards ejecutivos y reporting</span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {biTools.map((b, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
