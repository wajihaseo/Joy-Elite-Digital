import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * ServiceCard:
 * Elevated card with generous image container, smooth hover zoom,
 * clean typography, zero-pill metadata separator, and full keyboard/click accessibility.
 */
export default function ServiceCard({
  service,
  onSelect,
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="service-card group"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-resting)',
        transition: 'all var(--transition-medium)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image Container with Tonal Zoom & Zero-Broken-Image Fallback */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          backgroundColor: 'var(--color-surface-alt)',
        }}
      >
        {!imageError ? (
          <img
            src={service.image}
            alt={service.imageAlt || service.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="group-hover:scale-105"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-primary-dark)',
              color: 'var(--color-secondary)',
              padding: '24px',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: '#FFFFFF' }}>
              {service.title}
            </span>
          </div>
        )}

        {/* Quiet editorial number indicator */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            backgroundColor: 'rgba(26, 18, 24, 0.75)',
            color: '#FFFFFF',
            backdropFilter: 'blur(8px)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            padding: '4px 10px',
            borderRadius: '4px',
          }}
        >
          {service.number}
        </div>
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: '28px 24px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {service.tagline && (
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-primary)',
              marginBottom: '6px',
            }}
          >
            {service.tagline}
          </div>
        )}

        <h3
          style={{
            fontSize: '1.35rem',
            marginBottom: '12px',
            color: 'var(--color-ink)',
            lineHeight: 1.25,
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontSize: '0.98rem',
            color: 'var(--color-ink-muted)',
            lineHeight: 1.6,
            marginBottom: '20px',
            flexGrow: 1,
          }}
        >
          {service.description}
        </p>

        {/* Deliverables / Scope List (Zero-Pill discipline: unboxed text with subtle typographic separators) */}
        {service.deliverables && service.deliverables.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              color: 'var(--color-ink-subtle)',
              paddingTop: '16px',
              borderTop: '1px solid var(--color-border-subtle)',
              marginBottom: '18px',
            }}
          >
            {service.deliverables.map((item, index) => (
              <React.Fragment key={index}>
                <span>{item}</span>
                {index < service.deliverables.length - 1 && (
                  <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Inquiry Action */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '4px' }}>
          <a
            href="#contact"
            onClick={onSelect}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: 'var(--color-primary)' }}
          >
            <span>Discuss this discipline</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
