'use client';

import { servicesData } from '@/data/agencyData';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>✨</span> Nos 4 Piliers d'Élite
          </div>
          <h2>
            Une expertise 360° conçue pour générer du <span className="gradient-accent">chiffre d'affaires</span>.
          </h2>
          <p>
            Plutôt que d'additionner des prestataires disparates qui se renvoient la balle, Trust Web Agency
            aligne votre plateforme web, vos publicités payantes et votre gestion commerciale sous une seule stratégie cohérente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-2">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="horizon-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px'
              }}
            >
              <div>
                {/* Card Top */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(67, 24, 255, 0.25) 0%, rgba(0, 242, 254, 0.2) 100%)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem'
                    }}
                  >
                    {service.icon}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
                      {service.badge}
                    </span>
                    <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#707EAE' }}>
                      {service.num}
                    </span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 style={{ fontSize: '1.55rem', marginBottom: '14px', color: '#FFFFFF' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#A3AED0', fontSize: '0.98rem', marginBottom: '24px', lineHeight: '1.65' }}>
                  {service.shortDesc}
                </p>

                {/* Bullet Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#E2E8F0' }}>
                      <span style={{ color: '#00F2FE', fontWeight: 'bold', marginTop: '2px' }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Result Box & Action */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div style={{ fontSize: '0.84rem', color: '#05CD99', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>🚀</span>
                  <span>{service.results}</span>
                </div>

                <Link
                  href="/#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    color: '#00F2FE'
                  }}
                >
                  <span>En savoir plus</span>
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
