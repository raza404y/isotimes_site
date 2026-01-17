import { Article } from '@/types';
import ArticleCard from '@/components/article/ArticleCard';

interface NewsGridProps {
    articles: Article[];
    columns?: 2 | 3 | 4;
    showRanking?: boolean;
}

export default function NewsGrid({
    articles,
    columns = 3,
    showRanking = false
}: NewsGridProps) {
    if (articles.length === 0) return null;

    const gridClasses = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <div className={`grid ${gridClasses[columns]} gap-6 md:gap-8`}>
            {articles.map((article, index) => (
                <div key={article.id} className="relative">
                    {showRanking && (
                        <span className="absolute -left-4 top-0 text-5xl font-serif font-bold text-gray-100 select-none hidden md:block">
                            {index + 1}
                        </span>
                    )}
                    <ArticleCard
                        article={article}
                        variant="featured"
                    />
                </div>
            ))}
        </div>
    );
}
