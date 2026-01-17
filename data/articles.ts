import { Article } from '@/types';
import { categories } from './categories';
import { authors } from './authors';

// Helper to get category and author by id
const getCat = (slug: string) => categories.find(c => c.slug === slug)!;
const getAuth = (slug: string) => authors.find(a => a.slug === slug)!;

export const articles: Article[] = [
    // FEATURED / HERO ARTICLES
    {
        id: '1',
        slug: 'congress-passes-landmark-infrastructure-bill',
        headline: 'Congress Passes Landmark $1.2 Trillion Infrastructure Bill After Months of Negotiations',
        subheadline: 'The legislation represents the largest investment in roads, bridges, and broadband in decades',
        summary: 'After months of intense negotiations, Congress has finally passed a sweeping infrastructure package that will reshape America\'s transportation networks and expand broadband access to rural communities.',
        body: `<p>In a historic vote late Friday evening, both chambers of Congress approved the Infrastructure Investment and Jobs Act, sending the $1.2 trillion package to President Biden's desk for his signature.</p>
    
<p>The legislation, which passed the Senate with bipartisan support and the House along near party lines, represents the most significant investment in American infrastructure in decades.</p>

<h2>What's in the Bill</h2>

<p>The package includes $550 billion in new spending over five years, with the remainder coming from previously authorized programs. Key provisions include:</p>

<ul>
<li>$110 billion for roads, bridges, and major projects</li>
<li>$66 billion for passenger and freight rail</li>
<li>$65 billion for broadband infrastructure</li>
<li>$55 billion for clean drinking water</li>
<li>$39 billion for public transit modernization</li>
</ul>

<p>"This is a generational investment in America's future," said Transportation Secretary Pete Buttigieg. "We're finally going to fix roads and bridges that have been neglected for far too long."</p>

<h2>Political Implications</h2>

<p>The bill's passage comes as a major win for President Biden, who has made infrastructure a centerpiece of his domestic agenda. However, progressive Democrats remain focused on the larger social spending package still making its way through Congress.</p>`,
        category: getCat('politics'),
        author: getAuth('sarah-chen'),
        publishedAt: '2026-01-17T14:30:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=800&fit=crop',
        imageAlt: 'United States Capitol Building at sunset',
        imageCaption: 'The U.S. Capitol, where lawmakers voted on the infrastructure bill late Friday.',
        tags: ['infrastructure', 'congress', 'biden', 'legislation'],
        isFeatured: true,
        readTime: 6
    },
    {
        id: '2',
        slug: 'federal-reserve-signals-interest-rate-cuts',
        headline: 'Federal Reserve Signals Potential Interest Rate Cuts as Inflation Continues to Cool',
        subheadline: 'Markets rally on news that the Fed may ease monetary policy sooner than expected',
        summary: 'Federal Reserve officials indicated they could begin cutting interest rates by mid-year if inflation continues its downward trajectory, sending stocks to record highs.',
        body: `<p>The Federal Reserve sent its clearest signal yet that it may begin cutting interest rates in the coming months, as new data shows inflation continuing to moderate toward the central bank's 2% target.</p>

<p>In testimony before Congress, Fed Chair Jerome Powell said the central bank is "increasingly confident" that price pressures are easing sustainably, though he stopped short of committing to a specific timeline for rate cuts.</p>

<h2>Market Reaction</h2>

<p>Investors celebrated the news, with the S&P 500 climbing 1.8% to close at a new all-time high. The tech-heavy Nasdaq gained 2.3%, while the Dow Jones Industrial Average rose 450 points.</p>

<p>"This is exactly what the market wanted to hear," said Amanda Foster, senior market strategist at Morgan Stanley. "The Fed is signaling that the worst of the rate-hiking cycle is behind us."</p>

<h2>Economic Outlook</h2>

<p>The Fed's more dovish stance comes amid growing evidence that the economy is achieving a "soft landing" — slowing growth enough to tame inflation without triggering a recession.</p>`,
        category: getCat('business'),
        author: getAuth('james-okonkwo'),
        publishedAt: '2026-01-17T12:15:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop',
        imageAlt: 'Federal Reserve building in Washington D.C.',
        imageCaption: 'The Federal Reserve headquarters in Washington.',
        tags: ['federal reserve', 'interest rates', 'economy', 'markets'],
        isFeatured: true,
        readTime: 5
    },
    {
        id: '3',
        slug: 'ai-breakthrough-protein-folding',
        headline: 'DeepMind Achieves Major Breakthrough in Protein Folding with New AI System',
        subheadline: 'AlphaFold 3 can predict the structure of nearly any biological molecule with unprecedented accuracy',
        summary: 'Google DeepMind has unveiled the next generation of its protein-folding AI, which scientists say could accelerate drug discovery and our understanding of disease.',
        body: `<p>Google DeepMind announced Wednesday that its latest artificial intelligence system, AlphaFold 3, can predict the three-dimensional structure of virtually any biological molecule with unprecedented accuracy.</p>

<p>The breakthrough builds on the company's Nobel Prize-winning work on protein structure prediction, extending its capabilities to DNA, RNA, and drug-like molecules.</p>

<h2>Implications for Medicine</h2>

<p>"This is a leap forward for biological research," said Demis Hassabis, DeepMind's CEO. "Understanding how molecules interact is fundamental to developing new medicines."</p>

<p>Pharmaceutical companies have already begun using the technology to identify potential drug candidates for diseases ranging from cancer to Alzheimer's.</p>

<h2>Open Access</h2>

<p>DeepMind said it will make the research available to the scientific community, continuing its practice of sharing foundational AI breakthroughs.</p>`,
        category: getCat('technology'),
        author: getAuth('marcus-williams'),
        publishedAt: '2026-01-17T10:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=800&fit=crop',
        imageAlt: 'Abstract representation of AI and molecular biology',
        imageCaption: 'AlphaFold 3 can model complex molecular interactions.',
        tags: ['artificial intelligence', 'deepmind', 'biotechnology', 'science'],
        isFeatured: true,
        readTime: 4
    },

    // POLITICS ARTICLES
    {
        id: '4',
        slug: 'supreme-court-hears-social-media-case',
        headline: 'Supreme Court Hears Arguments on State Laws Regulating Social Media Platforms',
        summary: 'Justices appeared divided on whether Florida and Texas can require platforms to host content they might otherwise remove.',
        body: `<p>The Supreme Court heard oral arguments Monday in two cases that could reshape how social media platforms moderate content, with justices questioning both sides about the limits of the First Amendment.</p>

<p>The cases involve laws passed by Florida and Texas that aim to prevent platforms from removing posts based on political viewpoints.</p>`,
        category: getCat('politics'),
        author: getAuth('michael-santos'),
        publishedAt: '2026-01-16T18:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&h=600&fit=crop',
        imageAlt: 'Supreme Court building exterior',
        tags: ['supreme court', 'social media', 'first amendment'],
        readTime: 4
    },
    {
        id: '5',
        slug: 'senate-confirms-defense-secretary',
        headline: 'Senate Confirms New Defense Secretary in Bipartisan Vote',
        summary: 'The former general cleared the upper chamber with support from both parties amid ongoing global security challenges.',
        body: `<p>The Senate voted 78-22 on Thursday to confirm the president's nominee for Defense Secretary, giving the Pentagon new leadership amid rising tensions abroad.</p>`,
        category: getCat('politics'),
        author: getAuth('robert-kim'),
        publishedAt: '2026-01-16T15:30:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
        imageAlt: 'Pentagon aerial view',
        tags: ['pentagon', 'defense', 'confirmation'],
        readTime: 3
    },
    {
        id: '6',
        slug: 'governors-climate-coalition-expands',
        headline: 'Bipartisan Coalition of Governors Expands Climate Initiative to 25 States',
        summary: 'The growing alliance commits to reducing emissions regardless of federal policy.',
        body: `<p>A bipartisan coalition of governors announced the expansion of their climate initiative, with five new states joining the effort to reduce greenhouse gas emissions.</p>`,
        category: getCat('politics'),
        author: getAuth('maya-patel'),
        publishedAt: '2026-01-15T11:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
        imageAlt: 'Wind turbines at sunset',
        tags: ['climate', 'governors', 'environment'],
        readTime: 4
    },

    // WORLD ARTICLES
    {
        id: '7',
        slug: 'eu-nato-defense-spending-agreement',
        headline: 'European Leaders Reach Historic Agreement on Collective Defense Spending',
        summary: 'NATO allies commit to unprecedented coordination on military procurement and defense capabilities.',
        body: `<p>European leaders meeting in Brussels have reached a landmark agreement on coordinated defense spending, marking a significant shift in the continent's approach to collective security.</p>

<p>The pact, which includes all 27 EU members, commits participating nations to harmonizing military procurement and sharing defense technologies.</p>`,
        category: getCat('world'),
        author: getAuth('elena-rodriguez'),
        publishedAt: '2026-01-17T08:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=600&fit=crop',
        imageAlt: 'European flags at EU headquarters',
        tags: ['europe', 'nato', 'defense', 'military'],
        readTime: 5
    },
    {
        id: '8',
        slug: 'india-economy-surpasses-japan',
        headline: 'India Officially Becomes World\'s Fourth-Largest Economy, Surpassing Japan',
        summary: 'The milestone reflects India\'s rapid growth trajectory and shifting global economic power.',
        body: `<p>India has officially surpassed Japan to become the world's fourth-largest economy, according to new data from the International Monetary Fund.</p>`,
        category: getCat('world'),
        author: getAuth('james-okonkwo'),
        publishedAt: '2026-01-16T09:30:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
        imageAlt: 'Mumbai skyline with modern buildings',
        tags: ['india', 'economy', 'japan', 'gdp'],
        readTime: 4
    },
    {
        id: '9',
        slug: 'middle-east-diplomatic-talks-resume',
        headline: 'Diplomatic Talks Resume in Qatar as Regional Leaders Seek Path to Peace',
        summary: 'Mediators express cautious optimism as negotiations enter a new phase.',
        body: `<p>Regional leaders and international mediators have resumed diplomatic talks in Doha, with officials expressing cautious optimism about the prospects for a breakthrough.</p>`,
        category: getCat('world'),
        author: getAuth('elena-rodriguez'),
        publishedAt: '2026-01-15T14:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=800&h=600&fit=crop',
        imageAlt: 'Doha diplomatic building',
        tags: ['middle east', 'diplomacy', 'qatar'],
        readTime: 5
    },

    // BUSINESS ARTICLES
    {
        id: '10',
        slug: 'tech-giants-earnings-exceed-expectations',
        headline: 'Tech Giants Report Strong Earnings, Driven by AI and Cloud Growth',
        summary: 'Microsoft, Google, and Amazon all beat analyst expectations on the strength of artificial intelligence investments.',
        body: `<p>The biggest technology companies reported fourth-quarter earnings that exceeded Wall Street expectations, with executives pointing to artificial intelligence as a key growth driver.</p>`,
        category: getCat('business'),
        author: getAuth('amanda-foster'),
        publishedAt: '2026-01-16T20:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        imageAlt: 'Stock market data on screen',
        tags: ['earnings', 'tech', 'ai', 'stocks'],
        readTime: 4
    },
    {
        id: '11',
        slug: 'ev-sales-record-quarter',
        headline: 'Electric Vehicle Sales Hit Record High as Prices Drop and Selection Expands',
        summary: 'EVs now account for nearly 20% of new car sales in the United States.',
        body: `<p>Electric vehicle sales reached a new quarterly record in the United States, with one in five new cars sold now powered by battery.</p>`,
        category: getCat('business'),
        author: getAuth('amanda-foster'),
        publishedAt: '2026-01-15T16:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
        imageAlt: 'Electric vehicle charging station',
        tags: ['electric vehicles', 'automotive', 'tesla'],
        readTime: 3
    },
    {
        id: '12',
        slug: 'housing-market-spring-outlook',
        headline: 'Housing Market Shows Signs of Life as Mortgage Rates Decline',
        summary: 'Economists predict a stronger spring selling season as borrowing costs ease.',
        body: `<p>The housing market is showing early signs of a rebound as mortgage rates have fallen from their recent highs, giving hope to prospective buyers who had been priced out.</p>`,
        category: getCat('business'),
        author: getAuth('james-okonkwo'),
        publishedAt: '2026-01-14T12:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        imageAlt: 'Suburban house with for sale sign',
        tags: ['housing', 'real estate', 'mortgages'],
        readTime: 4
    },

    // SPORTS ARTICLES
    {
        id: '13',
        slug: 'super-bowl-preview-matchup',
        headline: 'Super Bowl Preview: Chiefs and 49ers Set for Epic Rematch',
        summary: 'The two powerhouses will face off again for the championship, four years after their last meeting.',
        body: `<p>The stage is set for one of the most anticipated Super Bowls in recent memory, as the Kansas City Chiefs and San Francisco 49ers prepare for a rematch of their classic 2020 championship game.</p>`,
        category: getCat('sports'),
        author: getAuth('lisa-thompson'),
        publishedAt: '2026-01-17T09:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&h=600&fit=crop',
        imageAlt: 'Football stadium at night',
        tags: ['nfl', 'super bowl', 'chiefs', '49ers'],
        isFeatured: true,
        readTime: 5
    },
    {
        id: '14',
        slug: 'nba-trade-deadline-recap',
        headline: 'NBA Trade Deadline: Winners and Losers from a Hectic Day of Deals',
        summary: 'Several contenders made significant moves as teams position themselves for the playoff push.',
        body: `<p>The NBA trade deadline came and went with a flurry of deals, as contending teams sought to strengthen their rosters for the stretch run.</p>`,
        category: getCat('sports'),
        author: getAuth('lisa-thompson'),
        publishedAt: '2026-01-16T23:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
        imageAlt: 'Basketball arena during game',
        tags: ['nba', 'trades', 'basketball'],
        readTime: 6
    },
    {
        id: '15',
        slug: 'tennis-australian-open-semifinals',
        headline: 'Australian Open Semifinals Set: Rising Stars Challenge Established Champions',
        summary: 'A new generation of tennis talent is pushing the sport\'s biggest names to their limits.',
        body: `<p>The Australian Open semifinals are set, featuring a compelling mix of established champions and emerging stars who have captured the tennis world's attention.</p>`,
        category: getCat('sports'),
        author: getAuth('lisa-thompson'),
        publishedAt: '2026-01-16T06:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop',
        imageAlt: 'Tennis court at Australian Open',
        tags: ['tennis', 'australian open', 'grand slam'],
        readTime: 4
    },

    // TECHNOLOGY ARTICLES
    {
        id: '16',
        slug: 'apple-vision-pro-enterprise',
        headline: 'Apple Expands Vision Pro to Enterprise Market with New Business Features',
        summary: 'The company is targeting corporate customers with enhanced collaboration and security tools.',
        body: `<p>Apple announced a major push into the enterprise market for its Vision Pro headset, unveiling new features designed specifically for business customers.</p>`,
        category: getCat('technology'),
        author: getAuth('marcus-williams'),
        publishedAt: '2026-01-16T11:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop',
        imageAlt: 'VR headset in modern office',
        tags: ['apple', 'vision pro', 'enterprise', 'vr'],
        readTime: 4
    },
    {
        id: '17',
        slug: 'cybersecurity-ai-threats',
        headline: 'Cybersecurity Experts Warn of New AI-Powered Threats Targeting Critical Infrastructure',
        summary: 'Sophisticated attacks are increasingly using artificial intelligence to evade traditional defenses.',
        body: `<p>Security professionals are sounding the alarm about a new generation of cyberattacks that leverage artificial intelligence to target power grids, water systems, and other critical infrastructure.</p>`,
        category: getCat('technology'),
        author: getAuth('marcus-williams'),
        publishedAt: '2026-01-15T15:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
        imageAlt: 'Cybersecurity dashboard',
        tags: ['cybersecurity', 'ai', 'infrastructure', 'hacking'],
        readTime: 5
    },
    {
        id: '18',
        slug: 'quantum-computing-milestone',
        headline: 'IBM Demonstrates Error-Corrected Quantum Computing in Major Milestone',
        summary: 'The achievement brings practical quantum computers one step closer to reality.',
        body: `<p>IBM has achieved a significant breakthrough in quantum computing, demonstrating for the first time a system capable of performing error-corrected calculations on a meaningful scale.</p>`,
        category: getCat('technology'),
        author: getAuth('marcus-williams'),
        publishedAt: '2026-01-14T10:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
        imageAlt: 'Quantum computer hardware',
        tags: ['quantum computing', 'ibm', 'technology'],
        readTime: 4
    },

    // OPINION ARTICLES
    {
        id: '19',
        slug: 'opinion-ai-regulation-balance',
        headline: 'Opinion: We Need AI Regulation That Fosters Innovation, Not Fear',
        summary: 'Striking the right balance between safety and progress is essential for America\'s technological leadership.',
        body: `<p>As Congress debates how to regulate artificial intelligence, lawmakers must resist the temptation to let fear drive policy. The stakes — for our economy, our security, and our global competitiveness — are simply too high.</p>

<p>Yes, AI poses real risks that deserve serious attention. But overly restrictive regulations could cede America's technological leadership to China and other competitors who are racing ahead without such constraints.</p>`,
        category: getCat('opinion'),
        author: getAuth('david-park'),
        publishedAt: '2026-01-17T07:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        imageAlt: 'AI robot concept',
        tags: ['ai', 'regulation', 'policy', 'opinion'],
        isOpinion: true,
        readTime: 5
    },
    {
        id: '20',
        slug: 'opinion-housing-crisis-solutions',
        headline: 'Opinion: The Housing Crisis Demands Bold Action from Local Leaders',
        summary: 'Zoning reform alone won\'t solve our affordability problems. Cities must think bigger.',
        body: `<p>America's housing crisis has reached a breaking point. In city after city, working families are being priced out of neighborhoods where they've lived for generations. And while there's plenty of blame to go around, the solutions will require local leaders to make difficult choices.</p>`,
        category: getCat('opinion'),
        author: getAuth('david-park'),
        publishedAt: '2026-01-15T07:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        imageAlt: 'City skyline with housing',
        tags: ['housing', 'affordability', 'cities', 'opinion'],
        isOpinion: true,
        readTime: 6
    },

    // MORE ARTICLES FOR DEPTH
    {
        id: '21',
        slug: 'climate-report-ocean-temperatures',
        headline: 'Global Ocean Temperatures Hit Record High for Third Consecutive Year',
        summary: 'Scientists warn that warming seas are accelerating extreme weather patterns worldwide.',
        body: `<p>Global ocean temperatures have reached unprecedented levels for the third year in a row, according to new data that scientists say underscores the urgency of addressing climate change.</p>`,
        category: getCat('world'),
        author: getAuth('maya-patel'),
        publishedAt: '2026-01-17T06:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
        imageAlt: 'Ocean waves and sky',
        tags: ['climate', 'oceans', 'environment', 'science'],
        readTime: 4
    },
    {
        id: '22',
        slug: 'us-china-trade-talks',
        headline: 'U.S. and China Resume High-Level Trade Talks Amid Tariff Tensions',
        summary: 'Officials from both nations meet in Geneva seeking to de-escalate the ongoing trade dispute.',
        body: `<p>American and Chinese trade officials are meeting in Geneva this week for the first high-level talks in months, as both sides seek to reduce tensions that have disrupted global supply chains.</p>`,
        category: getCat('world'),
        author: getAuth('elena-rodriguez'),
        publishedAt: '2026-01-16T16:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=800&h=600&fit=crop',
        imageAlt: 'US and China flags',
        tags: ['us-china', 'trade', 'tariffs', 'diplomacy'],
        readTime: 5
    },
    {
        id: '23',
        slug: 'startup-funding-2026-trends',
        headline: 'Venture Capital Rebounds as AI Startups Attract Record Investment',
        summary: 'After a challenging 2025, startup funding is surging again — but almost entirely in artificial intelligence.',
        body: `<p>Venture capital investment is staging a dramatic comeback in 2026, with startups focused on artificial intelligence attracting unprecedented funding levels even as other sectors struggle.</p>`,
        category: getCat('business'),
        author: getAuth('amanda-foster'),
        publishedAt: '2026-01-16T14:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop',
        imageAlt: 'Startup office workspace',
        tags: ['venture capital', 'startups', 'ai', 'funding'],
        readTime: 4
    },
    {
        id: '24',
        slug: 'social-media-teen-mental-health',
        headline: 'New Research Links Heavy Social Media Use to Teen Anxiety and Depression',
        summary: 'A longitudinal study of 10,000 adolescents provides the strongest evidence yet of the connection.',
        body: `<p>A comprehensive study tracking 10,000 teenagers over five years has found compelling evidence linking heavy social media use to increased rates of anxiety and depression.</p>`,
        category: getCat('technology'),
        author: getAuth('marcus-williams'),
        publishedAt: '2026-01-15T09:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
        imageAlt: 'Teen using smartphone',
        tags: ['social media', 'mental health', 'teens', 'research'],
        readTime: 5
    },
    {
        id: '25',
        slug: 'premier-league-title-race',
        headline: 'Premier League Title Race Tightens as Liverpool and Arsenal Close Gap on City',
        summary: 'With 15 matches remaining, three clubs are separated by just four points at the top.',
        body: `<p>The Premier League title race has become a three-horse contest as Liverpool and Arsenal have closed the gap on defending champions Manchester City.</p>`,
        category: getCat('sports'),
        author: getAuth('lisa-thompson'),
        publishedAt: '2026-01-15T20:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop',
        imageAlt: 'Soccer match action',
        tags: ['premier league', 'soccer', 'football', 'liverpool', 'arsenal'],
        readTime: 4
    },
    {
        id: '26',
        slug: 'opinion-democracy-local-news',
        headline: 'Opinion: The Death of Local News Is a Threat to Democracy',
        summary: 'As newspapers close across America, who will hold local officials accountable?',
        body: `<p>When the Belleville News-Democrat closed its doors last month, it joined more than 2,500 newspapers that have shuttered since 2005. Each closure represents not just lost jobs but a diminished capacity to hold power accountable.</p>`,
        category: getCat('opinion'),
        author: getAuth('david-park'),
        publishedAt: '2026-01-14T07:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
        imageAlt: 'Newspapers stacked',
        tags: ['media', 'journalism', 'democracy', 'opinion'],
        isOpinion: true,
        readTime: 6
    },
    {
        id: '27',
        slug: 'immigration-reform-debate',
        headline: 'Bipartisan Immigration Deal Collapses as Election-Year Politics Take Hold',
        summary: 'Months of negotiations unravel as both parties retreat to familiar positions.',
        body: `<p>A carefully negotiated bipartisan immigration deal has collapsed in Congress, with lawmakers from both parties blaming the other side for putting election-year politics ahead of policy.</p>`,
        category: getCat('politics'),
        author: getAuth('sarah-chen'),
        publishedAt: '2026-01-14T18:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=600&fit=crop',
        imageAlt: 'Capitol building rotunda',
        tags: ['immigration', 'congress', 'bipartisan', 'reform'],
        readTime: 5
    },
    {
        id: '28',
        slug: 'spacex-starship-launch',
        headline: 'SpaceX Starship Completes First Successful Orbital Test Flight',
        summary: 'The massive rocket landed intact for the first time, bringing Mars ambitions closer to reality.',
        body: `<p>SpaceX achieved a major milestone Saturday when its Starship rocket completed a full orbital test flight and landed successfully for the first time, a crucial step toward the company's goal of sending humans to Mars.</p>`,
        category: getCat('technology'),
        author: getAuth('marcus-williams'),
        publishedAt: '2026-01-13T22:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&h=600&fit=crop',
        imageAlt: 'Rocket launch at sunset',
        tags: ['spacex', 'starship', 'space', 'elon musk'],
        readTime: 4
    },
    {
        id: '29',
        slug: 'retail-earnings-consumer-spending',
        headline: 'Retail Giants Report Mixed Results Amid Shifting Consumer Priorities',
        summary: 'Walmart outperforms while department stores struggle as shoppers become more selective.',
        body: `<p>The latest round of retail earnings painted a complex picture of American consumer behavior, with discount chains thriving while traditional department stores continue to face challenges.</p>`,
        category: getCat('business'),
        author: getAuth('amanda-foster'),
        publishedAt: '2026-01-13T16:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
        imageAlt: 'Shopping mall interior',
        tags: ['retail', 'consumer', 'walmart', 'earnings'],
        readTime: 4
    },
    {
        id: '30',
        slug: 'africa-tech-investment',
        headline: 'African Tech Startups Attract Growing International Investment',
        summary: 'Venture capitalists are increasingly looking to Nigeria, Kenya, and Egypt for the next wave of innovation.',
        body: `<p>International investors are pouring money into African technology startups at record rates, betting that the continent's young, mobile-first population represents a massive untapped market.</p>`,
        category: getCat('world'),
        author: getAuth('elena-rodriguez'),
        publishedAt: '2026-01-13T10:00:00Z',
        imageUrl: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop',
        imageAlt: 'African city skyline',
        tags: ['africa', 'startups', 'technology', 'investment'],
        readTime: 5
    }
];

// Export function to get articles with options
export function getArticlesData() {
    return articles;
}
