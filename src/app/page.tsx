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
    full: '취득세 계산기',
    desc: '1주택·다주택·법인별 세율. 지방교육세·농특세 포함.',
    num: '01',
    accent: 'bg-amber-400',
  },
  {
    href: '/대출-계산기',
    title: '대출 상환',
    full: '대출 상환 계산기',
    desc: '원리금균등·원금균등·만기일시. 상환 일정표 제공.',
    num: '02',
    accent: 'bg-emerald-400',
  },
  {
    href: '/양도소득세-계산기',
    title: '양도소득세',
    full: '양도소득세 계산기',
    desc: '비과세 자동 판별. 장기보유특별공제 최대 80%.',
    num: '03',
    accent: 'bg-sky-400',
  },
  {
    href: '/전세-월세-계산기',
    title: '전세·월세',
    full: '전세·월세 환산기',
    desc: '전세금↔월세 환산. 대출이자 vs 월세 비교.',
    num: '04',
    accent: 'bg-violet-400',
  },
  {
    href: '/증여세-계산기',
    title: '증여세',
    full: '증여세 계산기',
    desc: '배우자 6억·자녀 5천만원 공제 자동 적용.',
    num: '05',
    accent: 'bg-rose-400',
  },
  {
    href: '/종부세-계산기',
    title: '종합부동산세',
    full: '종합부동산세 계산기',
    desc: '공시가격 기준. 고령자·장기보유 세액공제 반영.',
    num: '06',
    accent: 'bg-orange-400',
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
    color: 'bg-amber-400',
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
    color: 'bg-sky-400',
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
    color: 'bg-emerald-400',
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

        {/* 헤딩 */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-[#111111] leading-none tracking-tight mb-3">
            부동산 세금,<br />
            <span className="relative inline-block">
              직접 계산하세요.
              <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-400 -z-10 opacity-70" />
            </span>
          </h1>
          <p className="text-sm text-stone-500 font-medium">2026년 세율 기준 · 실시간 자동 계산 · 참고용</p>
        </div>

        {/* 계산기 그리드 */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {calculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="group block bg-white border-2 border-[#111111] rounded-xl p-4 sm:p-5 shadow-[4px_4px_0_0_#111111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-[10px] font-black text-[#111111] px-2 py-0.5 ${calc.accent} rounded border border-[#111111]`}>
                    {calc.num}
                  </span>
                </div>
                <p className="font-black text-[#111111] text-base leading-tight mb-1.5">{calc.title}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{calc.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 핵심 기준 위젯 */}
        <section className="mb-12">
          <div className="border-2 border-[#111111] rounded-xl overflow-hidden">
            <div className="bg-[#111111] px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-black text-white tracking-widest uppercase">2026 핵심 기준</span>
              <span className="text-[10px] text-zinc-400">지방세법 · 소득세법 기준</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x-2 divide-y-2 sm:divide-y-0 divide-[#111111] bg-white">
              {stats.map((s, i) => (
                <div key={s.label} className="p-5">
                  <p className="text-3xl font-black text-[#111111] mb-1">{s.value}</p>
                  <p className="text-xs font-bold text-stone-700 mb-0.5">{s.label}</p>
                  <p className="text-[10px] text-stone-400">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2026 변경사항 */}
        <section className="mb-12">
          <h2 className="text-xl font-black text-[#111111] mb-4 tracking-tight">2026 세금 주요 변경사항</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {changes2026.map((c) => (
              <div key={c.category} className="bg-white border-2 border-[#111111] rounded-xl overflow-hidden shadow-[3px_3px_0_0_#111111]">
                <div className={`${c.color} border-b-2 border-[#111111] px-4 py-2.5 flex items-center justify-between`}>
                  <span className="text-xs font-black text-[#111111]">{c.category}</span>
                  <span className="text-[10px] font-bold text-[#111111] opacity-60">2026</span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-black text-[#111111] mb-3">{c.title}</p>
                  <ul className="space-y-2">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-stone-600">
                        <span className="mt-1.5 w-1 h-1 bg-[#111111] rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={c.link} className="inline-block mt-4 text-[10px] font-black text-[#111111] border-b border-[#111111] hover:border-amber-500 hover:text-amber-600 transition-colors">
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
            <h2 className="text-xl font-black text-[#111111] tracking-tight">세금 가이드</h2>
            <Link href="/blog" className="text-xs font-bold text-stone-400 hover:text-[#111111] border-b border-transparent hover:border-[#111111] transition-all">전체 보기 →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {recentPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border-2 border-[#111111] rounded-xl p-4 shadow-[3px_3px_0_0_#111111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-100"
              >
                <span className="text-[10px] font-black text-stone-400 uppercase tracking-wider">{post.category}</span>
                <h3 className="mt-2 text-sm font-black text-[#111111] leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-[10px] text-stone-400 font-medium">{post.date} · {post.readTime}분</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 면책 */}
        <div className="border-t-2 border-[#111111] pt-6">
          <p className="text-xs text-stone-400 font-medium">
            본 계산기는 참고용입니다. 2026년 지방세법·소득세법 기준이며 개인 상황에 따라 실제 세액이 다를 수 있습니다.
            정확한 세액은 세무사 또는 홈택스(hometax.go.kr)를 통해 확인하세요.
          </p>
        </div>
      </div>
    </div>
  )
}
