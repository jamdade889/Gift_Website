export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
  details?: {
    materials: string[];
    dimensions: string;
    customization: boolean;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  sortBy: 'name' | 'price-low' | 'price-high' | 'featured';
}
