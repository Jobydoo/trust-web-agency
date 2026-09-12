import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustMarquee from '@/components/TrustMarquee';
import ServicesSection from '@/components/ServicesSection';
import CompetitorComparison from '@/components/CompetitorComparison';
import RoiCalculator from '@/components/RoiCalculator';
import CrmSimulator from '@/components/CrmSimulator';
import PortfolioSection from '@/components/PortfolioSection';
import LocalSeoHub from '@/components/LocalSeoHub';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0B0F19' }}>
      <Navbar />
      <Hero />
      <TrustMarquee />
      <ServicesSection />
      <CompetitorComparison />
      <RoiCalculator />
      <CrmSimulator />
      <PortfolioSection />
      <LocalSeoHub />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
