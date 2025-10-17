# TT-Core: Premium Car Import Broker Website

High-conversion website for importing premium and electric vehicles from Germany to Spain.

## Features

### Core Pages
- **Home** (`/`) - Hero, trust stack, calculator preview, case studies
- **How It Works** (`/como-funciona`) - 8-step process breakdown
- **Calculators** (`/calculadoras`) - Savings, logistics, and EV battery health calculators
- **Case Studies** (`/casos-de-exito`) - Real anonymized success stories
- **Legal Feature** (`/legal-feature`) - CMR insurance, escrow, inspections explained
- **FAQ** (`/faq`) - Comprehensive answers to common questions
- **Company** (`/empresa`) - About, team, credentials
- **Contact** (`/contacto`) - Segmented lead form (Particular/Empresa/Dealer)

### Legal Compliance
- Privacy Policy (`/privacidad`) - RGPD compliant
- Cookie Policy (`/cookies`) - Spanish regulations
- Terms & Conditions (`/terminos`) - VERI*FACTU compliant
- Cookie consent banner with localStorage

### Technical Features
- Next.js 15 App Router
- Tailwind CSS v4 with custom design system
- SEO optimized with schema.org markup (FAQPage, HowTo, Service, AutoDealer)
- Google Analytics 4 + Google Tag Manager integration
- Responsive mobile-first design
- Performance optimized (target: LCP ≤2.5s)

## Design System

### Colors
- **Primary**: Deep navy (`#1e3a5f`) - Trust, professionalism
- **Secondary**: Warm cream (`#f8f6f3`) - Approachable, premium
- **Accent**: Forest green (`#2d5016`) - Success, savings
- **Muted**: Soft gray (`#6b7280`) - Supporting text

### Typography
- **Headings**: Playfair Display (serif) - Elegant, premium
- **Body**: Geist Sans - Clean, readable
- **Mono**: Geist Mono - Technical data

## Analytics Setup

To enable analytics, add these environment variables:

\`\`\`bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
\`\`\`

### Event Tracking

The site includes helper functions for tracking key conversions:

\`\`\`typescript
import { trackCalculatorUse, trackFormSubmission, trackCTAClick } from '@/lib/analytics'

// Track calculator usage
trackCalculatorUse('savings', { savings: 8500 })

// Track form submissions
trackFormSubmission('contact', 'particular')

// Track CTA clicks
trackCTAClick('hero', 'Calcular ahorro')
\`\`\`

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## Deployment

This project is optimized for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables (GA_ID, GTM_ID)
4. Deploy

## Performance Targets

- **LCP**: ≤2.5s (Largest Contentful Paint)
- **FID**: ≤100ms (First Input Delay)
- **CLS**: ≤0.1 (Cumulative Layout Shift)
- **Lighthouse Score**: ≥90

## Conversion Goals

- **Visitor-to-Lead**: ≥7%
- **Lead-to-Close**: ≥22%
- **Response Time**: ≤24h
- **NPS**: ≥60

## License

Proprietary - TT-Core 2025
