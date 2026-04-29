export type ProductCategory = "simple" | "standard" | "premium";

export interface Products {
  id?: string;              // optional for create
  name: string;
  description: string;
  price: number;
  image: string;            // image URL
  category: ProductCategory;
  createdAt?: string;       // optional (from backend)
  updatedAt?: string;       // optional
}