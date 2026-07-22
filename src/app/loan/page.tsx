import type { Metadata } from 'next'
import LoanCalc from './LoanCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '대출 상환 계산기 - 원리금균등·원금균등·만기일시 월 납입액 계산',
  description:
    '대출금액, 이자율, 기간을 입력하면 월 납입액과 총 이자를 즉시 계산합니다. 원리금균등·원금균등·만기일시상환 비교, 상환 일정표 제공.',
  alternates: { canonical: 'https://calc.friz.dev/%EB%8C%80%EC%B6%9C-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.friz.dev' },
    { '@type': 'ListItem', position: 2, name: '대출 계산기', item: 'https://calc.friz.dev/%EB%8C%80%EC%B6%9C-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function LoanPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>대출 상환 계산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">대출 상환 계산기</h1>
        </div>

        <LoanCalc />

        <AdBanner slot="loan-mid" className="my-8" />

        <details className="mt-6 group">
          <summary className="text-xs text-stone-400 cursor-pointer hover:text-stone-600 select-none list-none flex items-center gap-1">
            <svg className="w-3 h-3 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            관련 글 보기
          </summary>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/blog/equal-payment-vs-equal-principal', title: '원리금균등 vs 원금균등', desc: '총 이자 차이와 선택 기준' },
              { href: '/blog/ltv-dti-dsr-guide', title: 'LTV DTI DSR 완벽 이해', desc: '2026년 대출 규제 기준' },
              { href: '/blog/mortgage-rate-types', title: '주담대 금리 유형 비교', desc: '고정 vs 변동 vs 혼합' },
              { href: '/blog/prepayment-penalty', title: '중도상환수수료 계산법', desc: '면제 조건과 절약 방법' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className="block border border-stone-100 rounded-lg p-3 hover:border-stone-300 transition-colors">
                <p className="text-xs font-medium text-stone-700 mb-0.5">{item.title}</p>
                <p className="text-xs text-stone-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </details>

        <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap gap-2">
          {[
            { href: '/취득세-계산기', label: '취득세' },
            { href: '/양도소득세-계산기', label: '양도소득세' },
            { href: '/전세-월세-계산기', label: '전세·월세' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="px-3 py-1.5 text-xs text-stone-500 border border-stone-200 rounded-lg hover:border-stone-400 hover:text-stone-700 transition-colors">
              {item.label} 계산기
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
