import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://appfactory.xuzhen.top'
    const now = new Date().toISOString()

    return [
        { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
        { url: `${base}/products/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${base}/services/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${base}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    ]
}


