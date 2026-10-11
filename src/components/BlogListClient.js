'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogsData, blogCategories } from '@/data/blogsData';

export default function BlogListClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogsData.filter((post) => {
    const matchesCategory =
      activeCategory === 'all' || post.categorySlug === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogsData[0];

  return (
    <div>
      {/* Search and Category Filters Bar */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '40px'
        }}
      >
        {/* Search input */}
        <div style={{ marginBottom: '18px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: '#0E1016',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '10px 16px'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher par mot-clé (ex: Next.js, SEO, CAPI, Sage 100, ROI, Vercel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#F8FAFC',
                fontSize: '0.92rem'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}
        >
          {blogCategories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '6px',
                  border: isActive
                    ? '1px solid #3B82F6'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive
                    ? 'rgba(37, 99, 235, 0.15)'
                    : 'rgba(255, 255, 255, 0.02)',
                  color: isActive ? '#60A5FA' : '#94A3B8',
                  fontSize: '0.82rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.86rem', color: '#64748B' }}>
          Affichage de <strong style={{ color: '#F8FAFC' }}>{filteredPosts.length}</strong> article{filteredPosts.length > 1 ? 's' : ''} sur 20
        </div>
        {searchQuery && (
          <div style={{ fontSize: '0.84rem', color: '#60A5FA' }}>
            Filtre : "{searchQuery}"
          </div>
        )}
      </div>

      {/* Featured Lead Post (when no search active and showing all) */}
      {!searchQuery && activeCategory === 'all' && (
        <div
          style={{
            background: 'linear-gradient(180deg, #12141D 0%, #0E1016 100%)',
            border: '1px solid rgba(37, 99, 235, 0.3)',
            borderRadius: '14px',
            padding: '36px',
            marginBottom: '48px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="badge badge-primary">À LA UNE</span>
            <span style={{ fontSize: '0.78rem', color: '#64748B' }}>{featuredPost.readTime}</span>
            <span style={{ fontSize: '0.78rem', color: '#64748B' }}>· {featuredPost.publishedAt}</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#F8FAFC', marginBottom: '14px', lineHeight: '1.25' }}>
            <Link href={`/blog/${featuredPost.slug}`} style={{ color: 'inherit' }}>
              {featuredPost.title}
            </Link>
          </h2>

          <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: '1.65', marginBottom: '24px', maxWidth: '850px' }}>
            {featuredPost.excerpt}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontSize: '0.86rem', color: '#F8FAFC', fontWeight: '600' }}>
                  {featuredPost.author.name}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  {featuredPost.author.role}
                </div>
              </div>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
              <span>Lire le dossier complet</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      {filteredPosts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginBottom: '16px' }}>
            Aucun article ne correspond à votre recherche "{searchQuery}".
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="btn btn-outline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="grid-3" style={{ marginBottom: '60px' }}>
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="horizon-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '26px'
              }}
            >
              <div>
                {/* Meta Top */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      color: '#60A5FA',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: '#64748B' }}>
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.18rem', color: '#F8FAFC', marginBottom: '10px', lineHeight: '1.35' }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'inherit' }}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '18px' }}>
                  {post.excerpt}
                </p>

                {/* Tag Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {post.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        color: '#64748B'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  {post.publishedAt}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: '600',
                    color: '#3B82F6',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Lire l'article</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Lead Magnet Bottom Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #10141E 0%, #0E1016 100%)',
          border: '1px solid rgba(37, 99, 235, 0.25)',
          borderRadius: '14px',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto'
        }}
      >
        <span className="badge badge-emerald" style={{ marginBottom: '14px' }}>
          ACCOMPAGNEMENT SUR-MESURE
        </span>
        <h3 style={{ fontSize: '1.7rem', color: '#F8FAFC', marginBottom: '12px' }}>
          Vous souhaitez appliquer ces stratégies à votre entreprise ?
        </h3>
        <p style={{ color: '#94A3B8', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '24px', maxWidth: '620px', margin: '0 auto 24px' }}>
          Réservez un audit technique et commercial gratuit de 30 minutes avec nos experts.
          Nous analyserons votre vitesse, vos campagnes et vos opportunités de croissance.
        </p>
        <Link href="/#contact" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.96rem' }}>
          <span>Demander Mon Audit Offert</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
