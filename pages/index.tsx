// Sugar Rosette Home Page
import HeroCarousel from '@/components/HeroCarousel';

const slides = [
  {
    imageSrc: '/hero/slide-1.jpg',
    headline: 'Artisanal Sweets & Delights',
    subhead: 'Discover our handcrafted collection of premium confections, made with love and the finest ingredients.',
    ctaLabel: 'Explore Menu',
    ctaHref: '/menu'
  },
  {
    imageSrc: '/hero/slide-2.jpg',
    headline: 'Perfect for Every Occasion',
    subhead: 'From intimate celebrations to grand events, our custom hampers and gift boxes create unforgettable moments.',
    ctaLabel: 'View Occasions',
    ctaHref: '/occasions'
  },
  {
    imageSrc: '/hero/slide-3.jpg',
    headline: 'Corporate Gifting Excellence',
    subhead: 'Impress your clients and team with our premium corporate gifting solutions, tailored to your brand.',
    ctaLabel: 'Learn More',
    ctaHref: '/corporate-gifting'
  }
];

export default function Home() {
  return (
    <>
      <HeroCarousel slides={slides} />
    </>
  );
}
