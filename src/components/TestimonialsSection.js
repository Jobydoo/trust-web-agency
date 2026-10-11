'use client';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Karim Benjelloun",
      role: "Fondateur & Directeur Général",
      company: "Morocco Desert Trips",
      location: "Marrakech / Ouarzazate",
      rating: 5,
      quote: "Trust Web Agency a profondément transformé notre acquisition client. Notre ancien site WordPress mettait plus de 6 secondes à charger et nous perdions 70% de nos visiteurs mobiles. Avec la plateforme Next.js et la capture automatique sur WhatsApp, nos réservations directes ont progressé de +340% en 4 mois.",
      metric: "+340% de réservations directes"
    },
    {
      name: "Sophia Alami",
      role: "Directrice Marketing",
      company: "Best Travel Morocco",
      location: "Casablanca",
      rating: 5,
      quote: "Leur maîtrise de l'acquisition Google Ads est chirurgicale. Auparavant, nous dépensions plus de 280 MAD par devis qualifié. L'équipe a restructuré nos campagnes et créé des tunnels foudroyants : notre coût par lead est tombé à 95 MAD avec un taux de closing remarquable.",
      metric: "Coût par lead divisé par 3"
    },
    {
      name: "Tarik Mansouri",
      role: "Gérant Associé",
      company: "Transport & Circuits VIP",
      location: "Tanger / Rabat",
      rating: 5,
      quote: "L'intégration du CRM avec notre gestion et l'API WhatsApp nous fait gagner au moins 15 heures chaque semaine. Dès qu'un client réserve en ligne, le dossier et le devis sont traités sans aucune saisie manuelle. Un niveau de rigueur technique très rare sur le marché.",
      metric: "15h économisées chaque semaine"
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'rgba(14, 16, 22, 0.4)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-emerald section-eyebrow">
            <span>AVIS CLIENTS VÉRIFIÉS · 4.9/5</span>
          </div>
          <h2>
            Ce que disent les dirigeants qui nous font <span style={{ color: '#3B82F6' }}>confiance</span>.
          </h2>
          <p>
            Des retours d'expérience vérifiables d'entrepreneurs et de directeurs généraux
            qui ont fait le choix de la vitesse et de la rentabilité d'investissement.
          </p>
        </div>

        <div className="grid-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="horizon-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px'
              }}
            >
              <div>
                {/* Rating score */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#F59E0B', marginBottom: '16px', fontSize: '0.9rem' }}>
                  <span>★★★★★</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748B', marginLeft: '6px' }}>5.0 / 5.0</span>
                </div>

                {/* Quote */}
                <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '22px' }}>
                  "{rev.quote}"
                </p>
              </div>

              <div>
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: '600', color: '#F8FAFC', fontSize: '0.92rem' }}>
                      {rev.name}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#64748B' }}>
                      {rev.role} · {rev.company}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                      {rev.location}
                    </div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      color: '#10B981',
                      fontWeight: '600',
                      textAlign: 'right'
                    }}
                  >
                    {rev.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
