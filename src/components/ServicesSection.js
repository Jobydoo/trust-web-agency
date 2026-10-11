'use client';

import { servicesData } from '@/data/agencyData';
import Link from 'next/link';

export default function ServicesSection() {
  const getIcon = (idx) => {
    if (idx === 0) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    }
    if (idx === 1) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    }
    if (idx === 2) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    }
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  };

  return (
    <section id="services" style={{ padding: '110px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>NOS 4 PILIERS D'EXPERTISE</span>
          </div>
          <h2>
            Une ingénierie intégrée conçue pour générer du <span style={{ color: '#3B82F6' }}>chiffre d'affaires</span>.
          </h2>
          <p>
            Plutôt que d'additionner des prestataires disparates qui se renvoient la responsabilité, Trust Web Agency
            aligne votre plateforme web, vos budgets d'acquisition et votre gestion commerciale sous une seule direction stratégique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-2">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="horizon-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px'
              }}
            >
              <div>
                {/* Card Top */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: 'rgba(37, 99, 235, 0.1)',
                      border: '1px solid rgba(37, 99, 235, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getIcon(idx)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
                      {service.badge}
                    </span>
                    <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#64748B', fontFamily: 'monospace' }}>
                      {service.num}
                    </span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: '#F8FAFC' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.94rem', marginBottom: '22px', lineHeight: '1.65' }}>
                  {service.shortDesc}
                </p>

                {/* Bullet Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                      <span style={{ color: '#3B82F6', fontWeight: 'bold', marginTop: '1px' }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Result Box & Action */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div style={{ fontSize: '0.82rem', color: '#10B981', fontWeight: '600' }}>
                  ● {service.results}
                </div>

                <Link
                  href="/#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.86rem',
                    fontWeight: '600',
                    color: '#F8FAFC'
                  }}
                >
                  <span>Configurer cette solution</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
