import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://calc.friz.dev/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

const categoryColors: Record<string, string> = {
  '취득세': 'bg-amber-100 text-amber-700 border-amber-200',
  '양도소득세': 'bg-red-100 text-red-700 border-red-200',
  '대출': 'bg-green-100 text-green-700 border-green-200',
  '종합부동산세': 'bg-sky-100 text-sky-700 border-sky-200',
  '증여·상속': 'bg-purple-100 text-purple-700 border-purple-200',
  '임대소득': 'bg-orange-100 text-orange-700 border-orange-200',
  '세금 개요': 'bg-stone-100 text-stone-700 border-stone-200',
  '취득 가이드': 'bg-teal-100 text-teal-700 border-teal-200',
}

// 계산기 CTA 매핑
const calcCTAs: Record<string, { href: string; label: string }> = {
  '취득세': { href: '/취득세-계산기', label: '취득세 계산기 바로가기' },
  '양도소득세': { href: '/양도소득세-계산기', label: '양도소득세 계산기 바로가기' },
  '대출': { href: '/대출-계산기', label: '대출 상환 계산기 바로가기' },
  '종합부동산세': { href: '/종부세-계산기', label: '종부세 계산기 바로가기' },
  '증여·상속': { href: '/증여세-계산기', label: '증여세 계산기 바로가기' },
  '세금 개요': { href: '/', label: '계산기 전체 보기' },
  '취득 가이드': { href: '/취득세-계산기', label: '취득세 계산기 바로가기' },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const sameCategory = blogPosts.filter(p => p.slug !== slug && p.category === post.category)
  const otherCategory = blogPosts.filter(p => p.slug !== slug && p.category !== post.category)
  const relatedPosts = [...sameCategory, ...otherCategory].slice(0, 3)

  const cta = calcCTAs[post.category]

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Organization', name: '세모아' },
    publisher: { '@type': 'Organization', name: '세모아' },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://calc.friz.dev/blog/${post.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.friz.dev' },
      { '@type': 'ListItem', position: 2, name: '블로그', item: 'https://calc.friz.dev/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://calc.friz.dev/blog/${post.slug}` },
    ],
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-8 pb-24 lg:pb-8">
        {/* 브레드크럼 */}
        <nav className="text-xs text-stone-400 mb-6">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-amber-600">블로그</Link>
          <span className="mx-1.5">/</span>
          <span className="text-stone-700 line-clamp-1">{post.title}</span>
        </nav>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColors[post.category] || 'bg-stone-100 text-stone-600 border-stone-200'}`}>
                {post.category}
              </span>
              <span className="text-xs text-stone-400">{post.date}</span>
              <span className="text-xs text-stone-400">{post.readTime}분 읽기</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3 leading-snug">{post.title}</h1>
            <p className="text-sm text-stone-500 leading-relaxed">{post.description}</p>
          </div>

          {/* 계산기 CTA */}
          {cta && (
            <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between gap-3">
              <p className="text-sm text-amber-800 font-medium">이 글과 관련된 계산기를 바로 사용해보세요.</p>
              <Link href={cta.href}
                className="flex-shrink-0 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl transition-colors">
                {cta.label}
              </Link>
            </div>
          )}

          <div className="border-t border-stone-200 mb-8" />

          {/* 본문 */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <AdBanner slot="blog-post-mid" className="my-8" />

        {/* 관련 글 */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-base font-bold text-stone-900 mb-4">관련 글</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedPosts.map(related => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block bg-white border border-stone-200 rounded-xl hover:border-amber-300 p-4 transition-all"
                >
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[related.category] || 'bg-stone-100 text-stone-600 border-stone-200'}`}>
                    {related.category}
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-2 mb-1 group-hover:text-amber-700 transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-xs text-stone-400">{related.date} / {related.readTime}분</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA 버튼 */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/blog"
            className="inline-block px-6 py-3 border border-stone-200 text-stone-700 hover:bg-stone-50 rounded-xl text-sm font-bold text-center transition-all">
            블로그 목록으로
          </Link>
          {cta && (
            <Link href={cta.href}
              className="inline-block px-6 py-3 bg-amber-600 text-white hover:bg-amber-700 rounded-xl text-sm font-bold text-center transition-all">
              {cta.label}
            </Link>
          )}
        </div>
      </div>

      {/* 블로그 콘텐츠 스타일 */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1C1917;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #F5F5F4;
        }
        .blog-content h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #292524;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .blog-content p {
          font-size: 0.9rem;
          color: #44403C;
          line-height: 1.85;
          margin-bottom: 1rem;
        }
        .blog-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          font-size: 0.875rem;
          color: #44403C;
          margin-bottom: 1rem;
        }
        .blog-content ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          font-size: 0.875rem;
          color: #44403C;
          margin-bottom: 1rem;
        }
        .blog-content li {
          margin-bottom: 0.35rem;
          line-height: 1.75;
        }
        .blog-content strong {
          color: #92400E;
          font-weight: 700;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
          margin-bottom: 1rem;
        }
        .blog-content th {
          background: #F5F5F4;
          border: 1px solid #D6D3D1;
          padding: 0.5rem 0.75rem;
          font-weight: 600;
          color: #44403C;
          text-align: left;
        }
        .blog-content td {
          border: 1px solid #E7E5E4;
          padding: 0.5rem 0.75rem;
          color: #57534E;
        }
        .blog-content tr:hover td {
          background: #FAFAF8;
        }
        .blog-content .highlight-box {
          background: #FFFBEB;
          border: 1px solid #FDE68A;
          border-radius: 0.75rem;
          padding: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: #92400E;
        }
        .blog-content .info-box {
          background: #F0F9FF;
          border: 1px solid #BAE6FD;
          border-radius: 0.75rem;
          padding: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: #0C4A6E;
        }
        .blog-content .warning-box {
          background: #FFF7ED;
          border: 1px solid #FED7AA;
          border-radius: 0.75rem;
          padding: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: #9A3412;
        }
      ` }} />
    </div>
  )
}
