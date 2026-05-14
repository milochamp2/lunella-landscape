import type { MetadataRoute } from 'next'

const base = 'https://lunellalandscape.com.au'
const lastModified = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ]
}
