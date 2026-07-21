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
      acceptedAnswer: {
        '@type': 'Answer',
        text: '주택 취득세는 6억 이하 1%, 6억~9억 구간 1~3%, 9억 초과 3%입니다. 2주택 조정지역 8%, 3주택 이상 12%로 중과됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '1주택자는 양도세를 안 내도 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '실거래가 12억 원 이하 1주택을 2년 이상 보유한 경우 비과세입니다. 조정대상지역은 2년 거주 요건이 추가됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '종합부동산세 대상 기준은?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1주택자는 공시가격 12억원 초과 시, 다주택자는 합산 공시가격 9억원 초과 시 종부세 과세 대상입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '증여세 공제 한도는?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '배우자 6억원, 직계비속(성인 자녀) 5천만원, 미성년 자녀 2천만원, 기타 친족 1천만원. 10년 이내 합산 적용됩니다.',
      },
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

const taxTimeline = [
  {
    phase: '살 때',
    tax: '취득세',
    deadline: '계약 후 60일 이내',
    rate: '1% ~ 12%',
    desc: '취득가액·주택 수·조정지역으로 세율 결정. 지방교육세·농특세 별도',
    borderColor: 'border-l-amber-400',
    tagClass: 'bg-amber-50 text-amber-700',
    href: '/취득세-계산기',
  },
  {
    phase: '갖는 동안',
    tax: '종합부동산세',
    deadline: '매년 12월 납부',
    rate: '공시가 12억↑',
    desc: '1주택 기준 공시가 12억 초과분 과세. 고령자·장기보유 세액공제 있음',
    borderColor: 'border-l-emerald-400',
    tagClass: 'bg-emerald-50 text-emerald-700',
    href: '/종부세-계산기',
  },
  {
    phase: '팔 때',
    tax: '양도소득세',
    deadline: '잔금일 후 2개월',
    rate: '6% ~ 45%',
    desc: '1주택 12억 이하 비과세. 장기보유공제 최대 80%. 다주택 중과 주의',
    borderColor: 'border-l-sky-400',
    tagClass: 'bg-sky-50 text-sky-700',
    href: '/양도소득세-계산기',
  },
  {
    phase: '받을 때',
    tax: '증여세',
    deadline: '증여일 후 3개월',
    rate: '10% ~ 50%',
    desc: '배우자 6억, 성인 자녀 5천만원 공제 후 과세. 10년 합산 기준',
    borderColor: 'border-l-rose-400',
    tagClass: 'bg-rose-50 text-rose-700',
    href: '/증여세-계산기',
  },
]

const calcExamples = [
  {
    label: '취득세',
    labelClass: 'bg-amber-50 text-amber-700',
    href: '/취득세-계산기',
    scenario: '아파트 6억원 · 1주택자 · 비조정지역',
    rows: [
      { name: '취득세 (1.0%)', value: '600만원' },
      { name: '지방교육세 (취득세×10%)', value: '60만원' },
    ],
    total: { name: '총 납부세액', value: '660만원' },
    note: '85㎡ 이하·6억 이하 → 농어촌특별세 면제',
  },
  {
    label: '대출 상환',
    labelClass: 'bg-emerald-50 text-emerald-700',
    href: '/대출-계산기',
    scenario: '대출 3억 · 연 4.0% · 30년 · 원리금균등',
    rows: [
      { name: '월 납입금', value: '143만원' },
      { name: '총 이자 (30년 합산)', value: '2억 1,480만원' },
    ],
    total: { name: '총 상환금액', value: '5억 1,480만원' },
    note: '원금균등 방식은 초기 납입금 높고 총 이자 더 적음',
  },
  {
    label: '증여세',
    labelClass: 'bg-rose-50 text-rose-700',
    href: '/증여세-계산기',
    scenario: '부모 → 성인 자녀 1억원 · 10년 내 최초 증여',
    rows: [
      { name: '직계비속 공제', value: '5,000만원' },
      { name: '과세표준', value: '5,000만원' },
    ],
    total: { name: '증여세 (10%)', value: '500만원' },
    note: '공제 소진 후 10년 경과 시 재적용 → 분할 증여 효과적',
  },
]

