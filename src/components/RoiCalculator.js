'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RoiCalculator() {
  const [budget, setBudget] = useState(15000); // MAD per month
  const [dealValue, setDealValue] = useState(3500); // MAD average revenue per client
  const [cpa, setCpa] = useState(120); // MAD estimated cost per lead

  // Calculations
  const leadsGenerated = Math.floor(budget / cpa);
  const closingRate = 0.22; // 22% conversion lead to customer
  const clientsAcquired = Math.floor(leadsGenerated * closingRate);
  const projectedRevenue = clientsAcquired * dealValue;
  const netProfit = projectedRevenue - budget;
  const roas = (projectedRevenue / budget).toFixed(1);
  const hoursSaved = Math.min(leadsGenerated * 0.4, 25).toFixed(0);

  return (
    <section id="roi-calculator" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-emerald section-eyebrow">
            <span>📊</span> Outil Interactif Gratuit
          </div>
          <h2>
            Simulateur de Rentabilité & <span className="gradient-accent">Retour sur Investissement</span>
          </h2>
          <p>
            Ajustez votre budget publicitaire et le montant moyen de vos contrats pour projeter
            l'impact financier concret d'un site ultra-rapide couplé à des campagnes optimisées.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Controls Card */}
          <div className="horizon-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', color: '#FFFFFF' }}>
              Paramètres de votre activité
            </h3>

            {/* Budget Slider */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontSize: '0.92rem', color: '#A3AED0' }}>Budget Publicitaire Mensuel</label>
                <span style={{ fontWeight: '800', color: '#00F2FE', fontSize: '1.1rem' }}>
                  {budget.toLocaleString('fr-FR')} MAD / mois
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="2500"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#00F2FE',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#707EAE', marginTop: '6px' }}>
                <span>5 000 MAD</span>
                <span>50 000 MAD</span>
                <span>100 000 MAD</span>
              </div>
            </div>

            {/* Deal Value Slider */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontSize: '0.92rem', color: '#A3AED0' }}>Valeur Moyenne d'un Client / Vente</label>
                <span style={{ fontWeight: '800', color: '#05CD99', fontSize: '1.1rem' }}>
                  {dealValue.toLocaleString('fr-FR')} MAD
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#05CD99',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#707EAE', marginTop: '6px' }}>
                <span>500 MAD</span>
                <span>12 500 MAD</span>
                <span>25 000 MAD</span>
              </div>
            </div>

            {/* Target Cost per Lead */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontSize: '0.92rem', color: '#A3AED0' }}>Objectif Coût Par Lead Qualifié</label>
                <span style={{ fontWeight: '800', color: '#FFB547', fontSize: '1.1rem' }}>
                  ~{cpa} MAD / lead
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="350"
                step="10"
                value={cpa}
                onChange={(e) => setCpa(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#FFB547',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#707EAE', marginTop: '6px' }}>
                <span>B2C / E-com (50 MAD)</span>
                <span>B2B / Services (350 MAD)</span>
              </div>
            </div>
          </div>

          {/* Results Projection Card */}
          <div
            className="horizon-card"
            style={{
              background: 'linear-gradient(135deg, rgba(17, 28, 68, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 242, 254, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <span className="badge badge-cyan">Projection Prévisionnelle</span>
              <span style={{ fontSize: '0.82rem', color: '#05CD99', fontWeight: '700' }}>✓ ROAS Estimé : {roas}x</span>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.88rem', color: '#A3AED0', marginBottom: '6px' }}>
                Chiffre d'Affaires Mensuel Projeté
              </div>
              <div style={{ fontSize: '3rem', fontWeight: '900', color: '#00F2FE', lineHeight: '1' }}>
                {projectedRevenue.toLocaleString('fr-FR')} <span style={{ fontSize: '1.5rem', color: '#FFFFFF' }}>MAD</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#05CD99', marginTop: '8px' }}>
                Bénéfice net après investissement publicitaire : +{netProfit.toLocaleString('fr-FR')} MAD
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '14px',
                padding: '18px 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '28px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.78rem', color: '#707EAE', marginBottom: '4px' }}>Leads Générés</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF' }}>~{leadsGenerated}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#707EAE', marginBottom: '4px' }}>Nouveaux Clients</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#05CD99' }}>~{clientsAcquired}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#707EAE', marginBottom: '4px' }}>Temps Économisé</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFB547' }}>{hoursSaved}h/sem</div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="btn btn-primary"
              style={{ width: '100%', padding: '16px', fontSize: '1rem', fontWeight: '700' }}
            >
              Activer Cette Stratégie Pour Mon Entreprise →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
