// Article interface for news content
export interface Article {
  id: string;
  slug: string;
  headline: string;
  subheadline?: string;
  summary: string;
  body: string;
  category: Category;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption?: string;
  tags: string[];
  isOpinion?: boolean;
  isFeatured?: boolean;
  readTime?: number; // in minutes
}

// Author interface for journalist profiles
export interface Author {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  email?: string;
  twitter?: string;
  articles?: string[]; // article IDs
}

// Category interface for content sections
export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  color?: string; // optional accent color
}

// Search result type
export interface SearchResult {
  articles: Article[];
  totalResults: number;
  query: string;
}

// Pagination options
export interface PaginationOptions {
  page?: number;
  limit?: number;
  category?: string;
  author?: string;
  featured?: boolean;
}
