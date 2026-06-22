export interface PortfolioProject {
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  image: string;
  url: string;
  tagColor: string;
}

// Order matters: WorkShowcase (homepage teaser) shows the first 3 — keep the most visually
// striking ones up front. MadeBySmoothPage shows the full list.
export const portfolioProjects: PortfolioProject[] = [
  {
    titleKey: 'made.project1.title',
    descriptionKey: 'made.project1.description',
    tags: ['Autoškola', 'Webdesign'],
    image: '/portfolio/autoskolajedu.jpg',
    url: 'https://autoskolajedu.cz',
    tagColor: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  },
  {
    titleKey: 'made.project2.title',
    descriptionKey: 'made.project2.description',
    tags: ['Kadeřnictví', 'Webdesign'],
    image: '/portfolio/kadernicehelena.jpg',
    url: 'https://kadernicehelena.cz',
    tagColor: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  },
  {
    titleKey: 'made.project3.title',
    descriptionKey: 'made.project3.description',
    tags: ['Auto Detailing', 'Webdesign'],
    image: '/portfolio/mnshine.jpg',
    url: 'https://mnshine.cz',
    tagColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  },
  {
    titleKey: 'made.project4.title',
    descriptionKey: 'made.project4.description',
    tags: ['Rekvalifikační kurzy', 'Webdesign'],
    image: '/portfolio/kurzystudiomirage.jpg',
    url: 'https://kurzystudiomirage.cz',
    tagColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  },
  {
    titleKey: 'made.project5.title',
    descriptionKey: 'made.project5.description',
    tags: ['Odtahová služba', 'Webdesign'],
    image: '/portfolio/vrakybrno.jpg',
    url: 'https://vraky-brno.cz',
    tagColor: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  },
];
