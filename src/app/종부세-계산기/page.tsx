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
        <nav className="text-xs text-stone-400 mb-5">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-1.5">/</span>
          <span className="text-stone-700">종합부동산세 계산기</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-stone-900 mb-2">종합부동산세 계산기</h1>
          <p className="text-sm text-stone-500 leading-relaxed">
            주택 공시가격을 입력하면 종합부동산세(종부세)를 즉시 계산합니다.
            1주택 12억, 다주택 9억 공제를 자동 적용하며, 고령자·장기보유 세액공제도 반영합니다.
          </p>
        </div>

        <ComprehensiveTaxCalc />

        <AdBanner slot="comprehensive-tax-mid" className="my-8" />

        <div className="mt-8 space-y-4">
          <h2 className="text-base font-bold text-stone-900">종부세 관련 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/comprehensive-tax-guide', title: '종합부동산세 계산법', desc: '세율과 절세 포인트 정리' },
              { href: '/blog/gift-vs-inheritance', title: '부동산 증여 vs 상속', desc: '종부세 절감을 위한 선택' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className="block bg-white border border-stone-200 rounded-xl p-4 hover:border-amber-300 hover:bg-amber-50 transition-all">
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
              { href: '/증여세-계산기', label: '증여세 계산기' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className="px-4 py-2 text-xs font-medium border border-stone-200 rounded-xl text-stone-600 hover:border-amber-400 hover:text-amber-700 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
