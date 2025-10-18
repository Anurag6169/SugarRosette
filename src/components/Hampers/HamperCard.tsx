import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hampers.module.css";
import { Hamper } from "../../data/hampers";

const HamperCard: React.FC<{ hamper: Hamper }> = ({ hamper }) => {
  const whatsappMessage = `Hi!%20I'd%20like%20to%20purchase%20*${encodeURIComponent(hamper.title)}*%0A%0A${encodeURIComponent(hamper.shortDesc)}`;
  
  // Get the lowest price for display
  const lowestPrice = Math.min(...hamper.priceOptions.map(option => option.price));
  const lowestPriceOption = hamper.priceOptions.find(option => option.price === lowestPrice);

  return (
    <article className={styles.card} aria-labelledby={`title-${hamper.id}`}>
      <div className={styles.badges}>
        {hamper.tags?.slice(0, 3).map((t) => (
          <span key={t} className={`${styles.badge} ${t === "Bestseller" ? styles.caramel : t === "New" ? styles.rosette : t === "Corporate" ? styles.dark : t === "Premium" ? styles.premium : t === "Festive" ? styles.festive : ""}`}>{t}</span>
        ))}
      </div>
      <Link href={`/product/${hamper.slug}`} aria-label={`View ${hamper.title}`}>
        <div className={styles.imageArea}>
          <Image
            src={hamper.image}
            alt={hamper.title}
            fill
            className={styles.image}
            sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
            priority={false}
          />
          <div className={styles.imageOverlay} />
        </div>
      </Link>
      <div className={styles.cardBody}>
        <Link href={`/product/${hamper.slug}`} className={styles.titleLink}>
          <h3 id={`title-${hamper.id}`} className={styles.title}>{hamper.title}</h3>
        </Link>
        <p className={styles.desc}>{hamper.shortDesc}</p>
        
        {/* Price Range Display */}
        <div className={styles.priceRange}>
          <span className={styles.priceLabel}>Starting from:</span>
          <span className={styles.price}>₹{lowestPrice}</span>
          <span className={styles.priceUnit}>/box ({lowestPriceOption?.pieces} pieces)</span>
        </div>
        
        <div className={styles.ctaRow}>
          <a 
            href={`https://wa.me/918128995138?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
            aria-label={`Buy ${hamper.title} via WhatsApp`}
          >
            Buy Now
          </a>
        </div>
      </div>
    </article>
  );
};

export default HamperCard;


