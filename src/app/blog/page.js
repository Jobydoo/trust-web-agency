import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import BlogListClient from '@/components/BlogListClient';
import Link from 'next/link';

export const metadata = {
  title: "Blog & Décryptages Stratégiques — Trust Web Agency",
  description: "20 analyses complètes et retours d'expérience sur Next.js, le SEO au Maroc, le Media Buying rentabilisé, l'automatisation CRM et le e-commerce à forte conversion.",
  alternates: {
    canonical: "https://trustwebagency.com/blog",
  },
  openGraph: {
    title: "Blog & Décryptages Stratégiques — Trust Web Agency",
    description: "Analyses techniques et études de cas sur Next.js 14, le SEO d'autorité, les campagnes publicitaires rentables et les intégrations CRM.",
    url: "https://trustwebagency.com/blog",
    siteName: "Trust Web Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Décryptages Stratégiques — Trust Web Agency",
    description: "Analyses de performance web, guides SEO Maroc et stratégies de Media Buying.",
  }
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog & Analyses Stratégiques — Trust Web Agency",
    "description": "Guides d'experts et études de cas sur l'ingénierie web Next.js, le SEO, le Media Buying et l'automatisation CRM.",
    "url": "https://trustwebagency.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Trust Web Agency",
      "url": "https://trustwebagency.com"
    }
  };

  return (
    <main style={{ minHeight: '100vh', background: '#08090C' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section style={{ paddingTop: '140px', paddingBottom: '90px' }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '20px', fontSize: '0.82rem', color: '#64748B' }}>
            <Link href="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#F8FAFC' }}>Blog & Analyses</span>
          </nav>

          {/* Page Header */}
          <div style={{ maxWidth: '800px', marginBottom: '44px' }}>
            <div className="badge badge-primary" style={{ marginBottom: '14px' }}>
              DOSSIERS TECHNIQUES & STRATÉGIE
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', color: '#F8FAFC', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.2', marginBottom: '16px' }}>
              Analyses, Guides & Retours d'Expérience Digitaux.
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: '1.65' }}>
              Explorez nos 20 dossiers de fond sur l'ingénierie Next.js, le référencement naturel au Maroc,
              le pilotage rentable du Media Buying et l'automatisation des flux commerciaux.
            </p>
          </div>

          {/* Interactive Client Component */}
          <BlogListClient />
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
