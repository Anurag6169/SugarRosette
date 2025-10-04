"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./PDP.module.css";

const Gallery: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [active, setActive] = useState(0);
  const primary = images[active] ?? images[0];
  return (
    <section className={styles.gallery} aria-label="Product media">
      <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
        <Image
          src={primary}
          alt={`${title} image ${active + 1}`}
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              className={styles.thumbBtn}
              aria-label={`Show image ${i + 1}`}
              aria-selected={i === active}
              onClick={() => setActive(i)}
            >
              <div className={styles.thumb}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" width={64} height={64} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;


