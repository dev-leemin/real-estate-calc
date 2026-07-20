import type { Metadata } from 'next'
import Link from 'next/link'
import NoticeCarousel from '@/components/NoticeCarousel'
import AdBanner from '@/components/AdBanner'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: '세모아 - 부동산 세금 계산기 | 취득세·양도세·종부세·증여세·대출',
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
      acceptedAnswer: { '@type': 'Answer', text: '주택 취득세는 6억 이하 1%, 6억~9억 구간 1~3%, 9억 초과 3%입니다.' },
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
    title: '취득세',
    desc: '1주택·다주택·법인별 세율. 지방교육세·농특세 포함.',
    num: '01',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    svgPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    href: '/대출-계산기',
    title: '대출 상환',
    desc: '원리금균등·원금균등·만기일시. 상환 일정표 제공.',
    num: '02',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    svgPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    href: '/양도소득세-계산기',
    title: '양도소득세',
    desc: '비과세 자동 판별. 장기보유특별공제 최대 80%.',
    num: '03',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-500',
    svgPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    href: '/전세-월세-계산기',
    title: '전세·월세',
    desc: '전세금↔월세 환산. 대출이자 vs 월세 비교.',
    num: '04',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    svgPath: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
  },
  {
    href: '/증여세-계산기',
    title: '증여세',
    desc: '배우자 6억·자녀 5천만원 공제 자동 적용.',
    num: '05',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
    svgPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    href: '/종부세-계산기',
    title: '종합부동산세',
    desc: '공시가격 기준. 고령자·장기보유 세액공제 반영.',
    num: '06',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    svgPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
]

const stats = [
  { label: '취득세 기본세율', value: '1%', sub: '6억 이하 1주택 기준' },
  { label: '1주택 종부세 공제', value: '12억', sub: '공시가격 기준' },
  { label: '양도세 비과세 기준', value: '12억', sub: '1주택 실거래가' },
  { label: '배우자 증여 공제', value: '6억', sub: '10년 합산 한도' },
]

const changes2026 = [
  {
    category: '취득세',
    barColor: 'bg-amber-400',
    tagColor: 'bg-amber-50 text-amber-700',
    title: '2026 취득세 핵심 변경',
    items: [
      '생애최초 감면 200만원 한도 유지',
      '다주택자 조정지역 8~12% 중과 유지',
      '법인 취득세 12% 동일 적용',
    ],
    link: '/blog/acquisition-tax-2026',
  },
  {
    category: '양도소득세',
    barColor: 'bg-sky-400',
    tagColor: 'bg-sky-50 text-sky-700',
    title: '2026 양도세 핵심 변경',
    items: [
      '1주택 비과세 12억 이하 유지',
      '조정지역 2년 거주 요건 존속',
      '다주택자 중과 한시 배제 종료',
    ],
    link: '/blog/one-home-nontaxable',
  },
  {
    category: '대출 규제',
    barColor: 'bg-emerald-400',
    tagColor: 'bg-emerald-50 text-emerald-700',
    title: '2026 대출 규제 변동',
    items: [
      'DSR 2단계 유지 — 은행권 40%',
      'LTV 70% 상한 (조정지역 60%)',
      '전세자금대출 DSR 산정 포함 검토',
    ],
    link: '/blog/ltv-dti-dsr-guide',
  },
]

const recentPosts = blogPosts.slice(0, 3)

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />

      <NoticeCarousel />

      <div className="max-w-5xl mx-auto px-4 pt-10 pb-16">

        {/* 히어로 */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-3 py-1 mb-4">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-[11px] font-semibold text-amber-700">2026년 최신 세율 자동 반영 · 실시간 계산</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0B1623] leading-tight tracking-tight mb-3">
            부동산 세금,<br />
            <span className="text-amber-500">정확하게</span> 계산하세요.
          </h1>
          <p className="text-sm text-slate-500 font-medium">취득세·양도세·종부세·증여세·대출·전월세 환산 · 참고용</p>
        </div>

        {/* 계산기 그리드 */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {calculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="group bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(245,158,11,0.10)] hover:border-amber-200 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-9 h-9 rounded-xl ${calc.iconBg} flex items-center justify-center`}>
                    <svg className={`w-[18px] h-[18px] ${calc.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={calc.svgPath} />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-300">{calc.num}</span>
                </div>
                <p className="font-bold text-[#0B1623] text-sm sm:text-base leading-tight mb-1.5">{calc.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{calc.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-amber-500 text-xs font-semibold group-hover:gap-1.5 transition-all duration-200">
                  계산하기 <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 핵심 기준 위젯 */}
        <section className="mb-12">
          <div className="bg-[#0B1623] rounded-2xl overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-bold text-white/50 tracking-widest uppercase">2026 핵심 기준</span>
              <span className="text-[10px] text-white/25">지방세법 · 소득세법</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/8">
              {stats.map((s) => (
                <div key={s.label} className="p-5 bg-[#0B1623]">
                  <p className="text-3xl font-black text-amber-400 mb-1">{s.value}</p>
                  <p className="text-xs font-semibold text-white/75 mb-0.5">{s.label}</p>
                  <p className="text-[10px] text-white/30">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2026 변경사항 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1623] mb-4 tracking-tight">2026 주요 변경사항</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {changes2026.map((c) => (
              <div key={c.category} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className={`h-1 ${c.barColor}`} />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.tagColor}`}>{c.category}</span>
                    <span className="text-[10px] text-slate-400 font-medium">2026</span>
                  </div>
                  <p className="text-sm font-bold text-[#0B1623] mb-3">{c.title}</p>
                  <ul className="space-y-1.5 mb-4">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={c.link} className="text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdBanner slot="home-mid" className="my-8" />

        {/* 최근 블로그 */}
        <section className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">세금 가이드</h2>
            <Link href="/blog" className="text-xs font-semibold text-slate-400 hover:text-amber-600 transition-colors">전체 보기 →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl p-4 hover:-translate-y-0.5 hover:shadow-md hover:border-amber-200 transition-all duration-200"
              >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{post.category}</span>
                <h3 className="mt-2 text-sm font-bold text-[#0B1623] leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-[10px] text-slate-400 font-medium">{post.date} · {post.readTime}분</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 면책 */}
        <div className="border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-400 font-medium">
            본 계산기는 참고용입니다. 2026년 지방세법·소득세법 기준이며 개인 상황에 따라 실제 세액이 다를 수 있습니다.
            정확한 세액은 세무사 또는 홈택스(hometax.go.kr)를 통해 확인하세요.
          </p>
        </div>
      </div>
    </div>
  )
}
