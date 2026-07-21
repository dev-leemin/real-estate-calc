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

const changes2026 = [
  {
    category: '취득세',
    barColor: 'bg-amber-400',
    tagStyle: 'bg-amber-50 text-amber-700',
    items: ['생애최초 감면 200만원 유지', '다주택자 조정지역 8~12% 중과', '법인 취득세 12% 동일'],
    link: '/blog/acquisition-tax-2026',
  },
  {
    category: '양도소득세',
    barColor: 'bg-sky-400',
    tagStyle: 'bg-sky-50 text-sky-700',
    items: ['1주택 비과세 12억 이하 유지', '조정지역 2년 거주 요건 존속', '다주택자 중과 한시배제 종료'],
    link: '/blog/one-home-nontaxable',
  },
  {
    category: '대출 규제',
    barColor: 'bg-emerald-400',
    tagStyle: 'bg-emerald-50 text-emerald-700',
    items: ['DSR 2단계 — 은행권 40%', 'LTV 70% (조정지역 60%)', '전세자금대출 DSR 포함 검토'],
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

        {/* ── 히어로 ── */}
        <div className="mb-10 relative">
          {/* 2026 그라디언트 오브 */}
          <div className="absolute -top-8 -right-8 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-8 w-56 h-56 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-full px-3 py-1 mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-[11px] font-semibold text-amber-700">2026년 최신 세율 자동 반영 · 실시간 계산</span>
            </div>
            <h1 className="text-[2.8rem] sm:text-[4rem] font-black text-[#0B1623]">
              부동산 세금,<br />
              이제 직접<br />
              <span className="text-amber-500">확인하세요.</span>
            </h1>
            <p className="mt-4 text-sm text-slate-500" style={{ fontWeight: 450, letterSpacing: '-0.01em' }}>
              취득세·양도세·종부세·증여세·대출·전월세 환산 무료 계산 · 참고용
            </p>
          </div>
        </div>

        {/* ── 비토 계산기 그리드 ── */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

            {/* 01 취득세 — 앰버, 2/3 */}
            <Link
              href="/취득세-계산기"
              className="col-span-2 relative overflow-hidden bg-amber-400 rounded-2xl group min-h-[220px] flex flex-col justify-between hover:bg-amber-500 transition-colors duration-200"
            >
              {/* 배경 house SVG */}
              <svg className="absolute -right-4 -bottom-4 w-56 h-56 text-[#0B1623]/10" viewBox="0 0 200 200" fill="currentColor">
                <polygon points="100,10 182,72 165,72 165,175 115,175 115,120 85,120 85,175 35,175 35,72 18,72"/>
                <rect x="55" y="85" width="32" height="26" rx="3"/>
                <rect x="113" y="85" width="32" height="26" rx="3"/>
              </svg>
              {/* 번호 워터마크 */}
              <span className="absolute right-5 top-4 text-[90px] font-black text-[#0B1623]/[0.06] select-none leading-none">01</span>

              <div className="relative p-6 pb-0">
                <span className="inline-block bg-[#0B1623] text-amber-400 text-[10px] font-black px-2.5 py-1 rounded-lg mb-3 tracking-wider">
                  취득세
                </span>
                <h2 className="text-2xl sm:text-[1.9rem] font-black text-[#0B1623] leading-snug">
                  주택 구매 시<br />납부하는 세금
                </h2>
              </div>

              <div className="relative p-6 pt-4 flex items-end justify-between">
                <div className="flex gap-5">
                  {[['1%', '6억 이하'], ['3%', '9억 초과'], ['12%', '법인·중과']].map(([rate, label]) => (
                    <div key={label}>
                      <div className="text-xl font-black text-[#0B1623] leading-none">{rate}</div>
                      <div className="text-[9px] text-[#0B1623]/50 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[#0B1623] text-sm font-bold group-hover:gap-2 transition-all duration-200">
                  계산하기 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 02 대출 — 에메랄드, 1/3 */}
            <Link
              href="/대출-계산기"
              className="relative overflow-hidden bg-emerald-500 rounded-2xl group min-h-[220px] flex flex-col justify-between hover:bg-emerald-600 transition-colors duration-200"
            >
              {/* 배경 graph SVG */}
              <svg className="absolute bottom-0 left-0 right-0 h-28 text-white/20" viewBox="0 0 200 112" preserveAspectRatio="none" fill="currentColor">
                <path d="M0 90 Q25 78 45 82 Q70 88 90 60 Q110 32 130 40 Q158 52 175 20 L200 18 L200 112 L0 112 Z"/>
              </svg>
              <span className="absolute right-4 top-4 text-[80px] font-black text-white/[0.07] select-none leading-none">02</span>

              <div className="relative p-5">
                <span className="text-[10px] font-bold text-white/60 block mb-3">대출 상환</span>
                <h2 className="text-xl font-black text-white leading-snug">
                  월 납입금<br />계산하기
                </h2>
              </div>

              <div className="relative p-5 pt-0">
                <p className="text-xs text-white/55 mb-3">원리금균등 · 원금균등 · 만기일시</p>
                <div className="flex items-center gap-1 text-white font-bold text-sm group-hover:gap-2 transition-all">
                  계산하기 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 03 양도소득세 — 스카이블루 */}
            <Link
              href="/양도소득세-계산기"
              className="relative overflow-hidden bg-sky-600 rounded-2xl group hover:bg-sky-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* bar chart SVG */}
              <svg className="absolute right-3 bottom-3 w-20 h-16 text-white/20" viewBox="0 0 80 64" fill="currentColor">
                <rect x="2" y="42" width="14" height="22" rx="2"/>
                <rect x="22" y="28" width="14" height="36" rx="2"/>
                <rect x="42" y="14" width="14" height="50" rx="2"/>
                <rect x="62" y="4" width="14" height="60" rx="2"/>
              </svg>
              <span className="absolute right-4 top-4 text-[64px] font-black text-white/[0.06] select-none leading-none">03</span>
              <div className="p-4 sm:p-5">
                <span className="text-[10px] font-bold text-white/60 block mb-2">양도소득세</span>
                <h2 className="text-base font-black text-white leading-snug">팔 때<br />내는 세금</h2>
                <p className="text-xs text-white/55 mt-3 leading-relaxed">비과세 자동판별<br />장기보유특별공제 최대 80%</p>
                <div className="mt-4 flex items-center gap-1 text-white text-xs font-bold group-hover:gap-1.5 transition-all">
                  계산하기 →
                </div>
              </div>
            </Link>

            {/* 04 전세·월세 — 오렌지 */}
            <Link
              href="/전세-월세-계산기"
              className="relative overflow-hidden bg-orange-500 rounded-2xl group hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* exchange SVG */}
              <svg className="absolute right-3 bottom-3 w-20 h-14 text-white/20" viewBox="0 0 80 56" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18 H74 M74 18 L60 6 M6 38 H74 M6 38 L20 50"/>
              </svg>
              <span className="absolute right-4 top-4 text-[64px] font-black text-white/[0.06] select-none leading-none">04</span>
              <div className="p-4 sm:p-5">
                <span className="text-[10px] font-bold text-white/60 block mb-2">전세·월세</span>
                <h2 className="text-base font-black text-white leading-snug">전월세<br />환산기</h2>
                <p className="text-xs text-white/55 mt-3 leading-relaxed">전세금↔월세 환산<br />이자 vs 월세 자동 비교</p>
                <div className="mt-4 flex items-center gap-1 text-white text-xs font-bold group-hover:gap-1.5 transition-all">
                  계산하기 →
                </div>
              </div>
            </Link>

            {/* 05 증여세 — 로즈 */}
            <Link
              href="/증여세-계산기"
              className="relative overflow-hidden bg-rose-500 rounded-2xl group hover:bg-rose-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* heart SVG */}
              <svg className="absolute right-3 bottom-3 w-20 h-18 text-white/20" viewBox="0 0 80 72" fill="currentColor">
                <path d="M40 68 C18 52 4 42 4 24 C4 12 13 4 24 8 C31 11 37 17 40 22 C43 17 49 11 56 8 C67 4 76 12 76 24 C76 42 62 52 40 68Z"/>
              </svg>
              <span className="absolute right-4 top-4 text-[64px] font-black text-white/[0.06] select-none leading-none">05</span>
              <div className="p-4 sm:p-5">
                <span className="text-[10px] font-bold text-white/60 block mb-2">증여세</span>
                <h2 className="text-base font-black text-white leading-snug">받을 때<br />내는 세금</h2>
                <p className="text-xs text-white/55 mt-3 leading-relaxed">배우자 6억<br />자녀 5천만원 공제</p>
                <div className="mt-4 flex items-center gap-1 text-white text-xs font-bold group-hover:gap-1.5 transition-all">
                  계산하기 →
                </div>
              </div>
            </Link>

            {/* 06 종부세 — 다크 네이비, 2/3 */}
            <Link
              href="/종부세-계산기"
              className="col-span-2 relative overflow-hidden bg-[#0B1623] rounded-2xl group hover:bg-[#0f2035] transition-colors duration-200"
            >
              {/* city skyline SVG */}
              <svg className="absolute right-0 bottom-0 h-full w-auto text-amber-400/15" viewBox="0 0 320 140" fill="currentColor" preserveAspectRatio="xMaxYMax meet">
                <rect x="15" y="55" width="30" height="85"/>
                <rect x="50" y="35" width="22" height="105"/>
                <rect x="78" y="48" width="34" height="92"/>
                <rect x="118" y="18" width="28" height="122"/>
                <rect x="152" y="42" width="22" height="98"/>
                <rect x="180" y="28" width="36" height="112"/>
                <rect x="222" y="50" width="26" height="90"/>
                <rect x="254" y="32" width="30" height="108"/>
                <rect x="290" y="60" width="28" height="80"/>
                {/* windows */}
                <rect x="22" y="65" width="7" height="5" fill="white" opacity="0.5"/>
                <rect x="32" y="65" width="7" height="5" fill="white" opacity="0.3"/>
                <rect x="22" y="76" width="7" height="5" fill="white" opacity="0.3"/>
                <rect x="32" y="76" width="7" height="5" fill="white" opacity="0.5"/>
                <rect x="56" y="45" width="7" height="5" fill="white" opacity="0.4"/>
                <rect x="125" y="28" width="7" height="5" fill="white" opacity="0.5"/>
                <rect x="137" y="28" width="7" height="5" fill="white" opacity="0.3"/>
                <rect x="125" y="40" width="7" height="5" fill="white" opacity="0.3"/>
                <rect x="188" y="38" width="8" height="6" fill="white" opacity="0.4"/>
                <rect x="202" y="38" width="8" height="6" fill="white" opacity="0.5"/>
                <rect x="188" y="52" width="8" height="6" fill="white" opacity="0.3"/>
                <rect x="261" y="42" width="7" height="5" fill="white" opacity="0.4"/>
                <rect x="272" y="42" width="7" height="5" fill="white" opacity="0.3"/>
              </svg>
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1623] via-[#0B1623]/90 to-transparent pointer-events-none" />
              <span className="absolute right-5 top-4 text-[80px] font-black text-white/[0.04] select-none leading-none">06</span>

              <div className="relative p-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 block mb-2">종합부동산세</span>
                  <h2 className="text-xl font-black text-white leading-snug">보유 중 내는 세금</h2>
                  <p className="text-xs text-white/40 mt-1.5">공시가격 기준 · 고령자·장기보유 세액공제 반영</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-1 text-amber-400 font-bold text-sm group-hover:gap-2 transition-all pr-2">
                  계산하기 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 핵심기준 위젯 — 글래스모피즘 */}
            <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur-md p-5">
              {/* 서브틀 그라디언트 */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-sky-50/60 rounded-2xl pointer-events-none" />
              <div className="relative">
                <p className="text-[9px] font-bold text-slate-400 tracking-widest uppercase mb-4">2026 핵심 기준</p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                  {[
                    { label: '취득세 기본세율', value: '1%', sub: '6억 이하 1주택' },
                    { label: '1주택 종부세 공제', value: '12억', sub: '공시가격 기준' },
                    { label: '양도세 비과세', value: '12억', sub: '1주택 실거래가' },
                    { label: '배우자 증여 공제', value: '6억', sub: '10년 합산 한도' },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="text-xl font-black text-amber-500 leading-none">{s.value}</div>
                      <div className="text-[9px] text-slate-600 mt-1 leading-tight font-medium">{s.label}</div>
                      <div className="text-[8px] text-slate-400 mt-0.5">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        <AdBanner slot="home-mid" className="my-8" />

        {/* ── 2026 변경사항 ── */}
        <section className="mb-12">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">2026 주요 변경사항</h2>
            <span className="text-[10px] text-slate-400">지방세법 · 소득세법 기준</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {changes2026.map((c) => (
              <div key={c.category} className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className={`h-1 ${c.barColor}`} />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.tagStyle}`}>{c.category}</span>
                    <span className="text-[10px] text-slate-400">2026</span>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
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

        {/* ── 블로그 ── */}
        <section className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">세금 가이드</h2>
            <Link href="/blog" className="text-xs font-semibold text-slate-400 hover:text-amber-600 transition-colors">전체 보기 →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* 첫 번째 포스트 — 와이드 피처드 */}
            <Link
              href={`/blog/${recentPosts[0].slug}`}
              className="sm:col-span-2 group bg-[#0B1623] rounded-2xl p-5 hover:bg-[#0f2035] transition-colors duration-200 min-h-[130px] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{recentPosts[0].category}</span>
                <h3 className="mt-2 text-base sm:text-lg font-black text-white leading-snug line-clamp-2 group-hover:text-amber-400 transition-colors">
                  {recentPosts[0].title}
                </h3>
                <p className="mt-2 text-xs text-white/40 leading-relaxed line-clamp-2">{recentPosts[0].description}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[10px] text-white/30">{recentPosts[0].date} · {recentPosts[0].readTime}분</p>
                <span className="text-amber-400 text-xs font-bold group-hover:translate-x-0.5 transition-transform">읽기 →</span>
              </div>
            </Link>

            {/* 나머지 2개 */}
            <div className="flex flex-col gap-3">
              {recentPosts.slice(1, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 hover:-translate-y-0.5 hover:shadow-md hover:border-amber-200 transition-all duration-200 flex-1"
                >
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{post.category}</span>
                  <h3 className="mt-1.5 text-xs font-bold text-[#0B1623] leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-[9px] text-slate-400">{post.date} · {post.readTime}분</p>
                </Link>
              ))}
            </div>
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
