import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { StatsSection } from '@/components/StatsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ComparisonSection } from '@/components/ComparisonSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <StatsSection />
      <FeaturesSection />
      <ComparisonSection />
      <HowItWorksSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
