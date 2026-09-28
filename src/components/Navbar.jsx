import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 'var(--header-height)',
        backgroundColor: isScrolled
          ? 'rgba(250, 247, 249, 0.96)'
          : 'rgba(250, 247, 249, 0.90)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(112, 0, 102, 0.12)' : 'rgba(112, 0, 102, 0.06)'}`,
        boxShadow: isScrolled ? '0 4px 20px rgba(26, 18, 24, 0.05)' : 'none',
      }}
    >
      <div className="container h-full flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl md:text-2xl font-semibold tracking-tight transition-opacity hover:opacity-90"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-primary)',
          }}
        >
          {business.name}
        </a>

        {/* Zone 2: Clean text navigation links (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {business.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-neutral-700 hover:text-plum-900 transition-colors py-1 group"
              style={{ color: 'var(--color-ink)' }}
            >
              {item.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Direct Contact (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={business.phoneTel}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider py-2 px-3 transition-colors hover:text-plum-900"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            <Phone size={14} style={{ color: 'var(--color-primary)' }} />
            <span>{business.phoneFormatted}</span>
          </a>

          <Button href={business.cta.primary.href} size="sm">
            {business.cta.primary.text}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg transition-colors"
          style={{
            color: 'var(--color-ink)',
            backgroundColor: 'transparent',
            border: 'none',
          }}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-[var(--header-height)] left-0 right-0 bottom-0 z-40 flex flex-col justify-between"
          style={{
            backgroundColor: 'var(--color-canvas)',
            padding: '32px 24px',
            borderTop: '1px solid var(--color-border)',
            overflowY: 'auto',
          }}
        >
          <div className="flex flex-col gap-6">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: 'var(--color-primary)' }}
            >
              Navigation
            </span>

            <nav className="flex flex-col gap-4">
              {business.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif py-2 border-b border-neutral-100 transition-colors"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-ink)',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div
            className="flex flex-col gap-4 pt-8"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            <div className="text-sm" style={{ color: 'var(--color-ink-muted)' }}>
              <p className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                Joy Elite Digital
              </p>
              <p className="mt-1">{business.street}</p>
              <p>{business.city}, {business.postalCode}</p>
            </div>

            <Button
              href={business.cta.primary.href}
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {business.cta.primary.text}
            </Button>

            <a
              href={business.phoneTel}
              className="inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-lg"
              style={{
                backgroundColor: 'var(--color-surface-alt)',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <Phone size={16} />
              <span>Call {business.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
