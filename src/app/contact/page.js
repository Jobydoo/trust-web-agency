import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export const metadata = {
  title: "Contactez Trust Web Agency — Devis Gratuit & Audit Stratégique",
  description: "Contactez Trust Web Agency pour un devis gratuit en 24h. Email : contact@trustwebagency.com, Téléphone & WhatsApp : +212 645 833 671. Casablanca & International.",
  alternates: {
    canonical: "https://trustwebagency.com/contact"
  }
};

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0B0F19', paddingTop: '100px' }}>
      <Navbar />
      <ContactSection />
      <FaqSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
