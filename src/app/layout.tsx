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
  title: `${SITE_CONFIG.name} - Empowering Bharat with AI`,
  description: SITE_CONFIG.description,
  keywords: "AI, artificial intelligence, Bharat, India, technology, innovation, skilling, AI tools, career opportunities, Zevation, AI solutions, digital transformation, tech education, AI training, career development",
  authors: [{ name: "Zevation" }],
  creator: "Zevation",
  publisher: "Zevation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} - Empowering Bharat with AI`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.images.logo.path,
        width: SITE_CONFIG.images.logo.width,
        height: SITE_CONFIG.images.logo.height,
        alt: SITE_CONFIG.images.logo.alt,
      },
    ],
  },
  twitter: {
    card: SITE_CONFIG.social.twitter.card,
    title: `${SITE_CONFIG.name} - Empowering Bharat with AI`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.images.logo.path],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} font-rajdhani antialiased`}>
        {children}
      </body>
    </html>
  );
}
