import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../data/products';
import styles from './PDP.module.css';

interface RelatedProductsProps {
  products: Product[];
  currentProductId: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, currentProductId }) => {
  // Filter out current product and limit to 4 related items
  const relatedProducts = products
    .filter(p => p.id !== currentProductId)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className={styles.relatedSection} aria-labelledby="related-heading">
      <div className={styles.relatedHeader}>
        <h2 id="related-heading" className={styles.relatedTitle}>
          You might also like
        </h2>
      </div>
      
      <div className={styles.relatedGrid}>
        {relatedProducts.map((product) => {
          const badge = product.tags.find(tag => 
            ['Bestseller', 'New', 'Limited', 'Corporate'].includes(tag)
          );
          
          return (
            <Link 
              key={product.id}
              href={`/product/${product.slug}`}
              className={styles.relatedCard}
              aria-label={`View ${product.title}`}
            >
              <article>
                <div className={styles.relatedImageArea}>
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className={styles.relatedImage}
                  />
                  {badge && (
                    <span className={styles.relatedBadge}>{badge}</span>
                  )}
                </div>
                <div className={styles.relatedContent}>
                  <h3 className={styles.relatedProductTitle}>{product.title}</h3>
                  <p className={styles.relatedDescription}>{product.shortDesc}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;

