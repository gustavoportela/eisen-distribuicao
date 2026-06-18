import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://eisendistribuicao.com.br'
  const now = new Date()

  return [
    { url: base,                        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/sobre`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/marcas`,            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/trabalhe-conosco`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/seja-cliente`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
