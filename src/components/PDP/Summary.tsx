"use client";
import React, { useState } from "react";
import styles from "./PDP.module.css";

interface Props {
  title: string;
  shortDesc: string;
  longDesc: string;
  contents?: string[];
  allergens?: string[];
  shelfLife?: string;
  // price and related fields intentionally omitted per requirements
  tags: string[];
  customizable?: boolean;
  leadTime?: string;
}

const Summary: React.FC<Props> = ({ title, shortDesc, longDesc, contents, allergens, shelfLife, tags, customizable, leadTime }) => {
  return (
    <aside className={styles.summary} aria-label="Product summary">
      <h1 className={styles.title}>{title}</h1>
      <p style={{ color: "var(--sr-cocoa)", margin: "0 0 16px 0", fontSize: "15px", lineHeight: "1.6" }}>{shortDesc}</p>

      {tags?.length > 0 && (
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          {tags.slice(0, 3).map((t) => (
            <span key={t} style={{ background: "var(--sr-blush)", color: "var(--sr-ganache)", padding: "6px 10px", borderRadius: 9999, fontSize: 12 }}>{t}</span>
          ))}
        </div>
      )}

      <ul className={styles.bullets}>
        <li>What’s inside: curated artisan selection</li>
        <li>Perfect for: celebrations & corporate gifting</li>
        <li>Why special: handcrafted with local ingredients</li>
      </ul>

      {/* Personal note removed as requested */}

      {leadTime && <p style={{ color: "var(--sr-cocoa)", marginTop: 8 }}>{leadTime}</p>}

      <div className={styles.ctaRow}>
        <a 
          href={`https://wa.me/918128995138?text=Hi!%20I'd%20like%20to%20purchase%20*${encodeURIComponent(title)}*%0A%0A${encodeURIComponent(shortDesc)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnBuyNow}
          aria-label="Buy now via WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Buy Now
        </a>
        <a 
          href={`https://wa.me/918128995138?text=Hi!%20I'm%20interested%20in%20*${encodeURIComponent(title)}*%20for%20corporate%20gifting.%0A%0A${encodeURIComponent(shortDesc)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnWhatsApp}
          aria-label="Corporate enquiry via WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Corporate Enquiry
        </a>
      </div>

      <div className={styles.trustBadges}>
        <span className={styles.trustBadge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          Secure checkout
        </span>
        <span className={styles.trustBadge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 11 12 14 22 4"/>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
          </svg>
          Quality guarantee
        </span>
      </div>

      {/* Description and Details */}
      <div className={styles.summaryDetails}>
        <div className={styles.detailSection}>
          <h3 className={styles.detailHeading}>Description</h3>
          <p className={styles.detailText}>{longDesc}</p>
        </div>

        {contents && contents.length > 0 && (
          <div className={styles.detailSection}>
            <h3 className={styles.detailHeading}>Contents</h3>
            <ul className={styles.detailList}>
              {contents.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {allergens && allergens.length > 0 && (
          <div className={styles.detailSection}>
            <h3 className={styles.detailHeading}>Allergens & Dietary</h3>
            <p className={styles.detailText}>{allergens.join(", ")}</p>
          </div>
        )}

        {shelfLife && (
          <div className={styles.detailSection}>
            <h3 className={styles.detailHeading}>Shelf Life</h3>
            <p className={styles.detailText}>{shelfLife}</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Summary;


