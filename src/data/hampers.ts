export type HamperPriceOption = {
  pieces: number;
  price: number;
};

export type Hamper = {
  id: string;
  title: string;
  slug: string;
  image: string;
  shortDesc: string;
  detailedDesc: string;
  tags: string[];
  customizable: boolean;
  priceOptions: HamperPriceOption[];
};

const hampers: Hamper[] = [
  {
    id: "h1",
    title: "Premium Gift Box",
    slug: "premium-gift-box",
    image: "/hero/slide-1.jpg",
    shortDesc: "A classic collection of handcrafted dark chocolates with nuts and berries",
    detailedDesc: "Premium Dark Chocolates wrapped in golden foil Filled with Almonds, Sunflower Seeds, Blueberries & Cranberries",
    tags: ["Bestseller"],
    customizable: true,
    priceOptions: [
      { pieces: 18, price: 549 },
      { pieces: 24, price: 749 },
      { pieces: 12, price: 349 },
      { pieces: 9, price: 279 }
    ]
  },
  {
    id: "h2",
    title: "Luxury Treat Hamper",
    slug: "luxury-treat-hamper",
    image: "/hero/slide-2.jpg",
    shortDesc: "A refined assortment of our finest dark chocolates enriched with extra nuts and berries",
    detailedDesc: "Premium Dark Chocolates wrapped in golden foil Filled with more Almonds, Sunflower Seeds, Blueberries & Cranberries",
    tags: ["Premium"],
    customizable: true,
    priceOptions: [
      { pieces: 18, price: 749 },
      { pieces: 24, price: 999 },
      { pieces: 12, price: 479 },
      { pieces: 9, price: 379 }
    ]
  },
  {
    id: "h3",
    title: "Grand Delight Hamper",
    slug: "grand-delight-hamper",
    image: "/hero/slide-1.jpg",
    shortDesc: "Our premium festive collection featuring Kunafa, Hazelnut, Caramel, and Dry Fruit chocolates",
    detailedDesc: "Premium Dark Chocolates Collection including Kunafa Chocolates, Hazelnut, Premium dryfruits, & Caramel chocolates",
    tags: ["Festive", "Premium"],
    customizable: true,
    priceOptions: [
      { pieces: 18, price: 999 },
      { pieces: 24, price: 1249 },
      { pieces: 12, price: 599 },
      { pieces: 9, price: 499 }
    ]
  }
];

export default hampers;


