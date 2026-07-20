import type { Metadata } from 'next'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'

export const metadata: Metadata = {
  title: '부동산 세금 계산기 - 취득세·양도세·종부세·증여세·대출 한 곳에서',
  description:
    '취득세, 양도소득세, 종합부동산세, 증여세, 대출 상환, 전세·월세 환산을 한 곳에서. 2026년 최신 세율 자동 반영, 실시간 계산.',
  alternates: { canonical: 'https://calc.lotto45.kr' },
}

const calculators = [
  {
    href: '/취득세-계산기',
    title: '취득세 계산기',
    desc: '1주택부터 다주택·법인까지 세율 자동 계산. 지방교육세·농특세 포함.',
    badge: '월 3만+ 검색',
    icon: '🏠',
    color: 'border-amber-200 hover:border-amber-400 hover:bg-amber-50',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    href: '/대출-계산기',
    title: '대출 상환 계산기',
    desc: '원리금균등·원금균등·만기일시 상환별 월 납입액과 이자 총액 계산.',
    badge: '월 10만+ 검색',
    icon: '💰',
    color: 'border-green-200 hover:border-green-400 hover:bg-green-50',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    href: '/양도소득세-계산기',
    title: '양도소득세 계산기',
    desc: '보유기간·거주기간·주택수 반영. 장기보유특별공제 자동 계산.',
    badge: '월 5만+ 검색',
    icon: '📈',
    color: 'border-sky-200 hover:border-sky-400 hover:bg-sky-50',
    badgeColor: 'bg-sky-100 text-sky-700',
  },
  {
    href: '/전세-월세-계산기',
    title: '전세·월세 환산기',
    desc: '전세금↔월세 상호 환산. 전세 대출이자 vs 월세 비용 비교.',
    badge: '월 1.5만+ 검색',
    icon: '🔄',
    color: 'border-orange-200 hover:border-orange-400 hover:bg-orange-50',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    href: '/증여세-계산기',
    title: '증여세 계산기',
    desc: '배우자·자녀·기타 관계별 공제액 적용. 10년 기준 면제 한도 확인.',
    badge: '월 1만+ 검색',
    icon: '🎁',
    color: 'border-purple-200 hover:border-purple-400 hover:bg-purple-50',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    href: '/종부세-계산기',
    title: '종합부동산세 계산기',
    desc: '공시가격 기준 종부세 계산. 고령자·장기보유 세액공제 반영.',
    badge: '월 8천+ 검색',
    icon: '🏛️',
    color: 'border-red-200 hover:border-red-400 hover:bg-red-50',
    badgeColor: 'bg-red-100 text-red-700',
  },
]

