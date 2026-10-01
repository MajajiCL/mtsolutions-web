"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { JsonLd } from "@/components/ui/JsonLd";
import { getFaqSchema } from "@/lib/schema";

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQS[0]?.id || "");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  const faqSchemaData = getFaqSchema(
    FAQS.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <section className="py-24 bg-[#080d16] relative border-t border-slate-800/80">
      <JsonLd data={faqSchemaData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Todo lo que necesitas saber sobre el Software OEE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Respuestas a las dudas más habituales sobre instalación, integración con máquinas y retorno de inversión.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all border overflow-hidden ${
                  isOpen
                    ? "bg-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-950/30"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-white text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
