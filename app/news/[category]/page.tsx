import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/layout/Container';
import ArticleCard from '@/components/article/ArticleCard';
import { getArticlesByCategory, getCategoryBySlug } from '@/lib/data';
import { categories } from '@/data/categories';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category.slug,
    }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { category: categorySlug } = await params;
    const category = await getCategoryBySlug(categorySlug);

    if (!category) {
        return {
            title: 'Category Not Found',
        };
    }

    return {
        title: category.name,
        description: category.description,
        openGraph: {
            title: `${category.name} | IsoTimes`,
            description: category.description,
        },
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category: categorySlug } = await params;
    const category = await getCategoryBySlug(categorySlug);

    if (!category) {
        notFound();
    }

    const articles = await getArticlesByCategory(categorySlug);

    return (
        <div className="bg-white">
            <Container>
                {/* Category Header */}
                <header className="py-8 border-b border-gray-200">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">
                        {category.name}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {category.description}
                    </p>
                </header>

                {/* Articles List */}
                <section className="py-8">
                    {articles.length > 0 ? (
                        <div className="space-y-8">
                            {/* Featured Article */}
                            <div className="pb-8 border-b border-gray-200">
                                <ArticleCard
                                    article={articles[0]}
                                    variant="hero"
                                    priority
                                />
                            </div>

                            {/* Rest of Articles */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {articles.slice(1).map((article) => (
                                    <ArticleCard
                                        key={article.id}
                                        article={article}
                                        variant="featured"
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-500">No articles found in this category.</p>
                        </div>
                    )}
                </section>
            </Container>
        </div>
    );
}
