import type { Metadata } from 'next'
import Link from 'next/link'
import NoticeCarousel from '@/components/NoticeCarousel'
import AdBanner from '@/components/AdBanner'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: '부동산 세금 계산기 - 취득세·양도세·종부세·증여세·대출 한 곳에서',
  description:
    '취득세, 양도소득세, 종합부동산세, 증여세, 대출 상환, 전세·월세 환산을 한 곳에서. 2026년 최신 세율 자동 반영, 실시간 계산.',
  alternates: { canonical: 'https://calc.lotto45.kr' },
}

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '취득세는 얼마나 내나요?',
      acceptedAnswer: { '@type': 'Answer', text: '주택 취득세는 6억 이하 1%, 6억~9억 구간 1~3%(점진적), 9억 초과 3%입니다.' },
    },
    {
      '@type': 'Question',
      name: '1주택자는 양도세를 안 내도 되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '실거래가 12억 원 이하 1주택을 2년 이상 보유한 경우 비과세입니다.' },
    },
  ],
}

const calculators = [
  {
    href: '/취득세-계산기',
    title: '취득세 계산기',
    sub: '1주택 · 다주택 · 법인',
    tag: '월 3만+ 검색',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    accent: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    href: '/대출-계산기',
    title: '대출 상환 계산기',
    sub: '원리금균등 · 원금균등 · 만기일시',
    tag: '월 10만+ 검색',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
      </svg>
    ),
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    href: '/양도소득세-계산기',
    title: '양도소득세 계산기',
    sub: '비과세 판별 · 장기보유공제',
    tag: '월 5만+ 검색',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
      </svg>
    ),
    accent: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    href: '/전세-월세-계산기',
    title: '전세·월세 환산기',
    sub: '전세↔월세 · 이자 비교',
    tag: '월 1.5만+ 검색',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    accent: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    href: '/증여세-계산기',
    title: '증여세 계산기',
    sub: '배우자 6억 · 자녀 5천만',
    tag: '월 1만+ 검색',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    accent: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    href: '/종부세-계산기',
    title: '종합부동산세 계산기',
    sub: '공시가격 기준 · 세액공제',
    tag: '월 8천+ 검색',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    accent: 'text-orange-600',
    bg: 'bg-orange-50',
  },
]

const stats = [
  { label: '취득세 기본세율', value: '1%', desc: '6억 이하 1주택' },
  { label: '1주택 종부세 공제', value: '12억', desc: '공시가격 기준' },
  { label: '양도세 비과세 기준', value: '12억', desc: '1주택 실거래가' },
  { label: '배우자 증여 공제', value: '6억', desc: '10년 합산 기준' },
]

const changes2026 = [
  {
    icon: '🏠',
    title: '취득세',
    items: [
      '생애최초 감면 200만원 한도 유지',
      '다주택자 중과 기준 조정지역 8~12% 유지',
      '법인 취득세 12% 동일 적용',
    ],
  },
  {
    icon: '📊',
    title: '양도소득세',
    items: [
      '1주택 비과세 12억 이하 실거래가 유지',
      '조정지역 2년 거주 요건 존속',
      '다주택자 중과 한시 배제 종료 → 정상 과세',
    ],
  },
  {
    icon: '🏦',
    title: '대출 규제',
    items: [
      'DSR 2단계 — 은행 40%, 비은행 50%',
      'LTV 70% 상한 (조정지역 60%)',
      '전세자금대출 DSR 산정 포함 검토 중',
    ],
  },
]

const recentPosts = blogPosts.slice(0, 3)

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />

      <NoticeCarousel />

      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10">

        {/* 계산기 그리드 */}
        <section className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-base font-bold text-stone-900">세금 계산기</h2>
            <span className="text-xs text-stone-400">2026년 세율 기준</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {calculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="group relative bg-white border border-stone-200 rounded-2xl p-4 hover:border-stone-300 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-10 h-10 ${calc.bg} ${calc.accent} rounded-xl flex items-center justify-center mb-3`}>
                  {calc.icon}
                </div>
                <p className="text-sm font-semibold text-stone-900 leading-tight mb-0.5 group-hover:text-stone-700">
                  {calc.title}
                </p>
                <p className="text-xs text-stone-400">{calc.sub}</p>
                <span className="absolute top-3 right-3 text-[10px] text-stone-300">{calc.tag}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 주요 수치 위젯 */}
        <section className="mb-10">
          <h2 className="text-base font-bold text-stone-900 mb-4">2026년 핵심 기준</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {stats.map((s) => (
              <div key={s.label} className="bg-stone-900 rounded-2xl p-4 text-white">
                <p className="text-2xl font-bold text-amber-400 mb-1">{s.value}</p>
                <p className="text-xs font-semibold text-white mb-0.5">{s.label}</p>
                <p className="text-xs text-stone-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2026 변경사항 */}
        <section className="mb-10">
          <h2 className="text-base font-bold text-stone-900 mb-4">2026 세금 주요 변경사항</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {changes2026.map((c) => (
              <div key={c.title} className="bg-white border border-stone-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{c.icon}</span>
                  <span className="text-sm font-bold text-stone-900">{c.title}</span>
                </div>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-stone-600">
                      <span className="mt-1 w-1 h-1 bg-amber-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <AdBanner slot="home-mid" className="my-8" />

        {/* 최근 블로그 */}
        <section className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-base font-bold text-stone-900">부동산 세금 가이드</h2>
            <Link href="/blog" className="text-xs text-amber-600 hover:underline">전체 보기 →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-stone-200 rounded-2xl p-4 hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <span className="text-[10px] font-medium text-stone-400 uppercase tracking-wide">{post.category}</span>
                <h3 className="mt-1.5 text-sm font-semibold text-stone-900 leading-snug group-hover:text-amber-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-stone-400">{post.date} · {post.readTime}분</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 면책 */}
        <p className="text-xs text-stone-400 border-t border-stone-100 pt-6">
          본 계산기는 정보 제공 목적의 참고용 도구입니다. 2026년 세율 기준이며 개정 법령 및 개인 상황에 따라 실제 세액이 다를 수 있습니다.
          정확한 세액은 세무사 또는 국세청 홈택스(hometax.go.kr)를 통해 확인하세요.
        </p>
      </div>
    </div>
  )
}
