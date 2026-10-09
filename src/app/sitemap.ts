import { MetadataRoute } from 'next'
import { portfolioProjects } from '@/lib/constants/portfolioProjects'
import { projects } from '@/lib/constants/projects'
import { conteudos } from '@/lib/constants/conteudos'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `https://www.fabian.art.br/projetos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));



  const conteudoEntries: MetadataRoute.Sitemap = conteudos.map((c) => ({
    url: `https://www.fabian.art.br/conteudo/${c.slug}`,
    lastModified: new Date(c.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    {
      url: 'https://www.fabian.art.br',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.fabian.art.br/sobre',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.fabian.art.br/projetos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...projectEntries,

    {
      url: 'https://www.fabian.art.br/conteudo',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...conteudoEntries,
    {
      url: 'https://www.fabian.art.br/o-codigo-brasil',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
