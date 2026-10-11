'use client';

import { useState } from 'react';
import { agencyConfig } from '@/data/agencyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Création de Site Web Next.js',
    budget: '15 000 MAD - 35 000 MAD',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '110px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-primary section-eyebrow">
            <span>ÉCHANGE STRATÉGIQUE</span>
          </div>
          <h2>
            Demandez votre <span style={{ color: '#3B82F6' }}>audit stratégique offert</span> & devis sous 24h.
          </h2>
          <p>
            Partagez vos ambitions, vos défis techniques actuels et votre calendrier.
            Nos ingénieurs et consultants analysent votre potentiel et reviennent vers vous avec un plan d'action chiffré.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'flex-start' }}>
          {/* Contact Form Card */}
          <div className="horizon-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid #10B981',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    margin: '0 auto 16px'
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#F8FAFC', marginBottom: '10px' }}>
                  Demande Transmise avec Succès
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '24px' }}>
                  Votre dossier technique est entre les mains de notre équipe senior.
                  Nous vous adresserons notre analyse préliminaire à l'adresse <strong style={{ color: '#F8FAFC' }}>{formData.email || 'indiquée'}</strong> sous 24h ouvrées.
                </p>
                <a
                  href={`https://wa.me/212645833671?text=Bonjour%20Trust%20Web%20Agency%2C%20je%20viens%20d%27envoyer%20une%20demande%20de%20devis%20pour%20${encodeURIComponent(formData.service)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '12px 24px' }}
                >
                  Accélérer le traitement sur WhatsApp →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '6px' }}>
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Youssef El Mansouri"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '6px',
                        background: '#0E1016',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F8FAFC',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '6px' }}>
                      Email Professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="direction@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '6px',
                        background: '#0E1016',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F8FAFC',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '6px' }}>
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+212 6..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '6px',
                        background: '#0E1016',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F8FAFC',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '6px' }}>
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="Société / Marque"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '6px',
                        background: '#0E1016',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#F8FAFC',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '6px' }}>
                      Service Souhaité
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '6px',
                        background: '#0E1016',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#F8FAFC',
                        fontSize: '0.88rem'
                      }}
                    >
                      <option value="Création de Site Web Next.js">Création de Site Web Next.js</option>
                      <option value="Media Buying (Google & Meta Ads)">Media Buying (Google & Meta Ads)</option>
                      <option value="CRM & Automatisation WhatsApp / Sage">CRM & Automatisation WhatsApp / Sage</option>
                      <option value="SEO Élite & Rédaction Humanisée">SEO Élite & Rédaction Humanisée</option>
                      <option value="Accompagnement Global Croissance 360°">Accompagnement Global Croissance 360°</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '6px' }}>
                      Budget Envisagé
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '6px',
                        background: '#0E1016',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#F8FAFC',
                        fontSize: '0.88rem'
                      }}
                    >
                      <option value="Moins de 15 000 MAD">Moins de 15 000 MAD</option>
                      <option value="15 000 MAD - 35 000 MAD">15 000 MAD - 35 000 MAD</option>
                      <option value="35 000 MAD - 75 000 MAD">35 000 MAD - 75 000 MAD</option>
                      <option value="Plus de 75 000 MAD">Plus de 75 000 MAD / Grand Compte</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '6px' }}>
                    Objectifs & Périmètre du Projet *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Présentez brièvement vos besoins, vos freins actuels et les résultats attendus..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '6px',
                      background: '#0E1016',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#F8FAFC',
                      fontSize: '0.9rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '13px', fontSize: '0.98rem', fontWeight: '600' }}
                >
                  Transmettre Ma Demande de Devis →
                </button>

                <div style={{ textAlign: 'center', fontSize: '0.74rem', color: '#64748B' }}>
                  Traitement strictement confidentiel. Vos coordonnées ne sont jamais cédées à des tiers.
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Direct Reassurance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="horizon-card">
              <h3 style={{ fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '18px' }}>
                Coordonnées Directes
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Email Officiel</div>
                  <a
                    href={`mailto:${agencyConfig.email}`}
                    style={{ color: '#F8FAFC', fontWeight: '600', fontSize: '0.98rem' }}
                  >
                    {agencyConfig.email}
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Téléphone & WhatsApp</div>
                  <a
                    href={`tel:${agencyConfig.phoneRaw}`}
                    style={{ color: '#F8FAFC', fontWeight: '600', fontSize: '0.98rem' }}
                  >
                    {agencyConfig.phone}
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Siège Opérationnel</div>
                  <div style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>
                    {agencyConfig.address.street}, {agencyConfig.address.locality} ({agencyConfig.address.country})
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Délais de Réponse</div>
                  <div style={{ color: '#10B981', fontWeight: '600', fontSize: '0.88rem' }}>
                    Sous 24h ouvrées par email · Moins de 10 min sur WhatsApp
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div
              className="horizon-card"
              style={{
                background: '#0D1B14',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}
            >
              <h4 style={{ fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '8px' }}>Échange Direct Sans Intermédiaire</h4>
              <p style={{ color: '#CBD5E1', fontSize: '0.88rem', marginBottom: '16px', lineHeight: '1.6' }}>
                Échangez en direct avec un consultant technique senior sans passer par un formulaire formel.
                Réponses immédiates à toutes vos questions d'architecture ou de budget.
              </p>
              <a
                href={agencyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '11px', fontSize: '0.9rem' }}
              >
                Ouvrir la Discussion WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
