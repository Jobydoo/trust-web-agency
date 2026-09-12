'use client';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Karim Benjelloun",
      role: "Fondateur & Directeur Général",
      company: "Morocco Desert Trips",
      location: "Marrakech / Ouarzazate",
      rating: 5,
      quote: "Trust Web Agency a littéralement transformé notre entreprise. Notre ancien site WordPress mettait 7 secondes à charger et nous perdions 70% de nos visiteurs. Avec la nouvelle plateforme Next.js et la capture automatique sur WhatsApp, nos réservations directes ont bondi de +340% en 4 mois !",
      metric: "+340% de réservations directes"
    },
    {
      name: "Sophia Alami",
      role: "Directrice Marketing",
      company: "Best Travel Morocco",
      location: "Casablanca",
      rating: 5,
      quote: "Leur maîtrise du Media Buying Google Ads est chirurgicale. Auparavant, nous dépensions plus de 280 MAD par devis qualifié. L'équipe de Trust Web Agency a restructuré nos campagnes et créé des tunnels ultra-rapides : notre coût par lead est tombé à 95 MAD avec un taux de closing remarquable.",
      metric: "Coût par lead divisé par 3"
    },
    {
      name: "Tarik Mansouri",
      role: "Gérant Associé",
      company: "Transport & Circuits VIP",
      location: "Tanger / Rabat",
      rating: 5,
      quote: "L'intégration du CRM avec notre gestion et l'API WhatsApp nous fait gagner au moins 15 heures chaque semaine. Dès qu'un client réserve en ligne, le chauffeur et le contrat PDF sont assignés sans aucune saisie manuelle. Un niveau de professionnalisme rare sur le marché.",
      metric: "15h économisées chaque semaine"
    }
  ];

  return (
    <section style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-emerald section-eyebrow">
            <span>★ 4.9/5 Note Moyenne</span>
          </div>
          <h2>
            Ce que disent les dirigeants qui nous font <span className="gradient-accent">confiance</span>.
          </h2>
          <p>
            Des retours d'expérience concrets d'entrepreneurs et de directeurs marketing
            qui ont fait le choix de la vitesse et de la rentabilité.
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
                padding: '32px'
              }}
            >
              <div>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', color: '#FFB547', marginBottom: '16px', fontSize: '1.1rem' }}>
                  {'★'.repeat(rev.rating)}
                </div>

                {/* Quote */}
                <p style={{ color: '#CBD5E1', fontSize: '0.96rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '24px' }}>
                  "{rev.quote}"
                </p>
              </div>

              <div>
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: '700', color: '#FFFFFF', fontSize: '0.98rem' }}>
                      {rev.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#707EAE' }}>
                      {rev.role} · {rev.company}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#00F2FE' }}>
                      📍 {rev.location}
                    </div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(5, 205, 153, 0.12)',
                      border: '1px solid rgba(5, 205, 153, 0.3)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.72rem',
                      color: '#05CD99',
                      fontWeight: '700',
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
