'use client';

import { citiesData } from '@/data/agencyData';
import Link from 'next/link';

export default function LocalSeoHub() {
  return (
    <section id="villes" style={{ padding: '100px 0', background: 'rgba(15, 23, 42, 0.4)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-cyan section-eyebrow">
            <span>📍</span> Présence Nationale & Internationale
          </div>
          <h2>
            Votre agence web de référence à <span className="gradient-accent">Casablanca, Rabat, Marrakech</span> & partout au Maroc.
          </h2>
          <p>
            Que vous soyez une entreprise marocaine en pleine expansion ou une marque internationale
            ciblant le marché francophone et MENA, nous adaptons votre stratégie aux réalités locales de votre audience.
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
                padding: '28px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ fontSize: '1.6rem' }}>🏙️</span>
                <span className="badge badge-primary" style={{ fontSize: '0.72rem' }}>
                  Agence Web
                </span>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '8px' }}>
                Agence Web {city.name}
              </h3>
              <p style={{ color: '#A3AED0', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '18px' }}>
                Accompagnement dédié pour les acteurs de {city.name} : création de sites vitrines et e-commerce, campagnes publicitaires géolocalisées et CRM.
              </p>
              <div style={{ fontSize: '0.8rem', color: '#00F2FE', fontWeight: '600', marginBottom: '16px' }}>
                Secteur clé : {city.focus}
              </div>
              <Link
                href="/#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.86rem',
                  fontWeight: '700',
                  color: '#FFFFFF'
                }}
              >
                <span>Démarrer à {city.name}</span>
                <span style={{ color: '#00F2FE' }}>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
