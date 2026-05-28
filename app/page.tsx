import FeaturedPropertiesSection from "@/components/landing/FeaturedPropertiesSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import InvestmentDisclaimer from "@/components/landing/InvestmentDisclaimer";
import PropertyTokenizationSection from "@/components/landing/PropertyTokenizationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#061a31]">
      <Header />
      <main>
        <HeroSection />
        <div className="mx-auto max-w-[1760px] space-y-6 px-4 py-6 sm:px-6 lg:px-10">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.75fr)_minmax(380px,0.95fr)]">
            <FeaturedPropertiesSection />
            <PropertyTokenizationSection />
          </div>
          <HowItWorksSection />
        </div>
        <InvestmentDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
