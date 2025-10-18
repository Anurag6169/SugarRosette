import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About Sugar Rosette</h1>
            <p className={styles.heroSubtitle}>
              Handmade with love, crafted for joy — that's the Sugar Rosette promise.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className={styles.content}>
          <div className={styles.contentWrapper}>
            {/* Website Description */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.description}>
                Sugar Rosette is an artisanal chocolate and dessert studio based in Ahmedabad, Gujarat, 
                crafting hand-made chocolates, cupcakes, and signature confectionery gifts. Each creation 
                is made in small batches using fine ingredients, elegant designs, and a touch of love. 
                From golden-wrapped truffles to curated hampers, Sugar Rosette brings you the joy of 
                gifting and indulgence, one bite at a time.
              </p>
            </div>

            {/* About Us */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Philosophy</h2>
              <p className={styles.description}>
                At Sugar Rosette, we believe that sweetness is best when shared. Founded with a passion 
                for hand-crafted treats, our kitchen brings together creativity, quality, and artistry 
                to create chocolates and desserts that look as beautiful as they taste.
              </p>
              <p className={styles.description}>
                Every chocolate cube, cupcake, and choco ball is made with care — wrapped, packed, 
                and presented with an eye for detail that makes every box a memorable gift. Whether 
                you're celebrating special moments or simply craving something indulgent, Sugar Rosette 
                is here to make them a little sweeter.
              </p>
            </div>

            {/* Quality & Certification */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Quality & Standards</h2>
              <div className={styles.certificationBox}>
                <div className={styles.certificationIcon}>🏆</div>
                <div className={styles.certificationContent}>
                  <h3 className={styles.certificationTitle}>FSSAI Certified</h3>
                  <p className={styles.certificationText}>
                    Registered under the Food Safety and Standards Authority of India 
                    <br />
                    <strong>FSSAI: 20725037003044</strong>
                  </p>
                  <p className={styles.certificationDescription}>
                    We take pride in maintaining the highest standards of hygiene and quality 
                    in every product we offer.
                  </p>
                </div>
              </div>
            </div>

            {/* Promise */}
            <div className={styles.promiseSection}>
              <div className={styles.promiseBox}>
                <div className={styles.promiseIcon}>✨</div>
                <h2 className={styles.promiseTitle}>Our Promise</h2>
                <p className={styles.promiseText}>
                  Handmade with love, crafted for joy — that's the Sugar Rosette promise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
