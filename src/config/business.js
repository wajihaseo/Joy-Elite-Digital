/**
 * Joy Elite Digital — Complete Business Configuration
 * Non-technical owners can edit this single file to update all business details,
 * services, contact information, hours, colors, and imagery across the website.
 */

export const business = {
  name: "Joy Elite Digital",
  legalName: "Joy Elite Digital Ltd",
  type: "Digital Marketing",
  tagline: "Your Vision, Our Digital Expertise.",
  city: "Halesowen",
  area: "West Midlands",
  fullAddress: "Pioneer House, Birmingham Street, Halesowen, West Midlands, United Kingdom, B63 3HN",
  street: "Pioneer House, Birmingham Street",
  postalCode: "B63 3HN",
  country: "United Kingdom",
  
  phone: "447984854063",
  phoneFormatted: "+44 7984 854063",
  phoneTel: "tel:447984854063",
  
  email: "arslanseo049@gmail.com",
  emailMailto: "mailto:arslanseo049@gmail.com",
  
  // WhatsApp is omitted because no WhatsApp number was provided in the brief.
  // If a WhatsApp number is added later, provide the international digits (e.g., "447984854063")
  whatsapp: null,
  
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pioneer+House%2C+Birmingham+Street%2C+Halesowen%2C+West+Midlands%2C+B63+3HN",
  
  brandStyle: "Luxury",
  
  colors: {
    primary: "#700066",       // Deep regal plum / berry luxury
    primaryDark: "#470041",   // Rich dark velvet plum
    primaryHover: "#5c0054",  // Intermediate hover shade
    secondary: "#FF94F5",     // Radiant orchid / delicate blush accent
    secondaryDark: "#d965cf", // Secondary contrast tone
    ink: "#1A1218",           // Near-black ink with plum undertone
    canvas: "#FAF7F9",        // Soft off-white luxury canvas
    surface: "#FFFFFF",       // Pure white card surface
    surfaceAlt: "#F4EDF2",    // Subtle light neutral for alternating sections
    border: "rgba(112, 0, 102, 0.1)", // Hairline refined plum border
    borderSubtle: "rgba(112, 0, 102, 0.06)",
    textMuted: "#6B5C67",     // Legible muted neutral
    textLight: "#FFFFFF",     // Crisp white for dark containers
  },
  
  cta: {
    primary: {
      text: "Visit Us",
      href: "#contact",
      subtext: "Pioneer House, Halesowen",
    },
    secondary: {
      text: "View Services",
      href: "#services",
    },
    phoneCta: {
      text: "Call Directly",
      href: "tel:447984854063",
    },
    directionsCta: {
      text: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=Pioneer+House%2C+Birmingham+Street%2C+Halesowen%2C+West+Midlands%2C+B63+3HN",
    },
  },
  
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  
  hero: {
    eyebrow: "Halesowen · Digital Marketing Agency",
    headline: "Your Vision, Our Digital Expertise.",
    subheadline: "We partner with ambitious businesses across Halesowen and the West Midlands to build measurable commercial growth through precision search, targeted campaigns, and refined brand presence.",
    locationBadge: "Pioneer House, Birmingham Street · Halesowen, B63 3HN",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Pristine modern executive office and conference studio",
  },
  
  services: [
    {
      id: "digital-marketing",
      number: "01",
      title: "Digital Marketing",
      tagline: "Multichannel Commercial Growth",
      description: "Cohesive multi-channel marketing campaigns tailored to generate high-intent inquiries, build local market presence, and compound business revenue over time.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Executive team planning digital marketing strategy",
      deliverables: ["Cross-channel planning", "Audience research", "Full-funnel attribution"],
    },
    {
      id: "social-media-management",
      number: "02",
      title: "Social Media Management",
      tagline: "Refined Community Authority",
      description: "Consistent, polished content production and community stewardship that presents your business with distinction and turns passive scrollers into dedicated patrons.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Curated social media content strategy and publishing",
      deliverables: ["Content creation", "Audience engagement", "Monthly reporting"],
    },
    {
      id: "seo",
      number: "03",
      title: "Search Engine Optimization (SEO)",
      tagline: "Prominent Google Visibility",
      description: "Technical SEO audits, local Google Business optimization, and high-value search visibility that position your firm ahead of regional competitors in Halesowen.",
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Search ranking analytics and organic visibility growth",
      deliverables: ["Local SEO & Maps", "Technical optimization", "Authority link profile"],
    },
    {
      id: "google-ads",
      number: "04",
      title: "Google Ads Management",
      tagline: "High-Intent Lead Acquisition",
      description: "Disciplined pay-per-click management focused strictly on conversion economics, bidding efficiency, and reducing cost-per-lead for immediate client acquisition.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Performance advertising dashboard and PPC management",
      deliverables: ["Search & intent ads", "Negative keyword tuning", "Conversion tracking"],
    },
    {
      id: "content-marketing",
      number: "05",
      title: "Content Marketing",
      tagline: "Authoritative Editorial Assets",
      description: "Substantive editorial writing, industry case studies, and customer-facing guides that clearly explain your expertise and establish deep consumer confidence.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Editorial writing and thoughtful content production",
      deliverables: ["Long-form thought leadership", "Customer guides", "Strategic copywriting"],
    },
    {
      id: "website-brand-strategy",
      number: "06",
      title: "Website & Brand Strategy",
      tagline: "Cohesive Digital Distinction",
      description: "Strategic digital design architecture and brand positioning that elevate your company profile, communicate luxury standards, and inspire immediate trust.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Modern web architecture and brand identity presentation",
      deliverables: ["Brand identity direction", "Conversion architecture", "UX optimization"],
    },
  ],
  
  about: {
    eyebrow: "Our Practice",
    title: "Quiet Confidence & Digital Craftsmanship",
    lead: "Joy Elite Digital was founded in Halesowen to give discerning business owners access to digital expertise that treats every pound of marketing budget with commercial seriousness.",
    paragraphs: [
      "Operating from Pioneer House on Birmingham Street, we intentionally remain a focused, high-attention agency. We don't hand your business off to entry-level coordinators or hide behind automated jargon. You partner directly with experienced digital practitioners who invest the time to understand your clients, your margin, and your local competition.",
      "Whether optimizing search visibility across the West Midlands or managing precision Google Ads campaigns, our focus remains firmly on qualified commercial inquiries that genuinely move your balance sheet.",
    ],
    quote: "“True digital luxury is not superficial embellishment — it is clarity of message, precision in execution, and complete accountability to the business owner.”",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Collaborative strategy session at Joy Elite Digital in Halesowen",
    stats: [
      { label: "Agency Base", value: "Halesowen, UK" },
      { label: "Core Services", value: "6 Disciplines" },
      { label: "Senior Attention", value: "Direct & Dedicated" },
    ],
  },
  
  whyChooseUs: {
    eyebrow: "The Advantage",
    title: "Why Clients in Halesowen Choose Joy Elite Digital",
    description: "We have built our reputation on transparent communication, technical precision, and an uncompromising standard of service.",
    points: [
      {
        number: "01",
        title: "Direct Senior Consultation",
        description: "You work directly with dedicated digital strategists who develop and execute your roadmap, guaranteeing accountability and consistent craftsmanship.",
      },
      {
        number: "02",
        title: "Halesowen & West Midlands Grounding",
        description: "Based at Pioneer House on Birmingham Street, we understand the local economic landscape, customer expectations, and regional search dynamics.",
      },
      {
        number: "03",
        title: "Inquiries Over Vanity Metrics",
        description: "We measure campaign success by booked appointments, genuine phone inquiries, and qualified client transactions — never superficial page views.",
      },
      {
        number: "04",
        title: "Uncompromising Transparency",
        description: "Every campaign is accompanied by plain-English monthly reviews, transparent budget allocations, and open direct phone communication.",
      },
    ],
  },
  
  // Testimonials is intentionally null because {{TESTIMONIALS}} was not provided.
  // The site will omit the testimonials section cleanly rather than fabricating reviews.
  testimonials: null,
  
  faq: {
    eyebrow: "Common Questions",
    title: "Frequently Asked Questions",
    description: "Clear answers to help you understand how we operate and what to expect when collaborating with Joy Elite Digital.",
    items: [
      {
        question: "How do your monthly marketing engagements work?",
        answer: "We begin with a focused discovery consultation at Pioneer House or via video call to review your current online position, competitors, and growth objectives. From there, we design a transparent monthly scope covering SEO, paid search, or social management with clear deliverables and no arbitrary lock-ins.",
      },
      {
        question: "How soon can we expect to see tangible results?",
        answer: "Paid search through Google Ads can produce qualified inquiries within days of campaign launch. Search Engine Optimization (SEO) and content marketing are compounding assets that typically begin demonstrating measurable local ranking gains within 90 to 120 days.",
      },
      {
        question: "Can we visit your office in Halesowen?",
        answer: "Yes. We welcome clients to our offices at Pioneer House on Birmingham Street in Halesowen. To ensure dedicated preparation and private meeting room availability, visits are scheduled by appointment.",
      },
      {
        question: "Do you only work with businesses in Halesowen?",
        answer: "While we take pride in being rooted in Halesowen and serving local West Midlands firms, we also manage campaigns for regional and national companies across the United Kingdom who require senior-level marketing execution.",
      },
    ],
  },
  
  contact: {
    eyebrow: "Start the Conversation",
    title: "Visit Us in Halesowen or Get in Touch",
    description: "We are situated at Pioneer House on Birmingham Street. Call our direct line, send an email inquiry, or stop by our office to discuss your digital roadmap.",
    formTitle: "Send a Direct Inquiry",
    formDescription: "Leave a few details below and a senior director will personally review your request within one business day.",
  },
  
  openingHours: [
    { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
    { days: "Saturday – Sunday", hours: "By Appointment" },
  ],
  
  footer: {
    copyright: "Joy Elite Digital. All rights reserved.",
    privacyText: "Pioneer House, Birmingham Street, Halesowen, West Midlands, B63 3HN",
  },
};
