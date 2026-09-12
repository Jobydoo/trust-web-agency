import Navbar from '@/components/Navbar';
import RoiCalculator from '@/components/RoiCalculator';
import CrmSimulator from '@/components/CrmSimulator';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export const metadata = {
  title: "Simulateur de ROI & Rentabilité Digitale — Outil Gratuit",
  description: "Calculez gratuitement votre retour sur investissement prévisionnel en fonction de votre budget publicitaire, de votre panier moyen et de votre coût d'acquisition.",
  alternates: {
    canonical: "https://trustwebagency.com/calculateur-roi"
  }
};

export default function RoiCalculatorPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0B0F19', paddingTop: '100px' }}>
      <Navbar />
      <RoiCalculator />
      <CrmSimulator />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
