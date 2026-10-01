"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Scale,
  Zap,
  Workflow,
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Globe,
  Sparkles,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { COUNTRIES } from "@/data/countries";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuiteOpen, setIsSuiteOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsSuiteOpen(false);
    setIsCountryOpen(false);
  }, [pathname]);

  const productIcons: Record<string, React.ReactNode> = {
    mtcontrol: <Activity className="w-5 h-5 text-cyan-400" />,
    mtweight: <Scale className="w-5 h-5 text-amber-400" />,
    mtenergy: <Zap className="w-5 h-5 text-emerald-400" />,
    mtflow: <Workflow className="w-5 h-5 text-purple-400" />,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090e17]/90 backdrop-blur-md border-b border-slate-800 shadow-2xl"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                MT<span className="text-cyan-400">SOLUTIONS</span>
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                  OEE
                </span>
              </span>
              <span className="text-[11px] text-slate-400 tracking-wider">
                Industrial Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-cyan-400 bg-cyan-950/40"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Inicio
            </Link>

            {/* Suite Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSuiteOpen(!isSuiteOpen)}
                onMouseEnter={() => setIsSuiteOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/suite")
                    ? "text-cyan-400 bg-cyan-950/40"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <span>Nuestra Suite</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isSuiteOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isSuiteOpen && (
                <div
                  onMouseLeave={() => setIsSuiteOpen(false)}
                  className="absolute top-full left-0 w-80 mt-1 p-2 rounded-2xl bg-[#0f172a] border border-slate-800 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="text-[11px] font-semibold text-slate-400 uppercase px-3 py-1.5">
                    Módulos Especializados
                  </div>
                  <div className="space-y-1">
                    {Object.values(PRODUCTS).map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/suite/${prod.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/70 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/50 group-hover:border-cyan-500/40 transition-colors">
                          {productIcons[prod.id]}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                            {prod.name}
                            <span className="text-[10px] font-normal text-slate-400">
                              {prod.badge.split("&")[0]}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                            {prod.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800 px-3 py-1.5 flex items-center justify-between text-xs text-slate-400">
                    <span>Todos integrados en Cloud</span>
                    <Link
                      href="/suite"
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                    >
                      Ver suite completa <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/beneficios"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/beneficios"
                  ? "text-cyan-400 bg-cyan-950/40"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Beneficios OEE
            </Link>

            <Link
              href="/empresa"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/empresa"
                  ? "text-cyan-400 bg-cyan-950/40"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              La Empresa
            </Link>

            <Link
              href="/partners"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/partners"
                  ? "text-cyan-400 bg-cyan-950/40"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Partners
            </Link>

            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-cyan-400 bg-cyan-950/40"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Recursos & Blog
            </Link>

            <Link
              href="/contacto"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/contacto"
                  ? "text-cyan-400 bg-cyan-950/40"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Country Hotline selector */}
            <div className="relative">
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                title="Líneas de soporte y comercial por país"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>🇨🇱 +56 9 8806 5917</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isCountryOpen && (
                <div
                  onMouseLeave={() => setIsCountryOpen(false)}
                  className="absolute right-0 top-full mt-1 w-64 p-2 rounded-xl bg-[#0f172a] border border-slate-800 shadow-2xl shadow-black/80 z-50 animate-in fade-in"
                >
                  <div className="text-[10px] uppercase font-semibold text-slate-400 px-2 py-1">
                    Atención Directa en Tu País
                  </div>
                  <div className="space-y-1">
                    {COUNTRIES.map((c) => (
                      <a
                        key={c.code}
                        href={`tel:${c.phone}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/70 text-xs text-slate-200 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span>{c.flag}</span>
                          <span>{c.name}</span>
                        </span>
                        <span className="text-slate-400 font-mono text-[11px]">
                          {c.phoneFormatted}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="/contacto"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm text-[#090e17] bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 mr-1.5" />
              <span>Solicitar Demo</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contacto"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-400 text-slate-950"
            >
              Demo
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#090e17]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4">
          <Link
            href="/"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Inicio
          </Link>

          <div className="px-3 py-1 font-semibold text-xs text-slate-400 uppercase tracking-wider">
            Nuestra Suite de Productos
          </div>
          <div className="grid grid-cols-2 gap-2 pl-2">
            {Object.values(PRODUCTS).map((prod) => (
              <Link
                key={prod.id}
                href={`/suite/${prod.slug}`}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
              >
                {productIcons[prod.id]}
                <span>{prod.name}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/beneficios"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Beneficios OEE
          </Link>
          <Link
            href="/empresa"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            La Empresa
          </Link>
          <Link
            href="/partners"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Programa Partners
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Blog & Novedades
          </Link>
          <Link
            href="/contacto"
            className="block px-3 py-2 rounded-lg text-base font-medium text-cyan-400 hover:bg-slate-800"
          >
            Contacto & Reunión
          </Link>
        </div>
      )}
    </header>
  );
}
