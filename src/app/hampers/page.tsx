import React from "react";
import HampersHero from "../../components/Hampers/HampersHero";
import HampersGrid from "../../components/Hampers/HampersGrid";
import styles from "../../components/Hampers/Hampers.module.css";

export const revalidate = 1800; // ISR every 30 minutes

export default function HampersPage() {
  return (
    <main className={styles.page}>
      <HampersHero />
      <HampersGrid />
    </main>
  );
}


