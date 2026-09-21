import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { EditorialIntro } from "@/components/sections/EditorialIntro";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MobileServiceSection } from "@/components/sections/MobileServiceSection";
import { CeramicSection } from "@/components/sections/CeramicSection";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FAQ } from "@/components/sections/FAQ";
import { QuoteCTA } from "@/components/sections/QuoteCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <EditorialIntro />
      <ServicesSection />
      <BeforeAfterSection />
      <HowItWorks />
      <MobileServiceSection />
      <CeramicSection />
      <Gallery featuredOnly limit={5} />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <QuoteCTA />
    </>
  );
}
