import type { Metadata } from 'next'
import CapitalGainsTaxCalc from './CapitalGainsTaxCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '양도소득세 계산기 - 2026년 최신 세율 | 1주택 비과세·장기보유공제 자동 계산',
  description:
    '양도차익, 보유기간, 거주기간을 입력하면 양도소득세를 즉시 계산합니다. 1주택 비과세(12억 이하) 판별, 장기보유특별공제 최대 80% 자동 적용.',
  alternates: { canonical: 'https://calc.friz.dev/%EC%96%91%EB%8F%84%EC%86%8C%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.friz.dev' },
    { '@type': 'ListItem', position: 2, name: '양도소득세 계산기', item: 'https://calc.friz.dev/%EC%96%91%EB%8F%84%EC%86%8C%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function CapitalGainsTaxPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>양도소득세 계산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">양도소득세 계산기</h1>
        </div>

        <CapitalGainsTaxCalc />

        <AdBanner slot="capital-gains-mid" className="my-8" />

        <details className="mt-6 group">
          <summary className="text-xs text-stone-400 cursor-pointer hover:text-stone-600 select-none list-none flex items-center gap-1">
            <svg className="w-3 h-3 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            관련 글 보기
          </summary>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/blog/one-home-nontaxable', title: '1주택 비과세 요건', desc: '2년 보유·거주 조건 상세 정리' },
              { href: '/blog/long-term-holding-deduction', title: '장기보유특별공제 최대 80%', desc: '거주기간별 공제율 계산법' },
              { href: '/blog/temporary-two-homes', title: '일시적 2주택 비과세', desc: '1~3년 이내 매도 조건' },
              { href: '/blog/multi-home-capital-gains', title: '다주택자 양도세 중과', desc: '조정지역 중과세율 정리' },
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
            { href: '/증여세-계산기', label: '증여세' },
            { href: '/종부세-계산기', label: '종부세' },
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
