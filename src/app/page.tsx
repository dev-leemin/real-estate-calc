import type { Metadata } from 'next'
import Link from 'next/link'

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
    desc: '1주택·다주택·법인별 세율. 지방교육세·농특세 포함.',
  },
  {
    href: '/대출-계산기',
    title: '대출 상환 계산기',
    desc: '원리금균등·원금균등·만기일시. 상환 일정표 포함.',
  },
  {
    href: '/양도소득세-계산기',
    title: '양도소득세 계산기',
    desc: '보유·거주기간 반영. 장기보유특별공제 자동 계산.',
  },
  {
    href: '/전세-월세-계산기',
    title: '전세·월세 환산기',
    desc: '전세금↔월세 상호 환산. 이자 vs 월세 비용 비교.',
  },
  {
    href: '/증여세-계산기',
    title: '증여세 계산기',
    desc: '관계별 공제액 자동 적용. 배우자 6억, 자녀 5천만 원.',
  },
  {
    href: '/종부세-계산기',
    title: '종합부동산세 계산기',
    desc: '공시가격 기준. 고령자·장기보유 세액공제 반영.',
  },
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

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-stone-900 mb-1">부동산 세금 계산기</h1>
          <p className="text-sm text-stone-400">2026년 세율 기준 · 참고용</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group block bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-400 transition-colors"
            >
              <h2 className="font-semibold text-stone-900 text-sm mb-1.5 group-hover:text-amber-700 transition-colors">
                {calc.title}
              </h2>
              <p className="text-xs text-stone-400 leading-relaxed">{calc.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-stone-100 flex items-center justify-between">
          <p className="text-xs text-stone-400">
            본 계산기는 참고용입니다. 실제 세액은 세무사 또는 홈택스를 통해 확인하세요.
          </p>
          <Link href="/blog" className="text-xs text-stone-400 hover:text-amber-600 transition-colors flex-shrink-0 ml-4">
            블로그 →
          </Link>
        </div>
      </div>
    </div>
  )
}
