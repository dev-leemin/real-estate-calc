import type { Metadata } from 'next'
import CapitalGainsTaxCalc from './CapitalGainsTaxCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '양도소득세 계산기 - 2026년 최신 세율 | 1주택 비과세·장기보유공제 자동 계산',
  description:
    '양도차익, 보유기간, 거주기간을 입력하면 양도소득세를 즉시 계산합니다. 1주택 비과세(12억 이하) 판별, 장기보유특별공제 최대 80% 자동 적용.',
  alternates: { canonical: 'https://calc.lotto45.kr/%EC%96%91%EB%8F%84%EC%86%8C%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.lotto45.kr' },
    { '@type': 'ListItem', position: 2, name: '양도소득세 계산기', item: 'https://calc.lotto45.kr/%EC%96%91%EB%8F%84%EC%86%8C%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function CapitalGainsTaxPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <nav className="text-xs text-stone-400 mb-5">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-1.5">/</span>
          <span className="text-stone-700">양도소득세 계산기</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-stone-900 mb-2">양도소득세 계산기</h1>
          <p className="text-sm text-stone-500 leading-relaxed">
            취득가액·양도가액과 보유기간·거주기간을 입력하면 양도소득세를 즉시 계산합니다.
            1주택 비과세(실거래가 12억 이하) 자동 판별, 장기보유특별공제 최대 80% 자동 적용.
          </p>
        </div>

        <CapitalGainsTaxCalc />

        <AdBanner slot="capital-gains-mid" className="my-8" />

        <div className="mt-8 space-y-4">
          <h2 className="text-base font-bold text-stone-900">양도세 관련 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/one-home-nontaxable', title: '1주택 비과세 요건', desc: '2년 보유·거주 조건 상세 정리' },
              { href: '/blog/long-term-holding-deduction', title: '장기보유특별공제 최대 80%', desc: '거주기간별 공제율 계산법' },
              { href: '/blog/temporary-two-homes', title: '일시적 2주택 비과세', desc: '1~3년 이내 매도 조건' },
              { href: '/blog/multi-home-capital-gains', title: '다주택자 양도세 중과', desc: '조정지역 중과세율 정리' },
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
              { href: '/증여세-계산기', label: '증여세 계산기' },
              { href: '/종부세-계산기', label: '종부세 계산기' },
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
