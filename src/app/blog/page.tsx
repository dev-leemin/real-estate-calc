import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: '부동산 세금 블로그 - 취득세·양도세·종부세 완벽 가이드',
  description: '취득세, 양도소득세, 종합부동산세, 증여세, 대출 관련 최신 세금 정보와 절세 가이드를 제공합니다.',
  alternates: { canonical: 'https://calc.lotto45.kr/blog' },
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

const allCategories = ['전체', ...Array.from(new Set(blogPosts.map(p => p.category)))]

export default function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  return <BlogContent searchParamsPromise={searchParams} />
}

async function BlogContent({ searchParamsPromise }: { searchParamsPromise: Promise<{ category?: string }> }) {
  const searchParams = await searchParamsPromise
  const selectedCategory = searchParams?.category || '전체'

  const filteredPosts = selectedCategory === '전체'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory)

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <nav className="text-xs text-stone-400 mb-5">
        <Link href="/" className="hover:text-amber-600">홈</Link>
        <span className="mx-1.5">/</span>
        <span className="text-stone-700">블로그</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 mb-2">부동산 세금 블로그</h1>
        <p className="text-sm text-stone-500">취득세·양도세·종부세·증여세·대출 정보를 정확한 법령 기준으로 설명합니다.</p>
      </div>

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {allCategories.map(cat => (
          <Link
            key={cat}
            href={cat === '전체' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-amber-600 text-white'
                : 'bg-white border border-stone-200 text-stone-600 hover:border-amber-300 hover:bg-amber-50'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* 포스트 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-stone-200 rounded-2xl p-5 hover:border-amber-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[post.category] || 'bg-stone-100 text-stone-600 border-stone-200'}`}>
                {post.category}
              </span>
              <span className="text-[11px] text-stone-400">{post.readTime}분 읽기</span>
            </div>
            <h2 className="text-sm font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors leading-snug line-clamp-2">
              {post.title}
            </h2>
            <p className="text-xs text-stone-500 leading-relaxed line-clamp-2 mb-3">{post.description}</p>
            <p className="text-[11px] text-stone-400">{post.date}</p>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 text-stone-400">해당 카테고리의 글이 없습니다.</div>
      )}
    </div>
  )
}
