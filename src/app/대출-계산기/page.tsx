import type { Metadata } from 'next'
import LoanCalc from './LoanCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '대출 상환 계산기 - 원리금균등·원금균등·만기일시 월 납입액 계산',
  description:
    '대출금액, 이자율, 기간을 입력하면 월 납입액과 총 이자를 즉시 계산합니다. 원리금균등·원금균등·만기일시상환 비교, 상환 일정표 제공.',
  alternates: { canonical: 'https://calc.lotto45.kr/%EB%8C%80%EC%B6%9C-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.lotto45.kr' },
    { '@type': 'ListItem', position: 2, name: '대출 계산기', item: 'https://calc.lotto45.kr/%EB%8C%80%EC%B6%9C-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function LoanPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <nav className="text-xs text-stone-400 mb-5">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-1.5">/</span>
          <span className="text-stone-700">대출 상환 계산기</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-stone-900 mb-2">대출 상환 계산기</h1>
          <p className="text-sm text-stone-500 leading-relaxed">
            대출금액, 연 이자율, 대출 기간을 입력하면 월 납입액과 총 이자를 즉시 계산합니다.
            원리금균등·원금균등·만기일시상환 방식을 비교하고, 전체 상환 일정표를 확인하세요.
          </p>
        </div>

        <LoanCalc />

        <AdBanner slot="loan-mid" className="my-8" />

        <div className="mt-8 space-y-4">
          <h2 className="text-base font-bold text-stone-900">대출 관련 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/equal-payment-vs-equal-principal', title: '원리금균등 vs 원금균등', desc: '총 이자 차이와 선택 기준' },
              { href: '/blog/ltv-dti-dsr-guide', title: 'LTV DTI DSR 완벽 이해', desc: '2026년 대출 규제 기준' },
              { href: '/blog/mortgage-rate-types', title: '주담대 금리 유형 비교', desc: '고정 vs 변동 vs 혼합' },
              { href: '/blog/prepayment-penalty', title: '중도상환수수료 계산법', desc: '면제 조건과 절약 방법' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-white border border-stone-200 rounded-xl p-4 hover:border-amber-300 hover:bg-amber-50 transition-all"
              >
                <p className="text-sm font-medium text-stone-800 mb-0.5">{item.title}</p>
                <p className="text-xs text-stone-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-base font-bold text-stone-900 mb-3">다른 계산기</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/취득세-계산기', label: '취득세 계산기' },
              { href: '/양도소득세-계산기', label: '양도소득세 계산기' },
              { href: '/전세-월세-계산기', label: '전세·월세 환산기' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-xs font-medium border border-stone-200 rounded-xl text-stone-600 hover:border-amber-400 hover:text-amber-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
