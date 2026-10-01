import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Percent,
  GraduationCap,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Programa de Partners - Crece con MT Solutions",
  description:
    "Únete al Programa de Partners de MT Solutions. Obtén comisiones recurrentes de hasta el 40% como Promotor o Distribuidor de software OEE e IoT industrial.",
  alternates: {
    canonical: "/partners",
  },
};

export default function PartnersPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Programa de Partners", url: "/partners" },
  ]);

  const partnerLevels = [
    {
      title: "Nivel Promotor",
      subtitle: "Para Consultores Independientes y Asesores",
      commission: "Hasta 25%",
      desc: "Recomienda las soluciones de MT Solutions a tus clientes y recibe comisiones atractivas por cada oportunidad cerrada sin encargarte de la implementación.",
      features: [
        "Comisión directa por venta concretada",
        "Material de ventas y fichas técnicas",
        "Acompañamiento comercial de nuestro equipo",
      ],
      badge: "Consultores Lean",
    },
    {
      title: "Nivel Distribuidor / Integrador",
      subtitle: "Para Consultoras, Integradores de Automatización y Empresas TI",
      commission: "Hasta 40%",
      desc: "Ofrece nuestra suite de monitoreo de producción y eficiencia energética dentro de tu catálogo propio de servicios industriales.",
      features: [
        "Comisiones recurrentes de hasta el 40%",
        "Capacitación técnica y certificación oficial",
        "Soporte prioritario Nivel 2 y acceso a licencias demo",
        "Co-marketing y derivación de leads en tu región",
      ],
      badge: "Partner Estratégico",
      highlighted: true,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#f8fafc] min-h-screen">
      <JsonLd data={breadcrumb} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Handshake className="w-3.5 h-3.5" />
            <span>Alianzas Comerciales</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Sé parte de MT Solutions: Únete a Nuestro Programa de Partners
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Diseñado para consultores Lean, integradores de sistemas y proveedores tecnológicos
            que desean expandir su portafolio con software OEE e IoT líder en la región.
          </p>
        </div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {partnerLevels.map((lvl, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all ${
                lvl.highlighted
                  ? "bg-white border-2 border-blue-500 shadow-xl"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      lvl.highlighted
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    {lvl.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-1">
                  {lvl.title}
                </h2>
                <div className="text-xs text-slate-500 font-semibold mb-4">{lvl.subtitle}</div>

                <div className="my-5 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-semibold text-slate-500">Ganancias & Comisiones:</div>
                  <div className="text-3xl font-black font-mono text-blue-700 mt-1">
                    {lvl.commission}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Comisiones recurrentes sobre licencias
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {lvl.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {lvl.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  href="/contacto"
                  className={`w-full py-4 px-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    lvl.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  <span>Postular como {lvl.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              ¿Por qué aliarse con MT Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <GraduationCap className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Formación & Certificación
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Acceso a cursos, webinars técnicos y certificación oficial para implementar nuestras soluciones con éxito.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Award className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Tecnología Probada
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Más de 15 años de experiencia y casos de éxito en empresas líderes como Concha y Toro, Degasa y Anasac.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Percent className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Ingresos Recurrentes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Modelo SaaS que genera ingresos mensuales predecibles y comisiones por cada planta activa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
