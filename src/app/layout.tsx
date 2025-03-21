import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zevation - AI Solutions for the Developing World",
  description: "Empowering businesses in India with cutting-edge AI solutions. We specialize in custom AI development, machine learning, and data analytics.",
  icons: {
    icon: '/images/Zevation_ transparent_ background.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
