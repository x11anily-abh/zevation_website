import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Zevation - Empowering Bharat with AI",
  description: "Building AI products, platforms, and solutions to empower the developing world with a focus on Bharat.",
  keywords: "AI, artificial intelligence, Bharat, India, technology, innovation, skilling, AI tools, career opportunities",
  openGraph: {
    title: "Zevation - Empowering Bharat with AI",
    description: "Building AI products, platforms, and solutions to empower the developing world with a focus on Bharat.",
    url: "https://zevation.ai",
    siteName: "Zevation",
    images: [
      {
        url: "/images/Zevation_transparent_background.png",
        width: 200,
        height: 200,
        alt: "Zevation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zevation - Empowering Bharat with AI",
    description: "Building AI products, platforms, and solutions to empower the developing world with a focus on Bharat.",
    images: ["/images/Zevation_transparent_background.png"],
  },
  alternates: {
    canonical: "https://zevation.ai",
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
