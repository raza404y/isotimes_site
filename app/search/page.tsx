import { Metadata } from 'next';
import Container from '@/components/layout/Container';
import ArticleCard from '@/components/article/ArticleCard';
import SearchInput from '@/components/ui/SearchInput';
import { searchArticles } from '@/lib/data';

interface SearchPageProps {
    searchParams: Promise<{
        q?: string;
    }>;
}

export const metadata: Metadata = {
    title: 'Search',
    description: 'Search IsoTimes articles',
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { q: query } = await searchParams;
    const trimmedQuery = query?.trim() || '';

    const results = trimmedQuery ? await searchArticles(trimmedQuery) : null;

    return (
        <div className="bg-white min-h-screen">
            <Container>
                {/* Search Header */}
                <header className="py-8 border-b border-gray-200">
                    <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                        Search
                    </h1>
                    <div className="max-w-2xl">
                        <SearchInput
                            initialQuery={trimmedQuery}
                            autoFocus={!trimmedQuery}
                        />
                    </div>
                </header>

                {/* Search Results */}
                <section className="py-8">
                    {results ? (
                        <>
                            {/* Results Header */}
                            <div className="mb-6">
                                <p className="text-gray-600">
                                    {results.totalResults > 0 ? (
                                        <>
                                            Found <strong>{results.totalResults}</strong> result{results.totalResults !== 1 ? 's' : ''} for{' '}
                                            <strong>"{results.query}"</strong>
                                        </>
                                    ) : (
                                        <>No results found for <strong>"{results.query}"</strong></>
                                    )}
                                </p>
                            </div>

                            {/* Results Grid */}
                            {results.articles.length > 0 ? (
                                <div className="space-y-6">
                                    {results.articles.map((article) => (
                                        <ArticleCard
                                            key={article.id}
                                            article={article}
                                            variant="standard"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16 bg-gray-50 rounded">
                                    <svg
                                        className="w-16 h-16 mx-auto text-gray-300 mb-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <h2 className="text-xl font-medium text-gray-900 mb-2">
                                        No results found
                                    </h2>
                                    <p className="text-gray-600 max-w-md mx-auto">
                                        Try searching with different keywords or browse our categories.
                                    </p>
                                </div>
                            )}
                        </>
                    ) : (
                        /* Initial State */
                        <div className="text-center py-16">
                            <svg
                                className="w-16 h-16 mx-auto text-gray-300 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <h2 className="text-xl font-medium text-gray-900 mb-2">
                                Search IsoTimes
                            </h2>
                            <p className="text-gray-600">
                                Enter a search term to find articles.
                            </p>
                        </div>
                    )}
                </section>
            </Container>
        </div>
    );
}
