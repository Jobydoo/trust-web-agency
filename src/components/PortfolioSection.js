'use client';

import { useState } from 'react';
import { portfolioProjects } from '@/data/projectsData';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes les Réalisations' },
    { id: 'Tourisme & Réservations', label: 'Tourisme & Voyage' },
    { id: 'Circuits & Voyages Culturels', label: 'Google Ads & ROI' },
    { id: 'Excursions & Billetterie', label: 'E-Commerce & CMI' },
    { id: 'Transport VIP & Prestige', label: 'CRM & Automatisation' },
    { id: 'Luxe & Voyages de Noces', label: 'Design HorizonX' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>🏆</span> Études de Cas & Résultats Vérifiés
          </div>
          <h2>
            Nos réalisations parlent en <span className="gradient-accent">chiffres réels</span>.
          </h2>
          <p>
            Découvrez comment nous avons propulsé des entreprises marocaines et internationales
            en tête de leur marché grâce à notre approche combinée Web + Ads + CRM.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                padding: '9px 20px',
                borderRadius: '999px',
                border: activeFilter === cat.id ? '1px solid #00F2FE' : '1px solid rgba(255, 255, 255, 0.08)',
                background: activeFilter === cat.id ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: activeFilter === cat.id ? '#00F2FE' : '#A3AED0',
                fontWeight: '600',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
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
                padding: '30px'
              }}
            >
              <div>
                {/* Card Header with gradient banner */}
                <div
                  style={{
                    height: '110px',
                    borderRadius: '14px',
                    background: project.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      fontWeight: '700'
                    }}
                  >
                    {project.tag}
                  </span>
                  <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                    {project.clientUrl}
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', color: '#00F2FE', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', marginBottom: '6px' }}>
                  {project.category}
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '14px' }}>
                  {project.title}
                </h3>

                {/* Challenge & Solution */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.84rem', color: '#A3AED0', marginBottom: '8px', lineHeight: '1.5' }}>
                    <strong style={{ color: '#FFFFFF' }}>Défi :</strong> {project.challenge}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#A3AED0', lineHeight: '1.5' }}>
                    <strong style={{ color: '#05CD99' }}>Solution :</strong> {project.solution}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                  {project.stack.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        color: '#CBD5E1'
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
                  paddingTop: '16px',
                  fontSize: '0.86rem',
                  fontWeight: '700',
                  color: '#05CD99',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>📈</span>
                <span>{project.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
