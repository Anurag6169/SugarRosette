import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import FeaturedCard from './FeaturedCard';
import styles from './Featured.module.css';

// Featured collection data in fixed order
const featuredData = [
  {
    key: 'hampers',
    title: 'Hampers',
    href: '/hampers',
    image: '/hero/slide-1.jpg', // Replace with actual hamper image
    description: 'Thoughtful assortments for every celebration. Curated gift collections featuring our finest chocolates, artisan treats, and elegant packaging. Perfect for birthdays, anniversaries, and special moments that deserve something extraordinary.',
    category: 'Gift Sets'
  },
  {
    key: 'chocolates',
    title: 'Chocolates',
    href: '/chocolates',
    image: '/hero/slide-2.jpg', // Replace with actual chocolate image
    description: 'Handcrafted bites in classic and bold flavors. From rich dark truffles to creamy milk chocolates, each piece is carefully crafted with premium ingredients and artistic flair that delights the senses.',
    category: 'Artisan'
  },
  {
    key: 'cakes',
    title: 'Cakes',
    href: '/cakes',
    image: '/hero/slide-1.jpg', // Replace with actual cake image
    description: 'Celebration cakes, fresh and exquisite. Custom-designed cakes for every occasion, from intimate gatherings to grand celebrations. Made daily with love and attention to detail.',
    category: 'Specialty'
  },
  {
    key: 'bakery',
    title: 'Bakery',
    href: '/bakery',
    image: '/hero/slide-2.jpg', // Replace with actual bakery image
    description: 'Pastries and bakes for everyday joy. Fresh-baked croissants, artisanal breads, and seasonal treats that bring warmth and comfort to your daily moments with authentic flavors.',
    category: 'Fresh'
  }
];

const Featured: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Section header */}
        <motion.div 
          className={styles.header}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.headerContent}>
            <motion.h2 
              className={styles.sectionTitle}
              variants={titleVariants}
            >
              Featured Collection
            </motion.h2>
            <motion.p 
              className={styles.sectionSubtitle}
              variants={subtitleVariants}
            >
              Curated treats to gift and indulge.
            </motion.p>
          </div>
          <motion.div
            variants={subtitleVariants}
          >
            <Link href="/hampers" className={styles.viewAllLink}>
              View all
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {featuredData.map((item, index) => (
            <FeaturedCard
              key={item.key}
              title={item.title}
              href={item.href}
              image={item.image}
              description={item.description}
              category={item.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
