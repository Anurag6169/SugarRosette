"use client";
import React from "react";
import styles from "./PDP.module.css";

const StickyBar: React.FC<{ title: string; price: number }> = ({ title, price }) => {
  return (
    <div className={styles.stickyBar} role="region" aria-label="Quick add to cart">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 700, color: "var(--sr-ganache)" }}>{title}</div>
          <div style={{ color: "var(--sr-cocoa)" }}>₹{price.toLocaleString()}</div>
        </div>
        <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} aria-label="Add to cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default StickyBar;


