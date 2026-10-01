import React from "react";
import { Hero } from "@/components/home/Hero";
import { BentoSuiteShowcase } from "@/components/home/BentoSuiteShowcase";
import { OeeRoiCalculator } from "@/components/home/OeeRoiCalculator";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ClientTestimonials } from "@/components/home/ClientTestimonials";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoSuiteShowcase />
      <section id="calculadora" className="py-20 bg-[#f8fafc] scroll-mt-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OeeRoiCalculator />
        </div>
      </section>
      <HowItWorks />
      <ClientTestimonials />
      <IntegrationsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
