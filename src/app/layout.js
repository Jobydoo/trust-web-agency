import './globals.css';
import { agencyConfig } from '@/data/agencyData';

export const metadata = {
  metadataBase: new URL('https://trustwebagency.com'),
  title: {
    default: "Trust Web Agency — Agence Web & Croissance Digitale N°1 | Casablanca & International",
    template: "%s | Trust Web Agency"
  },
  description: "Agence web d'élite nouvelle génération : Création de sites Next.js ultra-rapides (<0.5s), Media Buying Google & Meta Ads à fort ROI, CRM sur-mesure et SEO d'autorité. Casablanca, Rabat, Marrakech & International.",
  keywords: [
    "agence web maroc",
    "création de site internet casablanca",
    "agence marketing digital maroc",
    "media buying maroc",
    "google ads casablanca",
    "crm sur mesure maroc",
    "agence seo maroc",
    "développement web nextjs",
    "trust web agency",
    "agence digitale rabat marrakech",
    "intégration sage 100 web",
    "expert meta ads maroc"
  ],
  authors: [{ name: "Trust Web Agency" }],
  creator: "Trust Web Agency",
  publisher: "Trust Web Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://trustwebagency.com",
    languages: {
      "fr-FR": "https://trustwebagency.com",
      "en-US": "https://trustwebagency.com/en",
      "x-default": "https://trustwebagency.com"
    }
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://trustwebagency.com",
    title: "Trust Web Agency — Agence Web & Croissance Digitale N°1",
    description: "Création de sites Next.js ultra-rapides, Media Buying ROI, CRM sur mesure et SEO élite. Propulsez votre entreprise avec l'agence N°1.",
    siteName: "Trust Web Agency",
    images: [
      {
        url: "https://trustwebagency.com/images/og-trustwebagency.webp",
        width: 1200,
        height: 630,
        alt: "Trust Web Agency — Agence Web & Croissance Digitale"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Web Agency — Agence Web & Croissance N°1",
    description: "Sites Next.js foudroyants, Media Buying rentable, CRM sur mesure & SEO d'élite.",
    images: ["https://trustwebagency.com/images/og-trustwebagency.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: "google-site-verification-trustwebagency-token",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://trustwebagency.com/#organization",
        "name": "Trust Web Agency",
        "url": "https://trustwebagency.com",
        "logo": "https://trustwebagency.com/images/logo.webp",
        "email": "contact@trustwebagency.com",
        "telephone": "+212645833671",
        "sameAs": [
          "https://www.linkedin.com/company/trustwebagency",
          "https://www.instagram.com/trustwebagency",
          "https://facebook.com/trustwebagency"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+212645833671",
            "contactType": "customer service",
            "email": "contact@trustwebagency.com",
            "availableLanguage": ["French", "English", "Arabic"],
            "areaServed": ["MA", "FR", "BE", "CH", "AE", "CA"]
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://trustwebagency.com/#localbusiness",
        "name": "Trust Web Agency Casablanca",
        "url": "https://trustwebagency.com",
        "telephone": "+212645833671",
        "email": "contact@trustwebagency.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Boulevard d'Anfa, Tour Crystal",
          "addressLocality": "Casablanca",
          "postalCode": "20000",
          "addressCountry": "MA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.589886",
          "longitude": "-7.603869"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "18:30"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "184",
          "reviewCount": "184"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://trustwebagency.com/#website",
        "url": "https://trustwebagency.com",
        "name": "Trust Web Agency",
        "publisher": { "@id": "https://trustwebagency.com/#organization" },
        "inLanguage": "fr-FR"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://trustwebagency.com/#service",
        "name": "Services Digitaux & Ingénierie Web",
        "provider": { "@id": "https://trustwebagency.com/#organization" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Trust Web Agency",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Création de Site Web Next.js & E-Commerce" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Media Buying Google Ads & Meta Ads" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Développement CRM Sur-Mesure & ERP Sage" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Référencement Naturel SEO Élite & Rédaction" } }
          ]
        }
      }
    ]
  };

  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Universal Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 & Google Tag Manager Ready DataLayer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TRUSTWEBAGENCY', { page_path: window.location.pathname });
            `
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
