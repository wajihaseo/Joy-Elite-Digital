import React from 'react';

/**
 * SectionHeading component:
 * - Clean unboxed eyebrow with generous tracking
 * - Confident H2 display heading with balanced wrapping
 * - Subdued, highly readable supporting paragraph
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-heading-block ${className}`}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '760px' : '680px',
        marginLeft: isCenter ? 'auto' : '0',
        marginRight: isCenter ? 'auto' : '0',
        marginBottom: '48px',
      }}
    >
      {eyebrow && (
        <span
          className="section-eyebrow"
          style={{
            color: light ? 'var(--color-secondary)' : 'var(--color-primary)',
          }}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          style={{
            color: light ? '#FFFFFF' : 'var(--color-ink)',
            marginTop: '8px',
            marginBottom: description ? '16px' : '0',
          }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          style={{
            color: light ? 'rgba(255, 255, 255, 0.82)' : 'var(--color-ink-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            marginLeft: isCenter ? 'auto' : '0',
            marginRight: isCenter ? 'auto' : '0',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
