import Link from 'next/link';
import { Article, Category } from '@/types';
import ArticleCard from '@/components/article/ArticleCard';

interface CategorySectionProps {
    category: Category;
    articles: Article[];
    showViewAll?: boolean;
}

export default function CategorySection({
    category,
    articles,
    showViewAll = true
}: CategorySectionProps) {
    if (articles.length === 0) return null;

    const [firstArticle, ...restArticles] = articles;

    return (
        <section className="py-8 border-b border-gray-200">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="section-header mb-0 border-b-0 pb-0">{category.name}</h2>
                {showViewAll && (
                    <Link
                        href={`/news/${category.slug}`}
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        View All →
                    </Link>
                )}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Featured Article */}
                <div className="lg:col-span-2">
                    <ArticleCard
                        article={firstArticle}
                        variant="featured"
                    />
                </div>

                {/* Sidebar Articles */}
                <div className="lg:border-l lg:border-gray-200 lg:pl-6">
                    <div className="divide-y divide-gray-100">
                        {restArticles.slice(0, 4).map((article) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                                variant="compact"
                                showCategory={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
