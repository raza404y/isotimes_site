import Link from 'next/link';
import { Category } from '@/types';

interface CategoryBadgeProps {
    category: Category;
    className?: string;
    size?: 'sm' | 'md';
    linked?: boolean;
}

export default function CategoryBadge({
    category,
    className = '',
    size = 'md',
    linked = true,
}: CategoryBadgeProps) {
    const sizeClasses = size === 'sm' ? 'text-[10px]' : 'text-xs';

    const colorClasses: Record<string, string> = {
        politics: 'text-red-600',
        world: 'text-blue-600',
        business: 'text-emerald-600',
        sports: 'text-amber-600',
        technology: 'text-violet-600',
        opinion: 'text-cyan-600',
    };

    const colorClass = colorClasses[category.slug] || 'text-gray-600';

    const badge = (
        <span className={`category-badge ${colorClass} ${sizeClasses} ${className}`}>
            {category.name}
        </span>
    );

    if (linked) {
        return (
            <Link href={`/news/${category.slug}`} className="hover:opacity-80 transition-opacity">
                {badge}
            </Link>
        );
    }

    return badge;
}
