# SE Finishers Website

A professional single-page website for SE Finishers, showcasing specialized print finishing services with emphasis on foiling and die cutting capabilities up to SRA3 format.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional Presentation**: Clean, modern design inspired by industry leaders
- **Service Showcase**: Clear presentation of foiling, die cutting, and other services
- **Contact Form**: Functional contact form with form validation
- **SEO Optimized**: Structured data, meta tags, and sitemap included
- **Fast Performance**: Built with Next.js for optimal loading speeds

## Services Highlighted

- **Foiling up to SRA3** (450mm × 320mm)
- **Die cutting up to SRA3** 
- **Duplexing services**
- **Stitching and binding**
- **Hand finishing**

## Tech Stack

- **Framework**: Next.js 15.4.6 with React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

### Deployment to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push to main branch
3. The site will be live at your custom domain

## Project Structure

```
src/
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── layout.tsx            # Root layout with SEO metadata
│   ├── page.tsx              # Main homepage
│   ├── sitemap.ts            # SEO sitemap generation
│   └── robots.ts             # SEO robots.txt
└── components/
    ├── Header.tsx            # Navigation header
    ├── Hero.tsx              # Hero section with CTA
    ├── Services.tsx          # Services showcase
    ├── About.tsx             # About Zoe Axford
    ├── Contact.tsx           # Contact form
    └── Footer.tsx            # Site footer
```

## Key Features

### SEO Optimization
- Structured data for local business
- Optimized meta tags and descriptions
- Automatic sitemap generation
- Search engine friendly URLs

### Contact Form
- Form validation (client and server-side)
- Professional inquiry handling
- Responsive design
- Success/error messaging

### Responsive Design
- Mobile-first approach
- Professional appearance on all devices
- Touch-friendly navigation
- Optimized images and content

## Customization

### Contact Information
Update contact details in:
- `src/components/Header.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/app/layout.tsx` (structured data)

### Services
Modify service offerings in:
- `src/components/Services.tsx`
- `src/components/Hero.tsx`

### Styling
- Colors and styling can be customized in individual components
- Tailwind CSS classes used throughout

## Performance Features

- Static page generation where possible
- Optimized images and assets
- Minimal JavaScript bundle
- Fast loading times (<3 seconds target)

## Browser Support

- Chrome (latest 3 versions)
- Safari (latest 3 versions)
- Firefox (latest 3 versions)
- Edge (latest 3 versions)

## License

This website is built for SE Finishers by Zoe Axford.

---

**Contact**: info@sefinishers.co.uk  
**Phone**: 01234 567890  
**Services**: Professional print finishing up to SRA3 format
