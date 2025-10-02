import FAQsThree from "@/components/homepage/faqs-3";
import AboutUsSection from "@/components/homepage/about-us";
import FeaturesSection from "@/components/homepage/features-9";
import HeroSection from "@/components/homepage/hero-section";
import IntegrationsSection from "@/components/homepage/integrations";
import Pricing from "@/components/homepage/pricing";
import ShowcaseSection from "@/components/homepage/showcase";
import StatsSection from "@/components/homepage/stats";
import Testimonials from "@/components/homepage/testimonials";
import FooterSection from "@/components/homepage/footer";

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
      <FAQsThree />
      <Pricing />
      <FooterSection />
    </div>
  );
}
