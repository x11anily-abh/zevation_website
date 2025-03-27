import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: 'Zevation - Empowering Bharat with AI',
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
    title: 'Zevation - Empowering Bharat with AI',
    description: 'Zevation enables Bharat with knowledge, access, and AI-driven tools to overcome barriers and unlock global career opportunities. Join us in building pathways to growth and fulfillment.',
    url: 'https://zevation.ai',
    siteName: 'Zevation',
    images: [
      {
        url: 'https://zevation.ai/images/social/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'Zevation - Empowering Bharat with AI',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zevation - Empowering Bharat with AI',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} font-rajdhani`}>
        {children}
      </body>
    </html>
  );
}
