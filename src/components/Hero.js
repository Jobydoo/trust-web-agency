'use client';

import Link from 'next/link';
import { agencyConfig } from '@/data/agencyData';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '150px',
        paddingBottom: '90px',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Eyebrow Status Pill */}
        <div style={{ display: 'inline-flex', marginBottom: '22px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.8rem',
              color: '#CBD5E1',
              fontWeight: '500'
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#10B981',
                boxShadow: '0 0 8px #10B981'
              }}
            />
            <span>Ingénierie Web Next.js 14 · Acquisition Search & Meta Ads · Systèmes CRM</span>
          </div>
        </div>

        {/* Main H1 Title */}
        <h1
          style={{
            fontSize: 'clamp(2.3rem, 5vw, 4.2rem)',
            maxWidth: '1020px',
            margin: '0 auto 22px',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            lineHeight: '1.15',
            color: '#F8FAFC'
          }}
        >
          Nous concevons l'infrastructure digitale qui accélère vos{' '}
          <span style={{ color: '#3B82F6' }}>ventes réelles</span>.
        </h1>

        {/* Humanized Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.02rem, 1.8vw, 1.22rem)',
            color: '#94A3B8',
            maxWidth: '780px',
            margin: '0 auto 36px',
            lineHeight: '1.7'
          }}
        >
          Fini les sites vitrines WordPress vulnérables et les campagnes publicitaires à l'aveugle.
          <strong style={{ color: '#F8FAFC' }}> Trust Web Agency</strong> fusionne architecture web foudroyante (&lt;0.5s),
          Media Buying haute rentabilité et automatisation CRM pour les entreprises ambitieuses au Maroc et à l'international.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '42px'
          }}
        >
          <Link href="/#contact" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: '0.98rem' }}>
            <span>Demander un Audit Stratégique</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <a
            href={agencyConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '13px 26px', fontSize: '0.98rem' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.761.882 2.796.882 3.183 0 5.77-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-5.769zm0-2.172c4.418 0 8 3.582 8 8 0 1.503-.418 2.91-1.144 4.119l1.144 4.181-4.28-1.122c-1.156.666-2.493 1.042-3.92 1.042-4.418 0-8-3.582-8-8s3.582-8 8-8z"/>
            </svg>
            <span>Échanger sur WhatsApp ({agencyConfig.phone})</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            color: '#64748B',
            fontSize: '0.86rem',
            flexWrap: 'wrap',
            marginBottom: '56px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span> Devis détaillé sous 24h ouvrées
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span> Propriété intégrale du code source
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span> Hébergement haute disponibilité Vercel Edge
          </div>
        </div>

        {/* Live Stats Row */}
        <div className="grid-4" style={{ marginTop: '16px' }}>
          {agencyConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="horizon-card"
              style={{
                textAlign: 'left',
                padding: '22px'
              }}
            >
              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: '800',
                  color: idx === 0 ? '#F8FAFC' : idx === 1 ? '#3B82F6' : idx === 2 ? '#10B981' : '#F59E0B',
                  lineHeight: '1',
                  marginBottom: '8px',
                  letterSpacing: '-0.03em'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontWeight: '600', fontSize: '0.94rem', color: '#F8FAFC', marginBottom: '2px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
