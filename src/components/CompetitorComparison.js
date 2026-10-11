'use client';

import { comparisonData } from '@/data/agencyData';

export default function CompetitorComparison() {
  return (
    <section id="comparatif" style={{ padding: '100px 0', background: 'rgba(14, 16, 22, 0.6)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>BENCHMARK COMPARATIF</span>
          </div>
          <h2>
            La différence entre un simple exécutant et votre{' '}
            <span style={{ color: '#3B82F6' }}>partenaire de croissance</span>.
          </h2>
          <p>
            Analyse comparative entre les méthodes des agences web traditionnelles
            et l'architecture intégrée Next.js déployée par Trust Web Agency.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div
          className="horizon-card"
          style={{
            padding: '0',
            overflowX: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.08)'
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
              <tr style={{ background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <th style={{ padding: '20px 24px', color: '#94A3B8', fontWeight: '600', fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em', width: '22%' }}>
                  Critères Clés
                </th>
                <th style={{ padding: '20px 24px', color: '#94A3B8', fontWeight: '600', fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em', width: '38%' }}>
                  Agences Web Classiques (WordPress / NoCode)
                </th>
                <th style={{ padding: '20px 24px', color: '#F8FAFC', fontWeight: '700', fontSize: '0.92rem', width: '40%', background: 'rgba(37, 99, 235, 0.08)', borderLeft: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  Trust Web Agency (Next.js 14 & Edge)
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: idx === comparisonData.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                    background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.01)'
                  }}
                >
                  <td style={{ padding: '20px 24px', fontWeight: '600', color: '#F8FAFC', fontSize: '0.92rem' }}>
                    {item.feature}
                  </td>
                  <td style={{ padding: '20px 24px', color: '#94A3B8', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#EF4444', fontWeight: 'bold' }}>—</span>
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td style={{ padding: '20px 24px', color: '#F8FAFC', fontSize: '0.9rem', background: 'rgba(37, 99, 235, 0.03)', borderLeft: '1px solid rgba(37, 99, 235, 0.15)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span>
                      <strong style={{ color: '#FFFFFF' }}>{item.trustAgency}</strong>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#60A5FA', paddingLeft: '18px' }}>
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
