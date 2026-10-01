import React from "react";
import Link from "next/link";
import {
  Activity,
  Mail,
  Globe,
  ShieldCheck,
  ArrowUpRight,
  Award,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { COUNTRIES } from "@/data/countries";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  MT<span className="text-sky-400">SOLUTIONS</span>
                </span>
                <span className="text-[11px] text-slate-400">
                  Software OEE & IoT Industrial
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Pioneros desde 2009 en digitalización de pisos de planta.
              Transformamos máquinas convencionales en fábricas inteligentes
              mediante monitoreo OEE en tiempo real, pesaje digital y eficiencia energética.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Norma ISO 50001 Ready</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Award className="w-4 h-4 text-sky-400" />
                <span>SaaS OEE Certificado</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/mtsolutions-io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.87 0-1.57.7-1.57 1.57s.7 1.57 1.57 1.57 1.57-.7 1.57-1.57-.7-1.57-1.57-1.57Z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@mtsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Suite */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Nuestra Suite
            </h3>
            <ul className="space-y-2.5 text-sm">
              {Object.values(PRODUCTS).map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/suite/${prod.slug}`}
                    className="hover:text-sky-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{prod.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-sky-400 transition-all" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/beneficios"
                  className="text-sky-400 hover:text-sky-300 text-xs font-bold uppercase tracking-wide flex items-center gap-1"
                >
                  Beneficios del Software OEE →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Empresa */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Compañía
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/empresa" className="hover:text-sky-400 transition-colors">
                  Sobre Nosotros (Trayectoria 2009)
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-sky-400 transition-colors">
                  Programa de Partners (Hasta 40%)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sky-400 transition-colors">
                  Blog & Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-sky-400 transition-colors">
                  Agendar Demostración
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Líneas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-400" />
              <span>Líneas Directas</span>
            </h3>
            <ul className="space-y-2 text-xs">
              {COUNTRIES.slice(0, 5).map((c) => (
                <li key={c.code} className="flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span>{c.flag}</span> {c.name}
                  </span>
                  <a
                    href={`tel:${c.phone}`}
                    className="font-mono text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {c.phoneFormatted}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <a
                  href="mailto:comercial@mtsolutions.io"
                  className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>comercial@mtsolutions.io</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} MT Solutions. Todos los derechos reservados.
            Monitoreo OEE, Pesaje y Eficiencia de Planta.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contacto" className="hover:text-slate-300 transition-colors">
              Soporte Técnico
            </Link>
            <span className="text-slate-600">v2.5 Enterprise</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
