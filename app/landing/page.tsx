import { HeroSection } from "@/components/landing/hero-section"
import { TrustBar } from "@/components/landing/trust-bar"
import { TimelineSection } from "@/components/landing/timeline-section"
import { CalculatorSection } from "@/components/landing/calculator-section"
import { CaseStudiesSection } from "@/components/landing/case-studies-section"
import { PriceTableSection } from "@/components/landing/price-table-section"
import { TransparencySection } from "@/components/landing/transparency-section"
import { FAQSection } from "@/components/landing/faq-section"
import { FinalCTASection } from "@/components/landing/final-cta-section"
import { LandingFooter } from "@/components/landing/landing-footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <TimelineSection />
      <CalculatorSection />
      <CaseStudiesSection />
      <PriceTableSection />
      <TransparencySection />
      <FAQSection />
      <FinalCTASection />
      <LandingFooter />
    </main>
  )
}
