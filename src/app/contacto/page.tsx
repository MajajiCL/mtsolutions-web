"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Globe,
  Send,
  CheckCircle2,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { COUNTRIES } from "@/data/countries";
import { JsonLd } from "@/components/ui/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "Chile",
    lines: "1 a 3 líneas",
    module: "MTcontrol (OEE & Paradas)",
    message: "",
  });

  const breadcrumb = getBreadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name: "Contacto", url: "/contacto" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-[#f8fafc] min-h-screen">
      <JsonLd data={breadcrumb} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Atención Directa & Demostraciones</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Agenda una demostración con un especialista
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Descubre cómo conectar tus máquinas y monitorear tu OEE en tiempo real.
            Nos pondremos en contacto contigo en menos de 24 horas hábiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Gracias <strong>{formData.name}</strong>. Un ingeniero de nuestro equipo comercial de{" "}
                  <strong>{formData.country}</strong> se pondrá en contacto a tu correo{" "}
                  <span className="text-blue-600 font-bold">{formData.email}</span> para coordinar la reunión.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-xs font-bold text-white hover:bg-slate-800"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Completa tus datos para coordinar
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Empresa / Planta *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Viña / Laboratorio"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Correo Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      País de la Planta
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.name}>
                          {c.flag} {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Líneas o Máquinas
                    </label>
                    <select
                      value={formData.lines}
                      onChange={(e) => setFormData({ ...formData, lines: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    >
                      <option value="1 a 3 líneas">1 a 3 líneas (Piloto)</option>
                      <option value="4 a 10 líneas">4 a 10 líneas</option>
                      <option value="Más de 10 líneas">Más de 10 líneas / Planta Completa</option>
                      <option value="Multi-Planta">Múltiples Plantas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Solución o Módulo de Mayor Interés
                  </label>
                  <select
                    value={formData.module}
                    onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  >
                    <option value="MTcontrol (OEE & Paradas)">MTcontrol (OEE & Paradas en Tiempo Real)</option>
                    <option value="MTweight (Pesaje & Balanzas)">MTweight (Pesaje & Balanzas Digitales)</option>
                    <option value="MTenergy (Eficiencia Energética)">MTenergy (Eficiencia Energética & ISO 50001)</option>
                    <option value="MTflow (Digitalización OT)">MTflow (Digitalización de Órdenes de Trabajo)</option>
                    <option value="Suite Completa">Suite Completa</option>
                    <option value="Programa de Partners">Interés en Programa de Partners</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Cuéntanos brevemente sobre tus desafíos o necesidades
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ej. Queremos medir tiempos muertos en líneas de envasado y conectarnos con SAP..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Demostración</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Direct Hotlines (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Lines */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span>Líneas Directas de Atención</span>
              </h3>

              <div className="space-y-3">
                {COUNTRIES.map((c) => (
                  <div
                    key={c.code}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{c.flag}</span>
                      <span className="font-bold text-slate-800">{c.name}</span>
                    </div>
                    <a
                      href={`tel:${c.phone}`}
                      className="font-mono font-bold text-blue-600 hover:underline"
                    >
                      {c.phoneFormatted}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Correo central: </span>
                <a
                  href="mailto:comercial@mtsolutions.io"
                  className="text-blue-600 font-bold hover:underline"
                >
                  comercial@mtsolutions.io
                </a>
              </div>
            </div>

            {/* Quality Box */}
            <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 mb-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Compromiso de Calidad MT Solutions</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluamos la factibilidad técnica de tus máquinas sin costo. Todos nuestros contratos incluyen capacitación para operadores y soporte Nivel 2 continuo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
