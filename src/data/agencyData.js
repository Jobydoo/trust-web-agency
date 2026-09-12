export const agencyConfig = {
  name: "Trust Web Agency",
  legalName: "Trust Web Agency SARL",
  domain: "https://trustwebagency.com",
  tagline: "L'Agence Web & Croissance Nº1 Nouvelle Génération",
  shortDesc: "Architecture Next.js ultra-rapide, Media Buying Google & Meta Ads à fort ROI, CRM sur-mesure et SEO d'élite.",
  email: "contact@trustwebagency.com",
  phone: "+212 645 833 671",
  phoneRaw: "+212645833671",
  whatsappUrl: "https://wa.me/212645833671?text=Bonjour%20Trust%20Web%20Agency%2C%20je%20souhaite%20un%20devis%20gratuit%20pour%20mon%20projet.",
  address: {
    street: "Boulevard d'Anfa, Tour Crystal",
    locality: "Casablanca",
    postalCode: "20000",
    country: "Maroc"
  },
  hours: "Lun - Ven: 08:30 - 18:30 | Support WhatsApp 24/7",
  stats: [
    { value: "180+", label: "Projets d'Élite Déployés", sub: "Au Maroc & International" },
    { value: "3.8x", label: "Multiplicateur de ROI Moyen", sub: "Sur nos campagnes Ads" },
    { value: "0.45s", label: "Vitesse d'Affichage Moyenne", sub: "Core Web Vitals optimisés à 100%" },
    { value: "4.9/5", label: "Satisfaction Client", sub: "Basé sur +120 avis vérifiés" }
  ],
  partners: [
    { name: "Google Partner", desc: "Certification Search, Shopping & Performance Max" },
    { name: "Meta Business Partner", desc: "Facebook & Instagram Ads Spécialiste CAPI" },
    { name: "Vercel Edge Cloud", desc: "Hébergement mondial sans latence & SSL" },
    { name: "Stripe & CMI", desc: "Paiements bancaires marocains & internationaux" },
    { name: "Sage 100 Cloud", desc: "Synchronisation ERP, stocks & facturation automatique" },
    { name: "WhatsApp Business API", desc: "Capture & relance automatique des prospects" }
  ]
};

export const servicesData = [
  {
    id: "creation-web",
    num: "01",
    title: "Création Web & E-Commerce Haute Vitesse",
    badge: "Core Web Vitals 100/100",
    shortDesc: "Des sites vitrines et boutiques e-commerce codés sur Next.js, ultra-rapides, convertissant 3x plus que les sites WordPress ordinaires.",
    icon: "🌐",
    features: [
      "Architecture Next.js 14 & React : Vitesse d'affichage sous la seconde (< 0.5s)",
      "Design Futuriste HorizonX : Dark mode luxueux, UX mobile-first et micro-interactions",
      "E-Commerce Haute Conversion : Passerelle de paiement CMI (Maroc) & Stripe (Monde)",
      "SEO Technique Intégré : Balisage sémantique Schema.org, sitemap dynamique et métadonnées",
      "Sécurité & Scalabilité : Zéro plugin vulnérable, SSL automatique et CDN mondial"
    ],
    results: "+280% de temps passé sur le site · Taux de rebond divisé par 2"
  },
  {
    id: "media-buying",
    num: "02",
    title: "Media Buying & Acquisition Rentable",
    badge: "ROI Mesurable Garanti",
    shortDesc: "Stoppez le gaspillage de budget publicitaire. Nous pilotons vos campagnes Google Ads et Meta Ads avec un suivi chirurgical de chaque dirham investi.",
    icon: "📈",
    features: [
      "Google Ads (Search & Shopping) : Dominez les recherches transactionnelles à haute intention",
      "Meta Ads (Facebook & Instagram) : Création de visuels captivants et ciblage d'audience qualifiée",
      "Tracking Serveur CAPI & GA4 : Mesure précise des ventes et leads sans perte de données",
      "Tunnels de Vente Hypnotiques : Pages d'atterrissage optimisées pour convertir le trafic payant",
      "A/B Testing Continu : Baisse systématique du Coût Par Acquisition (CPA) semaine après semaine"
    ],
    results: "-42% sur le coût par lead · ROAS moyen constaté de 3.8x à 6.2x"
  },
  {
    id: "crm-automatisation",
    num: "03",
    title: "CRM & Automatisations Métier Sur-Mesure",
    badge: "Gain de 15h/semaine",
    shortDesc: "Centralisez vos prospects, automatisez vos relances WhatsApp et synchronisez votre activité avec vos outils de gestion et ERP (Sage 100).",
    icon: "⚙️",
    features: [
      "Pipeline Commercial Intuitif : Suivi de chaque devis et opportunité sans oubli",
      "Automatisation WhatsApp API : Notification instantanée dès qu'un prospect fait une demande",
      "Connecteur ERP Sage 100 Cloud : Synchronisation en direct des stocks, commandes et factures",
      "Tableaux de Bord Décisionnels : Chiffre d'affaires, marge et performance commerciale en direct",
      "Gain de Productivité : Élimination des tâches manuelles répétitives chronophages"
    ],
    results: "98% des leads rappelés en moins de 15 min · 0 devis perdu"
  },
  {
    id: "seo-redaction",
    num: "04",
    title: "SEO Élite & Rédaction 100% Humanisée",
    badge: "Autorité Maximale Google",
    shortDesc: "Propulsez votre marque sur les requêtes les plus rentables de Google grâce à des cocons sémantiques et un contenu authentique sans détection IA.",
    icon: "🎯",
    features: [
      "Recherche Approfondie de Mots-Clés : Mots-clés transactionnels à fort volume et faible concurrence",
      "Contenu 100% Humanisé : Rédaction experte, engageante et captivante (zéro contenu IA générique)",
      "SEO Local Dominateur : Première page sur Casablanca, Rabat, Marrakech, Tanger et Fès",
      "Audit Technique & Netlinking : Backlinks d'autorité et optimisation de l'architecture interne",
      "Conformité Algorithmique : Pérennité garantie face aux mises à jour Core de Google"
    ],
    results: "+340% de trafic organique en 6 mois · Top 3 sur les mots-clés stratégiques"
  }
];

