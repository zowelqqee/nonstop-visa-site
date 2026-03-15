import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustMetrics } from "@/components/trust-metrics";
import { Services } from "@/components/services";
import { TargetClients } from "@/components/target-clients";
import { Process } from "@/components/process";
import { WhyChooseUs } from "@/components/why-choose-us";
import { CaseStudies } from "@/components/case-studies";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <Services learnMoreBehavior="modal" />
      <Process />
      <TrustMetrics />
      <TargetClients />
      <CaseStudies />
      <WhyChooseUs />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
