import React from "react";

const Reviews: React.FC<{ rating?: number; reviewsCount?: number }> = ({ rating, reviewsCount }) => {
  if (!rating || !reviewsCount) return null;
  return (
    <section aria-label="Reviews summary" style={{ marginTop: "var(--sr-space-2xl)" }}>
      <h3 style={{ fontFamily: "var(--font-display)", margin: 0 }}>Reviews</h3>
      <p style={{ color: "var(--sr-cocoa)" }}>★ {rating.toFixed(1)} - {reviewsCount}</p>
      {/* Placeholder for detailed reviews and photo grid */}
    </section>
  );
};

export default Reviews;


