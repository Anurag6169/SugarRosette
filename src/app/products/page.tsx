import React from "react";
import HampersHero from "../../components/Hampers/HampersHero";
import HampersGrid from "../../components/Hampers/HampersGrid";
import styles from "../../components/Hampers/Hampers.module.css";

export const metadata = {
  title: "Our Products | Sugar Rosette",
  description: "Explore our collection of handcrafted hampers and artisan treats.",
};

export default async function ProductsPage() {
  return (
    <div className={styles.page}>
      <HampersHero />
      <HampersGrid />
    </div>
  );
}

