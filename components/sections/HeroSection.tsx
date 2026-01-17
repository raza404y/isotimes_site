import { Article } from '@/types';
import ArticleCard from '@/components/article/ArticleCard';

interface HeroSectionProps {
    featuredArticles: Article[];
}

export default function HeroSection({ featuredArticles }: HeroSectionProps) {
    if (featuredArticles.length === 0) return null;

    const [mainArticle, ...secondaryArticles] = featuredArticles;

    return (
        <section className="py-6 md:py-8 border-b border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Main Hero Article */}
                <div className="lg:col-span-2">
                    <ArticleCard
                        article={mainArticle}
                        variant="hero"
                        priority
                    />
                </div>

                {/* Secondary Articles */}
                <aside className="lg:border-l lg:border-gray-200 lg:pl-6">
                    <div className="divide-y divide-gray-100">
                        {secondaryArticles.slice(0, 3).map((article) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                                variant="compact"
                                showSummary={false}
                                showAuthor={false}
                            />
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}
