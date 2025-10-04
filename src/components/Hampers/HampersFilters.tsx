"use client";
import React, { useMemo, useState } from "react";
import styles from "./Hampers.module.css";

type SortKey = "pop" | "new" | "pricelow" | "pricehigh";

const presets = [
  { id: "under1k", label: "Under ₹1000" },
  { id: "1to2_5k", label: "₹1000–₹2500" },
  { id: "over2_5k", label: "₹2500+" },
];

const occasions = ["Diwali", "Birthday", "Corporate", "Wedding", "Baby"];
const flavors = ["Milk", "Dark", "Nuts", "Assorted"];
const diet = ["Veg", "Eggless"] as const;

interface Props {
  onChange?: (query: Record<string, string>) => void;
}

const HampersFilters: React.FC<Props> = ({ onChange }) => {
  const [selectedPresets, setSelectedPresets] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedDiet, setSelectedDiet] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>("pop");
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const summary = useMemo(() => {
    const count = selectedPresets.length + selectedOccasions.length + selectedFlavors.length + selectedDiet.length;
    return count > 0 ? `${count} filters` : "No filters";
  }, [selectedPresets, selectedOccasions, selectedFlavors, selectedDiet]);

  const toggle = (val: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(val) ? list.filter((x) => x !== val) : [...list, val]);
  };

  return (
    <div className={styles.filtersBar} role="region" aria-label="Filters and sorting">
      <div className={styles.filtersInner}>
        <div className={styles.chipsRow}>
          {/* Presets */}
          {presets.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`${styles.chip} ${selectedPresets.includes(p.id) ? styles.selected : ""}`}
              onClick={() => toggle(p.id, selectedPresets, setSelectedPresets)}
              aria-pressed={selectedPresets.includes(p.id)}
              aria-label={`Price: ${p.label}`}
            >
              {p.label}
            </button>
          ))}

          {/* Occasions */}
          {occasions.map((o) => (
            <button
              key={o}
              type="button"
              className={`${styles.chip} ${selectedOccasions.includes(o) ? styles.selected : ""}`}
              onClick={() => toggle(o, selectedOccasions, setSelectedOccasions)}
              aria-pressed={selectedOccasions.includes(o)}
              aria-label={`Occasion: ${o}`}
            >
              {o}
            </button>
          ))}

          {/* Flavors */}
          {flavors.map((f) => (
            <button
              key={f}
              type="button"
              className={`${styles.chip} ${selectedFlavors.includes(f) ? styles.selected : ""}`}
              onClick={() => toggle(f, selectedFlavors, setSelectedFlavors)}
              aria-pressed={selectedFlavors.includes(f)}
              aria-label={`Flavor: ${f}`}
            >
              {f}
            </button>
          ))}

          {/* Diet */}
          {diet.map((d) => (
            <button
              key={d}
              type="button"
              className={`${styles.chip} ${selectedDiet.includes(d) ? styles.selected : ""}`}
              onClick={() => toggle(d, selectedDiet, setSelectedDiet)}
              aria-pressed={selectedDiet.includes(d)}
              aria-label={`Diet: ${d}`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className={styles.summary}>
          <button
            type="button"
            className={styles.chip}
            aria-expanded={!collapsed}
            onClick={() => setCollapsed((v) => !v)}
          >
            {collapsed ? "Show filters" : "Hide filters"}
          </button>
          <span style={{ marginLeft: 10 }}>{summary}</span>
        </div>
      </div>
    </div>
  );
};

export default HampersFilters;


