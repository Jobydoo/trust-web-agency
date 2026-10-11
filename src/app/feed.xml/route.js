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

export async function GET() {
  const baseUrl = 'https://trustwebagency.com';

  const rssItems = blogsData
    .map((post) => {
      const dateString = blogDates[post.slug] || post.dateIso || '2026-01-15';
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(dateString).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <category><![CDATA[${post.category}]]></category>
      <author><![CDATA[contact@trustwebagency.com (${post.author.name})]]></author>
    </item>`;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Trust Web Agency — Blog &amp; Analyses Stratégiques</title>
    <link>${baseUrl}/blog</link>
    <description>Analyses et études de cas sur l'ingénierie Next.js 14, le SEO d'autorité, le Media Buying et l'automatisation CRM.</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
