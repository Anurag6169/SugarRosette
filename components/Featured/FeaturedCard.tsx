import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Featured.module.css';

interface FeaturedCardProps {
  key: string;
  title: string;
  href: string;
  image: string;
  description: string;
  category: string;
  index?: number;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  href,
  image,
  description,
  category,
  index = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants - no delays for immediate impact
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      rotateY: 2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hover: {
      y: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const shimmerVariants = {
    hidden: { x: "-100%" },
    hover: { 
      x: "100%",
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Link 
      href={href} 
      className={styles.cardLink}
      aria-label={`Shop ${title}`}
    >
      <motion.article 
        className={styles.card}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Shimmer effect */}
        <motion.div 
          className={styles.shimmer}
          variants={shimmerVariants}
          initial="hidden"
          whileHover="hover"
        />
        
        {/* Accent bar */}
        <motion.div 
          className={styles.accentBar}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Image area */}
        <div className={styles.imageArea}>
          <motion.div
            className={styles.imageWrapper}
            variants={imageVariants}
          >
            <Image
              src={image}
              alt={title}
              fill
              className={styles.cardImage}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              priority={false}
            />
          </motion.div>
          <div className={styles.imageOverlay} />
          
          {/* Floating particles */}
          {isHovered && (
            <>
              <motion.div 
                className={styles.particle}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: [0, 10, -5, 0],
                  y: [0, -10, 5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ left: '20%', top: '30%' }}
              />
              <motion.div 
                className={styles.particle}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: [0, -8, 12, 0],
                  y: [0, 8, -12, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{ right: '25%', top: '60%' }}
              />
              <motion.div 
                className={styles.particle}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: [0, 15, -10, 0],
                  y: [0, -15, 10, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                style={{ left: '70%', top: '20%' }}
              />
            </>
          )}
          
          {/* Category tag */}
          <motion.div 
            className={styles.categoryTag}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            {category}
          </motion.div>
        </div>

        {/* Content area */}
        <motion.div 
          className={styles.contentArea}
          variants={contentVariants}
        >
          <motion.h3 
            className={styles.cardTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className={styles.cardDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className={styles.ctaButton}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(236, 113, 145, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              Shop now
            </motion.span>
            <motion.span
              className={styles.arrowIcon}
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.article>
    </Link>
  );
};

export default FeaturedCard;
