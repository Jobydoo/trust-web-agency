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
        bottom: '24px',
        right: '24px',
        zIndex: 998,
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
        background: '#0F5132',
        border: '1px solid rgba(16, 185, 129, 0.4)',
        color: '#E8F5E9',
        padding: '11px 18px',
        borderRadius: '999px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(16, 185, 129, 0.2)',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '0.86rem',
        transition: 'all 0.2s ease'
      }}
      className="whatsapp-float-widget"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.761.882 2.796.882 3.183 0 5.77-2.587 5.77-5.766.001-3.182-2.585-5.769-5.77-5.769zm0-2.172c4.418 0 8 3.582 8 8 0 1.503-.418 2.91-1.144 4.119l1.144 4.181-4.28-1.122c-1.156.666-2.493 1.042-3.92 1.042-4.418 0-8-3.582-8-8s3.582-8 8-8z"/>
      </svg>
      <span className="wa-label">WhatsApp Direct</span>

      <style jsx>{`
        .whatsapp-float-widget:hover {
          transform: translateY(-2px);
          background: #146C43;
          color: #FFFFFF;
          border-color: rgba(16, 185, 129, 0.6);
        }
        @media (max-width: 640px) {
          .wa-label {
            display: none;
          }
          .whatsapp-float-widget {
            padding: 12px;
            border-radius: 50%;
          }
        }
      `}</style>
    </a>
  );
}
