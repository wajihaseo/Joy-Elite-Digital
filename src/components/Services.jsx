import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Core Disciplines"
          title="Digital Marketing Crafted for Commercial Growth"
          description="We do not offer fragmented tactics. We architect cohesive digital campaigns designed to capture market demand, outrank competitors, and generate verified inquiries in Halesowen and beyond."
          align="left"
        />

        {/* 3-column elevated grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {business.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => onSelectService && onSelectService(service.title)}
            />
          ))}
        </div>

        {/* Bottom subtle assurance note */}
        <div
          style={{
            marginTop: '56px',
            padding: '24px 32px',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-button)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontFamily: 'var(--font-display)',
                color: 'var(--color-ink)',
                marginBottom: '4px',
              }}
            >
              Need a bespoke combination of services?
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-muted)', margin: 0 }}>
              We tailor our monthly scopes specifically to your commercial goals, margin profile, and local competitors.
            </p>
          </div>

          <a
            href="#contact"
            className="text-sm font-semibold inline-flex items-center gap-2 hover:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            Schedule a Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
