import { MetadataRoute } from 'next'
import { portfolioProjects } from '@/lib/constants/portfolioProjects'
import { especialidades } from '@/lib/constants/especialidades'
import { conteudos } from '@/lib/constants/conteudos'

const BASE = 'https://www.fabian.art.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${BASE}/projetos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const especialidadeEntries: MetadataRoute.Sitemap = especialidades.map((e) => ({
    url: `${BASE}/especialidades/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const conteudoEntries: MetadataRoute.Sitemap = conteudos.map((c) => ({
    url: `${BASE}/conteudo/${c.slug}`,
    lastModified: new Date(c.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/especialidades`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...especialidadeEntries,
    {
      url: `${BASE}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/projetos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...projectEntries,
    {
      url: `${BASE}/conteudo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...conteudoEntries,
    {
      url: `${BASE}/o-codigo-brasil`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
