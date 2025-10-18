'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DomeGallery from './DomeGallery';
import hampers from '../../src/data/hampers';
import styles from './FeaturedDome.module.css';

const FeaturedDome: React.FC = () => {
  const router = useRouter();
  const [previewHamper, setPreviewHamper] = useState<typeof hampers[0] | null>(null);

  // Get hamper images with alt text and slug for navigation
  const hamperImages = hampers.map(hamper => ({
    src: hamper.image,
    alt: hamper.title,
    slug: hamper.slug
  }));

  const handleImageClick = (index: number) => {
    const hamper = hampers[index % hampers.length];
    setPreviewHamper(hamper);
  };

  const handlePreviewClick = () => {
    if (previewHamper) {
      router.push(`/product/${previewHamper.slug}`);
    }
  };

  const handleClosePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewHamper(null);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Explore Our Collection</h2>
          <p className={styles.subtitle}>
            Drag to explore • Click to preview
          </p>
        </div>

        {/* Dome Gallery */}
        <div className={styles.domeWrapper}>
          <DomeGallery
            images={hamperImages}
            fit={0.5}
            fitBasis="auto"
            minRadius={400}
            maxRadius={800}
            overlayBlurColor="transparent"
            imageBorderRadius="20px"
            openedImageBorderRadius="20px"
            grayscale={false}
            dragSensitivity={20}
            dragDampening={2}
            maxVerticalRotationDeg={8}
            disableEnlarge={true}
            onImageClick={handleImageClick}
          />
        </div>

        {/* Preview Modal */}
        {previewHamper && (
          <>
            <div className={styles.previewBackdrop} onClick={handleClosePreview} />
            <div className={styles.previewModal} onClick={handlePreviewClick}>
              <button 
                className={styles.closeButton} 
                onClick={handleClosePreview}
                aria-label="Close preview"
              >
                ✕
              </button>
              <div className={styles.previewImage}>
                <Image
                  src={previewHamper.image}
                  alt={previewHamper.title}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={styles.previewContent}>
                <h3 className={styles.previewTitle}>{previewHamper.title}</h3>
                <p className={styles.previewDescription}>{previewHamper.shortDesc}</p>
                <div className={styles.previewCta}>
                  <span className={styles.ctaText}>Click to view details →</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* View All Link */}
        <div className={styles.viewAllWrapper}>
          <a href="/hampers" className={styles.viewAllButton}>
            View All Hampers
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDome;

