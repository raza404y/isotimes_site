import { Article, Author, Category, PaginationOptions, SearchResult } from '@/types';
import { articles, getArticlesData } from '@/data/articles';
import { authors, getAuthorBySlug as getAuthorFromData, getAuthorById } from '@/data/authors';
import { categories, getCategoryBySlug as getCategoryFromData, getCategoryById } from '@/data/categories';

// Simulate async data fetching (ready for Firebase migration)

/**
 * Get all articles with optional filtering and pagination
 */
export async function getArticles(options?: PaginationOptions): Promise<Article[]> {
    let result = [...articles];

    // Filter by category
    if (options?.category) {
        result = result.filter(article => article.category.slug === options.category);
    }

    // Filter by author
    if (options?.author) {
        result = result.filter(article => article.author.slug === options.author);
    }

    // Filter featured only
    if (options?.featured) {
        result = result.filter(article => article.isFeatured);
    }

    // Sort by date (newest first)
    result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    // Pagination
    const page = options?.page ?? 1;
    const limit = options?.limit ?? 20;
    const start = (page - 1) * limit;

    return result.slice(start, start + limit);
}

/**
 * Get a single article by category and slug
 */
export async function getArticleBySlug(category: string, slug: string): Promise<Article | null> {
    const article = articles.find(
        a => a.category.slug === category && a.slug === slug
    );
    return article ?? null;
}

/**
 * Get articles by category slug
 */
export async function getArticlesByCategory(categorySlug: string, limit?: number): Promise<Article[]> {
    let result = articles
        .filter(article => article.category.slug === categorySlug)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    if (limit) {
        result = result.slice(0, limit);
    }

    return result;
}

/**
 * Get articles by author slug
 */
export async function getArticlesByAuthor(authorSlug: string): Promise<Article[]> {
    return articles
        .filter(article => article.author.slug === authorSlug)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Get featured articles for homepage hero
 */
export async function getFeaturedArticles(limit: number = 4): Promise<Article[]> {
    return articles
        .filter(article => article.isFeatured)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, limit);
}

/**
 * Get latest articles
 */
export async function getLatestArticles(limit: number = 10): Promise<Article[]> {
    return articles
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        .slice(0, limit);
}

/**
 * Get opinion/editorial articles
 */
export async function getOpinionArticles(limit?: number): Promise<Article[]> {
    let result = articles
        .filter(article => article.isOpinion || article.category.slug === 'opinion')
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    if (limit) {
        result = result.slice(0, limit);
    }

    return result;
}

/**
 * Search articles by query
 */
export async function searchArticles(query: string): Promise<SearchResult> {
    if (!query.trim()) {
        return { articles: [], totalResults: 0, query: '' };
    }

    const normalizedQuery = query.toLowerCase().trim();

    const results = articles.filter(article => {
        const searchableText = [
            article.headline,
            article.subheadline ?? '',
            article.summary,
            article.tags.join(' '),
            article.author.name,
            article.category.name
        ].join(' ').toLowerCase();

        return searchableText.includes(normalizedQuery);
    });

    return {
        articles: results,
        totalResults: results.length,
        query
    };
}

/**
 * Get related articles based on tags and category
 */
export async function getRelatedArticles(article: Article, limit: number = 3): Promise<Article[]> {
    const related = articles
        .filter(a => a.id !== article.id)
        .map(a => {
            // Score based on shared tags and same category
            let score = 0;
            if (a.category.slug === article.category.slug) score += 2;
            a.tags.forEach(tag => {
                if (article.tags.includes(tag)) score += 1;
            });
            return { article: a, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.article);

    return related;
}

/**
 * Get author by slug
 */
export async function getAuthorBySlug(slug: string): Promise<Author | null> {
    const author = getAuthorFromData(slug);
    return author ?? null;
}

/**
 * Get all authors
 */
export async function getAllAuthors(): Promise<Author[]> {
    return authors;
}

/**
 * Get category by slug
 */
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
    const category = getCategoryFromData(slug);
    return category ?? null;
}

/**
 * Get all categories
 */
export async function getAllCategories(): Promise<Category[]> {
    return categories;
}

/**
 * Format date for display
 */
export function formatDate(dateString: string, options?: { relative?: boolean }): string {
    const date = new Date(dateString);

    if (options?.relative) {
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

        if (diffHours < 1) {
            const diffMinutes = Math.floor(diffMs / (1000 * 60));
            return `${diffMinutes}m ago`;
        }
        if (diffHours < 24) {
            return `${diffHours}h ago`;
        }
        if (diffHours < 48) {
            return 'Yesterday';
        }
    }

    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

/**
 * Calculate read time for article
 */
export function calculateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}
