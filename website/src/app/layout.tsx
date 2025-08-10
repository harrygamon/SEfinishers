import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SE Finishers | Professional Print Finishing | Foiling & Die Cutting SRA3",
  description: "Professional print finishing services specializing in foiling and die cutting up to SRA3. Expert finishing by Zoe Axford. Duplexing, stitching, and hand finishing services.",
  keywords: "print finishing, foiling, die cutting, SRA3, professional finishing, duplexing, stitching, hand finishing",
  authors: [{ name: "SE Finishers" }],
  openGraph: {
    title: "SE Finishers | Professional Print Finishing Services",
    description: "Specialized print finishing services with SRA3 capabilities",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SE Finishers",
    "description": "Professional print finishing services specializing in foiling and die cutting up to SRA3",
    "founder": {
      "@type": "Person",
      "name": "Zoe Axford"
    },
    "serviceArea": "United Kingdom",
    "priceRange": "$$",
    "telephone": "01234 567890",
    "email": "info@sefinishers.co.uk",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Print Finishing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Foiling up to SRA3",
            "description": "Premium hot foil stamping services with metallic and colored foils"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Die Cutting up to SRA3",
            "description": "Precision die cutting services for custom shapes and designs"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
