'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { agencyConfig } from '@/data/agencyData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(11, 15, 25, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '22px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #4318FF 0%, #00F2FE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: '900',
              fontSize: '1.3rem',
              boxShadow: '0 4px 15px rgba(67, 24, 255, 0.4)'
            }}
          >
            T
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              Trust<span style={{ color: '#00F2FE' }}>Web</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#A3AED0', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700' }}>
              Agency · Élite
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <Link href="/#services" style={{ color: '#A3AED0', fontWeight: '500', fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#A3AED0'}>
            Services
          </Link>
          <Link href="/#comparatif" style={{ color: '#A3AED0', fontWeight: '500', fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#A3AED0'}>
            Pourquoi Nous
          </Link>
          <Link href="/#roi-calculator" style={{ color: '#A3AED0', fontWeight: '500', fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#A3AED0'}>
            Simulateur ROI
          </Link>
          <Link href="/#portfolio" style={{ color: '#A3AED0', fontWeight: '500', fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#A3AED0'}>
            Réalisations
          </Link>
          <Link href="/#villes" style={{ color: '#A3AED0', fontWeight: '500', fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#A3AED0'}>
            Villes
          </Link>
          <Link href="/#faq" style={{ color: '#A3AED0', fontWeight: '500', fontSize: '0.92rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#A3AED0'}>
            FAQ
          </Link>
        </nav>

        {/* CTA & Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href={`tel:${agencyConfig.phoneRaw}`}
            className="phone-nav-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.88rem',
              fontWeight: '600',
              color: '#A3AED0',
              textDecoration: 'none',
              padding: '8px 14px',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.03)'
            }}
          >
            <span>📞</span>
            <span>{agencyConfig.phone}</span>
          </a>

          <Link href="/#contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
            Devis Gratuit <span style={{ fontSize: '1rem' }}>→</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu Mobile"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '8px',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
            className="mobile-burger"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(11, 15, 25, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >
          <Link href="/#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: '600' }}>
            Services
          </Link>
          <Link href="/#comparatif" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: '600' }}>
            Pourquoi Nous
          </Link>
          <Link href="/#roi-calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: '600' }}>
            Simulateur ROI
          </Link>
          <Link href="/#portfolio" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: '600' }}>
            Réalisations
          </Link>
          <Link href="/#villes" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: '600' }}>
            Villes Couvertes
          </Link>
          <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: '600' }}>
            FAQ
          </Link>
          <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href={agencyConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%' }}>
              Discuter sur WhatsApp
            </a>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
              Demander un Devis Gratuit
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 991px) {
          .desktop-nav, .phone-nav-btn {
            display: none !important;
          }
          .mobile-burger {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
