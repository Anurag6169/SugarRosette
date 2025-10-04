import React from "react";
import styles from "./PDP.module.css";

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className={styles.tab}>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

const Details: React.FC<{
  longDesc: string;
  contents?: string[];
  allergens?: string[];
  shelfLife?: string;
  delivery?: string;
}> = ({ longDesc, contents, allergens, shelfLife, delivery }) => {
  return (
    <section className={styles.tabs} aria-label="Product details">
      <Section title="Description">
        <p style={{ color: "var(--sr-cocoa)", margin: 0 }}>{longDesc}</p>
      </Section>
      {contents && contents.length > 0 && (
        <Section title="Contents">
          <ul>
            {contents.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>
      )}
      {allergens && allergens.length > 0 && (
        <Section title="Allergens & Dietary">
          <p>{allergens.join(", ")}</p>
        </Section>
      )}
      {(shelfLife || delivery) && (
        <Section title="Shelf life & Delivery">
          {shelfLife && <p>Shelf life: {shelfLife}</p>}
          {delivery && <p>{delivery}</p>}
        </Section>
      )}
    </section>
  );
};

export default Details;


