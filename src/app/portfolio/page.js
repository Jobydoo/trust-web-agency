import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export const metadata = {
  title: "Portfolio & Cas d'Études Vérifiés — Résultats Concrets",
  description: "Explorez nos réalisations concrètes au Maroc et à l'international : Morocco Desert Trips, Best Travel, Circuit Marrakech. Chiffres vérifiés et ROAS mesuré.",
  alternates: {
    canonical: "https://trustwebagency.com/portfolio"
  }
};

export default function PortfolioPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0B0F19', paddingTop: '100px' }}>
      <Navbar />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
