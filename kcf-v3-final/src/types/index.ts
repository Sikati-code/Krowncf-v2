export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount: number;
  description: string;
}

export interface Design {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  categoryId: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  downloads: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
  createdAt: string;
  format: string[];
  author: string;
}

export interface CartItem {
  design: Design;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isLoggedIn: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Stats {
  designsCount: number;
  happyClients: number;
  downloadsCount: number;
  categoriesCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  link: string;
}

export interface LogoShowcase {
  id: string;
  name: string;
  image: string;
  category: string;
}

export type Language = 'en' | 'fr';

export type TranslationKey = string;
