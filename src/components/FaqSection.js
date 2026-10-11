'use client';

import { useState } from 'react';
import { faqData } from '@/data/agencyData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '100px 0', background: 'rgba(14, 16, 22, 0.5)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>TRANSPARENCE MÉTHODOLOGIQUE</span>
          </div>
          <h2>
            Toutes les réponses à vos <span style={{ color: '#3B82F6' }}>questions</span>.
          </h2>
          <p>
            Transparence totale sur nos protocoles de livraison, nos garanties contractuelles et notre modèle technologique.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="horizon-card"
                style={{
                  padding: '20px 24px',
                  cursor: 'pointer',
                  border: isOpen ? '1px solid rgba(37, 99, 235, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isOpen ? '#141824' : 'var(--bg-card)',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.02rem', color: '#F8FAFC', fontWeight: '600' }}>
                    {item.q}
                  </h3>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '4px',
                      background: isOpen ? '#2563EB' : 'rgba(255, 255, 255, 0.06)',
                      color: isOpen ? '#FFFFFF' : '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      flexShrink: 0,
                      transition: 'transform 0.2s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
                    }}
                  >
                    +
                  </div>
                </div>

                {isOpen && (
                  <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.7' }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