const faqs = [
  {
    q: '취득세를 줄이는 방법이 있나요?',
    a: '생애최초 주택 구입 시 최대 200만원 감면(소득 기준 있음). 85㎡ 이하는 농어촌특별세 면제. 6억 이하 1주택은 기본세율 1%가 적용됩니다.',
    link: '/blog/acquisition-tax-2026',
    accentColor: 'border-l-amber-400',
  },
  {
    q: '1주택 양도세 비과세 요건은?',
    a: '실거래가 12억원 이하 1주택을 2년 이상 보유하면 비과세입니다. 조정대상지역 취득 시 보유 기간 중 2년 거주 요건이 추가됩니다.',
    link: '/blog/one-home-nontaxable',
    accentColor: 'border-l-sky-400',
  },
  {
    q: '종부세 대상인지 어떻게 알 수 있나요?',
    a: '1주택자는 공시가격 12억원 초과 시 과세됩니다. 다주택자는 보유 주택 합산 공시가격 9억원 초과 시 대상입니다. 공동명의는 각 6억씩 공제됩니다.',
    link: '/종부세-계산기',
    accentColor: 'border-l-emerald-400',
  },
  {
    q: '증여세 공제 한도와 절세 방법은?',
    a: '배우자 6억원, 성인 자녀 5천만원, 미성년 자녀 2천만원 (10년 합산). 한도 소진 후 10년이 지나면 공제가 재적용되므로 장기 분할 증여가 유리합니다.',
    link: '/증여세-계산기',
    accentColor: 'border-l-rose-400',
  },
  {
    q: '전세와 월세 중 어느 쪽이 유리한가요?',
    a: '전세 대출이자율이 전월세 전환율(통상 3~4%)보다 낮으면 전세가 유리합니다. 다만 전세보증금 미반환 리스크도 함께 고려해야 합니다.',
    link: '/전세-월세-계산기',
    accentColor: 'border-l-orange-400',
  },
  {
    q: '다주택자 취득세 중과세율은?',
    a: '조정대상지역: 2주택 8%, 3주택 이상 12%. 비조정지역: 2주택 일반세율(1~3%), 3주택 이상 8%. 법인은 지역 무관 12%가 적용됩니다.',
    link: '/blog/adjusted-area-acquisition-tax',
    accentColor: 'border-l-amber-400',
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
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-[11px] font-semibold text-amber-700">2026 세율 자동 반영 · 무료 실시간 계산</span>
          </div>
          <h1 className="text-[2.8rem] sm:text-[4.5rem] font-black text-[#0B1623]" style={{ lineHeight: 1.05 }}>
            부동산 세금,<br />
            미리 보면<br />
            <span className="text-amber-500">달라진다.</span>
          </h1>
          <p className="mt-5 text-sm text-slate-500 max-w-sm" style={{ fontWeight: 450, letterSpacing: '-0.01em' }}>
            취득·양도·종부·증여·대출·전월세 환산까지.<br />
            2026년 세율 기준, 실시간 계산. 무료.
          </p>
        </div>

        {/* ── 계산기 그리드 ── */}
        <section className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

            {/* 01 취득세 — 앰버 피처드 */}
            <Link
              href="/취득세-계산기"
              className="col-span-2 relative overflow-hidden bg-amber-400 rounded-2xl group min-h-[220px] flex flex-col justify-between hover:bg-amber-500 transition-colors duration-200"
            >
              <svg className="absolute -right-4 -bottom-4 w-56 h-56 text-[#0B1623]/[0.07]" viewBox="0 0 200 200" fill="currentColor">
                <polygon points="100,10 182,72 165,72 165,175 115,175 115,120 85,120 85,175 35,175 35,72 18,72"/>
                <rect x="55" y="85" width="32" height="26" rx="3"/>
                <rect x="113" y="85" width="32" height="26" rx="3"/>
              </svg>
              <span className="absolute right-5 top-4 text-[100px] font-black text-[#0B1623]/[0.05] select-none leading-none">01</span>

              <div className="relative p-6 pb-0">
                <span className="inline-block bg-[#0B1623] text-amber-400 text-[10px] font-black px-2.5 py-1 rounded-lg mb-3 tracking-wider">취득세</span>
                <h2 className="text-2xl sm:text-[2rem] font-black text-[#0B1623] leading-tight">
                  집 살 때<br />내는 세금
                </h2>
                <p className="text-[11px] text-[#0B1623]/50 mt-2 font-medium">
                  취득가액 · 주택 수 · 조정지역 여부 입력 → 즉시 산출
                </p>
              </div>

              <div className="relative p-6 pt-4 flex items-end justify-between">
                <div className="flex gap-5">
                  {[['1%', '6억 이하'], ['3%', '9억 초과'], ['12%', '법인·중과']].map(([rate, label]) => (
                    <div key={label}>
                      <div className="text-xl font-black text-[#0B1623] tabular leading-none">{rate}</div>
                      <div className="text-[9px] text-[#0B1623]/50 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[#0B1623] text-sm font-bold group-hover:gap-2 transition-all duration-200">
                  바로 계산 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 02 대출 — 화이트 + 예시 미리보기 */}
            <Link
              href="/대출-계산기"
              className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl group min-h-[220px] flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-200 transition-all duration-200"
            >
              <span className="absolute right-4 top-4 text-[70px] font-black text-slate-100 select-none leading-none">02</span>

              <div className="relative p-5">
                <span className="text-[10px] font-bold text-emerald-600 tracking-wider block mb-3">대출 상환</span>
                <h2 className="text-xl font-black text-[#0B1623] leading-snug">
                  매달<br />얼마씩?
                </h2>
                <div className="mt-4 bg-emerald-50 rounded-xl p-3">
                  <p className="text-[10px] text-emerald-600 font-medium">3억 · 4.0% · 30년</p>
                  <p className="text-xl font-black text-[#0B1623] mt-1 tabular">
                    143만원<span className="text-xs font-medium text-slate-400 ml-1">/월</span>
                  </p>
                </div>
              </div>

              <div className="relative p-5 pt-0">
                <p className="text-[10px] text-slate-400 mb-3">원리금균등 · 원금균등 · 만기일시</p>
                <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm group-hover:gap-2 transition-all">
                  월 상환 확인 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 03 양도소득세 — 화이트 */}
            <Link
              href="/양도소득세-계산기"
              className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl group hover:-translate-y-0.5 hover:shadow-md hover:border-sky-200 transition-all duration-200"
            >
              <div className="h-0.5 bg-sky-400" />
              <span className="absolute right-3 top-4 text-[60px] font-black text-slate-100 select-none leading-none">03</span>
              <div className="p-4 sm:p-5">
                <span className="text-[10px] font-bold text-sky-600 tracking-wider block mb-2">양도소득세</span>
                <h2 className="text-base font-black text-[#0B1623] leading-snug">팔기 전<br />세금 확인</h2>
                <div className="mt-3 space-y-1.5">
                  {['1주택 12억 이하 비과세', '장특공제 최대 80%', '비과세 여부 자동 판별'].map(t => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-sky-400 flex-shrink-0" />
                      <span className="text-[10px] text-slate-500">{t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sky-600 text-xs font-bold group-hover:gap-1.5 transition-all">
                  세액 확인 →
                </div>
              </div>
            </Link>

            {/* 04 전세·월세 — 화이트 */}
            <Link
              href="/전세-월세-계산기"
              className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl group hover:-translate-y-0.5 hover:shadow-md hover:border-orange-200 transition-all duration-200"
            >
              <div className="h-0.5 bg-orange-400" />
              <span className="absolute right-3 top-4 text-[60px] font-black text-slate-100 select-none leading-none">04</span>
              <div className="p-4 sm:p-5">
                <span className="text-[10px] font-bold text-orange-500 tracking-wider block mb-2">전세·월세</span>
                <h2 className="text-base font-black text-[#0B1623] leading-snug">전세 vs 월세<br />어느 쪽?</h2>
                <div className="mt-3 space-y-1.5">
                  {['전세금↔월세 자동 환산', '이자 vs 월세 실질 비교', '전월세 전환율 반영'].map(t => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                      <span className="text-[10px] text-slate-500">{t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-orange-500 text-xs font-bold group-hover:gap-1.5 transition-all">
                  비교 →
                </div>
              </div>
            </Link>

            {/* 05 증여세 — 화이트 */}
            <Link
              href="/증여세-계산기"
              className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl group hover:-translate-y-0.5 hover:shadow-md hover:border-rose-200 transition-all duration-200"
            >
              <div className="h-0.5 bg-rose-400" />
              <span className="absolute right-3 top-4 text-[60px] font-black text-slate-100 select-none leading-none">05</span>
              <div className="p-4 sm:p-5">
                <span className="text-[10px] font-bold text-rose-500 tracking-wider block mb-2">증여세</span>
                <h2 className="text-base font-black text-[#0B1623] leading-snug">받기 전<br />세금 먼저</h2>
                <div className="mt-3 space-y-1.5">
                  {['배우자 6억 공제', '자녀 5천만원 공제', '10년 합산 자동 반영'].map(t => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-rose-400 flex-shrink-0" />
                      <span className="text-[10px] text-slate-500">{t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1 text-rose-500 text-xs font-bold group-hover:gap-1.5 transition-all">
                  세액 확인 →
                </div>
              </div>
            </Link>

            {/* 06 종부세 — 다크 네이비 피처드 */}
            <Link
              href="/종부세-계산기"
              className="col-span-2 relative overflow-hidden bg-[#0B1623] rounded-2xl group hover:bg-[#0f2035] transition-colors duration-200"
            >
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
                <rect x="22" y="65" width="7" height="5" fill="white" opacity="0.5"/>
                <rect x="32" y="65" width="7" height="5" fill="white" opacity="0.3"/>
                <rect x="22" y="76" width="7" height="5" fill="white" opacity="0.3"/>
                <rect x="32" y="76" width="7" height="5" fill="white" opacity="0.5"/>
                <rect x="56" y="45" width="7" height="5" fill="white" opacity="0.4"/>
                <rect x="125" y="28" width="7" height="5" fill="white" opacity="0.5"/>
                <rect x="137" y="28" width="7" height="5" fill="white" opacity="0.3"/>
                <rect x="188" y="38" width="8" height="6" fill="white" opacity="0.4"/>
                <rect x="202" y="38" width="8" height="6" fill="white" opacity="0.5"/>
                <rect x="261" y="42" width="7" height="5" fill="white" opacity="0.4"/>
                <rect x="272" y="42" width="7" height="5" fill="white" opacity="0.3"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1623] via-[#0B1623]/90 to-transparent pointer-events-none" />
              <span className="absolute right-5 top-4 text-[80px] font-black text-white/[0.04] select-none leading-none">06</span>

              <div className="relative p-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 block mb-2">종합부동산세</span>
                  <h2 className="text-xl font-black text-white leading-snug">갖고 있으면<br />과세된다</h2>
                  <p className="text-xs text-white/40 mt-1.5">공시가 12억↑ · 고령자·장기보유 세액공제 최대 80%</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-1 text-amber-400 font-bold text-sm group-hover:gap-2 transition-all pr-2">
                  종부세 확인 <span>→</span>
                </div>
              </div>
            </Link>

            {/* 핵심기준 위젯 */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-[9px] font-bold text-slate-400 tracking-widest uppercase mb-4">2026 기준선</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                {[
                  { label: '취득세 기본세율', value: '1%', sub: '6억 이하 1주택' },
                  { label: '1주택 종부세 공제', value: '12억', sub: '공시가격 기준' },
                  { label: '양도세 비과세', value: '12억', sub: '1주택 실거래가' },
                  { label: '배우자 증여 공제', value: '6억', sub: '10년 합산 한도' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-xl font-black text-amber-500 leading-none tabular">{s.value}</div>
                    <div className="text-[9px] text-slate-600 mt-1 leading-tight font-medium">{s.label}</div>
                    <div className="text-[8px] text-slate-400 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── 언제, 무슨 세금을? ── */}
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">언제, 무슨 세금을?</h2>
            <span className="text-[10px] text-slate-400">부동산 거래 흐름</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {taxTimeline.map((t, i) => (
              <Link
                key={t.tax}
                href={t.href}
                className={`group rounded-2xl p-4 bg-white ring-1 ring-slate-200 border-l-4 ${t.borderColor} hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`}
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="text-[10px] font-black text-slate-300">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${t.tagClass}`}>{t.phase}</span>
                </div>
                <p className="text-sm font-black text-[#0B1623] leading-tight">{t.tax}</p>
                <p className="text-[11px] font-bold text-slate-400 mt-0.5 mb-2 tabular">{t.rate}</p>
                <p className="text-[10px] text-slate-400 leading-relaxed mb-2">{t.desc}</p>
                <p className="text-[9px] text-slate-300 font-medium border-t border-slate-100 pt-2">{t.deadline}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 실제 계산 결과 예시 ── */}
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">실제 계산 결과</h2>
            <span className="text-[10px] text-slate-400">참고용 예시</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {calcExamples.map((ex) => (
              <div key={ex.label} className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <div className="bg-slate-50 border-b border-slate-100 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ex.labelClass}`}>{ex.label}</span>
                    <Link href={ex.href} className="text-[10px] text-amber-600 font-semibold hover:text-amber-700">
                      직접 계산 →
                    </Link>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{ex.scenario}</p>
                </div>
                <div className="p-4">
                  <div className="space-y-2.5 mb-3">
                    {ex.rows.map((row) => (
                      <div key={row.name} className="flex items-baseline justify-between">
                        <span className="text-[11px] text-slate-400">{row.name}</span>
                        <span className="text-xs font-semibold text-slate-600 tabular">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex items-baseline justify-between">
                    <span className="text-xs font-bold text-[#0B1623]">{ex.total.name}</span>
                    <span className="text-lg font-black text-amber-500 tabular">{ex.total.value}</span>
                  </div>
                  <p className="text-[9px] text-slate-400 mt-2 leading-relaxed">{ex.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdBanner slot="home-mid" className="my-8" />

        {/* ── 올해 달라진 것 ── */}
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">올해 달라진 것</h2>
            <span className="text-[10px] text-slate-400">지방세법 · 소득세법</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {changes2026.map((c) => (
              <div key={c.category} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className={`h-0.5 ${c.barColor}`} />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.tagStyle}`}>{c.category}</span>
                    <span className="text-[10px] text-slate-300">2026</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={c.link} className="text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                    더 읽기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 자주 묻는 질문 ── */}
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">자주 묻는 질문</h2>
            <span className="text-[10px] text-slate-400">부동산 세금 Q&A</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className={`bg-white border border-slate-200 border-l-4 ${faq.accentColor} rounded-2xl p-4 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200`}
              >
                <p className="text-sm font-bold text-[#0B1623] mb-2 leading-snug">{faq.q}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{faq.a}</p>
                <Link href={faq.link} className="text-[10px] font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                  자세히 →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── 세금 해설 ── */}
        <section className="mb-10">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-xl font-bold text-[#0B1623] tracking-tight">세금 해설</h2>
            <Link href="/blog" className="text-xs font-semibold text-slate-400 hover:text-amber-600 transition-colors">전체 보기 →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                <span className="text-amber-400 text-xs font-bold group-hover:translate-x-0.5 transition-transform">전문 →</span>
              </div>
            </Link>

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
        <div className="border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-400">
            참고용 계산기입니다. 2026년 지방세법·소득세법 기준이며, 실제 세액은 개인 상황에 따라 다릅니다.
            정확한 수치는 세무사 또는 홈택스(hometax.go.kr)에서 검증하세요.
          </p>
        </div>

      </div>
    </div>
  )
}
