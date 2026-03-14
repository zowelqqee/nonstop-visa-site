import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustMetrics } from "@/components/trust-metrics";
import { Services } from "@/components/services";
import { TargetClients } from "@/components/target-clients";
import { Process } from "@/components/process";
import { WhyChooseUs } from "@/components/why-choose-us";
import { CaseStudies } from "@/components/case-studies";
import { Team } from "@/components/team";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustMetrics />
      <Services learnMoreBehavior="modal" />
      <TargetClients />
      <Process />
      <WhyChooseUs />
      <CaseStudies />
      <Team />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
