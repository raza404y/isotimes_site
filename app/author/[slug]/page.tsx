import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import ArticleCard from '@/components/article/ArticleCard';
import { getAuthorBySlug, getArticlesByAuthor } from '@/lib/data';
import { authors } from '@/data/authors';

interface AuthorPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return authors.map((author) => ({
        slug: author.slug,
    }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
    const { slug } = await params;
    const author = await getAuthorBySlug(slug);

    if (!author) {
        return {
            title: 'Author Not Found',
        };
    }

    return {
        title: author.name,
        description: author.bio,
        openGraph: {
            title: `${author.name} | IsoTimes`,
            description: author.bio,
            type: 'profile',
            images: [
                {
                    url: author.avatarUrl,
                    alt: author.name,
                },
            ],
        },
    };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
    const { slug } = await params;
    const author = await getAuthorBySlug(slug);

    if (!author) {
        notFound();
    }

    const authorArticles = await getArticlesByAuthor(slug);

    return (
        <div className="bg-white">
            <Container>
                {/* Author Header */}
                <header className="py-12 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                                <Image
                                    src={author.avatarUrl}
                                    alt={author.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="160px"
                                />
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="text-center md:text-left flex-1">
                            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                                {author.name}
                            </h1>
                            <p className="text-lg text-gray-600 mb-4">
                                {author.title}
                            </p>
                            <p className="text-gray-700 max-w-2xl mb-4">
                                {author.bio}
                            </p>

                            {/* Contact & Social */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                {author.email && (
                                    <a
                                        href={`mailto:${author.email}`}
                                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        Email
                                    </a>
                                )}
                                {author.twitter && (
                                    <a
                                        href={`https://twitter.com/${author.twitter.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                        {author.twitter}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Author Articles */}
                <section className="py-8">
                    <h2 className="section-header">
                        Articles by {author.name}
                    </h2>

                    {authorArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {authorArticles.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                    variant="featured"
                                    showAuthor={false}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-500">No articles found for this author.</p>
                        </div>
                    )}
                </section>
            </Container>
        </div>
    );
}
