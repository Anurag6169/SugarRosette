import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: '/menu', label: 'Menu' },
    { href: '/products', label: 'Products' },
    { href: '/hampers', label: 'Hampers' },
    { href: '/occasions', label: 'Occasions' },
    { href: '/corporate-gifting', label: 'Corporate Gifting' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  // Handle route loading
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBackdropClick = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    return router.asPath === href;
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        {isLoading && <div className={styles.loadingBar} />}
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink} aria-label="Sugar Rosette Home">
            <div className={styles.logoContainer}>
              <div className={styles.logoImage}>
                <Image
                  src="/logo/Sugar-Rosette-Logo.jpg"
                  alt="Sugar Rosette Logo"
                  width={50}
                  height={50}
                  className={styles.logo}
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActiveLink(link.href) ? styles.active : ''}`}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Off-canvas Menu */}
      {isMenuOpen && (
        <>
          <div className={styles.backdrop} onClick={handleBackdropClick} />
          <div
            className={styles.mobileMenu}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              className={styles.closeButton}
              onClick={toggleMenu}
              aria-label="Close navigation menu"
            >
              <div className={styles.closeIcon} />
            </button>
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${isActiveLink(link.href) ? styles.active : ''}`}
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
