import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'General Consultation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    // Simulate brief processing for realistic feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-canvas)' }}>
      <div className="container">
        <SectionHeading
          eyebrow={business.contact.eyebrow}
          title={business.contact.title}
          description={business.contact.description}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Location */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Office Card */}
            <div
              className="p-8"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-resting)',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(112, 0, 102, 0.08)', color: 'var(--color-primary)' }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ink)' }}>
                    Our Office
                  </h4>
                  <p style={{ marginTop: '6px', fontSize: '0.95rem', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>
                    {business.fullAddress}
                  </p>
                  <div className="mt-4">
                    <Button
                      href={business.googleMapsUrl}
                      target="_blank"
                      variant="secondary"
                      size="sm"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid var(--color-border-subtle)', margin: '24px 0' }} />

              {/* Direct Phone & Email */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(112, 0, 102, 0.08)', color: 'var(--color-primary)' }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.08em' }}>
                      Telephone
                    </div>
                    <a
                      href={business.phoneTel}
                      className="text-base font-semibold hover:underline"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {business.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(112, 0, 102, 0.08)', color: 'var(--color-primary)' }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.08em' }}>
                      Email Inquiries
                    </div>
                    <a
                      href={business.emailMailto}
                      className="text-base font-semibold hover:underline"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {business.email}
                    </a>
                  </div>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid var(--color-border-subtle)', margin: '24px 0' }} />

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(112, 0, 102, 0.08)', color: 'var(--color-primary)' }}
                >
                  <Clock size={18} />
                </div>
                <div>
                  <h5 style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.08em', marginBottom: '8px' }}>
                    Consultation Hours
                  </h5>
                  <div className="space-y-1.5 text-sm" style={{ color: 'var(--color-ink-muted)' }}>
                    {business.openingHours.map((schedule, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-6">
                        <span className="font-medium text-neutral-800">{schedule.days}:</span>
                        <span>{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Usable Contact Form */}
          <div className="lg:col-span-7">
            <div
              className="p-8 md:p-10"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-resting)',
              }}
            >
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(112, 0, 102, 0.1)', color: 'var(--color-primary)' }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      color: 'var(--color-ink)',
                      marginBottom: '12px',
                    }}
                  >
                    Inquiry Received
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-ink-muted)',
                      maxWidth: '480px',
                      lineHeight: 1.65,
                      marginBottom: '28px',
                    }}
                  >
                    Thank you for reaching out to Joy Elite Digital. A senior strategist will review your requirements and respond via telephone or email within one business day.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'General Consultation',
                        message: '',
                      });
                    }}
                    variant="secondary"
                    size="md"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.6rem',
                        color: 'var(--color-ink)',
                        marginBottom: '8px',
                      }}
                    >
                      {business.contact.formTitle}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted)', marginBottom: '24px' }}>
                      {business.contact.formDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        Your Name <span style={{ color: 'var(--color-primary)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Johnathan Smith"
                        className="w-full px-4 py-3 text-base rounded-lg border transition-colors focus:outline-none"
                        style={{
                          borderColor: 'var(--color-border)',
                          backgroundColor: 'var(--color-canvas)',
                          color: 'var(--color-ink)',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        Email Address <span style={{ color: 'var(--color-primary)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johnathan@example.co.uk"
                        className="w-full px-4 py-3 text-base rounded-lg border transition-colors focus:outline-none"
                        style={{
                          borderColor: 'var(--color-border)',
                          backgroundColor: 'var(--color-canvas)',
                          color: 'var(--color-ink)',
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07984 854063"
                        className="w-full px-4 py-3 text-base rounded-lg border transition-colors focus:outline-none"
                        style={{
                          borderColor: 'var(--color-border)',
                          backgroundColor: 'var(--color-canvas)',
                          color: 'var(--color-ink)',
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        Area of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base rounded-lg border transition-colors focus:outline-none"
                        style={{
                          borderColor: 'var(--color-border)',
                          backgroundColor: 'var(--color-canvas)',
                          color: 'var(--color-ink)',
                        }}
                      >
                        <option value="General Consultation">General Digital Marketing Audit</option>
                        {business.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      Brief Summary of Goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, current marketing challenges, or timeline..."
                      className="w-full px-4 py-3 text-base rounded-lg border transition-colors focus:outline-none resize-y"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-canvas)',
                        color: 'var(--color-ink)',
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={submitting}
                    >
                      {submitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                    </Button>

                    <span className="hidden sm:inline-block text-xs" style={{ color: 'var(--color-ink-subtle)' }}>
                      Strict confidentiality assured
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
