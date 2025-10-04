import React from "react";
import ProductsHero from "../../components/Products/ProductsHero";
import ProductsFilters from "../../components/Products/ProductsFilters";
import ProductsGrid from "../../components/Products/ProductsGrid";
import styles from "../../components/Products/Products.module.css";

export const metadata = {
  title: "Our Products | Sugar Rosette",
  description: "Explore our collection of handcrafted chocolates, cakes, hampers, and artisan treats.",
};

export default async function ProductsPage() {
  return (
    <div className={styles.page}>
      <ProductsHero />
      <ProductsFilters />
      <ProductsGrid />
    </div>
  );
}

