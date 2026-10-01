import React from "react";
import { Hero } from "@/components/home/Hero";
import { SuiteOverview } from "@/components/home/SuiteOverview";
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
      <SuiteOverview />
      <section id="calculadora" className="py-16 bg-[#090e17] scroll-mt-20">
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
