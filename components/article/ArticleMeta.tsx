import Link from 'next/link';
import Image from 'next/image';
import { Author } from '@/types';
import { formatDate } from '@/lib/data';

interface ArticleMetaProps {
    author: Author;
    publishedAt: string;
    updatedAt?: string;
    readTime?: number;
    showAvatar?: boolean;
}

export default function ArticleMeta({
    author,
    publishedAt,
    updatedAt,
    readTime,
    showAvatar = true,
}: ArticleMetaProps) {
    return (
        <div className="flex items-center gap-4 py-4 border-y border-gray-200">
            {showAvatar && (
                <Link href={`/author/${author.slug}`} className="flex-shrink-0">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                            src={author.avatarUrl}
                            alt={author.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                        />
                    </div>
                </Link>
            )}
            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-2">
                    <span className="text-sm text-gray-500">By</span>
                    <Link
                        href={`/author/${author.slug}`}
                        className="font-medium text-gray-900 hover:underline"
                    >
                        {author.name}
                    </Link>
                    {author.title && (
                        <span className="text-sm text-gray-500 hidden sm:inline">
                            · {author.title}
                        </span>
                    )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                    <time dateTime={publishedAt}>
                        {formatDate(publishedAt)}
                    </time>
                    {updatedAt && updatedAt !== publishedAt && (
                        <>
                            <span>·</span>
                            <span>Updated {formatDate(updatedAt)}</span>
                        </>
                    )}
                    {readTime && (
                        <>
                            <span>·</span>
                            <span>{readTime} min read</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
