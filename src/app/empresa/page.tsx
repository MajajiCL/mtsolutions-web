import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Globe2,
} from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { COUNTRIES } from "@/data/countries";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Trayectoria y Equipo de MT Solutions",
  description:
    "Conoce la historia de MT Solutions desde 2009. Pioneros en IoT industrial y Software OEE con presencia en Chile, Brasil, México, Colombia, Perú, Argentina y EE.UU.",
  alternates: {
    canonical: "/empresa",
  },
};

export default function EmpresaPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "La Empresa", url: "/empresa" },
  ]);

  const milestones = [
    {
      year: "2009",
      title: "Fundación y Visión Pionera",
      desc: "Nacemos con la misión de democratizar la telemetría de producción para empresas manufactureras mediante SaaS e Internet (lo que hoy conocemos como IoT).",
    },
    {
      year: "2012",
      title: "Primera Expansión Internacional",
      desc: "Lanzamiento de nuestros primeros proyectos internacionales en Argentina y consolidación en el sector vitivinícola y alimentario de Chile.",
    },
    {
      year: "2016",
      title: "Desarrollo de MTweight y MTenergy",
      desc: "Ampliamos nuestra suite integrando algoritmos de control de pesaje por operario y monitoreo energético sincronizado con la producción (ISO 50001).",
    },
    {
      year: "2020",
      title: "Lanzamiento de MTflow y Edge IoT",
      desc: "Despliegue de gateways industriales Edge de última generación y digitalización no-code de Órdenes de Trabajo.",
    },
    {
      year: "Hoy",
      title: "Presencia Global en 7 Países",
      desc: "Operaciones activas en Chile, Brasil, México, Colombia, Perú, Argentina y Estados Unidos, con más de 150 plantas conectadas.",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#f8fafc] min-h-screen">
      <JsonLd data={breadcrumb} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Nuestra Trayectoria</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Pioneros en IoT Industrial & Software OEE desde 2009
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Más de 15 años acompañando a plantas manufactureras en su transformación digital,
            eliminando la fricción del papel y entregando datos en tiempo real.
          </p>
        </div>

        {/* Story Summary Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                Nacidos para hacer el control de planta simple y confiable
              </h2>
              <p>
                Nuestra historia comenzó en <strong>2009</strong> con una visión clara: crear un
                sistema de gestión de producción en línea accesible para empresas manufactureras de
                todos los tamaños, basado en tecnología web e IoT.
              </p>
              <p>
                Inspirados por las necesidades reales del piso de planta, desarrollamos una solución
                SaaS modular que revolucionó la forma en que las industrias de alimentos, bebidas,
                farmacéutica y manufactura pesada optimizan sus recursos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black font-mono text-blue-700">
                  +15
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">Años de Innovación</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-700">
                  7
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">Países con Operaciones</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black font-mono text-amber-700">
                  +150
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">Plantas Conectadas</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black font-mono text-purple-700">
                  99.9%
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">Disponibilidad Cloud</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Nuestros Hitos de Crecimiento
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start gap-4 hover:border-blue-300 transition-colors"
              >
                <div className="px-4 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-mono font-black text-sm shrink-0">
                  {m.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
          <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            Presencia Internacional
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto mt-2 mb-8">
            Brindamos soporte y consultoría directa a clientes e integradores en toda América.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {COUNTRIES.map((c) => (
              <div
                key={c.code}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center"
              >
                <div className="text-3xl mb-1">{c.flag}</div>
                <div className="text-xs font-bold text-slate-800">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
