import React from 'react';

/**
 * Premium Button component conforming to Luxury design tokens:
 * - 8px radius
 * - Single-line controls (whitespace-nowrap)
 * - 44px+ touch target accessibility
 * - Subtle transition and hover lift
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  target,
  rel,
  ...props
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-button)',
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all var(--transition-fast)',
    border: '1px solid transparent',
  };

  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '0.875rem',
      minHeight: '38px',
    },
    md: {
      padding: '12px 24px',
      fontSize: '0.95rem',
      minHeight: '46px',
    },
    lg: {
      padding: '14px 32px',
      fontSize: '1.05rem',
      minHeight: '52px',
    },
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#FFFFFF',
      borderColor: 'var(--color-primary)',
      boxShadow: 'var(--shadow-resting)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-border)',
    },
    white: {
      backgroundColor: '#FFFFFF',
      color: 'var(--color-primary)',
      borderColor: '#FFFFFF',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    },
    outlineWhite: {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: '#FFFFFF',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(8px)',
    },
    text: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'transparent',
      padding: '8px 12px',
    },
  };

  const combinedStyle = {
    ...baseStyles,
    ...(sizes[size] || sizes.md),
    ...(variants[variant] || variants.primary),
  };

  if (href) {
    return (
      <a
        href={href}
        className={`luxury-btn luxury-btn-${variant} ${className}`}
        style={combinedStyle}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`luxury-btn luxury-btn-${variant} ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </button>
  );
}
