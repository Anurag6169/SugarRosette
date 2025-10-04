import React from "react";
import products from "../../../../data/products";
import Gallery from "../../../../components/PDP/Gallery";
import Summary from "../../../../components/PDP/Summary";
import RelatedProducts from "../../../../components/PDP/RelatedProducts";
import styles from "../../../../components/PDP/PDP.module.css";

export const revalidate = 1800;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product | Sugar Rosette" };
  return {
    title: `${product.title} | Sugar Rosette`,
    description: product.shortDesc,
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return <div className={styles.wrap}><p>Product not found.</p></div>;

  return (
    <main className={styles.page}>
      <div className={`${styles.wrap} ${styles.layout}`}>
        <div>
          <Gallery images={product.images} title={product.title} />
        </div>
        <Summary
          title={product.title}
          shortDesc={product.shortDesc}
          longDesc={product.longDesc}
          contents={product.contents}
          allergens={product.allergens}
          shelfLife={product.shelfLife}
          tags={product.tags}
          customizable={product.customizable}
          leadTime={product.leadTime}
        />
      </div>
      
      {/* Related Products Section */}
      <div className={styles.wrap}>
        <RelatedProducts products={products} currentProductId={product.id} />
      </div>
    </main>
  );
}


