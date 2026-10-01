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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSuiteOpen(false);
    setIsCountryOpen(false);
  }, [pathname]);

  const productIcons: Record<string, React.ReactNode> = {
    mtcontrol: <Activity className="w-5 h-5 text-blue-600" />,
    mtweight: <Scale className="w-5 h-5 text-amber-600" />,
    mtenergy: <Zap className="w-5 h-5 text-emerald-600" />,
    mtflow: <Workflow className="w-5 h-5 text-purple-600" />,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                MT<span className="text-blue-600">SOLUTIONS</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700">
                  OEE
                </span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                Software de Gestión de Planta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Inicio
            </Link>

            {/* Suite Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSuiteOpen(!isSuiteOpen)}
                onMouseEnter={() => setIsSuiteOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith("/suite")
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                <span>Nuestra Suite</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isSuiteOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {isSuiteOpen && (
                <div
                  onMouseLeave={() => setIsSuiteOpen(false)}
                  className="absolute top-full left-0 w-84 mt-2 p-2 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 animate-in fade-in duration-150"
                >
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    Módulos Especializados
                  </div>
                  <div className="space-y-1">
                    {Object.values(PRODUCTS).map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/suite/${prod.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                          {productIcons[prod.id]}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                            {prod.name}
                            <span className="text-[10px] font-medium text-slate-500">
                              {prod.badge.split("&")[0]}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {prod.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1.5 flex items-center justify-between text-xs text-slate-500">
                    <span>Plataforma Cloud 100% Integrada</span>
                    <Link
                      href="/suite"
                      className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1"
                    >
                      Ver suite <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/beneficios"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/beneficios"
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Beneficios OEE
            </Link>

            <Link
              href="/empresa"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/empresa"
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              La Empresa
            </Link>

            <Link
              href="/partners"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/partners"
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Partners
            </Link>

            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contacto"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/contacto"
                  ? "text-blue-600 bg-blue-50"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Country Hotline Selector */}
            <div className="relative">
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                title="Líneas directas de atención"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>🇨🇱 +56 9 8806 5917</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {isCountryOpen && (
                <div
                  onMouseLeave={() => setIsCountryOpen(false)}
                  className="absolute right-0 top-full mt-2 w-64 p-2 rounded-2xl bg-white border border-slate-200 shadow-xl z-50 animate-in fade-in"
                >
                  <div className="text-[10px] uppercase font-bold text-slate-400 px-2 py-1">
                    Atención por País
                  </div>
                  <div className="space-y-1">
                    {COUNTRIES.map((c) => (
                      <a
                        key={c.code}
                        href={`tel:${c.phone}`}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-xs text-slate-800 transition-colors"
                      >
                        <span className="flex items-center gap-2 font-medium">
                          <span>{c.flag}</span>
                          <span>{c.name}</span>
                        </span>
                        <span className="text-slate-500 font-mono text-[11px]">
                          {c.phoneFormatted}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Primary CTA */}
            <Link
              href="/contacto"
              className="px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Solicitar Demo</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contacto"
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white"
            >
              Demo
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <Link
            href="/"
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Inicio
          </Link>
          <div className="px-3 py-1 font-bold text-xs text-slate-400 uppercase">
            Nuestra Suite
          </div>
          <div className="grid grid-cols-2 gap-2 pl-2">
            {Object.values(PRODUCTS).map((prod) => (
              <Link
                key={prod.id}
                href={`/suite/${prod.slug}`}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
              >
                {productIcons[prod.id]}
                <span>{prod.name}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/beneficios"
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Beneficios OEE
          </Link>
          <Link
            href="/empresa"
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            La Empresa
          </Link>
          <Link
            href="/partners"
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Partners
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            className="block px-3 py-2 rounded-lg text-base font-bold text-blue-600 hover:bg-blue-50"
          >
            Contacto & Reunión
          </Link>
        </div>
      )}
    </header>
  );
}
