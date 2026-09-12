'use client';

import { useState } from 'react';

export default function CrmSimulator() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Clic Publicitaire Ultra-Ciblé",
      badge: "Google Ads / Meta Ads",
      icon: "🎯",
      desc: "Un prospect cherche activement vos services sur Google ou clique sur votre publicité Instagram. Le coût par clic est optimisé grâce au ciblage précis.",
      indicator: "Trafic Qualifié Capté · Tracking CAPI actif"
    },
    {
      title: "2. Atterrissage Foudroyant Next.js",
      badge: "0.45s Vitesse de Chargement",
      icon: "⚡",
      desc: "Le prospect arrive sur une landing page optimisée. Aucun délai de chargement, zéro abandon mobile. L'expérience visuelle HorizonX inspire immédiatement confiance.",
      indicator: "Taux de Rebond < 25% (vs 65% sur WordPress)"
    },
    {
      title: "3. Déclenchement Instantané WhatsApp API",
      badge: "Notification en 3 secondes",
      icon: "💬",
      desc: "Dès que le formulaire est envoyé, une alerte immédiate arrive sur le WhatsApp de votre équipe commerciale avec toutes les coordonnées du prospect.",
      indicator: "Rappel en moins de 5 min = Taux de closing x3"
    },
    {
      title: "4. Synchronisation CRM & Devis Automatisé",
      badge: "Pipeline & Sage 100",
      icon: "⚙️",
      desc: "Le contact est enregistré dans votre CRM. Si vous utilisez Sage 100 ou un outil de facturation, la fiche client et le devis préliminaire sont prêts sans saisie manuelle.",
      indicator: "0 devis oublié · Gain de 15h de travail par semaine"
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'rgba(15, 23, 42, 0.65)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>⚙️</span> L'Usine à Ventes Automatisée
          </div>
          <h2>
            Visualisez le parcours d'un visiteur qui devient <span className="gradient-accent">votre client</span>.
          </h2>
          <p>
            Cliquez sur chaque étape du simulateur pour comprendre comment notre écosystème
            élimine toute déperdition entre la publicité et la signature du contrat.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid-4" style={{ marginBottom: '36px' }}>
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="horizon-card"
                style={{
                  cursor: 'pointer',
                  border: isActive ? '1px solid #00F2FE' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(26, 41, 95, 0.9)' : 'rgba(17, 28, 68, 0.55)',
                  boxShadow: isActive ? '0 12px 35px rgba(0, 242, 254, 0.25)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontSize: '1.8rem' }}>{step.icon}</span>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isActive ? '#00F2FE' : 'rgba(255, 255, 255, 0.1)',
                      color: isActive ? '#0B0F19' : '#A3AED0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: '800'
                    }}
                  >
                    {idx + 1}
                  </span>
                </div>
                <div style={{ fontWeight: '700', fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '6px' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '0.78rem', color: isActive ? '#00F2FE' : '#707EAE', fontWeight: '600' }}>
                  {step.badge}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detail Showcase */}
        <div
          className="horizon-card"
          style={{
            padding: '36px',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            background: 'linear-gradient(135deg, rgba(17, 28, 68, 0.8) 0%, rgba(15, 23, 42, 0.85) 100%)'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
              Étape {activeStep + 1} sur 4
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '12px' }}>
              {steps[activeStep].title}
            </h3>
            <p style={{ color: '#A3AED0', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '18px' }}>
              {steps[activeStep].desc}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#05CD99', fontWeight: '700', fontSize: '0.92rem' }}>
              <span>🚀 Impact Mesuré :</span>
              <span>{steps[activeStep].indicator}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="btn btn-outline"
              style={{ padding: '10px 18px' }}
            >
              ← Précédent
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="btn btn-primary"
              style={{ padding: '10px 22px' }}
            >
              Étape Suivante →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
