import { Author } from '@/types';

export const authors: Author[] = [
    {
        id: 'sarah-chen',
        slug: 'sarah-chen',
        name: 'Sarah Chen',
        title: 'Chief Political Correspondent',
        bio: 'Sarah Chen has covered Washington politics for over 15 years. A Pulitzer Prize finalist, she specializes in congressional affairs and election coverage. Previously at The Washington Post.',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        email: 'sarah.chen@isotimes.com',
        twitter: '@sarahchen'
    },
    {
        id: 'marcus-williams',
        slug: 'marcus-williams',
        name: 'Marcus Williams',
        title: 'Senior Technology Editor',
        bio: 'Marcus Williams covers the intersection of technology and society. His reporting on AI ethics and Big Tech regulation has been widely cited. He holds a degree in Computer Science from MIT.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
        email: 'marcus.williams@isotimes.com',
        twitter: '@marcustech'
    },
    {
        id: 'elena-rodriguez',
        slug: 'elena-rodriguez',
        name: 'Elena Rodriguez',
        title: 'International Affairs Correspondent',
        bio: 'Elena Rodriguez reports on global affairs from our London bureau. She has covered conflicts in the Middle East and Eastern Europe, and previously served as bureau chief in Jerusalem.',
        avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
        email: 'elena.rodriguez@isotimes.com',
        twitter: '@elenarodriguez'
    },
    {
        id: 'james-okonkwo',
        slug: 'james-okonkwo',
        name: 'James Okonkwo',
        title: 'Economics Correspondent',
        bio: 'James Okonkwo covers markets, Federal Reserve policy, and global economics. He previously worked at Bloomberg and holds an MBA from Wharton.',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
        email: 'james.okonkwo@isotimes.com',
        twitter: '@jamesecon'
    },
    {
        id: 'lisa-thompson',
        slug: 'lisa-thompson',
        name: 'Lisa Thompson',
        title: 'Sports Editor',
        bio: 'Lisa Thompson leads our sports coverage with a focus on professional football and basketball. A former collegiate athlete, she brings unique insight to her reporting.',
        avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
        email: 'lisa.thompson@isotimes.com',
        twitter: '@lisasports'
    },
    {
        id: 'david-park',
        slug: 'david-park',
        name: 'David Park',
        title: 'Opinion Columnist',
        bio: 'David Park writes on politics, culture, and social issues. His columns appear every Sunday. He previously served as editor-in-chief of The Atlantic.',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
        email: 'david.park@isotimes.com',
        twitter: '@davidparkwrites'
    },
    {
        id: 'maya-patel',
        slug: 'maya-patel',
        name: 'Maya Patel',
        title: 'Climate & Environment Reporter',
        bio: 'Maya Patel covers climate science, environmental policy, and sustainability. Her investigative series on corporate pollution won the George Polk Award.',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
        email: 'maya.patel@isotimes.com',
        twitter: '@mayaclimate'
    },
    {
        id: 'robert-kim',
        slug: 'robert-kim',
        name: 'Robert Kim',
        title: 'National Security Correspondent',
        bio: 'Robert Kim reports on defense, intelligence, and national security. He has sources across the Pentagon and intelligence community. Previously with Reuters.',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
        email: 'robert.kim@isotimes.com',
        twitter: '@robkimnatsec'
    },
    {
        id: 'amanda-foster',
        slug: 'amanda-foster',
        name: 'Amanda Foster',
        title: 'Business Correspondent',
        bio: 'Amanda Foster covers Wall Street, corporate America, and financial markets. She previously worked at CNBC and The Wall Street Journal.',
        avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
        email: 'amanda.foster@isotimes.com',
        twitter: '@amandabiz'
    },
    {
        id: 'michael-santos',
        slug: 'michael-santos',
        name: 'Michael Santos',
        title: 'White House Correspondent',
        bio: 'Michael Santos covers the White House and executive branch. He has covered three administrations and is a regular panelist on Sunday political shows.',
        avatarUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop',
        email: 'michael.santos@isotimes.com',
        twitter: '@michaelwh'
    }
];

export function getAuthorBySlug(slug: string): Author | undefined {
    return authors.find(author => author.slug === slug);
}

export function getAuthorById(id: string): Author | undefined {
    return authors.find(author => author.id === id);
}
