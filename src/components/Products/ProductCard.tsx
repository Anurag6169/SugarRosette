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

  const whatsappMessage = `Hi!%20I'd%20like%20to%20purchase%20*${encodeURIComponent(product.title)}*%0A%0A${encodeURIComponent(product.shortDesc)}`;

  return (
    <article className={styles.card}>
      {/* Image */}
      <Link href={`/product/${product.slug}`} className={styles.cardImageLink}>
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
      </Link>

      {/* Content */}
      <div className={styles.cardContent}>
        {/* Title */}
        <Link href={`/product/${product.slug}`} className={styles.cardTitleLink}>
          <h3 className={styles.cardTitle}>{product.title}</h3>
        </Link>
        
        {/* Description */}
        <p className={styles.cardDescription}>{product.shortDesc}</p>

        {/* CTA */}
        <div className={styles.cardCta}>
          <a 
            href={`https://wa.me/918128995138?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={(e) => e.stopPropagation()}
          >
            Buy Now
          </a>
        </div>
      </div>
    </article>
  );
}

