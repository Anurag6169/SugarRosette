'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './Products.module.css';

export default function ProductsHero() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search');

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          {searchQuery ? `Search results for "${searchQuery}"` : 'Our Products'}
        </h1>
        <p className={styles.heroSubtitle}>
          {searchQuery 
            ? 'Find your perfect treat below' 
            : 'Discover handcrafted chocolates, fresh cakes, and artisan treats made with love.'}
        </p>
      </div>
    </section>
  );
}

