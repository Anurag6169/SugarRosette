import React from "react";
import styles from "./Hampers.module.css";

const HampersHero: React.FC = () => {
  return (
    <section className={styles.hero} aria-labelledby="hampers-hero-title" style={{height: 'auto', paddingTop: '32px', paddingBottom: '32px'}}>
      <div className={styles.heroInner}>
        <h1 id="hampers-hero-title" className={styles.heroTitle} style={{fontSize: '2rem', marginBottom: '8px'}}>Beautiful Gift Hampers</h1>
        <p className={styles.heroSubtitle} style={{display: 'block'}}>Handcrafted assortments for every occasion.</p>
      </div>
    </section>
  );
};

export default HampersHero;


