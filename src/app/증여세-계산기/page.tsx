import type { Metadata } from 'next'
import GiftTaxCalc from './GiftTaxCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '증여세 계산기 - 배우자·자녀·기타 관계별 공제액 자동 적용',
  description:
    '증여재산가액과 관계(배우자 6억, 자녀 5천만원, 미성년 2천만원)를 선택하면 증여세를 즉시 계산합니다. 2026년 상속·증여세법 기준.',
  alternates: { canonical: 'https://calc.lotto45.kr/%EC%A6%9D%EC%97%AC%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.lotto45.kr' },
    { '@type': 'ListItem', position: 2, name: '증여세 계산기', item: 'https://calc.lotto45.kr/%EC%A6%9D%EC%97%AC%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function GiftTaxPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>증여세 계산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">증여세 계산기</h1>
        </div>

        <GiftTaxCalc />

        <AdBanner slot="gift-tax-mid" className="my-8" />

        <details className="mt-6 group">
          <summary className="text-xs text-stone-400 cursor-pointer hover:text-stone-600 select-none list-none flex items-center gap-1">
            <svg className="w-3 h-3 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            관련 글 보기
          </summary>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/blog/gift-vs-inheritance', title: '증여 vs 상속 세금 비교', desc: '어느 쪽이 절세에 유리한가' },
              { href: '/blog/gift-acquisition-tax', title: '증여로 집 받을 때 취득세', desc: '취득세도 함께 납부해야 합니다' },
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
