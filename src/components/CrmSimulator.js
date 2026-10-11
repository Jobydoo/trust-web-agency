'use client';

import { useState } from 'react';

export default function CrmSimulator() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Clic Publicitaire Ultra-Ciblé",
      badge: "Google Search & Meta Ads",
      desc: "Un prospect recherche activement vos services sur Google ou clique sur votre annonce Instagram ciblée. Le coût par clic est optimisé grâce au ciblage précis et aux mots-clés d'intention.",
      indicator: "Trafic qualifié capté · Tracking CAPI serveur actif"
    },
    {
      title: "2. Atterrissage Foudroyant Next.js",
      badge: "0.45s Vitesse de Chargement",
      desc: "Le prospect arrive sur une landing page optimisée. Aucun délai de chargement, zéro abandon mobile. L'expérience de navigation inspire immédiatement un haut niveau de confiance.",
      indicator: "Taux de rebond < 22% (vs 65% sur WordPress)"
    },
    {
      title: "3. Déclenchement Instantané WhatsApp API",
      badge: "Notification en 3 secondes",
      desc: "Dès que le formulaire est envoyé, une alerte immédiate arrive sur le WhatsApp de votre équipe commerciale avec toutes les coordonnées du prospect et son besoin précis.",
      indicator: "Rappel en moins de 5 min = Taux de closing multiplié par 3"
    },
    {
      title: "4. Synchronisation CRM & Devis Automatisé",
      badge: "Pipeline & Sage 100",
      desc: "Le contact est enregistré dans votre CRM. Si vous utilisez Sage 100 ou un outil de gestion, la fiche client et le devis préliminaire sont prêts sans saisie manuelle.",
      indicator: "0 devis oublié · Gain de 15h de travail par semaine"
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'rgba(14, 16, 22, 0.6)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>PIPELINE OPÉRATIONNEL</span>
          </div>
          <h2>
            Visualisez le parcours d'un visiteur qui devient <span style={{ color: '#3B82F6' }}>votre client</span>.
          </h2>
          <p>
            Cliquez sur chaque étape du simulateur pour comprendre comment notre infrastructure
            élimine toute déperdition entre la publicité payante et la signature du contrat.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid-4" style={{ marginBottom: '32px' }}>
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="horizon-card"
                style={{
                  cursor: 'pointer',
                  border: isActive ? '1px solid #3B82F6' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? '#141824' : 'var(--bg-card)',
                  boxShadow: isActive ? '0 8px 24px rgba(37, 99, 235, 0.15)' : 'none',
                  transition: 'all 0.2s ease',
                  padding: '22px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: isActive ? '#2563EB' : 'rgba(255, 255, 255, 0.06)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      fontFamily: 'monospace'
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: isActive ? '#60A5FA' : '#64748B', fontWeight: '600' }}>
                    {step.badge}
                  </span>
                </div>
                <div style={{ fontWeight: '600', fontSize: '0.96rem', color: '#F8FAFC', lineHeight: '1.3' }}>
                  {step.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Detail Showcase */}
        <div
          className="horizon-card"
          style={{
            padding: '32px',
            border: '1px solid rgba(37, 99, 235, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            background: '#10141E'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div className="badge badge-primary" style={{ marginBottom: '10px' }}>
              ÉTAPE {activeStep + 1} SUR 4
            </div>
            <h3 style={{ fontSize: '1.45rem', color: '#F8FAFC', marginBottom: '10px' }}>
              {steps[activeStep].title}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '16px' }}>
              {steps[activeStep].desc}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: '600', fontSize: '0.88rem' }}>
              <span>● Impact Mesuré :</span>
              <span>{steps[activeStep].indicator}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="btn btn-outline"
              style={{ padding: '9px 16px', fontSize: '0.88rem' }}
            >
              ← Précédent
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="btn btn-secondary"
              style={{ padding: '9px 18px', fontSize: '0.88rem' }}
            >
              Étape Suivante →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
