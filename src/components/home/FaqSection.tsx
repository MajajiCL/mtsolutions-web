"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
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
    <section className="py-24 bg-white relative border-b border-slate-200">
      <JsonLd data={faqSchemaData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Todo lo que necesitas saber sobre el Software OEE
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Respuestas a las dudas más habituales sobre instalación, conectividad y retorno de inversión.
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
                    ? "bg-slate-50 border-blue-400 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-4 animate-in fade-in duration-200">
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
