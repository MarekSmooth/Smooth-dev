export type PortfolioCategory = 'website' | 'webapp' | 'eshop';

export interface PortfolioProject {
  titleKey: string;
  descriptionKey: string;
  category: PortfolioCategory;
  tags: string[];
  image: string;
  url: string;
  tagColor: string;
}

// Order matters: WorkShowcase (homepage teaser) shows the first 3 — keep the most visually
// striking ones up front. MadeBySmoothPage shows the full list, grouped/filtered by category.
export const portfolioProjects: PortfolioProject[] = [
  {
    titleKey: 'made.project1.title',
    descriptionKey: 'made.project1.description',
    category: 'website',
    tags: ['Autoškola', 'Vite', 'SEO', 'Copywriting', 'Webdesign'],
    image: '/portfolio/autoskolajedu.jpg',
    url: 'https://autoskolajedu.cz',
    tagColor: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  },
  {
    titleKey: 'made.aqms.title',
    descriptionKey: 'made.aqms.description',
    category: 'webapp',
    tags: ['Full-stack', 'PHP MVC', 'QMS'],
    image: '/portfolio/aqms.png',
    url: '#',
    tagColor: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  },
  {
    titleKey: 'made.smoothpost.title',
    descriptionKey: 'made.smoothpost.description',
    category: 'webapp',
    tags: ['Node.js', 'AI', 'Automation'],
    image: '/portfolio/smoothpost.png',
    url: '#',
    tagColor: 'bg-purple-500/15 text-purple-300 border-purple-500/20',
  },
  {
    titleKey: 'made.armyshop.title',
    descriptionKey: 'made.armyshop.description',
    category: 'eshop',
    tags: ['Shoptet', 'E-shop', 'Grafika', 'SEO'],
    image: '/portfolio/armyshoporechov.jpg',
    url: 'https://www.armyshoporechov.cz',
    tagColor: 'bg-orange-500/15 text-orange-300 border-orange-500/20',
  },
  {
    titleKey: 'made.project3.title',
    descriptionKey: 'made.project3.description',
    category: 'website',
    tags: ['Auto Detailing', 'Next.js', 'SEO', 'Copywriting', 'Webdesign'],
    image: '/portfolio/mnshine.jpg',
    url: 'https://mnshine.cz',
    tagColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  },
  {
    titleKey: 'made.project4.title',
    descriptionKey: 'made.project4.description',
    category: 'website',
    tags: ['Rekvalifikační kurzy', 'SEO', 'Copywriting', 'Webdesign'],
    image: '/portfolio/kurzystudiomirage.jpg',
    url: 'https://kurzystudiomirage.cz',
    tagColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  },
  {
    titleKey: 'made.project5.title',
    descriptionKey: 'made.project5.description',
    category: 'website',
    tags: ['Odtahová služba', 'Vite', 'SEO', 'Copywriting', 'Webdesign'],
    image: '/portfolio/vrakybrno.jpg',
    url: 'https://vraky-brno.cz',
    tagColor: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  },
  {
    titleKey: 'made.project2.title',
    descriptionKey: 'made.project2.description',
    category: 'website',
    tags: ['Kadeřnictví', 'SEO', 'Copywriting', 'Webdesign'],
    image: '/portfolio/kadernicehelena.jpg',
    url: 'https://kadernicehelena.cz',
    tagColor: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  },
];
