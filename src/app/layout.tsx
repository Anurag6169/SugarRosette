import "@/styles/globals.css";
import "@/styles/theme.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import React from "react";

export const metadata = {
  title: "Sugar Rosette",
  description: "Premium gifts and hampers",
};

// Fonts are loaded via <link> tags below to ensure consistency across all routes

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{
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


