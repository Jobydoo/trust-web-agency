'use client';

import { agencyConfig } from '@/data/agencyData';

export default function WhatsAppWidget() {
  return (
    <a
      href={agencyConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      style={{
        position: 'fixed',
        bottom: '26px',
        right: '26px',
        zIndex: 998,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        color: '#FFFFFF',
        padding: '12px 20px',
        borderRadius: '999px',
        boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '0.9rem',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
      }}
      className="whatsapp-float-widget"
    >
      <span style={{ fontSize: '1.4rem' }}>💬</span>
      <span className="wa-label">Discuter sur WhatsApp</span>

      <style jsx>{`
        .whatsapp-float-widget:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 12px 35px rgba(37, 211, 102, 0.6);
        }
        @media (max-width: 640px) {
          .wa-label {
            display: none;
          }
          .whatsapp-float-widget {
            padding: 14px;
            border-radius: 50%;
          }
        }
      `}</style>
    </a>
  );
}
