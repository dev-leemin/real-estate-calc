import { blogPosts } from '@/data/blog-posts'

const BASE_URL = 'https://calc.lotto45.kr'

export function GET() {
  const staticPages = [
    { url: BASE_URL, priority: '1.0', changefreq: 'weekly' },
    { url: `${BASE_URL}/취득세-계산기`, priority: '0.9', changefreq: 'monthly' },
    { url: `${BASE_URL}/대출-계산기`, priority: '0.9', changefreq: 'monthly' },
    { url: `${BASE_URL}/양도소득세-계산기`, priority: '0.9', changefreq: 'monthly' },
    { url: `${BASE_URL}/전세-월세-계산기`, priority: '0.8', changefreq: 'monthly' },
    { url: `${BASE_URL}/증여세-계산기`, priority: '0.8', changefreq: 'monthly' },
    { url: `${BASE_URL}/종부세-계산기`, priority: '0.8', changefreq: 'monthly' },
    { url: `${BASE_URL}/blog`, priority: '0.8', changefreq: 'weekly' },
    { url: `${BASE_URL}/guide`, priority: '0.7', changefreq: 'monthly' },
    { url: `${BASE_URL}/about`, priority: '0.5', changefreq: 'yearly' },
    { url: `${BASE_URL}/privacy-policy`, priority: '0.3', changefreq: 'yearly' },
  ]

  const blogUrls = blogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.date,
  }))

  const allPages = [...staticPages, ...blogUrls]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    ${'lastmod' in page ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
