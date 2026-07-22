import type { Metadata } from 'next'
import Link from 'next/link'
import NoticeCarousel from '@/components/NoticeCarousel'
import AdBanner from '@/components/AdBanner'
import FadeIn from '@/components/FadeIn'
import MiniAcquisitionCalc from '@/components/MiniAcquisitionCalc'
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

const calculators = [
  {
    num: '01',
    name: '취득세 계산기',
    desc: '1주택 1%, 2주택 조정지역 8%. 주택 수에 따라 세율이 크게 달라진다',
    rate: '1 – 12%',
    href: '/취득세-계산기',
  },
  {
    num: '02',
    name: '대출 상환 계산기',
    desc: '3억 빌리면 매달 얼마? 이자 총액은? 30년 상환 스케줄로 확인',
    rate: '월 납입금',
    href: '/대출-계산기',
  },
  {
    num: '03',
    name: '양도소득세 계산기',
    desc: '1주택 12억 이하 비과세. 팔기 전, 얼마가 나오는지 미리 본다',
    rate: '6 – 45%',
    href: '/양도소득세-계산기',
  },
  {
    num: '04',
    name: '전세·월세 환산기',
    desc: '전세 이자 vs 월세 — 숫자로 따지면 어느 쪽이 실제로 싼가',
    rate: '전환율',
    href: '/전세-월세-계산기',
  },
  {
    num: '05',
    name: '증여세 계산기',
    desc: '자녀 5천만원 공제, 배우자 6억. 나눠 줄수록 세금이 줄어든다',
    rate: '10 – 50%',
    href: '/증여세-계산기',
  },
  {
    num: '06',
    name: '종합부동산세 계산기',
    desc: '공시가 12억 넘으면 매년 나온다. 고령자·장기보유 공제도 반영',
    rate: '공시가 12억↑',
    href: '/종부세-계산기',
  },
]

const stats2026 = [
  { value: '1%', label: '취득세 기본세율', sub: '6억 이하 1주택' },
  { value: '12억', label: '1주택 종부세 공제', sub: '공시가격 기준' },
  { value: '12억', label: '양도세 비과세 기준', sub: '1주택 실거래가' },
  { value: '6억', label: '배우자 증여공제', sub: '10년 합산 한도' },
]

const statsBorderClass = [
  'border-r border-b border-amber-200/60 sm:border-b-0',
  'border-b border-amber-200/60 sm:border-b-0 sm:border-r sm:border-amber-200/60',
  'border-r border-amber-200/60',
  '',
]

const taxTimeline = [
  {
    phase: '살 때',
    tax: '취득세',
    deadline: '계약 후 60일 이내',
    rate: '1% – 12%',
    desc: '취득가액·주택 수·조정지역으로 세율 결정. 지방교육세·농특세 별도 부과.',
    href: '/취득세-계산기',
  },
  {
    phase: '갖는 동안',
    tax: '종합부동산세',
    deadline: '매년 12월 납부',
    rate: '공시가 12억 초과',
    desc: '1주택 기준 공시가 12억 초과분 과세. 고령자·장기보유 세액공제 최대 80%.',
    href: '/종부세-계산기',
  },
  {
    phase: '팔 때',
    tax: '양도소득세',
    deadline: '잔금일 후 2개월',
    rate: '6% – 45%',
    desc: '1주택 12억 이하 비과세. 장기보유특별공제 최대 80%. 다주택 중과 주의.',
    href: '/양도소득세-계산기',
  },
  {
    phase: '받을 때',
    tax: '증여세',
    deadline: '증여일 후 3개월',
    rate: '10% – 50%',
    desc: '배우자 6억, 성인 자녀 5천만원 공제 후 과세. 10년 합산 기준으로 계산.',
    href: '/증여세-계산기',
  },
]

const calcExamples = [
  {
    label: '취득세',
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
    href: '/대출-계산기',
    scenario: '대출 3억 · 연 4.0% · 30년 · 원리금균등',
    rows: [
      { name: '월 납입금', value: '143만원' },
      { name: '총 이자 (30년 합산)', value: '2억 1,480만원' },
    ],
    total: { name: '총 상환금액', value: '5억 1,480만원' },
    note: '원금균등 방식은 초기 납입금이 높고 총 이자가 더 적음',
  },
  {
    label: '증여세',
    href: '/증여세-계산기',
    scenario: '부모 → 성인 자녀 1억원 · 10년 내 최초 증여',
    rows: [
      { name: '직계비속 공제', value: '5,000만원' },
      { name: '과세표준', value: '5,000만원' },
    ],
    total: { name: '증여세 (10%)', value: '500만원' },
    note: '공제 소진 후 10년 경과 시 재적용 → 장기 분할 증여 효과',
  },
]

