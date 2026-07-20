import type { Metadata } from 'next'
import ComprehensiveTaxCalc from './ComprehensiveTaxCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '종합부동산세(종부세) 계산기 - 2026년 공시가격 기준 자동 계산',
  description:
    '공시가격, 주택 수(1주택 12억·다주택 9억 공제), 고령자·장기보유 세액공제를 반영한 종합부동산세를 즉시 계산합니다.',
  alternates: { canonical: 'https://calc.lotto45.kr/%EC%A2%85%EB%B6%80%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.lotto45.kr' },
    { '@type': 'ListItem', position: 2, name: '종합부동산세 계산기', item: 'https://calc.lotto45.kr/%EC%A2%85%EB%B6%80%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function ComprehensiveTaxPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>종합부동산세 계산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">종합부동산세 계산기</h1>
        </div>

        <ComprehensiveTaxCalc />

        <AdBanner slot="comprehensive-tax-mid" className="my-8" />

        <details className="mt-6 group">
          <summary className="text-xs text-stone-400 cursor-pointer hover:text-stone-600 select-none list-none flex items-center gap-1">
            <svg className="w-3 h-3 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            관련 글 보기
          </summary>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/blog/comprehensive-tax-guide', title: '종합부동산세 계산법', desc: '세율과 절세 포인트 정리' },
              { href: '/blog/gift-vs-inheritance', title: '부동산 증여 vs 상속', desc: '종부세 절감을 위한 선택' },
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
            { href: '/증여세-계산기', label: '증여세' },
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
