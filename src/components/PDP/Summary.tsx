"use client";
import React, { useState } from "react";
import styles from "./PDP.module.css";

interface Props {
  title: string;
  shortDesc: string;
  // price and related fields intentionally omitted per requirements
  tags: string[];
  customizable?: boolean;
  leadTime?: string;
}

const Summary: React.FC<Props> = ({ title, shortDesc, tags, customizable, leadTime }) => {
  return (
    <aside className={styles.summary} aria-label="Product summary">
      <h1 className={styles.title}>{title}</h1>
      <p style={{ color: "var(--sr-cocoa)", margin: 0 }}>{shortDesc}</p>

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
        <button type="button" className={styles.btn} aria-label="Buy now">Buy Now</button>
        <button type="button" style={{ background: "transparent", border: "none", color: "var(--sr-rosette)" }} aria-label="Corporate enquiry">Corporate Enquiry</button>
      </div>

      <div style={{ marginTop: 8, color: "var(--sr-cocoa)", opacity: 0.9, fontSize: 13 }}>
        Secure checkout · Easy returns · Quality guarantee
      </div>
    </aside>
  );
};

export default Summary;