const changes2026 = [
  {
    category: '취득세',
    items: [
      '생애최초 주택 취득세 감면 200만원 유지',
      '다주택자 조정지역 8~12% 중과 지속',
      '법인 취득세 12% 동일',
    ],
    link: '/blog/acquisition-tax-2026',
  },
  {
    category: '양도소득세',
    items: [
      '1주택 비과세 기준 12억 이하 유지',
      '조정지역 취득 시 2년 거주 요건 존속',
      '다주택자 중과 한시배제 종료',
    ],
    link: '/blog/one-home-nontaxable',
  },
  {
    category: '대출 규제',
    items: [
      'DSR 2단계 — 은행권 40% 적용 중',
      'LTV 70% (조정지역 60%)',
      '전세자금대출 DSR 포함 검토 진행',
    ],
    link: '/blog/ltv-dti-dsr-guide',
  },
]

const faqs = [
  {
    q: '취득세를 줄이는 방법이 있나요?',
    a: '생애최초 구입 시 최대 200만원 감면(소득 기준 있음). 85㎡·6억 이하는 농어촌특별세 면제. 1주택자는 기본 1%.',
    link: '/blog/acquisition-tax-2026',
  },
  {
    q: '1주택자는 양도세를 안 내도 되나요?',
    a: '실거래가 12억 이하 + 2년 이상 보유하면 비과세. 조정지역에서 취득했다면 2년 거주까지 채워야 한다.',
    link: '/blog/one-home-nontaxable',
  },
  {
    q: '종부세 대상인지 어떻게 알 수 있나요?',
    a: '1주택자는 공시가 12억 초과 시, 다주택자는 합산 공시가 9억 초과 시 과세. 공동명의는 각 6억씩 공제된다.',
    link: '/종부세-계산기',
  },
  {
    q: '증여세를 줄이는 방법은?',
    a: '성인 자녀 기준 10년에 5천만원 공제. 10년이 지나면 공제가 다시 생기므로 일찍, 나눠서 증여하는 것이 유리하다.',
    link: '/증여세-계산기',
  },
  {
    q: '전세와 월세 중 어느 쪽이 유리한가요?',
    a: '전세 대출이자율이 전월세 전환율(보통 3~4%)보다 낮으면 전세가 유리. 보증금 미반환 리스크는 별도로 따져야 한다.',
    link: '/전세-월세-계산기',
  },
  {
    q: '다주택자 취득세 중과세율은?',
    a: '조정지역 2주택 8%, 3주택 이상 12%. 비조정지역 3주택 이상 8%. 법인은 지역 무관 12%.',
    link: '/blog/adjusted-area-acquisition-tax',
  },
]

const recentPosts = blogPosts.slice(0, 3)

