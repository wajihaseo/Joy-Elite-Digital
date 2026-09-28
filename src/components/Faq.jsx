import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const faqData = business.faq;
  const [openIndex, setOpenIndex] = useState(0); // First item open by default for immediate clarity

  if (!faqData || !faqData.items || faqData.items.length === 0) {
    return null;
  }

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
      <div className="container max-w-4xl">
        <SectionHeading
          eyebrow={faqData.eyebrow}
          title={faqData.title}
          description={faqData.description}
          align="left"
        />

        <div className="space-y-4">
          {faqData.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-card)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'box-shadow var(--transition-fast)',
                  boxShadow: isOpen ? 'var(--shadow-resting)' : 'none',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-ink)',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {item.question}
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'rgba(112, 0, 102, 0.08)' : 'transparent',
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-ink-muted)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'all var(--transition-fast)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-6 md:px-7 md:pb-7 pt-0 text-base"
                    style={{
                      color: 'var(--color-ink-muted)',
                      lineHeight: 1.7,
                      borderTop: '1px solid var(--color-border-subtle)',
                      paddingTop: '16px',
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
