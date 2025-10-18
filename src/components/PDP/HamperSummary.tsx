'use client';

import React, { useState } from 'react';
import { HamperPriceOption } from '../../data/hampers';
import styles from './PDP.module.css';

interface HamperSummaryProps {
  title: string;
  shortDesc: string;
  detailedDesc: string;
  tags: string[];
  customizable: boolean;
  priceOptions: HamperPriceOption[];
}

const HamperSummary: React.FC<HamperSummaryProps> = ({
  title,
  shortDesc,
  detailedDesc,
  tags,
  customizable,
  priceOptions
}) => {
  const [selectedPriceOption, setSelectedPriceOption] = useState<HamperPriceOption>(priceOptions[0]);
  
  const whatsappMessage = `Hi!%20I'd%20like%20to%20purchase%20*${encodeURIComponent(title)}*%0A%0A${encodeURIComponent(shortDesc)}%0A%0A*Selected Option:*%20${selectedPriceOption.pieces}%20pieces%20-%20₹${selectedPriceOption.price}`;

  return (
    <div className={styles.summary}>
      <div className={styles.summaryHeader}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={`${styles.tag} ${tag === "Bestseller" ? styles.bestseller : tag === "Premium" ? styles.premium : tag === "Festive" ? styles.festive : ""}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.description}>
        <p className={styles.shortDesc}>{shortDesc}</p>
        <p className={styles.detailedDesc}>{detailedDesc}</p>
      </div>

      {/* Price Selection */}
      <div className={styles.priceSelection}>
        <h3 className={styles.priceSelectionTitle}>Choose Your Size</h3>
        <div className={styles.priceOptions}>
          {priceOptions.map((option) => (
            <button
              key={option.pieces}
              className={`${styles.priceOption} ${selectedPriceOption.pieces === option.pieces ? styles.selected : ''}`}
              onClick={() => setSelectedPriceOption(option)}
            >
              <div className={styles.priceOptionContent}>
                <span className={styles.pieces}>{option.pieces} pieces</span>
                <span className={styles.price}>₹{option.price}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Price Display */}
      <div className={styles.selectedPrice}>
        <div className={styles.priceDisplay}>
          <span className={styles.priceLabel}>Total Price:</span>
          <span className={styles.finalPrice}>₹{selectedPriceOption.price}</span>
          <span className={styles.priceUnit}>/box ({selectedPriceOption.pieces} pieces)</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <a
          href={`https://wa.me/918128995138?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buyButton}
        >
          Buy Now via WhatsApp
        </a>
        {customizable && (
          <button className={styles.customizeButton}>
            Customize Order
          </button>
        )}
      </div>

      {/* Additional Info */}
      <div className={styles.additionalInfo}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Lead Time:</span>
          <span className={styles.infoValue}>Ships in 24-48h - Pan-India</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Shelf Life:</span>
          <span className={styles.infoValue}>Best within 30 days</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Allergens:</span>
          <span className={styles.infoValue}>Milk, Nuts</span>
        </div>
      </div>
    </div>
  );
};

export default HamperSummary;