export default function HomePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
      <NoticeCarousel />

      <div className="max-w-3xl mx-auto px-4 pt-10 pb-20">

        {/* ── 히어로 — 로드 시 fadeUp ── */}
        <div className="mb-16">
          <h1
            className="text-5xl sm:text-[4.2rem] font-black text-[#0B1623] anim-fade-up"
            style={{ lineHeight: 1.05 }}
          >
            부동산 세금,<br />
            계약 전에.
          </h1>
          <p className="mt-6 text-sm text-slate-500 leading-relaxed anim-fade-up anim-delay-1">
            취득세, 양도세, 종부세, 증여세, 대출 상환까지.<br />
            2026년 최신 세율 기준으로 무료 계산합니다.
          </p>
          <div className="anim-fade-up anim-delay-2">
            <MiniAcquisitionCalc />
          </div>
        </div>

        {/* ── 계산기 목록 ── */}
        <section className="mb-16">
          <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase mb-3 anim-fade-up anim-delay-3">
            계산기 6종
          </p>
          <div className="border-t border-slate-100">
            {calculators.map((calc, i) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="flex items-center justify-between py-4 border-b border-slate-100 group hover:bg-slate-50 -mx-4 px-4 transition-colors anim-fade-up"
                style={{ animationDelay: `${0.3 + i * 0.06}s` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black text-slate-200 w-6 tabular shrink-0 select-none">
                    {calc.num}
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-[#0B1623] group-hover:text-amber-600 transition-colors leading-tight">
                      {calc.name}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{calc.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className="text-xs font-semibold text-slate-300 tabular hidden sm:block">{calc.rate}</span>
                  <span className="text-slate-300 group-hover:text-amber-500 transition-colors">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 2026 핵심 기준 ── */}
        <FadeIn className="mb-16">
          <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase mb-3">2026 핵심 기준</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-amber-200/60 rounded-xl overflow-hidden bg-amber-50/30">
            {stats2026.map((s, i) => (
              <div key={s.label} className={`p-4 ${statsBorderClass[i]}`}>
                <div className="text-2xl font-black text-amber-500 tabular leading-none">{s.value}</div>
                <div className="text-[11px] font-semibold text-[#0B1623] mt-2 leading-tight">{s.label}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── 거래 단계별 세금 ── */}
        <FadeIn className="mb-16">
          <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase mb-3">거래 단계별 세금</p>
          <div className="bg-slate-50 rounded-2xl overflow-hidden">
            {taxTimeline.map((t, i) => (
              <Link
                key={t.tax}
                href={t.href}
                className={`flex gap-5 px-5 py-4 group hover:bg-slate-100 transition-colors ${i < taxTimeline.length - 1 ? 'border-b border-slate-200/70' : ''}`}
              >
                <div className="shrink-0 w-14 pt-0.5">
                  <span className="text-xs font-black text-amber-500 tabular">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-[10px] text-slate-400 mt-0.5">{t.phase}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <p className="text-sm font-bold text-[#0B1623] group-hover:text-amber-600 transition-colors">
                      {t.tax}
                    </p>
                    <span className="text-xs text-slate-400 tabular">{t.rate}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{t.desc}</p>
                  <p className="text-[10px] text-slate-300 mt-1.5">{t.deadline}</p>
                </div>
                <span className="text-slate-300 group-hover:text-amber-400 transition-colors text-sm shrink-0 self-center">
                  →
                </span>
              </Link>
            ))}
          </div>
        </FadeIn>

        {/* ── 실제로 이렇게 나온다 ── */}
        <FadeIn className="mb-16">
          <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase mb-3">실제로 이렇게 나온다</p>
          <div className="space-y-3">
            {calcExamples.map((ex) => (
              <div key={ex.label} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="flex items-start justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wide">{ex.label}</span>
                    <p className="text-xs text-slate-500 mt-0.5">{ex.scenario}</p>
                  </div>
                  <Link
                    href={ex.href}
                    className="text-xs font-semibold text-amber-600 hover:text-amber-700 shrink-0 ml-4 mt-0.5 transition-colors"
                  >
                    직접 계산 →
                  </Link>
                </div>
                <div className="px-4 py-3">
                  {ex.rows.map((row) => (
                    <div key={row.name} className="flex justify-between py-1.5 border-b border-slate-50 last:border-0">
                      <span className="text-xs text-slate-400">{row.name}</span>
                      <span className="text-xs font-semibold text-slate-600 tabular">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2.5 mt-1 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#0B1623]">{ex.total.name}</span>
                    <span className="text-base font-black text-amber-500 tabular">{ex.total.value}</span>
                  </div>
                  {ex.note && (
                    <p className="text-[10px] text-slate-400 mt-2 leading-relaxed">{ex.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <AdBanner slot="home-mid" className="my-8" />

        {/* ── 2026 세법 변경 ── */}
        <FadeIn className="mb-16">
          <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase mb-3">2026 세법 변경</p>
          <div className="bg-slate-50 rounded-2xl overflow-hidden">
            {changes2026.map((c, i) => (
              <div
                key={c.category}
                className={`px-5 py-4 ${i < changes2026.length - 1 ? 'border-b border-slate-200/70' : ''}`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <p className="text-sm font-bold text-[#0B1623]">{c.category}</p>
                  <Link
                    href={c.link}
                    className="text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    더 읽기 →
                  </Link>
                </div>
                <ul className="space-y-1.5">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── 자주 묻는 것들 ── */}
        <FadeIn className="mb-16">
          <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase mb-3">자주 묻는 것들</p>
          <div className="border-t border-slate-100">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-4 border-b border-slate-100">
                <p className="text-sm font-bold text-[#0B1623] mb-2 leading-snug">{faq.q}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-2.5">{faq.a}</p>
                <Link
                  href={faq.link}
                  className="text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  자세히 →
                </Link>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── 읽기 ── */}
        <FadeIn className="mb-12">
          <div className="flex items-baseline justify-between mb-3">
            <p className="text-xs font-semibold text-slate-500 tracking-wide uppercase">읽기</p>
            <Link href="/blog" className="text-xs font-semibold text-slate-400 hover:text-amber-600 transition-colors">
              전체 →
            </Link>
          </div>
          <div className="bg-slate-50 rounded-2xl overflow-hidden">
            {recentPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`flex items-start gap-4 px-5 py-4 group hover:bg-slate-100 transition-colors ${i < recentPosts.length - 1 ? 'border-b border-slate-200/70' : ''}`}
              >
                <div className="flex-1">
                  <p className="text-[10px] font-semibold text-amber-600 mb-1">{post.category}</p>
                  <p className="text-sm font-semibold text-[#0B1623] group-hover:text-amber-600 transition-colors leading-snug">
                    {post.title}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1.5">
                    {post.date} · {post.readTime}분
                  </p>
                </div>
                <span className="text-slate-300 group-hover:text-amber-400 transition-colors text-sm shrink-0 mt-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </FadeIn>

        {/* 면책 */}
        <div className="border-t border-slate-100 pt-6">
          <p className="text-xs text-slate-400 leading-relaxed">
            참고용 계산기입니다. 2026년 지방세법·소득세법 기준이며, 실제 세액은 개인 상황에 따라 다릅니다.
            정확한 수치는 세무사 또는 홈택스(hometax.go.kr)에서 검증하세요.
          </p>
        </div>

      </div>
    </div>
  )
}
