import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";
import Script from 'next/script';

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: 'Zevation - Breaking Barriers, Building Futures',
  description: 'Zevation enables Bharat with knowledge, access, and AI-driven tools to overcome barriers and unlock global career opportunities. Join us in building pathways to growth and fulfillment.',
  keywords: 'AI solutions, artificial intelligence, Bharat, India, technology, innovation, skilling, AI tools, career opportunities, Zevation, digital transformation, tech education, AI training, career development, global opportunities, multilingual support',
  authors: [{ name: "Zevation" }],
  creator: "Zevation",
  publisher: "Zevation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zevation.ai'),
  openGraph: {
    title: 'Zevation - Breaking Barriers, Building Futures',
    description: 'Zevation enables Bharat with knowledge, access, and AI-driven tools to overcome barriers and unlock global career opportunities. Join us in building pathways to growth and fulfillment.',
    url: 'https://zevation.ai',
    siteName: 'Zevation',
    images: [
      {
        url: 'https://zevation.ai/images/social/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'Zevation - Breaking Barriers, Building Futures',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zevation - Breaking Barriers, Building Futures',
    description: 'Zevation enables Bharat with knowledge, access, and AI-driven tools to overcome barriers and unlock global career opportunities. Join us in building pathways to growth and fulfillment.',
    images: ['https://zevation.ai/images/social/social-preview.png'],
    creator: '@zevation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code here
  },
  alternates: {
    canonical: 'https://zevation.ai',
  },
  icons: {
    icon: [
      { url: '/images/social/social-preview.png', type: 'image/png' },
    ],
  },
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zevation",
              "url": "https://zevation.ai",
              "logo": "https://zevation.ai/images/social/social-preview.png",
              "description": "Zevation enables Bharat with knowledge, access, and AI-driven tools to overcome barriers and unlock global career opportunities.",
              "sameAs": [
                "https://www.linkedin.com/company/zevation",
                "https://twitter.com/zevation"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@zevation.ai"
              },
              "foundingDate": "2024",
              "areaServed": "IN",
              "knowsAbout": [
                "Artificial Intelligence",
                "Career Development",
                "Digital Transformation",
                "Technology Education",
                "Global Opportunities"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Training",
                      "description": "Empowering individuals with cutting-edge AI skills and knowledge"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Career Development",
                      "description": "Building pathways to global career opportunities"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${rajdhani.variable} font-rajdhani`}>
        {children}
      </body>
    </html>
  );
}
