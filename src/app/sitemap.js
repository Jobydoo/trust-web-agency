import { servicesData, citiesData } from '@/data/agencyData';
import { portfolioProjects } from '@/data/projectsData';

export default async function sitemap() {
  const baseUrl = 'https://trustwebagency.com';
  const currentDate = new Date().toISOString();

  // Main core routes
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculateur-roi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic Service routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services#${service.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic City local SEO routes
  const cityRoutes = citiesData.map((city) => ({
    url: `${baseUrl}/#agence-web-${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic Portfolio routes
  const portfolioRoutes = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio#${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...mainRoutes, ...serviceRoutes, ...cityRoutes, ...portfolioRoutes];
}
