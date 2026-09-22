import { MetadataRoute } from 'next'
import { portfolioProjects } from '@/lib/constants/portfolioProjects'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `https://www.fabian.art.br/projetos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: 'https://www.fabian.art.br',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.fabian.art.br/projetos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...projectEntries,
  ];
}
