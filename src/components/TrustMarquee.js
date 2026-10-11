'use client';

import { agencyConfig } from '@/data/agencyData';

export default function TrustMarquee() {
  const marqueeItems = [
    ...agencyConfig.partners,
    ...agencyConfig.partners
  ];

  return (
    <section
      style={{
        padding: '30px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(14, 16, 22, 0.5)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '14px' }}>
        <span
          style={{
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#64748B',
            fontWeight: '600'
          }}
        >
          Écosystème Technologique & Standards d'Ingénierie
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          userSelect: 'none',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '36px',
            animation: 'marquee 35s linear infinite',
            whiteSpace: 'nowrap'
          }}
        >
          {marqueeItems.map((partner, index) => (
            <div
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#3B82F6'
                }}
              />
              <span style={{ fontWeight: '600', fontSize: '0.86rem', color: '#F8FAFC' }}>
                {partner.name}
              </span>
              <span style={{ fontSize: '0.76rem', color: '#64748B' }}>
                — {partner.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
