import type { Metadata } from 'next'
import RentConvertCalc from './RentConvertCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '전세·월세 환산 계산기 - 전세금을 월세로, 월세를 전세로 변환',
  description:
    '전월세 전환율 기준으로 전세금↔월세를 환산하세요. 전세 대출이자와 월세 비용을 비교해 어떤 선택이 유리한지 알 수 있습니다.',
  alternates: { canonical: 'https://calc.friz.dev/%EC%A0%84%EC%84%B8-%EC%9B%94%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.friz.dev' },
    { '@type': 'ListItem', position: 2, name: '전세·월세 환산 계산기', item: 'https://calc.friz.dev/%EC%A0%84%EC%84%B8-%EC%9B%94%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function RentConvertPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>전세·월세 환산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">전세·월세 환산기</h1>
        </div>

        <RentConvertCalc />

        <AdBanner slot="rent-mid" className="my-8" />

        <details className="mt-6 group">
          <summary className="text-xs text-stone-400 cursor-pointer hover:text-stone-600 select-none list-none flex items-center gap-1">
            <svg className="w-3 h-3 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            관련 글 보기
          </summary>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/blog/jeonse-vs-monthly-rent', title: '전세 vs 월세, 어느 쪽이 이득', desc: '대출이자와 월세 비용 비교법' },
              { href: '/blog/ltv-dti-dsr-guide', title: 'LTV DTI DSR 대출 규제', desc: '전세 대출 한도 계산 기준' },
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
            { href: '/대출-계산기', label: '대출' },
            { href: '/양도소득세-계산기', label: '양도소득세' },
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
