import { Metadata } from 'next';
import Container from '@/components/layout/Container';
import HeroSection from '@/components/sections/HeroSection';
import CategorySection from '@/components/sections/CategorySection';
import OpinionSection from '@/components/sections/OpinionSection';
import NewsGrid from '@/components/sections/NewsGrid';
import {
  getFeaturedArticles,
  getArticlesByCategory,
  getOpinionArticles,
  getLatestArticles
} from '@/lib/data';
import { categories } from '@/data/categories';

export const metadata: Metadata = {
  title: "IsoTimes | Breaking News, World News & Analysis",
  description: "Independent journalism for an informed world. Breaking news, investigative reporting, and expert analysis.",
};

export default async function HomePage() {
  // Fetch data for all sections
  const featuredArticles = await getFeaturedArticles(4);
  const latestArticles = await getLatestArticles(6);
  const opinionArticles = await getOpinionArticles(3);

  // Fetch articles for each category section
  const politicsArticles = await getArticlesByCategory('politics', 5);
  const worldArticles = await getArticlesByCategory('world', 5);
  const businessArticles = await getArticlesByCategory('business', 5);
  const technologyArticles = await getArticlesByCategory('technology', 5);
  const sportsArticles = await getArticlesByCategory('sports', 5);

  const politicsCategory = categories.find(c => c.slug === 'politics')!;
  const worldCategory = categories.find(c => c.slug === 'world')!;
  const businessCategory = categories.find(c => c.slug === 'business')!;
  const technologyCategory = categories.find(c => c.slug === 'technology')!;
  const sportsCategory = categories.find(c => c.slug === 'sports')!;

  return (
    <div className="bg-white">
      <Container>
        {/* Hero Section */}
        <HeroSection featuredArticles={featuredArticles} />

        {/* Latest News Grid */}
        <section className="py-8 border-b border-gray-200">
          <h2 className="section-header">Latest News</h2>
          <NewsGrid articles={latestArticles} columns={3} />
        </section>

        {/* Politics Section */}
        <CategorySection
          category={politicsCategory}
          articles={politicsArticles}
        />

        {/* World Section */}
        <CategorySection
          category={worldCategory}
          articles={worldArticles}
        />

        {/* Business Section */}
        <CategorySection
          category={businessCategory}
          articles={businessArticles}
        />

        {/* Opinion Section */}
        <OpinionSection articles={opinionArticles} />

        {/* Technology Section */}
        <CategorySection
          category={technologyCategory}
          articles={technologyArticles}
        />

        {/* Sports Section */}
        <CategorySection
          category={sportsCategory}
          articles={sportsArticles}
        />
      </Container>
    </div>
  );
}
