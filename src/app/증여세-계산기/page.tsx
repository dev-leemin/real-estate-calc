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
        <nav className="text-xs text-stone-400 mb-5">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-1.5">/</span>
          <span className="text-stone-700">증여세 계산기</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-stone-900 mb-2">증여세 계산기</h1>
          <p className="text-sm text-stone-500 leading-relaxed">
            증여재산가액과 증여자·수증자 관계를 입력하면 증여세를 즉시 계산합니다.
            10년 합산 증여재산공제(배우자 6억, 직계존속 5천만원)를 자동으로 적용합니다.
          </p>
        </div>

        <GiftTaxCalc />

        <AdBanner slot="gift-tax-mid" className="my-8" />

        <div className="mt-8 space-y-4">
          <h2 className="text-base font-bold text-stone-900">증여세 관련 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/gift-vs-inheritance', title: '증여 vs 상속 세금 비교', desc: '어느 쪽이 절세에 유리한가' },
              { href: '/blog/gift-acquisition-tax', title: '증여로 집 받을 때 취득세', desc: '취득세도 함께 납부해야 합니다' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className="block bg-white border border-stone-200 rounded-xl p-4 hover:border-amber-300 hover:bg-amber-50 transition-all">
                <p className="text-sm font-medium text-stone-800 mb-0.5">{item.title}</p>
                <p className="text-xs text-stone-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
