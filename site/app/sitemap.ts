import { getBlogPosts } from 'app/cookbook/utils'

export const baseUrl = 'https://gpumode.ai'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/cookbook/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/cookbook'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
