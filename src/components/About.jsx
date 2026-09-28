import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-surface-alt)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Hairline Framing */}
          <div className="lg:col-span-5">
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--color-border)',
                aspectRatio: '4 / 5',
                backgroundColor: 'var(--color-primary-dark)',
              }}
            >
              {!imageError ? (
                <img
                  src={business.about.image}
                  alt={business.about.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '32px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>
                    Joy Elite Digital · Halesowen
                  </p>
                </div>
              )}

              {/* Subtle bottom gradient scrim with location badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px',
                  background: 'linear-gradient(to top, rgba(26, 18, 24, 0.88), transparent)',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Headquarters
                </div>
                <div style={{ fontSize: '1.05rem', fontFamily: 'var(--font-display)', marginTop: '2px' }}>
                  Pioneer House, Birmingham Street
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Pull Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionHeading
              eyebrow={business.about.eyebrow}
              title={business.about.title}
              description={null}
              align="left"
              className="!mb-6"
            />

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.65,
                color: 'var(--color-ink)',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              {business.about.lead}
            </p>

            <div className="space-y-4 mb-8">
              {business.about.paragraphs.map((p, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'var(--color-ink-muted)',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Editorial Statement Quote */}
            <div
              style={{
                borderLeft: '3px solid var(--color-primary)',
                paddingLeft: '20px',
                paddingTop: '8px',
                paddingBottom: '8px',
                marginBottom: '32px',
                backgroundColor: 'rgba(112, 0, 102, 0.03)',
                borderRadius: '0 8px 8px 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'var(--color-primary-dark)',
                  lineHeight: 1.5,
                }}
              >
                {business.about.quote}
              </p>
            </div>

            {/* Quiet trust markers (Zero-Pill discipline: unboxed clean typographic list) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '24px',
                paddingTop: '24px',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              {business.about.stats.map((stat, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
