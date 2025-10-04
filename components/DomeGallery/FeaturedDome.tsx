'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import DomeGallery from './DomeGallery';
import products from '../../src/data/products';
import styles from './FeaturedDome.module.css';

const FeaturedDome: React.FC = () => {
  const router = useRouter();
  const [previewProduct, setPreviewProduct] = useState<typeof products[0] | null>(null);

  // Get product images with alt text and slug for navigation
  const productImages = products.map(product => ({
    src: product.images[0],
    alt: product.title,
    slug: product.slug
  }));

  const handleImageClick = (index: number) => {
    const product = products[index % products.length];
    setPreviewProduct(product);
  };

  const handlePreviewClick = () => {
    if (previewProduct) {
      router.push(`/product/${previewProduct.slug}`);
    }
  };

  const handleClosePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewProduct(null);
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
            images={productImages}
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
        {previewProduct && (
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
                  src={previewProduct.images[0]}
                  alt={previewProduct.title}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={styles.previewContent}>
                <h3 className={styles.previewTitle}>{previewProduct.title}</h3>
                <p className={styles.previewDescription}>{previewProduct.shortDesc}</p>
                <div className={styles.previewCta}>
                  <span className={styles.ctaText}>Click to view details →</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* View All Link */}
        <div className={styles.viewAllWrapper}>
          <a href="/products" className={styles.viewAllButton}>
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDome;

