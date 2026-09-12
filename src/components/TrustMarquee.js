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
        padding: '36px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(15, 23, 42, 0.55)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '18px' }}>
        <span
          style={{
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#707EAE',
            fontWeight: '700'
          }}
        >
          Écosystème Certifié & Partenaires Technologiques Mondiaux
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
            gap: '48px',
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
                gap: '12px',
                padding: '8px 18px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#00F2FE',
                  boxShadow: '0 0 10px #00F2FE'
                }}
              />
              <span style={{ fontWeight: '700', fontSize: '0.92rem', color: '#FFFFFF' }}>
                {partner.name}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#707EAE' }}>
                — {partner.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
