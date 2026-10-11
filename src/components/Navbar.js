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
        transition: 'all 0.25s ease',
        background: scrolled ? 'rgba(8, 9, 12, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '20px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#2563EB',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: '800',
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
            }}
          >
            T
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.18rem', letterSpacing: '-0.02em', color: '#F8FAFC' }}>
              Trust<span style={{ color: '#3B82F6' }}>Web</span> Agency
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '26px' }} className="desktop-nav">
          <Link href="/#services" style={{ color: '#94A3B8', fontWeight: '500', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F8FAFC'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>
            Expertises
          </Link>
          <Link href="/#comparatif" style={{ color: '#94A3B8', fontWeight: '500', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F8FAFC'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>
            Pourquoi Nous
          </Link>
          <Link href="/#roi-calculator" style={{ color: '#94A3B8', fontWeight: '500', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F8FAFC'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>
            Simulateur ROI
          </Link>
          <Link href="/#portfolio" style={{ color: '#94A3B8', fontWeight: '500', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F8FAFC'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>
            Études de Cas
          </Link>
          <Link href="/blog" style={{ color: '#F8FAFC', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Blog & Analyses</span>
            <span style={{ background: 'rgba(37, 99, 235, 0.2)', color: '#60A5FA', border: '1px solid rgba(37, 99, 235, 0.4)', padding: '1px 6px', borderRadius: '4px', fontSize: '0.7rem' }}>20</span>
          </Link>
          <Link href="/#faq" style={{ color: '#94A3B8', fontWeight: '500', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#F8FAFC'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>
            FAQ
          </Link>
        </nav>

        {/* CTA & Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={`tel:${agencyConfig.phoneRaw}`}
            className="phone-nav-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              fontWeight: '500',
              color: '#94A3B8',
              textDecoration: 'none',
              padding: '7px 12px',
              borderRadius: '6px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}
          >
            <span>{agencyConfig.phone}</span>
          </a>

          <Link href="/#contact" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.86rem' }}>
            Devis Gratuit
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu Mobile"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '6px',
              padding: '6px',
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
            background: 'rgba(8, 9, 12, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <Link href="/#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F8FAFC', fontSize: '1rem', fontWeight: '500' }}>
            Expertises
          </Link>
          <Link href="/#comparatif" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F8FAFC', fontSize: '1rem', fontWeight: '500' }}>
            Pourquoi Nous
          </Link>
          <Link href="/#roi-calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F8FAFC', fontSize: '1rem', fontWeight: '500' }}>
            Simulateur ROI
          </Link>
          <Link href="/#portfolio" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F8FAFC', fontSize: '1rem', fontWeight: '500' }}>
            Études de Cas
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ color: '#60A5FA', fontSize: '1rem', fontWeight: '600' }}>
            Blog & Analyses (20 Articles)
          </Link>
          <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F8FAFC', fontSize: '1rem', fontWeight: '500' }}>
            FAQ
          </Link>
          <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
