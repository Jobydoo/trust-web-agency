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
    // Simulate instantaneous lead routing & WhatsApp prep
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-cyan section-eyebrow">
            <span>✉️</span> Parlons de Votre Projet
          </div>
          <h2>
            Demandez votre <span className="gradient-accent">audit stratégique gratuit</span> & devis sous 24h.
          </h2>
          <p>
            Dites-nous vos objectifs, vos défis actuels et vos délais.
            Nous analysons votre marché et revenons vers vous avec un plan d'action concret, sans aucun engagement.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'flex-start' }}>
          {/* Contact Form Card */}
          <div className="horizon-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '12px' }}>
                  Merci pour votre demande !
                </h3>
                <p style={{ color: '#A3AED0', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '28px' }}>
                  Votre dossier a bien été transmis à notre équipe technique.
                  Nous revenons vers vous à l'adresse <strong style={{ color: '#00F2FE' }}>{formData.email || 'indiquée'}</strong> sous 24h ouvrées.
                </p>
                <a
                  href={`https://wa.me/212645833671?text=Bonjour%20Trust%20Web%20Agency%2C%20je%20viens%20d%27envoyer%20une%20demande%20de%20devis%20pour%20${encodeURIComponent(formData.service)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '14px 28px' }}
                >
                  Accélérer ma réponse sur WhatsApp →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#A3AED0', marginBottom: '6px' }}>
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Youssef El Mansouri"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#A3AED0', marginBottom: '6px' }}>
                      Email Professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vous@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#A3AED0', marginBottom: '6px' }}>
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
                        padding: '13px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#A3AED0', marginBottom: '6px' }}>
                      Nom de votre Entreprise
                    </label>
                    <input
                      type="text"
                      placeholder="Société / Marque"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#FFFFFF',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#A3AED0', marginBottom: '6px' }}>
                      Service Souhaité
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '10px',
                        background: '#0F172A',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#FFFFFF',
                        fontSize: '0.92rem'
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
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#A3AED0', marginBottom: '6px' }}>
                      Budget Envisagé
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '10px',
                        background: '#0F172A',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#FFFFFF',
                        fontSize: '0.92rem'
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
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#A3AED0', marginBottom: '6px' }}>
                    Décrivez brièvement vos objectifs & besoins *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Parlez-nous de votre activité, de vos blocages actuels et des résultats attendus..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1.05rem', fontWeight: '700' }}
                >
                  Envoyer Ma Demande de Devis Gratuit →
                </button>

                <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#707EAE' }}>
                  🔒 Vos données restent strictement confidentielles. Zéro spam garanti.
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Direct Reassurance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="horizon-card">
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '20px' }}>
                Coordonnées Officielles
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ fontSize: '1.4rem' }}>✉️</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#707EAE' }}>Email Direct</div>
                    <a
                      href={`mailto:${agencyConfig.email}`}
                      style={{ color: '#00F2FE', fontWeight: '700', fontSize: '1.05rem' }}
                    >
                      {agencyConfig.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ fontSize: '1.4rem' }}>📞</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#707EAE' }}>Téléphone & WhatsApp</div>
                    <a
                      href={`tel:${agencyConfig.phoneRaw}`}
                      style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '1.05rem' }}
                    >
                      {agencyConfig.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ fontSize: '1.4rem' }}>📍</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#707EAE' }}>Siège & Bureaux</div>
                    <div style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>
                      {agencyConfig.address.street}, {agencyConfig.address.locality} ({agencyConfig.address.country})
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ fontSize: '1.4rem' }}>⏱️</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#707EAE' }}>Délais de Réponse</div>
                    <div style={{ color: '#05CD99', fontWeight: '700', fontSize: '0.95rem' }}>
                      Sous 24h ouvrées par email · Moins de 10 min sur WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div
              className="horizon-card"
              style={{
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(18, 140, 126, 0.1) 100%)',
                border: '1px solid rgba(37, 211, 102, 0.35)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>💬</span>
                <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF' }}>Besoin d'une réponse immédiate ?</h4>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.92rem', marginBottom: '18px', lineHeight: '1.6' }}>
                Échangez directement avec un consultant senior sans passer par un formulaire.
                Nous répondons immédiatement à toutes vos questions techniques et budgétaires.
              </p>
              <a
                href={agencyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '14px', fontSize: '0.98rem' }}
              >
                Ouvrir la discussion WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
