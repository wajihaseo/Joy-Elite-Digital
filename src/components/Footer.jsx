import React from 'react';
import { business } from '../config/business';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary-dark)',
        color: '#FFFFFF',
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <span
              className="text-2xl font-serif font-semibold tracking-tight block"
              style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
            >
              {business.name}
            </span>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              {business.tagline}
            </p>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontSize: '0.88rem',
                lineHeight: 1.6,
              }}
            >
              Providing bespoke digital marketing, search engine optimization, Google Ads, and brand architecture for ambitious firms in Halesowen and the West Midlands.
            </p>
          </div>

          {/* Disciplines Column */}
          <div className="lg:col-span-3 space-y-3">
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-secondary)',
                marginBottom: '16px',
              }}
            >
              Main Disciplines
            </div>
            <ul className="space-y-2.5 text-sm" style={{ listStyle: 'none' }}>
              {business.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:underline transition-colors"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-secondary)',
                marginBottom: '16px',
              }}
            >
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm" style={{ listStyle: 'none' }}>
              {business.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:underline transition-colors"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Direct Inquiries Column */}
          <div className="lg:col-span-3 space-y-4">
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-secondary)',
                marginBottom: '16px',
              }}
            >
              Headquarters
            </div>
            <div className="space-y-3 text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 mt-1" style={{ color: 'var(--color-secondary)' }} />
                <span>{business.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: 'var(--color-secondary)' }} />
                <a href={business.phoneTel} className="hover:underline">
                  {business.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: 'var(--color-secondary)' }} />
                <a href={business.emailMailto} className="hover:underline">
                  {business.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'rgba(255, 255, 255, 0.55)' }}>
          <div>
            © {currentYear} {business.name}. {business.footer.copyright}
          </div>
          <div>
            Registered in England & Wales · Pioneer House, Halesowen
          </div>
        </div>
      </div>
    </footer>
  );
}
