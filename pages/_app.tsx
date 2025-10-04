import "@/styles/globals.css";
import "@/styles/theme.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { Fraunces, Inter } from "next/font/google";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fraunces.variable} ${inter.variable}`} style={{
      fontFamily: 'var(--font-ui)',
      fontFeatureSettings: `'ss01', 'cv01'`,
      fontSynthesis: 'none'
    }}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
