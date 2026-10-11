import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { blogsData } from '@/data/blogsData';
import { agencyConfig } from '@/data/agencyData';

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogsData.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Article Introuvable | Trust Web Agency",
      description: "L'article demandé n'existe pas ou a été déplacé.",
    };
  }

  const url = `https://trustwebagency.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Trust Web Agency`,
    description: post.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.seoDescription,
      url: url,
      type: 'article',
      publishedTime: post.dateIso,
      authors: [post.author.name],
      tags: post.tags,
      siteName: "Trust Web Agency",
      locale: "fr_FR",
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.seoDescription,
    },
    keywords: post.tags,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData
    .filter((p) => p.slug !== post.slug && p.categorySlug === post.categorySlug)
    .slice(0, 3);

  // If not enough in same category, pad with other recent posts
  const finalRelated = relatedPosts.length >= 2
    ? relatedPosts
    : [...relatedPosts, ...blogsData.filter(p => p.slug !== post.slug && !relatedPosts.includes(p))].slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seoDescription,
    "datePublished": post.dateIso,
    "dateModified": post.dateIso,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://trustwebagency.com/blog/${post.slug}`,
    },
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trust Web Agency",
      "url": "https://trustwebagency.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trustwebagency.com/images/logo.webp",
      },
    },
    "keywords": post.tags.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://trustwebagency.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://trustwebagency.com/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://trustwebagency.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main style={{ minHeight: '100vh', background: '#08090C' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />

      <article style={{ paddingTop: '140px', paddingBottom: '90px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* Breadcrumbs */}
          <nav style={{ marginBottom: '24px', fontSize: '0.82rem', color: '#64748B' }}>
            <Link href="/" style={{ color: '#94A3B8' }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/blog" style={{ color: '#94A3B8' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#F8FAFC' }}>{post.category}</span>
          </nav>

          {/* Article Header */}
          <header style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span className="badge badge-primary">{post.category}</span>
              <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{post.readTime}</span>
              <span style={{ fontSize: '0.8rem', color: '#64748B' }}>· {post.publishedAt}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                color: '#F8FAFC',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                lineHeight: '1.2',
                marginBottom: '20px'
              }}
            >
              {post.title}
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: '1.65', marginBottom: '28px' }}>
              {post.excerpt}
            </p>

            {/* Author Block */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <img
                src={post.author.avatar}
                alt={post.author.name}
                style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontSize: '0.92rem', color: '#F8FAFC', fontWeight: '600' }}>
                  {post.author.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
                  {post.author.role} · Trust Web Agency
                </div>
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div
              style={{
                background: 'rgba(37, 99, 235, 0.06)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                borderRadius: '10px',
                padding: '24px',
                marginBottom: '40px'
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#60A5FA',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '14px'
                }}
              >
                Points Clés à Retenir
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {post.keyTakeaways.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#CBD5E1', lineHeight: '1.55' }}>
                    <span style={{ color: '#3B82F6', fontWeight: 'bold' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Table of contents */}
          <div
            style={{
              background: '#0E1016',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '20px 24px',
              marginBottom: '44px'
            }}
          >
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Sommaire de l'article
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {post.sections.map((section, sIdx) => (
                <li key={sIdx}>
                  <a
                    href={`#section-${sIdx}`}
                    style={{ color: '#94A3B8', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.15s' }}
                  >
                    <span style={{ color: '#64748B', marginRight: '6px' }}>0{sIdx + 1}.</span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '60px' }}>
            {post.sections.map((section, sIdx) => (
              <section key={sIdx} id={`section-${sIdx}`}>
                <h2
                  style={{
                    fontSize: '1.6rem',
                    color: '#F8FAFC',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    marginBottom: '16px',
                    letterSpacing: '-0.02em',
                    paddingTop: '16px'
                  }}
                >
                  {section.heading}
                </h2>
                <div
                  style={{
                    color: '#CBD5E1',
                    fontSize: '1.02rem',
                    lineHeight: '1.8',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* FAQ Accordion if present */}
          {post.faq && post.faq.length > 0 && (
            <div style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#F8FAFC', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                Questions Fréquentes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {post.faq.map((item, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '18px 22px'
                    }}
                  >
                    <div style={{ fontWeight: '600', color: '#F8FAFC', fontSize: '0.98rem', marginBottom: '8px' }}>
                      {item.q}
                    </div>
                    <div style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.65' }}>
                      {item.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: '36px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748B', marginRight: '4px', alignSelf: 'center' }}>Thématiques :</span>
            {post.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.76rem',
                  color: '#94A3B8'
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Mid-Article Conversion Box */}
          <div
            style={{
              background: '#0E1119',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              borderRadius: '12px',
              padding: '36px',
              marginBottom: '60px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.45rem', color: '#F8FAFC', marginBottom: '10px' }}>
              Besoin d'un accompagnement sur cette problématique ?
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.94rem', lineHeight: '1.6', maxWidth: '560px', margin: '0 auto 20px' }}>
              Nos consultants et développeurs seniors analysent votre architecture actuelle et vos campagnes publicitaires sans aucun engagement.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/#contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
                Demander un Devis Gratuit
              </Link>
              <a
                href={agencyConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                Échanger sur WhatsApp
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {finalRelated.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.35rem', color: '#F8FAFC', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                Articles Recommandés
              </h3>
              <div className="grid-3">
                {finalRelated.map((rel) => (
                  <div
                    key={rel.slug}
                    className="horizon-card"
                    style={{
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#60A5FA', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>
                        {rel.category}
                      </div>
                      <h4 style={{ fontSize: '1.02rem', color: '#F8FAFC', marginBottom: '10px', lineHeight: '1.35' }}>
                        <Link href={`/blog/${rel.slug}`} style={{ color: 'inherit' }}>
                          {rel.title}
                        </Link>
                      </h4>
                      <p style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: '1.55', marginBottom: '16px' }}>
                        {rel.excerpt.slice(0, 95)}...
                      </p>
                    </div>

                    <Link
                      href={`/blog/${rel.slug}`}
                      style={{ fontSize: '0.82rem', color: '#3B82F6', fontWeight: '600' }}
                    >
                      Consulter l'article →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
