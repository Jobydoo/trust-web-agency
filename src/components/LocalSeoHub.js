'use client';

import { citiesData } from '@/data/agencyData';
import Link from 'next/link';

export default function LocalSeoHub() {
  return (
    <section id="villes" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-cyan section-eyebrow">
            <span>COUVERTURE TERRITORIALE</span>
          </div>
          <h2>
            Votre agence web de référence à <span style={{ color: '#3B82F6' }}>Casablanca, Rabat, Marrakech</span> & partout au Maroc.
          </h2>
          <p>
            Que vous soyez une entreprise marocaine en pleine expansion ou une marque internationale
            ciblant le marché francophone et MENA, nous adaptons votre stratégie aux réalités économiques locales.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid-3">
          {citiesData.map((city, idx) => (
            <div
              key={idx}
              id={`agence-web-${city.slug}`}
              className="horizon-card"
              style={{
                padding: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.72rem', color: '#60A5FA', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Agence Web
                </span>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#10B981'
                  }}
                />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '8px' }}>
                {city.name}
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.86rem', lineHeight: '1.6', marginBottom: '14px' }}>
                Accompagnement dédié pour les acteurs de {city.name} : création de plateformes Next.js, campagnes publicitaires géolocalisées et CRM.
              </p>
              <div style={{ fontSize: '0.76rem', color: '#64748B', marginBottom: '14px' }}>
                Pôle économique : {city.focus}
              </div>
              <Link
                href="/#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  color: '#3B82F6'
                }}
              >
                <span>Démarrer un projet à {city.name}</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
