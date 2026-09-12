'use client';

import { comparisonData } from '@/data/agencyData';

export default function CompetitorComparison() {
  return (
    <section id="comparatif" style={{ padding: '100px 0', background: 'rgba(15, 23, 42, 0.45)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-cyan section-eyebrow">
            <span>⚔️</span> Pourquoi Trust Web Agency Surpasse la Concurrence
          </div>
          <h2>
            La différence entre un simple prestataire et votre{' '}
            <span className="gradient-accent">partenaire de croissance</span>.
          </h2>
          <p>
            Voyez concrètement pourquoi les entreprises exigeantes quittent les agences web traditionnelles
            au profit de l'architecture Next.js et de l'écosystème Trust Web Agency.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div
          className="horizon-card"
          style={{
            padding: '0',
            overflowX: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '780px'
            }}
          >
            <thead>
              <tr style={{ background: 'rgba(67, 24, 255, 0.12)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <th style={{ padding: '22px 28px', color: '#FFFFFF', fontWeight: '700', fontSize: '1rem', width: '22%' }}>
                  Critères Clés
                </th>
                <th style={{ padding: '22px 28px', color: '#FF5B5B', fontWeight: '700', fontSize: '1rem', width: '36%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>✕</span> Agences Web Traditionnelles (ex. WordPress / Elementor)
                  </div>
                </th>
                <th style={{ padding: '22px 28px', color: '#00F2FE', fontWeight: '800', fontSize: '1.05rem', width: '42%', background: 'rgba(0, 242, 254, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>★</span> Trust Web Agency (Architecture Élite Next.js)
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: idx === comparisonData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                    background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)'
                  }}
                >
                  <td style={{ padding: '20px 28px', fontWeight: '700', color: '#FFFFFF', fontSize: '0.95rem' }}>
                    {item.feature}
                  </td>
                  <td style={{ padding: '20px 28px', color: '#A3AED0', fontSize: '0.92rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#FF5B5B', fontWeight: 'bold' }}>✕</span>
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td style={{ padding: '20px 28px', color: '#FFFFFF', fontSize: '0.92rem', background: 'rgba(0, 242, 254, 0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '6px' }}>
                      <span style={{ color: '#05CD99', fontWeight: 'bold' }}>✓</span>
                      <strong style={{ color: '#FFFFFF' }}>{item.trustAgency}</strong>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#00F2FE', paddingLeft: '22px' }}>
                      ↳ {item.advantage}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
