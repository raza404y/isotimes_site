import { Article } from '@/types';
import ArticleCard from './ArticleCard';

interface RelatedArticlesProps {
    articles: Article[];
    title?: string;
}

export default function RelatedArticles({
    articles,
    title = 'Related Articles'
}: RelatedArticlesProps) {
    if (articles.length === 0) return null;

    return (
        <aside className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="section-header">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        variant="featured"
                        showSummary={false}
                    />
                ))}
            </div>
        </aside>
    );
}
