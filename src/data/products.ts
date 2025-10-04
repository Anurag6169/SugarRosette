export type Product = {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  mrp?: number;
  savings?: number; // percentage 0-100
  images: string[];
  rating?: number;
  reviewsCount?: number;
  tags: string[];
  contents?: string[];
  allergens?: string[];
  shelfLife?: string;
  weight?: string;
  flavors?: string[];
  customizable?: boolean;
  leadTime?: string;
};

const products: Product[] = [
  {
    id: "p1",
    slug: "rosette-signature",
    title: "Rosette Signature Hamper",
    shortDesc: "A curated selection for thoughtful gifting.",
    longDesc: "Our Rosette Signature Hamper brings together handcrafted chocolates and artisanal treats in a premium keepsake box. Perfect for celebrations, client gifts, and family moments.",
    price: 2499,
    mrp: 2799,
    savings: 11,
    images: ["/hero/slide-1.jpg", "/hero/slide-2.jpg"],
    rating: 4.7,
    reviewsCount: 132,
    tags: ["Bestseller", "Corporate"],
    contents: ["16 artisan chocolates", "2 gourmet cookies", "Gift card"],
    allergens: ["Milk", "Nuts"],
    shelfLife: "Best within 30 days",
    weight: "1.2 kg",
    flavors: ["Milk", "Dark", "Assorted"],
    customizable: true,
    leadTime: "Ships in 24–48h - Pan-India",
  },
  {
    id: "p2",
    slug: "blush-celebration",
    title: "Blush Celebration Box",
    shortDesc: "Sweet treats for birthdays and special moments.",
    longDesc: "A bright selection of festive favorites designed to delight. Ideal for birthdays, anniversaries, and joyous occasions.",
    price: 1499,
    mrp: 1699,
    savings: 12,
    images: ["/hero/slide-2.jpg", "/hero/slide-1.jpg"],
    rating: 4.5,
    reviewsCount: 68,
    tags: ["New"],
    contents: ["12 chocolates", "Caramel bites", "Greeting card"],
    allergens: ["Milk"],
    shelfLife: "Best within 20 days",
    weight: "900 g",
    flavors: ["Milk", "Assorted"],
    customizable: false,
    leadTime: "Ships in 24–48h - Pan-India",
  },
];

export default products;

