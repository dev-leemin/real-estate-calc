import type { Metadata } from 'next'
import AcquisitionTaxCalc from './AcquisitionTaxCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '취득세 계산기 - 2026년 최신 세율 | 1·2·3주택 조정지역 자동 계산',
  description:
    '2026년 지방세법 기준 취득세를 실시간으로 계산하세요. 1주택 1%, 2주택 조정지역 8%, 3주택 이상 12%, 법인 12%. 지방교육세·농어촌특별세 포함.',
  alternates: { canonical: 'https://calc.lotto45.kr/%EC%B7%A8%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '취득세 계산하는 방법',
  description: '부동산 취득 시 납부해야 할 취득세를 계산하는 방법',
  step: [
    { '@type': 'HowToStep', name: '취득가액 입력', text: '부동산 매매계약서상 취득가액을 입력합니다.' },
    { '@type': 'HowToStep', name: '주택 유형 선택', text: '아파트, 단독·다가구, 오피스텔, 토지·상가 중 선택합니다.' },
    { '@type': 'HowToStep', name: '주택 수 선택', text: '취득 후 보유하게 될 주택 수를 선택합니다.' },
    { '@type': 'HowToStep', name: '조정대상지역 여부 확인', text: '취득하려는 주택이 조정대상지역에 있는지 확인합니다.' },
    { '@type': 'HowToStep', name: '결과 확인', text: '취득세, 지방교육세, 농어촌특별세 합계를 확인합니다.' },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.lotto45.kr' },
    { '@type': 'ListItem', position: 2, name: '취득세 계산기', item: 'https://calc.lotto45.kr/%EC%B7%A8%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function AcquisitionTaxPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        {/* 브레드크럼 */}
        <nav className="text-xs text-stone-400 mb-5">
          <Link href="/" className="hover:text-amber-600">홈</Link>
          <span className="mx-1.5">/</span>
          <span className="text-stone-700">취득세 계산기</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-stone-900 mb-2">취득세 계산기</h1>
          <p className="text-sm text-stone-500 leading-relaxed">
            2026년 지방세법 기준 취득세·지방교육세·농어촌특별세를 실시간으로 계산합니다.
            주택 수와 조정대상지역 여부에 따른 중과세율이 자동 적용됩니다.
          </p>
        </div>

        <AcquisitionTaxCalc />

        <AdBanner slot="acquisition-tax-mid" className="my-8" />

        {/* 관련 정보 */}
        <div className="mt-8 space-y-4">
          <h2 className="text-base font-bold text-stone-900">취득세 관련 정보</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/acquisition-tax-2026', title: '취득세율 총정리 2026', desc: '1·2·3주택 세율 한눈에 보기' },
              { href: '/blog/adjusted-area-acquisition-tax', title: '조정대상지역 취득세 중과', desc: '어떤 지역이 조정지역인가' },
              { href: '/blog/new-apartment-acquisition-tax', title: '신축 분양 아파트 취득세', desc: '분양가 기준 계산법' },
              { href: '/blog/first-home-acquisition-tax-reduction', title: '생애최초 취득세 감면', desc: '최대 200만원 감면 조건' },
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

        {/* 다른 계산기 */}
        <div className="mt-8">
          <h2 className="text-base font-bold text-stone-900 mb-3">다른 계산기</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/대출-계산기', label: '대출 계산기' },
              { href: '/양도소득세-계산기', label: '양도소득세 계산기' },
              { href: '/증여세-계산기', label: '증여세 계산기' },
              { href: '/종부세-계산기', label: '종부세 계산기' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-xs font-medium border border-stone-200 rounded-xl text-stone-600 hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-colors"
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
