'use client';

import { useState } from 'react';
import { faqData } from '@/data/agencyData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '100px 0', background: 'rgba(15, 23, 42, 0.45)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>❓</span> Foire Aux Questions
          </div>
          <h2>
            Toutes les réponses à vos <span className="gradient-accent">questions</span>.
          </h2>
          <p>
            Transparence totale sur nos méthodes de travail, nos délais, nos technologies et nos garanties.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="horizon-card"
                style={{
                  padding: '24px 28px',
                  cursor: 'pointer',
                  border: isOpen ? '1px solid rgba(0, 242, 254, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isOpen ? 'rgba(26, 41, 95, 0.7)' : 'rgba(17, 28, 68, 0.55)',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: '600' }}>
                    {item.q}
                  </h3>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? '#00F2FE' : 'rgba(255, 255, 255, 0.08)',
                      color: isOpen ? '#0B0F19' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      fontWeight: '800',
                      flexShrink: 0,
                      transition: 'transform 0.2s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
                    }}
                  >
                    +
                  </div>
                </div>

                {isOpen && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', color: '#A3AED0', fontSize: '0.96rem', lineHeight: '1.7' }}>
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
