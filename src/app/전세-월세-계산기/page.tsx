import type { Metadata } from 'next'
import RentConvertCalc from './RentConvertCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '전세·월세 환산 계산기 - 전세금을 월세로, 월세를 전세로 변환',
  description:
    '전월세 전환율 기준으로 전세금↔월세를 환산하세요. 전세 대출이자와 월세 비용을 비교해 어떤 선택이 유리한지 알 수 있습니다.',
  alternates: { canonical: 'https://calc.lotto45.kr/%EC%A0%84%EC%84%B8-%EC%9B%94%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.lotto45.kr' },
    { '@type': 'ListItem', position: 2, name: '전세·월세 환산 계산기', item: 'https://calc.lotto45.kr/%EC%A0%84%EC%84%B8-%EC%9B%94%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function RentConvertPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <nav className="text-xs text-stone-400 mb-5">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-1.5">/</span>
          <span className="text-stone-700">전세·월세 환산 계산기</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-stone-900 mb-2">전세·월세 환산 계산기</h1>
          <p className="text-sm text-stone-500 leading-relaxed">
            전월세 전환율을 적용해 전세금을 월세로, 또는 월세를 전세금으로 환산합니다.
            전세 대출이자와 월세 비용을 비교해 어느 쪽이 유리한지 확인하세요.
          </p>
        </div>

        <RentConvertCalc />

        <AdBanner slot="rent-mid" className="my-8" />

        <div className="mt-8 space-y-4">
          <h2 className="text-base font-bold text-stone-900">전·월세 관련 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/jeonse-vs-monthly-rent', title: '전세 vs 월세, 어느 쪽이 이득', desc: '대출이자와 월세 비용 비교법' },
              { href: '/blog/ltv-dti-dsr-guide', title: 'LTV DTI DSR 대출 규제', desc: '전세 대출 한도 계산 기준' },
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
