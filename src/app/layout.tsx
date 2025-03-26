import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Zevation - Empowering India with AI",
  description: "Building AI products, platforms, and solutions to empower the developing world with a focus on India.",
  icons: {
    icon: "/images/Zevation_ transparent_ background.png",
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
