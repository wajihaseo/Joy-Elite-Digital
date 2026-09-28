import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function WhyChooseUs() {
  const { whyChooseUs } = business;

  return (
    <section id="why-choose-us" className="section-padding" style={{ backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
          align="left"
        />

        {/* 4 Trust Points Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {whyChooseUs.points.map((point) => (
            <div
              key={point.number}
              className="group p-8 transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-resting)',
              }}
            >
              {/* Editorial Number */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '16px',
                  lineHeight: 1,
                }}
              >
                {point.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {point.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--color-ink-muted)',
                  lineHeight: 1.65,
                }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
