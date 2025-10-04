import "@/styles/globals.css";
import "@/styles/theme.css";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";

export const metadata = {
  title: "Sugar Rosette",
  description: "Premium gifts and hampers",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ui",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable}`} style={{
        fontFamily: 'var(--font-ui)',
        fontFeatureSettings: `'ss01', 'cv01'`,
        fontSynthesis: 'none'
      }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