const guideItems = [
  { icon: '📋', title: '취득·보유·처분 세금', desc: '집을 사고, 보유하고, 팔 때 각각 내는 세금의 종류와 시기를 정리했습니다.' },
  { icon: '🔢', title: '2026년 세율 총정리', desc: '취득세율, 양도세율, 종부세율 등 2026년 현행 세율을 한눈에 확인하세요.' },
  { icon: '⚖️', title: '절세 포인트 가이드', desc: '장기보유특별공제, 1주택 비과세, 생애최초 감면 등 합법적 절세 방법.' },
]

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '취득세는 얼마나 내나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '주택 취득세는 6억 이하 1%, 6억~9억 구간 1~3%(점진적), 9억 초과 3%입니다. 2주택 조정지역은 8%, 3주택 이상 조정지역은 12%가 적용됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '1주택자는 양도세를 안 내도 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '실거래가 12억 원 이하 1주택을 2년 이상 보유(조정지역은 2년 거주도 필요)한 경우 양도소득세가 비과세됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '종합부동산세 부과 기준은?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '공시가격 기준 1주택 12억 원, 다주택 합산 9억 원 초과분에 대해 종합부동산세가 부과됩니다.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />

      {/* 히어로 */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              2026년 최신 세율 반영
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3 leading-snug">
              부동산 세금, 정확하게<br className="sm:hidden" /> 계산하세요
            </h1>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-6">
              취득세부터 양도세, 종부세, 증여세, 대출 상환, 전·월세 환산까지.
              지방세법·소득세법 기준 세율을 자동 반영해 바로 계산합니다.
              결과는 참고용이며, 정확한 세금은 세무 전문가에게 확인하세요.
            </p>
            <Link
              href="/취득세-계산기"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              취득세 계산하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">

        {/* 계산기 그리드 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-stone-900 mb-5">세금 계산기 6종</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {calculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className={`group block bg-white border rounded-2xl p-5 transition-all duration-200 shadow-sm hover:shadow-md ${calc.color}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{calc.icon}</span>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${calc.badgeColor}`}>
                    {calc.badge}
                  </span>
                </div>
                <h3 className="font-bold text-stone-900 text-sm mb-1.5 group-hover:text-amber-700 transition-colors">
                  {calc.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">{calc.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <AdBanner slot="home-mid" className="my-8" />

        {/* 가이드 섹션 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-stone-900">부동산 세금 가이드</h2>
            <Link href="/guide" className="text-sm text-amber-600 hover:underline font-medium">
              전체 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {guideItems.map((item) => (
              <div key={item.title} className="bg-white border border-stone-200 rounded-xl p-4">
                <div className="text-xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-stone-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <Link
              href="/guide"
              className="inline-block text-sm text-stone-600 hover:text-amber-700 border border-stone-200 hover:border-amber-300 px-5 py-2 rounded-xl transition-colors"
            >
              세금 종류 한눈에 보기
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-stone-900 mb-5">자주 묻는 질문</h2>
          <div className="space-y-3">
            {[
              {
                q: '취득세 세율은 어떻게 되나요?',
                a: '6억 이하 1%, 6억~9억 1~3%(점진적), 9억 초과 3%입니다. 2주택 조정지역 8%, 3주택 이상 조정지역 12%, 법인 12%가 적용됩니다. 지방교육세(취득세의 10%)도 함께 납부합니다.',
              },
              {
                q: '1주택자 양도소득세 비과세 조건은?',
                a: '실거래가 12억 원 이하 1주택을 2년 이상 보유한 경우 비과세입니다. 조정대상지역은 2년 거주 요건도 충족해야 합니다(소득세법 제89조).',
              },
              {
                q: '종부세는 누가 내나요?',
                a: '매년 6월 1일 기준으로 1주택자는 공시가격 12억 원 초과, 다주택자는 합산 공시가격 9억 원 초과분에 대해 납부합니다. 고령자·장기보유 공제가 적용됩니다(종합부동산세법 제8조).',
              },
              {
                q: '이 계산기 결과를 세금 신고에 사용해도 되나요?',
                a: '본 계산기는 참고용입니다. 실제 납부세액은 개인 상황(과거 거래이력, 특례 적용 여부 등)에 따라 달라질 수 있으므로 세무사 또는 국세청 홈택스를 통해 정확한 금액을 확인하시기 바랍니다.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="bg-white border border-stone-200 rounded-xl group">
                <summary className="px-5 py-4 text-sm font-medium text-stone-900 cursor-pointer list-none flex items-center justify-between select-none">
                  {q}
                  <svg className="w-4 h-4 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 면책 공고 */}
        <div className="bg-stone-100 border border-stone-200 rounded-xl px-5 py-4 text-xs text-stone-500 leading-relaxed">
          <strong className="text-stone-700">면책 고지:</strong> 본 계산기는 정보 제공 목적의 참고용 도구입니다.
          세율은 2026년 기준이며, 개정 법령 및 개인 상황에 따라 실제 세액이 다를 수 있습니다.
          부동산 거래 전 반드시 공인 세무사 또는 국세청 홈택스(hometax.go.kr)를 통해 정확한 세액을 확인하시기 바랍니다.
        </div>
      </div>
    </div>
  )
}
