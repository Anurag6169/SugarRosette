import React from "react";
import styles from "./Hampers.module.css";
import data from "../../data/hampers";
import HamperCard from "./HamperCard";

/**
 * HampersGrid
 * Data shape: { id, title, slug, price, image, shortDesc, tags: string[], rating?: number, customizable?: boolean, diet?: 'Veg'|'Eggless' }
 * ISR: enabled via page-level `revalidate` export. Replace with API in production.
 */
const HampersGrid: React.FC = async () => {
  const items = data; // could be fetched server-side in the future

  if (!items || items.length === 0) {
    return (
      <div className={styles.gridWrap}>
        <div className={styles.empty}>
          <p>No hampers match the filters. Try clearing some filters.</p>
          <button className={styles.chip} type="button">Reset</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.gridWrap}>
      <div className={styles.grid}>
        {items.map((h) => (
          <HamperCard key={h.id} hamper={h} />
        ))}
      </div>
    </div>
  );
};

export default HampersGrid;


