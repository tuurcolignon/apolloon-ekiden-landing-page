import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ConceptSection } from "@/components/concept-section";
import { ScheduleSection } from "@/components/schedule-section";
import { RouteSection } from "@/components/route-section";
import { FAQSection } from "@/components/faq-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <ScheduleSection />
      <RouteSection />
      <FAQSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
