import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TrainCarousel.module.css';

interface TrainImage {
  src: string;
  alt: string;
  href?: string;
}

interface TrainCarouselProps {
  images: TrainImage[];
  speedMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
}

/**
 * TrainCarousel - Discrete one-by-one navigation with square images
 * - Fix: translate by exact item pixel width instead of track percentage
 * - Responsive: 3/2/1 tiles desktop/tablet/mobile
 * - Auto-advance pauses on hover/focus and in reduced motion
 */
const TrainCarousel: React.FC<TrainCarouselProps> = ({
  images,
  speedMs = 40000, // kept for compatibility
  pauseOnHover = true,
  showDots = true,
  showArrows = true,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // New: cache item width in pixels to translate one tile per step
  const itemWidthRef = useRef<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(1);

  // Utility to compute visible tiles for current breakpoint
  const computeVisibleCount = useCallback(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 0;
    return w >= 1024 ? 3 : w >= 640 ? 2 : 1;
  }, []);

  // Measure first item's pixel width for precise translation
  const measureItemWidth = useCallback(() => {
    if (!trackRef.current) return;
    const firstItem = trackRef.current.querySelector(`.${styles.item}`) as HTMLElement | null;
    if (firstItem) {
      itemWidthRef.current = firstItem.getBoundingClientRect().width;
    }
  }, []);

  // Update transform by exact pixels (one tile per index)
  const updateTrackPosition = useCallback(() => {
    if (!trackRef.current) return;
    const x = -(currentIndex * itemWidthRef.current);
    trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
  }, [currentIndex]);

  // Reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Measure on mount, resize, and container resize
  useEffect(() => {
    const applyMeasurements = () => {
      setVisibleCount(computeVisibleCount());
      measureItemWidth();
      // Re-apply current transform after measurement changes
      requestAnimationFrame(updateTrackPosition);
    };
    applyMeasurements();

    const onResize = () => applyMeasurements();
    window.addEventListener('resize', onResize);

    // Observe container for size changes (safer across CSS changes)
    const ro = new ResizeObserver(applyMeasurements);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, [computeVisibleCount, measureItemWidth, updateTrackPosition]);

  // Reposition when index changes
  useEffect(() => {
    updateTrackPosition();
  }, [updateTrackPosition]);

  // Auto-advance one item at a time
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (isPaused || isReducedMotion || isTransitioning) return;

    const intervalTime = 1500; 
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, isReducedMotion, isTransitioning, speedMs, images.length]);

  // Hover/focus pause
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);
  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);
  const handleFocusIn = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);
  const handleFocusOut = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  // Manual navigation (wrap-around)
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  // Dots jump to leftmost tile index; per-image dots preserved
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      // Clamp to valid item index range
      const clamped = Math.max(0, Math.min(index, images.length - 1));
      setCurrentIndex(clamped);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [currentIndex, images.length, isTransitioning]
  );

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
  }, [goToNext, goToPrevious]);

  // Touch/swipe
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
    if (!touchStart || touchEnd == null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) goToNext();
    else if (isRightSwipe) goToPrevious();
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!images || images.length === 0) return null;

  return (
    <section
      ref={containerRef}
      className={`${styles.carousel} ${isPaused ? styles.paused : ''} ${isReducedMotion ? styles.reducedMotion : ''}`}
      role="region"
      aria-label="Featured collections"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={trackRef} className={styles.track}>
        {images.map((image, index) => (
          <div key={`${image.src}-${index}`} className={styles.item}>
            {image.href ? (
              <Link href={image.href} className={styles.link}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.img}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  decoding="async"
                />
              </Link>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.img}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                decoding="async"
              />
            )}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            className={styles.arrowButton}
            onClick={goToPrevious}
            aria-label="Previous image"
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
            className={styles.arrowButton}
            onClick={goToNext}
            aria-label="Next image"
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
        </>
      )}

      {showDots && (
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex}
              type="button"
            />
          ))}
        </div>
      )}

      {!isPaused && !isReducedMotion && (
        <div className={styles.autoScrollIndicator} title="Auto-scrolling">
          <div className={styles.autoScrollDot}></div>
        </div>
      )}
    </section>
  );
};

export default TrainCarousel;
