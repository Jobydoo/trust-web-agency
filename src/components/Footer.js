'use client';

import Link from 'next/link';
import { agencyConfig, servicesData, citiesData } from '@/data/agencyData';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#070B14',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '60px' }}>
          {/* Col 1: Brand & Bio */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #4318FF 0%, #00F2FE 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: '900',
                  fontSize: '1.1rem'
                }}
              >
                T
              </div>
              <span style={{ fontWeight: '800', fontSize: '1.2rem', color: '#FFFFFF' }}>
                Trust<span style={{ color: '#00F2FE' }}>Web</span> Agency
              </span>
            </Link>

            <p style={{ color: '#A3AED0', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '20px' }}>
              L'agence web & croissance digitale N°1 nouvelle génération.
              Architecture Next.js foudroyante, Media Buying rentabilisé et CRM automatisé.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={agencyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366'
                }}
              >
                💬
              </a>
              <a
                href={`mailto:${agencyConfig.email}`}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00F2FE'
                }}
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h5 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '18px', fontWeight: '700' }}>
              Nos Piliers Digitaux
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link href={`/#${s.id}`} style={{ color: '#A3AED0', fontSize: '0.88rem', transition: 'color 0.2s' }}>
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#roi-calculator" style={{ color: '#00F2FE', fontSize: '0.88rem', fontWeight: '600' }}>
                  Simulateur de ROI & Rentabilité →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Local SEO Hub */}
          <div>
            <h5 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '18px', fontWeight: '700' }}>
              Villes Couvertes
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {citiesData.slice(0, 5).map((city, idx) => (
                <li key={idx}>
                  <Link href={`/#agence-web-${city.slug}`} style={{ color: '#A3AED0', fontSize: '0.88rem' }}>
                    Agence Web {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#villes" style={{ color: '#00F2FE', fontSize: '0.88rem', fontWeight: '600' }}>
                  Voir toutes les implantations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct Info */}
          <div>
            <h5 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '18px', fontWeight: '700' }}>
              Contact Direct
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#A3AED0' }}>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>Email Officiel :</strong>
                <a href={`mailto:${agencyConfig.email}`} style={{ color: '#00F2FE' }}>
                  {agencyConfig.email}
                </a>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>Téléphone & WhatsApp :</strong>
                <a href={`tel:${agencyConfig.phoneRaw}`} style={{ color: '#FFFFFF' }}>
                  {agencyConfig.phone}
                </a>
              </div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>Siège Social :</strong>
                <span>{agencyConfig.address.street}, {agencyConfig.address.locality}</span>
              </div>
              <div style={{ marginTop: '8px' }}>
                <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
                  ● Équipe en ligne · Réponse immédiate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.82rem',
            color: '#707EAE'
          }}
        >
          <div>
            © 2026 <strong style={{ color: '#FFFFFF' }}>Trust Web Agency SARL</strong>. Tous droits réservés.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Architecture Next.js 14 Edge</span>
            <span>·</span>
            <span>Hébergement Vercel Cloud CDN</span>
            <span>·</span>
            <span>Conformité Google Search Console</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
