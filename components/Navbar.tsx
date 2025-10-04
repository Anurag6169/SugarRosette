"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

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
  }, [pathname]);

  // Handle route loading
  useEffect(() => {
    // set a brief loading state on pathname change
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(t);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBackdropClick = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
    }
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
                  width={60}
                  height={60}
                  className={styles.logo}
                />
              </div>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.searchBar}>
              <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
            </div>
          </form>

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

          {/* Mobile Actions */}
          <div className={styles.mobileActions}>
            <button
              className={styles.searchButton}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Toggle search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            
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
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className={styles.mobileSearchBar}>
            <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
              <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                aria-label="Search products"
              />
              <button
                type="button"
                className={styles.closeSearchButton}
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                ✕
              </button>
            </form>
          </div>
        )}
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
