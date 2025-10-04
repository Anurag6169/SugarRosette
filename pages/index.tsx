// Sugar Rosette Home Page
import React from 'react';
import TrainCarousel from '@/components/TrainCarousel';
import Featured from '@/components/Featured';
import FeaturedDome from '@/components/DomeGallery';
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

      {/* Featured Products Dome Gallery */}
      <FeaturedDome />
    </main>
  );
}