export const comparisonData = [
  {
    feature: "Technologie & Vitesse",
    traditional: "WordPress / Elementor lourd (4-8s de chargement, dizaines de plugins)",
    trustAgency: "Next.js 14 moderne & ultra-rapide (< 0.5s, Core Web Vitals 100/100)",
    advantage: "Vitesse multipliée par 8, Google adore et vos clients n'attendent pas"
  },
  {
    feature: "Approche Business",
    traditional: "Simple livreur de site web (une fois payé, vous êtes livré à vous-même)",
    trustAgency: "Partenaire Croissance 360° (Site + Campagnes Ads + CRM relié)",
    advantage: "Votre site n'est pas une dépense, c'est un actif qui génère des clients chaque jour"
  },
  {
    feature: "Gestion des Leads",
    traditional: "Formulaire basique envoyé par mail (souvent perdu dans les spams)",
    trustAgency: "Capture instantanée WhatsApp API + Pipeline CRM automatisé",
    advantage: "Vous répondez en 2 minutes au lieu de 2 jours : vos ventes décollent"
  },
  {
    feature: "Qualité du Contenu",
    traditional: "Textes générés par IA générique, répétitifs et pénalisables par Google",
    trustAgency: "Rédaction 100% humanisée, persuasive, experte et orientée psychologie d'achat",
    advantage: "Contenu captivant sans détection IA qui instaure une confiance immédiate"
  },
  {
    feature: "Transparence & Suivi",
    traditional: "Rapports flous mensuels incompréhensibles sans preuve de ROI",
    trustAgency: "Tableau de bord transparent en temps réel avec coût par lead et ROAS exact",
    advantage: "Vous savez précisément combien vous rapporte chaque dirham investi"
  }
];

export const citiesData = [
  { name: "Casablanca", slug: "casablanca", focus: "Capitale économique, PME, B2B & Finance" },
  { name: "Rabat", slug: "rabat", focus: "Secteur institutionnel, corporate & cabinets d'élite" },
  { name: "Marrakech", slug: "marrakech", focus: "Tourisme de luxe, hôtellerie, agences & immobilier" },
  { name: "Tanger", slug: "tanger", focus: "Industrie, logistique, import-export & tech" },
  { name: "Fès & Meknès", slug: "fes", focus: "Artisanat d'art, commerce & éducation" },
  { name: "Agadir", slug: "agadir", focus: "Agroalimentaire, tourisme balnéaire & services" },
  { name: "France & International", slug: "international", focus: "Paris, Lyon, Bruxelles, Genève & Dubaï" }
];

export const faqData = [
  {
    q: "Pourquoi choisir Trust Web Agency plutôt qu'une agence web classique ?",
    a: "La majorité des agences se contentent d'installer un thème WordPress lourd qui met 6 secondes à charger et n'attire aucun visiteur. Chez Trust Web Agency, nous combinons trois forces rares : une ingénierie Next.js ultra-rapide (< 0.5s), une maîtrise chirurgicale du Media Buying (Google & Meta Ads) pour vous amener du trafic qualifié, et un CRM automatisé WhatsApp pour convertir vos visiteurs en clients payants sans délai."
  },
  {
    q: "Combien de temps faut-il pour concevoir et mettre en ligne mon site ?",
    a: "Grâce à nos processus agiles et nos architectures modulaires, un site vitrine d'élite est généralement livré et mis en ligne en 10 à 15 jours ouvrés. Une plateforme e-commerce ou un projet intégrant un CRM personnalisé prend entre 3 et 4 semaines, incluant tests rigoureux, formation de vos équipes et validation finale."
  },
  {
    q: "Comment garantissez-vous que le contenu ne sera pas détecté comme de l'IA ?",
    a: "Nous refusons le copier-coller d'outils automatiques. Chaque ligne de texte est rédigée et peaufinée par des copywriters chevronnés, en utilisant le storytelling, des exemples concrets de votre marché, une voix de marque authentique et des tournures idiomatiques naturelles. Votre contenu passe avec succès tous les tests de détection IA et offre une autorité maximale auprès de Google."
  },
  {
    q: "Est-ce que je pourrai relier mon propre nom de domaine ?",
    a: "Absolument. Nous configurons l'infrastructure sur le Cloud Vercel mondial avec certificat SSL gratuit. Vous conservez la pleine propriété de votre nom de domaine (par exemple Trustwebagency.com ou votre nom d'entreprise) et nous nous chargeons de la configuration DNS en quelques clics."
  },
  {
    q: "Proposez-vous un accompagnement après la mise en ligne ?",
    a: "Oui, absolument. Nous ne vous laissons jamais seul. Nous offrons un accompagnement technique et stratégique continu, des audits réguliers de performance, le pilotage de vos campagnes publicitaires et l'optimisation de vos automatisations CRM."
  },
  {
    q: "Comment obtenir un devis gratuit pour mon projet ?",
    a: "Il vous suffit de remplir notre formulaire en ligne ou de nous contacter directement par WhatsApp au +212 645 833 671 ou par email à contact@trustwebagency.com. Nous analysons vos besoins et vous transmettons une proposition détaillée sous 24h ouvrées."
  }
];
