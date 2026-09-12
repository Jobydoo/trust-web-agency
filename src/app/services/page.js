import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import CompetitorComparison from '@/components/CompetitorComparison';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export const metadata = {
  title: "Nos Services d'Élite — Création Web, Media Buying, CRM & SEO",
  description: "Découvrez les 4 piliers d'excellence de Trust Web Agency : Sites Next.js ultra-rapides, Media Buying Google/Meta Ads à fort ROI, CRM sur-mesure et SEO d'autorité.",
  alternates: {
    canonical: "https://trustwebagency.com/services"
  }
};

export default function ServicesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0B0F19', paddingTop: '100px' }}>
      <Navbar />
      <ServicesSection />
      <CompetitorComparison />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
