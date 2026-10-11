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
    <section id="roi-calculator" style={{ padding: '110px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-emerald section-eyebrow">
            <span>MODÉLISATION FINANCIÈRE</span>
          </div>
          <h2>
            Simulateur de Rentabilité & <span style={{ color: '#3B82F6' }}>Retour sur Investissement</span>
          </h2>
          <p>
            Ajustez votre budget média et le panier moyen de vos contrats pour projeter
            l'impact financier net d'une architecture rapide couplée à un ciblage publicitaire chirurgical.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Controls Card */}
          <div className="horizon-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '22px', color: '#F8FAFC' }}>
              Paramètres d'Acquisition & Vente
            </h3>

            {/* Budget Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.88rem', color: '#94A3B8' }}>Budget Publicitaire Mensuel</label>
                <span style={{ fontWeight: '700', color: '#F8FAFC', fontSize: '1.05rem', fontFamily: 'monospace' }}>
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
                  accentColor: '#3B82F6',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>
                <span>5 000 MAD</span>
                <span>50 000 MAD</span>
                <span>100 000 MAD</span>
              </div>
            </div>

            {/* Deal Value Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.88rem', color: '#94A3B8' }}>Valeur Moyenne par Client Signé</label>
                <span style={{ fontWeight: '700', color: '#10B981', fontSize: '1.05rem', fontFamily: 'monospace' }}>
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
                  accentColor: '#10B981',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>
                <span>500 MAD</span>
                <span>12 500 MAD</span>
                <span>25 000 MAD</span>
              </div>
            </div>

            {/* Target Cost per Lead */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.88rem', color: '#94A3B8' }}>Coût par Lead Qualifié Estimé</label>
                <span style={{ fontWeight: '700', color: '#F59E0B', fontSize: '1.05rem', fontFamily: 'monospace' }}>
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
                  accentColor: '#F59E0B',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>
                <span>B2C / E-com (50 MAD)</span>
                <span>B2B / Services (350 MAD)</span>
              </div>
            </div>
          </div>

          {/* Results Projection Card */}
          <div
            className="horizon-card"
            style={{
              background: '#0E1119',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span className="badge badge-primary">PROJECTION PRÉVISIONNELLE</span>
              <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: '600' }}>ROAS Estimé : {roas}x</span>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.84rem', color: '#94A3B8', marginBottom: '4px' }}>
                Chiffre d'Affaires Mensuel Prévisionnel
              </div>
              <div style={{ fontSize: '2.8rem', fontWeight: '800', color: '#F8FAFC', lineHeight: '1', letterSpacing: '-0.03em' }}>
                {projectedRevenue.toLocaleString('fr-FR')} <span style={{ fontSize: '1.3rem', color: '#64748B' }}>MAD</span>
              </div>
              <div style={{ fontSize: '0.84rem', color: '#10B981', marginTop: '6px', fontWeight: '500' }}>
                Gain net après déduction du budget publicitaire : +{netProfit.toLocaleString('fr-FR')} MAD
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                padding: '16px 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '24px'
              }}
            >
              <div>
                <div style={{ fontSize: '0.74rem', color: '#64748B', marginBottom: '2px' }}>Leads Générés</div>
                <div style={{ fontSize: '1.35rem', fontWeight: '700', color: '#F8FAFC', fontFamily: 'monospace' }}>~{leadsGenerated}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#64748B', marginBottom: '2px' }}>Clients Signés</div>
                <div style={{ fontSize: '1.35rem', fontWeight: '700', color: '#10B981', fontFamily: 'monospace' }}>~{clientsAcquired}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#64748B', marginBottom: '2px' }}>Temps Épargné</div>
                <div style={{ fontSize: '1.35rem', fontWeight: '700', color: '#F59E0B', fontFamily: 'monospace' }}>{hoursSaved}h/sem</div>
              </div>
            </div>

            <Link
              href="/#contact"
              className="btn btn-primary"
              style={{ width: '100%', padding: '13px', fontSize: '0.94rem', fontWeight: '600' }}
            >
              Déployer Cette Stratégie Pour Mon Entreprise →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
