'use client';

import { useState } from 'react';
import { portfolioProjects } from '@/data/projectsData';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'Tourisme & Réservations', label: 'Tourisme & Voyage' },
    { id: 'Circuits & Voyages Culturels', label: 'Acquisition Ads & ROI' },
    { id: 'Excursions & Billetterie', label: 'E-Commerce & CMI' },
    { id: 'Transport VIP & Prestige', label: 'CRM & Automatisation' },
    { id: 'Luxe & Voyages de Noces', label: 'Plateformes Next.js' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" style={{ padding: '110px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>RÉALISATIONS & ÉTUDES DE CAS</span>
          </div>
          <h2>
            Nos réalisations parlent en <span style={{ color: '#3B82F6' }}>chiffres vérifiés</span>.
          </h2>
          <p>
            Découvrez comment nous avons propulsé des entreprises au Maroc et à l'international
            en tête de leur marché grâce à notre approche combinée Web + Ads + CRM.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '42px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                padding: '7px 16px',
                borderRadius: '6px',
                border: activeFilter === cat.id ? '1px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.08)',
                background: activeFilter === cat.id ? 'rgba(37, 99, 235, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                color: activeFilter === cat.id ? '#60A5FA' : '#94A3B8',
                fontWeight: '500',
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="horizon-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '26px'
              }}
            >
              <div>
                {/* Header tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#60A5FA',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: '600'
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      color: '#94A3B8',
                      fontFamily: 'monospace'
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#F8FAFC', marginBottom: '12px' }}>
                  {project.title}
                </h3>

                {/* Challenge & Solution */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.84rem', color: '#94A3B8', marginBottom: '6px', lineHeight: '1.5' }}>
                    <strong style={{ color: '#F8FAFC' }}>Défi :</strong> {project.challenge}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#94A3B8', lineHeight: '1.5' }}>
                    <strong style={{ color: '#10B981' }}>Solution :</strong> {project.solution}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.stack.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        color: '#94A3B8'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Result */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '14px',
                  fontSize: '0.84rem',
                  fontWeight: '600',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>●</span>
                <span>{project.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
