import AboutUsSection from "@/components/homepage/about-us";
import FeaturesSection from "@/components/homepage/features-9";
import HeroSection from "@/components/homepage/hero-section";
import IntegrationsSection from "@/components/homepage/integrations";
import ShowcaseSection from "@/components/homepage/showcase";
import StatsSection from "@/components/homepage/stats";
import Testimonials from "@/components/homepage/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <FeaturesSection />
      <StatsSection />
      <IntegrationsSection />
      <Testimonials />
      <ShowcaseSection />
    </div>
  );
}
