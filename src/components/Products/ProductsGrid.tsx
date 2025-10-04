'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from './ProductCard';
import products from '../../data/products';
import styles from './Products.module.css';

export default function ProductsGrid() {
  const searchParams = useSearchParams();
  
  const category = searchParams.get('category') || 'all';
  const flavor = searchParams.get('flavor') || 'all';
  const sort = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('search') || '';

  // Filter products
  let filteredProducts = products.filter((product) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const titleMatch = product.title.toLowerCase().includes(query);
      const descMatch = product.shortDesc.toLowerCase().includes(query);
      const tagMatch = product.tags.some(tag => tag.toLowerCase().includes(query));
      
      if (!titleMatch && !descMatch && !tagMatch) {
        return false;
      }
    }
    
    // Category filter
    const categoryMatch = category === 'all' || product.tags.some(tag => tag.toLowerCase() === category.toLowerCase());
    const flavorMatch = flavor === 'all' || product.flavors?.some(f => f.toLowerCase() === flavor.toLowerCase());
    
    return categoryMatch && flavorMatch;
  });

  // Sort products
  switch (sort) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case 'newest':
      filteredProducts.sort((a, b) => {
        const aIsNew = a.tags.includes('New');
        const bIsNew = b.tags.includes('New');
        if (aIsNew && !bIsNew) return -1;
        if (!aIsNew && bIsNew) return 1;
        return 0;
      });
      break;
    default:
      // Featured - keep original order or prioritize bestsellers
      filteredProducts.sort((a, b) => {
        const aIsBest = a.tags.includes('Bestseller');
        const bIsBest = b.tags.includes('Bestseller');
        if (aIsBest && !bIsBest) return -1;
        if (!aIsBest && bIsBest) return 1;
        return 0;
      });
  }

  return (
    <div className={styles.gridWrap}>
      {filteredProducts.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🔍</div>
          <h3 className={styles.emptyTitle}>No products found</h3>
          <p className={styles.emptyText}>
            Try adjusting your filters to see more results.
          </p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

