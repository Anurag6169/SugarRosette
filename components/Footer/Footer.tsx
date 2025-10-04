"use client";
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

interface FooterProps { className?: string; }

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      {/* Service Strip */}
      <div className={styles.serviceStrip}>
        <div className={styles.container}>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className={styles.serviceTitle}>Freshly Crafted</div>
                <div className={styles.serviceSub}>Made to order daily</div>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <div className={styles.serviceTitle}>Careful Packaging</div>
                <div className={styles.serviceSub}>Elegant presentation</div>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon} aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <div className={styles.serviceTitle}>Pan-India Delivery</div>
                <div className={styles.serviceSub}>Same day available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h2 className={styles.brandTitle}>Sugar Rosette</h2>
              <p className={styles.brandText}>Crafting premium confections with passion and precision. From artisan chocolates to elegant hampers, we deliver moments of joy that celebrate life's sweetest occasions.</p>
              <div className={styles.socials}>
                <a href="https://instagram.com/sugarrosette" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/></svg>
                </a>
                <a href="https://facebook.com/sugarrosette" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://twitter.com/sugarrosette" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://linkedin.com/company/sugarrosette" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>Quick Links</h3>
              <nav>
                <Link href="/collections" className={styles.link}>Collections</Link>
                <Link href="/corporate-gifting" className={styles.link}>Corporate Gifting</Link>
                <Link href="/about" className={styles.link}>About Us</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
                <Link href="/products" className={styles.link}>All Products</Link>
              </nav>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>Collections</h3>
              <nav>
                <Link href="/collections/chocolates" className={styles.link}>Premium Chocolates</Link>
                <Link href="/collections/hampers" className={styles.link}>Luxury Hampers</Link>
                <Link href="/collections/cakes" className={styles.link}>Artisan Cakes</Link>
                <Link href="/collections/bakery" className={styles.link}>Fresh Bakery</Link>
              </nav>
            </div>

            <div>
              <h3 className={styles.sectionTitle}>Contact Info</h3>
              <div className={styles.contactRow}>
                <div aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className={styles.contactText}>
                  <p>123 Artisan Lane</p>
                  <p>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className={styles.contactRow}>
                <div aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className={styles.contactText}>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>
              <div className={styles.contactRow}>
                <div aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className={styles.contactText}>
                  <a href="mailto:hello@sugarrosette.com">hello@sugarrosette.com</a>
                </div>
              </div>
              <div className={styles.contactRow}>
                <div aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className={styles.contactText}>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            <div className={styles.muted}>© 2024 Sugar Rosette. All rights reserved.</div>
            <div className={styles.muted} style={{ display: "flex", gap: 16 }}>
              <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
              <Link href="/terms" className={styles.link}>Terms of Service</Link>
              <Link href="/shipping" className={styles.link}>Shipping Info</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


