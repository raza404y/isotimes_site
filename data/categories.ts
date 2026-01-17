import { Category } from '@/types';

export const categories: Category[] = [
    {
        id: 'politics',
        slug: 'politics',
        name: 'Politics',
        description: 'Coverage of government, elections, policy, and political affairs.',
        color: '#DC2626'
    },
    {
        id: 'world',
        slug: 'world',
        name: 'World',
        description: 'International news, global affairs, and foreign policy.',
        color: '#2563EB'
    },
    {
        id: 'business',
        slug: 'business',
        name: 'Business',
        description: 'Markets, economy, finance, and corporate news.',
        color: '#059669'
    },
    {
        id: 'sports',
        slug: 'sports',
        name: 'Sports',
        description: 'Coverage of major leagues, international events, and athletics.',
        color: '#D97706'
    },
    {
        id: 'technology',
        slug: 'technology',
        name: 'Technology',
        description: 'Innovation, AI, cybersecurity, and the digital world.',
        color: '#7C3AED'
    },
    {
        id: 'opinion',
        slug: 'opinion',
        name: 'Opinion',
        description: 'Editorials, op-eds, and commentary from our columnists.',
        color: '#0891B2'
    }
];

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find(cat => cat.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
    return categories.find(cat => cat.id === id);
}
