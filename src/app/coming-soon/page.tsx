import React from "react";
import styles from "./ComingSoon.module.css";

export const metadata = {
  title: "Coming Soon | Sugar Rosette",
  description: "Something special is coming soon to Sugar Rosette.",
};

export default function ComingSoonPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>🎁</div>
          <h1 className={styles.title}>Coming Soon</h1>
          <p className={styles.description}>
            We're crafting something special! Our new collection will be available soon.
            In the meantime, explore our beautiful hampers featuring handcrafted chocolates 
            and artisan treats.
          </p>
          <div className={styles.cta}>
            <a href="/hampers" className={styles.button}>
              Explore Our Hampers
            </a>
            <a href="/" className={styles.secondaryButton}>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
