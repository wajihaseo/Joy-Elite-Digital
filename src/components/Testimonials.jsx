import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Testimonials Section:
 * Strictly rendered only if real testimonials exist in business configuration.
 * If null or empty, it returns null without leaving any filler gap or empty DOM node.
 */
export default function Testimonials() {
  const testimonials = business.testimonials;

  if (!testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="Client Endorsements"
          title="What Our Partners Say"
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-resting)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: 'var(--color-ink)',
                  marginBottom: '20px',
                }}
              >
                "{item.quote}"
              </p>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-ink)' }}>{item.author}</div>
                {item.role && (
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
                    {item.role}{item.company ? ` · ${item.company}` : ''}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
