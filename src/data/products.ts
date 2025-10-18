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

const products: Product[] = [];

export default products;

