import React from 'react';
import styles from './Products.module.css';

export default function ProductsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>Our Products</h1>
        <p className={styles.heroSubtitle}>
          Discover handcrafted chocolates, fresh cakes, and artisan treats made with love.
        </p>
      </div>
    </section>
  );
}

