import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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

        {/* 헤딩 */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-3 py-1 mb-5">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-[11px] font-semibold text-amber-700">2026년 최신 세율 자동 반영 · 실시간 계산</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0B1623] leading-tight tracking-tight">
            부동산 세금,<br />
            이제 직접<br />
            <span className="text-amber-500">확인하세요.</span>
          </h1>
          <p className="mt-4 text-sm text-slate-500 font-medium">취득세·양도세·종부세·증여세·대출·전월세 환산 무료 계산 · 참고용</p>
        </div>

        {/* ── 비토 계산기 그리드 ── */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

            {/* 01 취득세 — hero card (2/3 width) */}
            <Link
              href="/취득세-계산기"
              className="col-span-2 relative overflow-hidden bg-[#0B1623] rounded-2xl group min-h-[220px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              {/* 일러스트 */}
              <div className="absolute -right-6 -bottom-4 w-[220px] h-[190px] select-none pointer-events-none">
                <Image src="/images/illus-house.svg" alt="" width={220} height={190} className="w-full h-full object-contain" />
              </div>
              {/* 배경 그라디언트 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1623] via-[#0B1623] to-transparent opacity-70" />

              {/* 번호 워터마크 */}
              <span className="absolute right-5 top-5 text-[80px] font-black text-white/[0.04] select-none leading-none">01</span>

              <div className="relative p-6 pb-0">
                <span className="inline-block bg-amber-400 text-[#0B1623] text-[10px] font-black px-2.5 py-0.5 rounded-md mb-3 tracking-wide">
                  취득세
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                  주택 구매 시<br />납부하는 세금
                </h2>
              </div>

              <div className="relative p-6 pt-5 flex items-end justify-between">
                <div className="flex gap-5">
                  {[['1%', '6억 이하'], ['3%', '9억 초과'], ['12%', '법인·중과']].map(([rate, label]) => (
                    <div key={label}>
                      <div className="text-xl font-black text-amber-400 leading-none">{rate}</div>
                      <div className="text-[9px] text-white/40 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-amber-400 text-sm font-bold group-hover:gap-2 transition-all duration-200">
                  계산하기 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 02 대출 — emerald, 1/3 width */}
            <Link
              href="/대출-계산기"
              className="relative overflow-hidden bg-emerald-600 rounded-2xl group min-h-[220px] flex flex-col justify-between hover:bg-emerald-700 transition-colors duration-200"
            >
              <div className="absolute inset-x-0 bottom-0 h-[120px] select-none pointer-events-none">
                <Image src="/images/illus-loan.svg" alt="" width={240} height={120} className="w-full h-full object-cover object-bottom" />
              </div>
              <span className="absolute right-4 top-4 text-[70px] font-black text-white/[0.06] select-none leading-none">02</span>

              <div className="p-5">
                <span className="text-[10px] font-bold text-white/60 block mb-3">대출 상환</span>
                <h2 className="text-xl font-black text-white leading-snug">
                  월 납입금<br />계산하기
                </h2>
              </div>

              <div className="relative p-5 pt-0">
                <p className="text-xs text-white/55 mb-3">원리금균등 · 원금균등 · 만기일시</p>
                <span className="flex items-center gap-1 text-white font-bold text-sm group-hover:gap-2 transition-all">
                  계산하기 <span>→</span>
                </span>
              </div>
            </Link>

            {/* 03 양도소득세 */}
            <Link
              href="/양도소득세-계산기"
              className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl group hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(14,165,233,0.12)] hover:border-sky-200 transition-all duration-200"
            >
              <div className="absolute -right-3 -bottom-3 w-[120px] h-[100px] pointer-events-none select-none">
                <Image src="/images/illus-transfer.svg" alt="" width={120} height={100} className="w-full h-full object-contain" />
              </div>
              <span className="absolute right-4 top-4 text-[60px] font-black text-slate-100 select-none leading-none">03</span>
              <div className="p-5">
                <span className="text-[10px] font-bold text-sky-500 block mb-2">양도소득세</span>
                <h2 className="text-base font-black text-[#0B1623] leading-snug">팔 때<br />내는 세금</h2>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">비과세 자동판별<br />장기보유특별공제 최대 80%</p>
                <div className="mt-4 flex items-center gap-1 text-sky-500 text-xs font-bold group-hover:gap-1.5 transition-all">
                  계산하기 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 04 전세·월세 */}
            <Link
              href="/전세-월세-계산기"
              className="relative overflow-hidden bg-amber-50 border border-amber-100 rounded-2xl group hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(217,119,6,0.10)] hover:border-amber-300 transition-all duration-200"
            >
              <div className="absolute -right-3 -bottom-3 w-[120px] h-[100px] pointer-events-none select-none">
                <Image src="/images/illus-rent.svg" alt="" width={120} height={100} className="w-full h-full object-contain" />
              </div>
              <span className="absolute right-4 top-4 text-[60px] font-black text-amber-100 select-none leading-none">04</span>
              <div className="p-5">
                <span className="text-[10px] font-bold text-amber-600 block mb-2">전세·월세</span>
                <h2 className="text-base font-black text-[#0B1623] leading-snug">전월세<br />환산기</h2>
                <p className="text-xs text-amber-700/60 mt-3 leading-relaxed">전세금↔월세 환산<br />이자 vs 월세 자동 비교</p>
                <div className="mt-4 flex items-center gap-1 text-amber-600 text-xs font-bold group-hover:gap-1.5 transition-all">
                  계산하기 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 05 증여세 */}
            <Link
              href="/증여세-계산기"
              className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl group hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(244,63,94,0.10)] hover:border-rose-200 transition-all duration-200"
            >
              <div className="absolute -right-3 -bottom-3 w-[110px] h-[100px] pointer-events-none select-none">
                <Image src="/images/illus-gift.svg" alt="" width={110} height={100} className="w-full h-full object-contain" />
              </div>
              <span className="absolute right-4 top-4 text-[60px] font-black text-slate-100 select-none leading-none">05</span>
              <div className="p-5">
                <span className="text-[10px] font-bold text-rose-500 block mb-2">증여세</span>
                <h2 className="text-base font-black text-[#0B1623] leading-snug">받을 때<br />내는 세금</h2>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">배우자 6억<br />자녀 5천만원 공제</p>
                <div className="mt-4 flex items-center gap-1 text-rose-500 text-xs font-bold group-hover:gap-1.5 transition-all">
                  계산하기 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 06 종부세 — wide (2/3) */}
            <Link
              href="/종부세-계산기"
              className="col-span-2 relative overflow-hidden bg-[#0B1623] rounded-2xl group hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-y-0 right-0 w-[320px] pointer-events-none select-none">
                <Image src="/images/illus-comprehensive.svg" alt="" width={320} height={160} className="w-full h-full object-cover object-right" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1623] via-[#0B1623]/80 to-transparent" />
              <span className="absolute right-4 top-4 text-[70px] font-black text-white/[0.04] select-none leading-none">06</span>

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

            {/* 핵심 기준 미니 위젯 */}
            <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <p className="text-[9px] font-bold text-slate-400 tracking-widest uppercase mb-4">2026 핵심 기준</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                {stats.map(s => (
                  <div key={s.label}>
                    <div className="text-xl font-black text-amber-500 leading-none">{s.value}</div>
                    <div className="text-[9px] text-slate-500 mt-1 leading-tight">{s.label}</div>
                    <div className="text-[8px] text-slate-400 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <AdBanner slot="home-mid" className="my-8" />

        {/* 2026 변경사항 */}
        <section className="mb-12">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">2026 주요 변경사항</h2>
            <span className="text-[10px] text-slate-400 font-medium">지방세법 · 소득세법 기준</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {changes2026.map((c) => (
              <div key={c.category} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
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

        {/* 최근 블로그 */}
        <section className="mb-10">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">세금 가이드</h2>
            <Link href="/blog" className="text-xs font-semibold text-slate-400 hover:text-amber-600 transition-colors">전체 보기 →</Link>
          </div>

          {/* Featured post + 2 small */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* 첫 번째 포스트 - 넓게 */}
            <Link
              href={`/blog/${recentPosts[0].slug}`}
              className="sm:col-span-2 group bg-[#0B1623] rounded-2xl p-5 hover:shadow-xl transition-all duration-200 min-h-[130px] flex flex-col justify-between"
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
                  className="group bg-white border border-slate-200 rounded-2xl p-4 hover:-translate-y-0.5 hover:shadow-md hover:border-amber-200 transition-all duration-200 flex-1"
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
