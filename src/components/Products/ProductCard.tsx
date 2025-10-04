import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../data/products';
import styles from './Products.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const badgeTag = product.tags.find(tag => 
    ['Bestseller', 'New', 'Limited', 'Corporate'].includes(tag)
  );

  const badgeColors: Record<string, string> = {
    'Bestseller': styles.badgeBestseller,
    'New': styles.badgeNew,
    'Limited': styles.badgeLimited,
    'Corporate': styles.badgeCorporate,
  };

  return (
    <Link 
      href={`/product/${product.slug}`}
      className={styles.cardLink}
      aria-label={`View ${product.title}`}
    >
      <article className={styles.card}>
        {/* Image */}
        <div className={styles.cardImage}>
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
          
          {/* Badge */}
          {badgeTag && (
            <div className={`${styles.badge} ${badgeColors[badgeTag]}`}>
              {badgeTag}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={styles.cardContent}>
          {/* Title */}
          <h3 className={styles.cardTitle}>{product.title}</h3>
          
          {/* Description */}
          <p className={styles.cardDescription}>{product.shortDesc}</p>

          {/* CTA */}
          <div className={styles.cardCta}>
            <span className={styles.ctaButton}>View details</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

