import React from "react";
import hampers from "../../../../data/hampers";
import Gallery from "../../../../components/PDP/Gallery";
import HamperSummary from "../../../../components/PDP/HamperSummary";
import RelatedProducts from "../../../../components/PDP/RelatedProducts";
import styles from "../../../../components/PDP/PDP.module.css";

export const revalidate = 1800;

export async function generateStaticParams() {
  return hampers.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const hamper = hampers.find((h) => h.slug === params.slug);
  if (!hamper) return { title: "Hamper | Sugar Rosette" };
  return {
    title: `${hamper.title} | Sugar Rosette`,
    description: hamper.shortDesc,
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const hamper = hampers.find((h) => h.slug === params.slug);
  if (!hamper) return <div className={styles.wrap}><p>Hamper not found.</p></div>;

  return (
    <main className={styles.page}>
      <div className={`${styles.wrap} ${styles.layout}`}>
        <div>
          <Gallery images={[hamper.image]} title={hamper.title} />
        </div>
        <HamperSummary
          title={hamper.title}
          shortDesc={hamper.shortDesc}
          detailedDesc={hamper.detailedDesc}
          tags={hamper.tags}
          customizable={hamper.customizable}
          priceOptions={hamper.priceOptions}
        />
      </div>
      
      {/* Related Products Section */}
      <div className={styles.wrap}>
        <RelatedProducts 
          hampers={hampers}
          currentProductId={hamper.id}
        />
      </div>
    </main>
  );
}


