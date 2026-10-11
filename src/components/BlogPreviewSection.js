'use client';

import Link from 'next/link';
import { blogsData } from '@/data/blogsData';

export default function BlogPreviewSection() {
  const featuredPosts = blogsData.slice(0, 3);

  return (
    <section style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '44px' }}>
          <div className="badge badge-primary section-eyebrow">
            <span>PUBLICATIONS & ANALYSES</span>
          </div>
          <h2>
            Décryptages stratégiques & <span style={{ color: '#3B82F6' }}>retours d'expérience</span>.
          </h2>
          <p>
            Nous partageons nos méthodes, nos métriques et nos découvertes techniques pour aider
            les entreprises à prendre une longueur d'avance dans leur croissance digitale.
          </p>
        </div>

        {/* 3 Featured Blog Cards */}
        <div className="grid-3" style={{ marginBottom: '40px' }}>
          {featuredPosts.map((post) => (
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

                <h3 style={{ fontSize: '1.18rem', color: '#F8FAFC', marginBottom: '10px', lineHeight: '1.35' }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'inherit' }}>
                    {post.title}
                  </Link>
                </h3>

                <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.74rem', color: '#64748B' }}>
                    {post.publishedAt}
                  </span>

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
              </div>
            </article>
          ))}
        </div>

        {/* View all 20 blogs button */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/blog"
            className="btn btn-outline"
            style={{ padding: '12px 28px', fontSize: '0.92rem' }}
          >
            <span>Explorer les 20 analyses complètes du blog</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
