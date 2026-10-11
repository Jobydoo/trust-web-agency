'use client';

import Link from 'next/link';
import { agencyConfig, servicesData } from '@/data/agencyData';
import { blogsData } from '@/data/blogsData';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#07080B',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '70px',
        paddingBottom: '36px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '52px' }}>
          {/* Col 1: Brand & Bio */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '14px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: '800',
                  fontSize: '1rem'
                }}
              >
                T
              </div>
              <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#F8FAFC' }}>
                Trust<span style={{ color: '#3B82F6' }}>Web</span> Agency
              </span>
            </Link>

            <p style={{ color: '#94A3B8', fontSize: '0.86rem', lineHeight: '1.65', marginBottom: '18px' }}>
              Studio d'ingénierie web et d'acquisition de performance.
              Développement Next.js 14, Media Buying rentabilisé et intégrations CRM sur-mesure.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={agencyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10B981'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.761.882 2.796.882 3.183 0 5.77-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-5.769zm0-2.172c4.418 0 8 3.582 8 8 0 1.503-.418 2.91-1.144 4.119l1.144 4.181-4.28-1.122c-1.156.666-2.493 1.042-3.92 1.042-4.418 0-8-3.582-8-8s3.582-8 8-8z"/>
                </svg>
              </a>
              <a
                href={`mailto:${agencyConfig.email}`}
                aria-label="Email"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#60A5FA'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h5 style={{ fontSize: '0.92rem', color: '#F8FAFC', marginBottom: '14px', fontWeight: '600' }}>
              Expertises
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link href={`/#${s.id}`} style={{ color: '#94A3B8', fontSize: '0.84rem', transition: 'color 0.15s' }}>
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#roi-calculator" style={{ color: '#3B82F6', fontSize: '0.84rem', fontWeight: '500' }}>
                  Simulateur de ROI →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Blog & Analyses */}
          <div>
            <h5 style={{ fontSize: '0.92rem', color: '#F8FAFC', marginBottom: '14px', fontWeight: '600' }}>
              Analyses & Guides Récents
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {blogsData.slice(0, 4).map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: '1.4', display: 'block' }}>
                    {post.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" style={{ color: '#60A5FA', fontSize: '0.84rem', fontWeight: '600' }}>
                  Consulter les 20 articles de fond →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct Info */}
          <div>
            <h5 style={{ fontSize: '0.92rem', color: '#F8FAFC', marginBottom: '14px', fontWeight: '600' }}>
              Contact & Bureaux
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem', color: '#94A3B8' }}>
              <div>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase' }}>Email</span>
                <a href={`mailto:${agencyConfig.email}`} style={{ color: '#F8FAFC' }}>
                  {agencyConfig.email}
                </a>
              </div>
              <div>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase' }}>Téléphone</span>
                <a href={`tel:${agencyConfig.phoneRaw}`} style={{ color: '#F8FAFC' }}>
                  {agencyConfig.phone}
                </a>
              </div>
              <div>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase' }}>Siège</span>
                <span>{agencyConfig.address.street}, {agencyConfig.address.locality}</span>
              </div>
              <div style={{ marginTop: '4px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#10B981' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                  Équipe en ligne · Réponse sous 24h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.78rem',
            color: '#64748B'
          }}
        >
          <div>
            © 2026 <strong style={{ color: '#CBD5E1' }}>Trust Web Agency SARL</strong>. Tous droits réservés.
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <Link href="/blog" style={{ color: '#94A3B8' }}>Index Blog</Link>
            <span>·</span>
            <Link href="/sitemap.xml" style={{ color: '#94A3B8' }}>Sitemap XML</Link>
            <span>·</span>
            <Link href="/robots.txt" style={{ color: '#94A3B8' }}>Robots.txt</Link>
            <span>·</span>
            <span>Hébergement Vercel Edge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
