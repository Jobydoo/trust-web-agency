'use client';

import Link from 'next/link';
import { agencyConfig } from '@/data/agencyData';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '100px',
        overflow: 'hidden'
      }}
    >
      {/* HorizonX Glowing Background Orbs */}
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(67, 24, 255, 0.28) 0%, rgba(117, 81, 255, 0.08) 50%, transparent 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          top: '25%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.2) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Eyebrow Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '24px' }}>
          <div className="badge badge-cyan" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
            <span style={{ fontSize: '1rem' }}>⚡</span>
            <span>Architecture Next.js 14 · Google Ads ROI · CRM Automatisé</span>
          </div>
        </div>

        {/* Main H1 Title */}
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
            maxWidth: '1050px',
            margin: '0 auto 24px',
            fontWeight: '800',
            letterSpacing: '-0.03em'
          }}
        >
          On bâtit votre{' '}
          <span className="gradient-accent">croissance digitale</span>{' '}
          pendant que vous pilotez votre entreprise.
        </h1>

        {/* Humanized Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.28rem)',
            color: '#A3AED0',
            maxWidth: '820px',
            margin: '0 auto 40px',
            lineHeight: '1.7'
          }}
        >
          Finis les sites WordPress lents et les budgets publicitaires jetés par les fenêtres.
          <strong style={{ color: '#FFFFFF' }}> Trust Web Agency</strong> fusionne ingénierie web foudroyante (<span style={{ color: '#00F2FE' }}>&lt; 0.5s</span>),
          Media Buying rentable et pipelines CRM automatisés sous un même toit pour multiplier vos ventes.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
        >
          <Link href="/#contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
            <span>Démarrer Mon Projet</span>
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </Link>

          <a
            href={agencyConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '16px 32px', fontSize: '1.05rem' }}
          >
            <span>💬</span>
            <span>WhatsApp Direct ({agencyConfig.phone})</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            color: '#707EAE',
            fontSize: '0.9rem',
            flexWrap: 'wrap',
            marginBottom: '64px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#05CD99' }}>✓</span> Devis détaillé sous 24h ouvrées
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#05CD99' }}>✓</span> Sans engagement & 100% transparent
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#05CD99' }}>✓</span> Code propriétaire & hébergement Vercel Edge
          </div>
        </div>

        {/* 4 HorizonX Live Stats Cards */}
        <div className="grid-4" style={{ marginTop: '20px' }}>
          {agencyConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="horizon-card"
              style={{
                textAlign: 'left',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  fontSize: '2.4rem',
                  fontWeight: '800',
                  color: idx === 0 ? '#00F2FE' : idx === 1 ? '#05CD99' : idx === 2 ? '#FFB547' : '#8C70FF',
                  lineHeight: '1',
                  marginBottom: '10px'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#FFFFFF', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.82rem', color: '#707EAE' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
