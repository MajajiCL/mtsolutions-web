import React from "react";
import {
  Database,
  Cpu,
  FileSpreadsheet,
  Share2,
  CheckCircle2,
} from "lucide-react";

export function IntegrationsSection() {
  const erps = ["SAP S/4HANA & ECC", "SAP Business One", "Oracle NetSuite", "QAD Enterprise", "Microsoft Dynamics 365", "Infor M3"];
  const biTools = ["Microsoft Power BI", "Google Looker Studio", "Tableau", "Excel Avanzado (Direct Query)", "REST API & Webhooks"];
  const plcs = ["Siemens S7-1200 / 1500", "Rockwell Allen-Bradley", "Omron Sysmac", "Schneider Modicon", "Modbus TCP / RTU", "OPC-UA"];

  return (
    <section className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Share2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Ecosistema Conectado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Se integra sin fisuras con tu infraestructura actual
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            No necesitas reemplazar tus sistemas ERP, balanzas ni autómatas. MT Solutions conecta
            el piso de planta con las herramientas corporativas que ya utilizas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: ERPs */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Sistemas ERP</h3>
                <span className="text-xs text-slate-500 font-medium">Descarga de OTs y consumos</span>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              {erps.map((e, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: PLCs & Hardware */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">PLCs & Sensores</h3>
                <span className="text-xs text-slate-500 font-medium">Conectividad directa industrial</span>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              {plcs.map((p, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: BI & Analytics */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Business Intelligence</h3>
                <span className="text-xs text-slate-500 font-medium">Dashboards y reporting</span>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              {biTools.map((b, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
