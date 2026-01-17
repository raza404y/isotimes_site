import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import { formatDate } from '@/lib/data';
import CategoryBadge from '@/components/ui/CategoryBadge';

type ArticleCardVariant = 'hero' | 'featured' | 'standard' | 'compact';

interface ArticleCardProps {
    article: Article;
    variant?: ArticleCardVariant;
    showImage?: boolean;
    showSummary?: boolean;
    showCategory?: boolean;
    showAuthor?: boolean;
    priority?: boolean;
}

export default function ArticleCard({
    article,
    variant = 'standard',
    showImage = true,
    showSummary = true,
    showCategory = true,
    showAuthor = true,
    priority = false,
}: ArticleCardProps) {
    const articleUrl = `/news/${article.category.slug}/${article.slug}`;

    if (variant === 'hero') {
        return (
            <article className="group">
                {showImage && (
                    <Link href={articleUrl} className="block mb-4 overflow-hidden">
                        <div className="relative aspect-[16/9]">
                            <Image
                                src={article.imageUrl}
                                alt={article.imageAlt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                priority={priority}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                            />
                        </div>
                    </Link>
                )}
                <div>
                    {showCategory && (
                        <CategoryBadge category={article.category} className="mb-2" />
                    )}
                    <Link href={articleUrl}>
                        <h2 className="headline headline--hero mb-3">
                            {article.headline}
                        </h2>
                    </Link>
                    {article.subheadline && (
                        <p className="text-lg text-gray-600 mb-3 font-serif">
                            {article.subheadline}
                        </p>
                    )}
                    {showSummary && (
                        <p className="summary mb-3">{article.summary}</p>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        {showAuthor && (
                            <>
                                <Link href={`/author/${article.author.slug}`} className="font-medium text-gray-900 hover:underline">
                                    {article.author.name}
                                </Link>
                                <span>·</span>
                            </>
                        )}
                        <time dateTime={article.publishedAt}>
                            {formatDate(article.publishedAt, { relative: true })}
                        </time>
                        {article.readTime && (
                            <>
                                <span>·</span>
                                <span>{article.readTime} min read</span>
                            </>
                        )}
                    </div>
                </div>
            </article>
        );
    }

    if (variant === 'featured') {
        return (
            <article className="group">
                {showImage && (
                    <Link href={articleUrl} className="block mb-3 overflow-hidden">
                        <div className="relative aspect-[3/2]">
                            <Image
                                src={article.imageUrl}
                                alt={article.imageAlt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </Link>
                )}
                <div>
                    {showCategory && (
                        <CategoryBadge category={article.category} className="mb-2" />
                    )}
                    <Link href={articleUrl}>
                        <h3 className="headline headline--featured mb-2">
                            {article.headline}
                        </h3>
                    </Link>
                    {showSummary && (
                        <p className="summary text-sm mb-2 line-clamp-2">{article.summary}</p>
                    )}
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        {showAuthor && (
                            <>
                                <span className="font-medium text-gray-700">{article.author.name}</span>
                                <span>·</span>
                            </>
                        )}
                        <time dateTime={article.publishedAt}>
                            {formatDate(article.publishedAt, { relative: true })}
                        </time>
                    </div>
                </div>
            </article>
        );
    }

    if (variant === 'compact') {
        return (
            <article className="group py-3 border-b border-gray-100 last:border-0">
                <Link href={articleUrl}>
                    <h4 className="headline headline--compact mb-1 line-clamp-2">
                        {article.headline}
                    </h4>
                </Link>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    {showCategory && (
                        <>
                            <CategoryBadge category={article.category} size="sm" />
                            <span>·</span>
                        </>
                    )}
                    <time dateTime={article.publishedAt}>
                        {formatDate(article.publishedAt, { relative: true })}
                    </time>
                </div>
            </article>
        );
    }

    // Standard variant
    return (
        <article className="group flex gap-4">
            {showImage && (
                <Link href={articleUrl} className="flex-shrink-0 overflow-hidden">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                        <Image
                            src={article.imageUrl}
                            alt={article.imageAlt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="128px"
                        />
                    </div>
                </Link>
            )}
            <div className="flex-1 min-w-0">
                {showCategory && (
                    <CategoryBadge category={article.category} className="mb-1" size="sm" />
                )}
                <Link href={articleUrl}>
                    <h3 className="headline headline--standard mb-1 line-clamp-2">
                        {article.headline}
                    </h3>
                </Link>
                {showSummary && (
                    <p className="summary text-sm mb-1 line-clamp-2 hidden sm:block">{article.summary}</p>
                )}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    {showAuthor && (
                        <>
                            <span className="font-medium text-gray-700">{article.author.name}</span>
                            <span>·</span>
                        </>
                    )}
                    <time dateTime={article.publishedAt}>
                        {formatDate(article.publishedAt, { relative: true })}
                    </time>
                </div>
            </div>
        </article>
    );
}
