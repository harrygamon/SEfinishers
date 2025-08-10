# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SE Finishers is a professional single-page website for a print finishing business run by Zoe Axford. The site specializes in showcasing foiling and die cutting services up to SRA3 format (450mm × 320mm), targeting print companies, design agencies, and businesses requiring premium finishing services.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with Turbopack (usually runs on port 3003)
- `npm run build` - Build for production and run type checking
- `npm run lint` - Run ESLint for code quality
- `npm start` - Start production server

### Contact Form Testing
The contact form API endpoint is at `/api/contact` - test form submissions by submitting the contact form on the homepage.

## Architecture Overview

### Single-Page Application Structure
The website is a single-page application with smooth scrolling navigation between sections. All components are imported into `src/app/page.tsx` in this order:
1. Header (fixed navigation)
2. Hero (main landing section)
3. Services (detailed service showcase)
4. About (Zoe Axford profile)
5. Contact (inquiry form)
6. Footer

### Styling System
Uses Tailwind CSS 4 with a custom design system defined in `src/app/globals.css`:

**Color Palette:**
- `primary`: #2563eb (professional blue)
- `accent`: #0ea5e9 (lighter blue accent)
- `foreground`: #1e293b (dark text)
- `muted-foreground`: #64748b (secondary text)

**Key Design Tokens:**
- All colors have semantic names (background, foreground, primary, accent, muted, card, border)
- Uses CSS custom properties for both light and dark mode support
- Professional typography with system font stack

### Animation System
Uses Framer Motion throughout for professional animations:
- `fadeInUp` animations for content sections
- `staggerContainer` for sequential element animations  
- Hover effects with scale transformations
- Smooth page transitions with `whileInView` triggers

### Component Architecture

**Header.tsx**: Fixed navigation with professional company branding
- Company title: "SE Finishers" with tagline "PROFESSIONAL PRINT FINISHING"
- Smooth scroll navigation to page sections
- Mobile-responsive hamburger menu
- Contact information display (email: zoe.axford@sefinishers.com)

**Services.tsx**: Core business showcase with technical specifications
- Six service cards with gradient icons and detailed features
- Technical specifications panel showing SRA3 capabilities
- Industry-standard terminology and precision tolerances (±0.1mm)
- Professional service descriptions targeting B2B clients

**Contact.tsx**: Professional inquiry form
- Highly visible input fields with card styling and icons
- API integration with form validation
- Professional form labels with Lucide React icons
- Animated submit button with loading states

### Business Information
**Contact Details:**
- Email: zoe.axford@sefinishers.com (update in Header, Contact, Footer, and layout.tsx structured data)
- Phone: 01234 567890
- Owner: Zoe Axford

**Core Services:**
- Hot foil stamping up to SRA3
- Precision die cutting up to SRA3  
- Professional duplexing
- Binding & stitching
- Bespoke hand finishing
- Technical consultation

### SEO Implementation
- Structured data for LocalBusiness in `layout.tsx`
- Comprehensive meta tags optimized for print finishing industry
- Automatic sitemap generation (`sitemap.ts`)
- Professional robots.txt configuration
- Open Graph tags for social sharing

### Professional Standards
The design follows industry standards inspired by Fast Finish and F.E. Burman websites:
- Technical precision messaging (±0.1mm tolerances)
- Professional B2B language and terminology
- Industry-appropriate color schemes and typography
- Credibility indicators (experience, quality assurance)
- Technical specification displays

## Key Files for Business Updates

**Contact Information Changes:**
- `src/components/Header.tsx` - Header contact info
- `src/components/Contact.tsx` - Contact form and details
- `src/components/Footer.tsx` - Footer contact info  
- `src/app/layout.tsx` - Structured data schema

**Service Modifications:**
- `src/components/Services.tsx` - Main service showcase
- `src/components/Hero.tsx` - Hero section service highlights

**Professional Branding:**
- `src/app/globals.css` - Color system and design tokens
- All components use semantic color classes (primary, accent, muted-foreground)