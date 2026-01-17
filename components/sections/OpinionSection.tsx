import Link from 'next/link';
import { Article } from '@/types';

interface OpinionSectionProps {
    articles: Article[];
}

export default function OpinionSection({ articles }: OpinionSectionProps) {
    if (articles.length === 0) return null;

    return (
        <section className="py-8 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="section-header mb-0 border-b-0 pb-0">Opinion & Editorial</h2>
                    <Link
                        href="/news/opinion"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        View All →
                    </Link>
                </div>

                {/* Opinion Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.slice(0, 3).map((article) => (
                        <article key={article.id} className="bg-white p-6 border-l-4 border-cyan-600">
                            <Link href={`/news/${article.category.slug}/${article.slug}`}>
                                <h3 className="font-serif text-xl font-semibold mb-3 hover:text-gray-600 transition-colors">
                                    {article.headline}
                                </h3>
                            </Link>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                {article.summary}
                            </p>
                            <Link
                                href={`/author/${article.author.slug}`}
                                className="text-sm font-medium text-gray-900 hover:underline"
                            >
                                {article.author.name}
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
