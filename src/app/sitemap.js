import { blogsData } from '@/data/blogsData';

const blogDates = {
  "nextjs-vs-wordpress-2026-performance": "2026-02-18",
  "guide-seo-maroc-dominer-google": "2026-02-15",
  "media-buying-rentable-google-meta-ads": "2026-02-12",
  "connecter-site-web-sage-100-cloud-erp": "2026-02-08",
  "core-web-vitals-vitesse-site-impact-chiffre-affaires": "2026-02-05",
  "crm-sur-mesure-vs-hubspot-salesforce-pme": "2026-02-02",
  "paiement-en-ligne-maroc-cmi-stripe-payzone": "2026-01-28",
  "tracking-serveur-capi-meta-ga4-cookieless": "2026-01-24",
  "ecommerce-haute-conversion-maroc-international": "2026-01-20",
  "google-ads-search-vs-performance-max-b2b": "2026-01-16",
  "automatisation-whatsapp-business-api-conversion": "2026-01-11",
  "seo-local-google-business-profile-pack-local": "2026-01-07",
  "refonte-site-web-reussie-checklist-migration": "2026-01-03",
  "audit-technique-site-web-erreurs-critiques": "2025-12-28",
  "copywriting-persuasif-psychologie-achat": "2025-12-22",
  "tunnels-de-vente-b2b-generation-leads": "2025-12-17",
  "cybersecurite-web-protection-sites-entreprises": "2025-12-12",
  "architecture-jamstack-vercel-edge-avantages": "2025-12-08",
  "calculer-garantir-roi-agence-web": "2025-12-02",
  "tendances-digital-maroc-afrique-2026-2030": "2025-11-25"
};

export default async function sitemap() {
  const baseUrl = 'https://trustwebagency.com';
  const currentDate = new Date().toISOString();

  // Core Main Routes (Standard W3C / Google Search Console compliant, no '#' fragments)
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculateur-roi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // 20 In-Depth Blog Post Routes with specific last modified dates
  const blogRoutes = blogsData.map((post) => {
    const isoDate = blogDates[post.slug] || post.dateIso || '2026-01-15';
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: `${isoDate}T12:00:00.000Z`,
      changeFrequency: 'weekly',
      priority: 0.85,
    };
  });

  return [...mainRoutes, ...blogRoutes];
}
