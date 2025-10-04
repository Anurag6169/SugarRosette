'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './Products.module.css';

export default function ProductsFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Get current filter values from URL
  const currentCategory = searchParams.get('category') || 'all';
  const currentFlavor = searchParams.get('flavor') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    
    router.push(`/products?${params.toString()}`);
  };

  const resetFilters = () => {
    router.push('/products');
  };

  const hasActiveFilters = currentCategory !== 'all' || currentFlavor !== 'all' || currentSort !== 'featured';

  return (
    <section className={styles.filtersSection}>
      <div className={styles.filtersContainer}>
        {/* Mobile toggle */}
        <button 
          className={styles.filterToggle}
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          aria-expanded={isFiltersOpen}
          aria-label="Toggle filters"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2.5 5.83333H17.5M5.83333 10H14.1667M8.33333 14.1667H11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Filters {hasActiveFilters && <span className={styles.filterBadge}>•</span>}
        </button>

        {/* Filters */}
        <div className={`${styles.filters} ${isFiltersOpen ? styles.filtersOpen : ''}`}>
          {/* Category Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Category</label>
            <div className={styles.filterChips}>
              {['all', 'Chocolate', 'Cake', 'Hamper', 'Bakery', 'Fresh'].map((cat) => (
                <button
                  key={cat}
                  className={`${styles.chip} ${currentCategory === cat.toLowerCase() ? styles.chipActive : ''}`}
                  onClick={() => updateFilters('category', cat.toLowerCase())}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Flavor Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Flavor</label>
            <div className={styles.filterChips}>
              {['all', 'Milk', 'Dark', 'White', 'Chocolate', 'Strawberry', 'Assorted'].map((flavor) => (
                <button
                  key={flavor}
                  className={`${styles.chip} ${currentFlavor === flavor.toLowerCase() ? styles.chipActive : ''}`}
                  onClick={() => updateFilters('flavor', flavor.toLowerCase())}
                >
                  {flavor === 'all' ? 'All' : flavor}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Sort by</label>
            <select 
              className={styles.sortSelect}
              value={currentSort}
              onChange={(e) => updateFilters('sort', e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {/* Reset */}
          {hasActiveFilters && (
            <button 
              className={styles.resetButton}
              onClick={resetFilters}
            >
              Reset filters
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

