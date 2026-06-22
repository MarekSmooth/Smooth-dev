export interface PortfolioProject {
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  image: string;
  accent: string;
  tagColor: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    titleKey: 'made.project2.title',
    descriptionKey: 'made.project2.description',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-violet-500/30 to-purple-900/60',
    tagColor: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  },
  {
    titleKey: 'made.project1.title',
    descriptionKey: 'made.project1.description',
    tech: ['Shoptet', 'Payment Integration', 'SEO'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-cyan-500/30 to-blue-900/60',
    tagColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  },
  {
    titleKey: 'made.project3.title',
    descriptionKey: 'made.project3.description',
    tech: ['Python', 'Data Visualization', 'Business Intelligence'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-emerald-500/30 to-teal-900/60',
    tagColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  },
];
