import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hamper } from '../../data/hampers';
import styles from './PDP.module.css';

interface RelatedProductsProps {
  hampers: Hamper[];
  currentProductId: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ 
  hampers, 
  currentProductId
}) => {
  // Filter out current hamper and limit to 4 related items
  const relatedHampers = hampers
    .filter(h => h.id !== currentProductId)
    .slice(0, 4);

  if (relatedHampers.length === 0) return null;

  return (
    <section className={styles.relatedSection} aria-labelledby="related-heading">
      <div className={styles.relatedHeader}>
        <h2 id="related-heading" className={styles.relatedTitle}>
          You might also like
        </h2>
      </div>
      
      <div className={styles.relatedGrid}>
        {relatedHampers.map((hamper) => {
          const badge = hamper.tags.find(tag => 
            ['Bestseller', 'New', 'Limited', 'Corporate', 'Premium', 'Festive'].includes(tag)
          );
          
          // Get price display for hampers
          const lowestPrice = Math.min(...hamper.priceOptions.map(option => option.price));
          const lowestPriceOption = hamper.priceOptions.find(option => option.price === lowestPrice);
          const priceDisplay = `Starting from ₹${lowestPrice} (${lowestPriceOption?.pieces} pieces)`;
          
          return (
            <Link 
              key={hamper.id}
              href={`/product/${hamper.slug}`}
              className={styles.relatedCard}
              aria-label={`View ${hamper.title}`}
            >
              <article>
                <div className={styles.relatedImageArea}>
                  <Image
                    src={hamper.image}
                    alt={hamper.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className={styles.relatedImage}
                  />
                  {badge && (
                    <span className={`${styles.relatedBadge} ${
                      badge === 'Premium' ? styles.premiumBadge : 
                      badge === 'Festive' ? styles.festiveBadge : ''
                    }`}>{badge}</span>
                  )}
                </div>
                <div className={styles.relatedContent}>
                  <h3 className={styles.relatedProductTitle}>{hamper.title}</h3>
                  <p className={styles.relatedDescription}>{hamper.shortDesc}</p>
                  <div className={styles.relatedPrice}>{priceDisplay}</div>
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

