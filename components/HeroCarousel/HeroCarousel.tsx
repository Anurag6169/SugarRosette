import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroCarousel.module.css';

interface Slide {
  imageSrc: string;
  headline: string;
  subhead: string;
  ctaLabel: string;
  ctaHref: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered || !isDocumentVisible) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, isDocumentVisible, slides.length]);

  // Document visibility API
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Check if we should use white text (when overlay is dark)
  const shouldUseWhiteText = (slideIndex: number) => {
    // For now, we'll use white text for better contrast over images
    // In a real implementation, you'd analyze the image brightness
    return true;
  };

  return (
    <section
      className={styles.carousel}
      role="region"
      aria-label="Featured sweets"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            role="img"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={index !== currentSlide}
          >
            <div className={styles.imageContainer}>
  <Image src={slide.imageSrc} alt="" fill className={styles.image} priority={index === 0} />
  <div className={styles.overlay} />
</div>
            
            <div className={styles.content}>
              <div className={styles.textContainer}>
                <h1 className={`${styles.headline} ${shouldUseWhiteText(index) ? styles.whiteText : ''}`}>
                  {slide.headline}
                </h1>
                <p className={`${styles.subhead} ${shouldUseWhiteText(index) ? styles.whiteText : ''}`}>
                  {slide.subhead}
                </p>
                <Link href={slide.ctaHref} className={styles.ctaButton}>
                  {slide.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        className={styles.navButton}
        onClick={goToPrevious}
        aria-label="Previous slide"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className={styles.navButton}
        onClick={goToNext}
        aria-label="Next slide"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7.5 5L12.5 10L7.5 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
            type="button"
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
