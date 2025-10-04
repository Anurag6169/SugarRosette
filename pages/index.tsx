// Sugar Rosette Home Page
import React from 'react';
import TrainCarousel from '@/components/TrainCarousel';
import Featured from '@/components/Featured';
import styles from '@/styles/Home.module.css';

// Sample train carousel images - in production, these would be actual product images
const trainImages = [
  {
    src: '/hero/slide-1.jpg',
    alt: 'Artisan chocolate collection featuring hand-crafted truffles',
    href: '/products'
  },
  {
    src: '/hero/slide-2.jpg', 
    alt: 'Premium gift hamper with luxury chocolates and sweets',
    href: '/hampers'
  },
  {
    src: '/hero/slide-1.jpg',
    alt: 'Seasonal chocolate assortment for special occasions',
    href: '/occasions'
  },
  {
    src: '/hero/slide-2.jpg',
    alt: 'Corporate gifting solutions with elegant packaging',
    href: '/corporate-gifting'
  },
  {
    src: '/hero/slide-1.jpg',
    alt: 'Signature chocolate boxes perfect for any celebration',
    href: '/products'
  },
  {
    src: '/hero/slide-2.jpg',
    alt: 'Custom chocolate arrangements for weddings and events',
    href: '/occasions'
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Featured Collections Train Carousel - Right after navbar */}
      <section className={styles.trainSection}>
        <TrainCarousel 
          images={trainImages}
          speedMs={6000}
          pauseOnHover={true}
          showDots={true}
          showArrows={true}
        />
      </section>

      {/* Featured Collection Section */}
      <Featured />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Sugar Rosette</h1>
          <p className={styles.heroSubtitle}>
            Artisan chocolates crafted with love, delivered with elegance
          </p>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Collections</h2>
          <p className={styles.sectionSubtitle}>
            Discover our most popular chocolate selections
          </p>
        </div>
        
        <div className={styles.collectionsGrid}>
          <div className={styles.collectionCard}>
            <h3>Artisan Truffles</h3>
            <p>Hand-crafted with premium ingredients</p>
          </div>
          <div className={styles.collectionCard}>
            <h3>Gift Hampers</h3>
            <p>Perfect for any celebration</p>
          </div>
          <div className={styles.collectionCard}>
            <h3>Seasonal Specials</h3>
            <p>Limited edition collections</p>
          </div>
        </div>
      </section>

      {/* Additional Demo Section */}
      <section className={styles.demoSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Customizable Options</h2>
          <p className={styles.sectionSubtitle}>
            Configure the carousel to match your needs
          </p>
        </div>
        
        <div className={styles.carouselGrid}>
          {/* Fast scrolling version */}
          <div className={styles.carouselDemo}>
            <h3 className={styles.demoTitle}>Fast Scroll (1s per image)</h3>
            <TrainCarousel 
              images={trainImages.slice(0, 4)}
              speedMs={4000}
              pauseOnHover={true}
              showDots={false}
              showArrows={true}
            />
          </div>

          {/* Minimal controls version */}
          <div className={styles.carouselDemo}>
            <h3 className={styles.demoTitle}>Minimal Controls</h3>
            <TrainCarousel 
              images={trainImages.slice(2, 6)}
              speedMs={4000}
              pauseOnHover={false}
              showDots={true}
              showArrows={false}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
