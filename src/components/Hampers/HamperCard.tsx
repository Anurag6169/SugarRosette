import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hampers.module.css";

interface Hamper {
  id: string;
  title: string;
  slug: string;
  image: string;
  shortDesc: string;
  tags: string[];
  customizable?: boolean;
}

const HamperCard: React.FC<{ hamper: Hamper }> = ({ hamper }) => {
  return (
    <article className={styles.card} aria-labelledby={`title-${hamper.id}`}>
      <div className={styles.badges}>
        {hamper.tags?.slice(0, 3).map((t) => (
          <span key={t} className={`${styles.badge} ${t === "Bestseller" ? styles.caramel : t === "New" ? styles.rosette : t === "Corporate" ? styles.dark : ""}`}>{t}</span>
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
        <h3 id={`title-${hamper.id}`} className={styles.title}>{hamper.title}</h3>
        <p className={styles.desc}>{hamper.shortDesc}</p>
        <div className={styles.ctaRow}>
          <Link href={`/product/${hamper.slug}`} className={`${styles.btn} ${styles.btnPrimary}`} aria-label={`View details for ${hamper.title}`}>
            View details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HamperCard;


