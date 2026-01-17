import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import ArticleBody from '@/components/article/ArticleBody';
import ArticleMeta from '@/components/article/ArticleMeta';
import RelatedArticles from '@/components/article/RelatedArticles';
import CategoryBadge from '@/components/ui/CategoryBadge';
import SocialShare from '@/components/ui/SocialShare';
import { getArticleBySlug, getRelatedArticles } from '@/lib/data';
import { articles } from '@/data/articles';

interface ArticlePageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        category: article.category.slug,
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { category, slug } = await params;
    const article = await getArticleBySlug(category, slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: article.headline,
        description: article.summary,
        authors: [{ name: article.author.name }],
        openGraph: {
            title: article.headline,
            description: article.summary,
            type: 'article',
            publishedTime: article.publishedAt,
            modifiedTime: article.updatedAt || article.publishedAt,
            authors: [article.author.name],
            images: [
                {
                    url: article.imageUrl,
                    alt: article.imageAlt,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.headline,
            description: article.summary,
            images: [article.imageUrl],
        },
    };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { category, slug } = await params;
    const article = await getArticleBySlug(category, slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = await getRelatedArticles(article, 3);
    const articleUrl = `https://isotimes.com/news/${category}/${slug}`;

    return (
        <article
            className="bg-white"
            itemScope
            itemType="https://schema.org/NewsArticle"
        >
            <Container narrow>
                {/* Article Header */}
                <header className="pt-8 pb-6">
                    {/* Category Badge */}
                    <div className="mb-4">
                        <CategoryBadge category={article.category} />
                    </div>

                    {/* Headline */}
                    <h1
                        className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                        itemProp="headline"
                    >
                        {article.headline}
                    </h1>

                    {/* Subheadline */}
                    {article.subheadline && (
                        <p
                            className="text-xl text-gray-600 font-serif mb-6"
                            itemProp="description"
                        >
                            {article.subheadline}
                        </p>
                    )}

                    {/* Article Meta */}
                    <ArticleMeta
                        author={article.author}
                        publishedAt={article.publishedAt}
                        updatedAt={article.updatedAt}
                        readTime={article.readTime}
                    />
                </header>

                {/* Featured Image */}
                <figure className="mb-8" itemProp="image">
                    <div className="relative aspect-[16/9]">
                        <Image
                            src={article.imageUrl}
                            alt={article.imageAlt}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 720px"
                        />
                    </div>
                    {article.imageCaption && (
                        <figcaption className="article-image-caption">
                            {article.imageCaption}
                        </figcaption>
                    )}
                </figure>

                {/* Social Share */}
                <div className="mb-8 flex justify-end">
                    <SocialShare
                        url={articleUrl}
                        title={article.headline}
                        summary={article.summary}
                    />
                </div>

                {/* Article Body */}
                <div itemProp="articleBody">
                    <ArticleBody content={article.body} />
                </div>

                {/* Tags */}
                {article.tags.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom Social Share */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <SocialShare
                        url={articleUrl}
                        title={article.headline}
                        summary={article.summary}
                    />
                </div>

                {/* Related Articles */}
                <RelatedArticles articles={relatedArticles} />
            </Container>
        </article>
    );
}
