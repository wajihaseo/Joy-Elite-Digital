import React, { useState } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '92vh',
        paddingTop: 'calc(var(--header-height) + 48px)',
        paddingBottom: '80px',
        backgroundColor: 'var(--color-primary-dark)',
      }}
    >
      {/* Background Image with Single Tonal Luxury Scrim */}
      <div
        className="absolute inset-0 z-0"
        style={{
          overflow: 'hidden',
        }}
      >
        {!imageError ? (
          <img
            src={business.hero.heroImage}
            alt={business.hero.heroImageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              transform: 'scale(1.02)',
              filter: 'brightness(0.72) contrast(1.08)',
            }}
          />
        ) : null}

        {/* Tonal Luxury Scrim Overlay: Deep regal plum to dark velvet */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(71, 0, 65, 0.94) 0%, rgba(35, 3, 33, 0.88) 55%, rgba(20, 2, 20, 0.95) 100%)',
          }}
        />

        {/* Subtle accent light spot */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 148, 245, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10">
        <div
          className="max-w-4xl"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Eyebrow: unboxed text, generous tracking */}
          <div
            className="inline-flex items-center gap-2 mb-4"
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--color-secondary)',
            }}
          >
            <span>{business.hero.eyebrow}</span>
          </div>

          {/* Large confident H1 */}
          <h1
            style={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-display)',
              marginBottom: '24px',
              maxWidth: '920px',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            {business.hero.headline}
          </h1>

          {/* Short supporting line */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.90)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.65,
              maxWidth: '680px',
              marginBottom: '36px',
            }}
          >
            {business.hero.subheadline}
          </p>

          {/* Primary CTA + Secondary CTA */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <Button
              href={business.cta.primary.href}
              size="lg"
              variant="white"
              className="w-full sm:w-auto justify-center"
            >
              <span>{business.cta.primary.text}</span>
              <ArrowRight size={18} />
            </Button>

            <Button
              href={business.cta.secondary.href}
              size="lg"
              variant="outlineWhite"
              className="w-full sm:w-auto justify-center"
            >
              <span>{business.cta.secondary.text}</span>
            </Button>
          </div>

          {/* Quiet Trust Line: verified location */}
          <div
            className="flex items-center gap-3 pt-6"
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: '0.88rem',
            }}
          >
            <MapPin size={16} style={{ color: 'var(--color-secondary)', shrink: 0 }} />
            <span>{business.hero.locationBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
