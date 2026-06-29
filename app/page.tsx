import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
