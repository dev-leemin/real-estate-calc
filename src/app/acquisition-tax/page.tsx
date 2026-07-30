import type { Metadata } from 'next'
import AcquisitionTaxCalc from './AcquisitionTaxCalc'
import AdBanner from '@/components/AdBanner'
import TaxRateCompare from '@/components/TaxRateCompare'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '취득세 계산기 - 2026년 최신 세율 | 1·2·3주택 조정지역 자동 계산',
  description:
    '2026년 지방세법 기준 취득세를 실시간으로 계산하세요. 1주택 1%, 2주택 조정지역 8%, 3주택 이상 12%, 법인 12%. 지방교육세·농어촌특별세 포함.',
  alternates: { canonical: 'https://calc.friz.dev/%EC%B7%A8%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const howToJsonLd = {
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '취득세는 언제까지 납부해야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '부동산 취득일로부터 60일 이내에 신고·납부해야 합니다(지방세법 제20조). 기한을 넘기면 신고불성실가산세 20%와 납부지연가산세(1일 0.022%)가 추가로 부과됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '분양권도 주택 수에 포함되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2021년 1월 1일 이후 취득한 분양권과 입주권은 취득세 중과 판단 시 주택 수에 포함됩니다(지방세법 시행령 제28조의4). 단, 2020년 12월 31일 이전 취득한 분양권은 제외됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '생애최초 주택 취득세 감면은 얼마인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '생애최초 주택 취득 시 취득세의 200만원 한도로 감면받을 수 있습니다. 주택가액 12억원 이하, 세대 전원이 주택을 소유한 적 없어야 하며 지방세특례제한법 제36조의3에 근거합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '농어촌특별세는 모든 주택에 부과되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '아닙니다. 전용면적 85㎡ 이하이고 취득가액 6억원 이하인 주택은 농어촌특별세가 비과세됩니다. 85㎡ 초과 또는 6억원 초과 시 취득세의 10%(중과세율 적용 시 20%)가 부과됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '증여로 받은 주택의 취득세율은 어떻게 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '증여 취득 시 원칙적으로 3.5%의 취득세율이 적용됩니다. 단, 조정대상지역 내 3억원 이상 주택을 증여받는 경우 12%의 중과세율이 적용됩니다(지방세법 제13조의2 제1항).',
      },
    },
    {
      '@type': 'Question',
      name: '지방교육세는 왜 따로 내야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '지방교육세는 지방세법 제151조에 따라 취득세액의 10%를 추가 납부하는 부가세입니다. 취득세와 함께 신고·납부하며 별도 절차는 없습니다.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.friz.dev' },
    { '@type': 'ListItem', position: 2, name: '취득세 계산기', item: 'https://calc.friz.dev/%EC%B7%A8%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function AcquisitionTaxPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>취득세 계산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">취득세 계산기</h1>
          <p className="mt-1 text-sm text-stone-500">2026년 지방세법 기준 · 주택 수·조정지역 자동 반영</p>
        </div>

        <AcquisitionTaxCalc />

        <AdBanner slot="acquisition-tax-mid" className="my-8" />

        <TaxRateCompare />

        {/* 세율표 */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">2026년 취득세율 한눈에 보기</h2>
          <div className="overflow-x-auto rounded-xl border border-stone-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-500">
                  <th className="text-left px-3 py-2.5 font-semibold">구분</th>
                  <th className="text-center px-3 py-2.5 font-semibold">비조정지역</th>
                  <th className="text-center px-3 py-2.5 font-semibold">조정대상지역</th>
                  <th className="text-center px-3 py-2.5 font-semibold">지방교육세</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                <tr>
                  <td className="px-3 py-2.5 text-stone-700">1주택 (6억 이하)</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-stone-800">1%</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-stone-800">1%</td>
                  <td className="px-3 py-2.5 text-center text-stone-500">취득세 × 10%</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="px-3 py-2.5 text-stone-700">1주택 (6억~9억)</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-stone-800">1~3%</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-stone-800">1~3%</td>
                  <td className="px-3 py-2.5 text-center text-stone-500">취득세 × 10%</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5 text-stone-700">1주택 (9억 초과)</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-stone-800">3%</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-stone-800">3%</td>
                  <td className="px-3 py-2.5 text-center text-stone-500">취득세 × 10%</td>
                </tr>
                <tr className="bg-amber-50/60">
                  <td className="px-3 py-2.5 text-stone-700 font-medium">2주택</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-stone-800">1~3%</td>
                  <td className="px-3 py-2.5 text-center font-bold text-amber-700">8%</td>
                  <td className="px-3 py-2.5 text-center text-stone-500">취득세 × 10%</td>
                </tr>
                <tr className="bg-red-50/50">
                  <td className="px-3 py-2.5 text-stone-700 font-medium">3주택 이상</td>
                  <td className="px-3 py-2.5 text-center font-bold text-red-600">8%</td>
                  <td className="px-3 py-2.5 text-center font-bold text-red-600">12%</td>
                  <td className="px-3 py-2.5 text-center text-stone-500">취득세 × 10%</td>
                </tr>
                <tr className="bg-red-50/50">
                  <td className="px-3 py-2.5 text-stone-700 font-medium">법인</td>
                  <td className="px-3 py-2.5 text-center font-bold text-red-600">12%</td>
                  <td className="px-3 py-2.5 text-center font-bold text-red-600">12%</td>
                  <td className="px-3 py-2.5 text-center text-stone-500">취득세 × 10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-stone-400">근거: 지방세법 제11조·제13조의2 / 농어촌특별세: 전용 85㎡ 초과 주택에 취득세의 10% 추가</p>
        </section>

        {/* 계산 예시 */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">실제 계산 예시</h2>
          <div className="space-y-3">
            <div className="border border-stone-100 rounded-xl p-4">
              <p className="text-xs font-semibold text-stone-700 mb-2">예시 ① 서울 마포구 아파트 5억원 취득 (1주택자, 조정대상지역, 85㎡ 이하)</p>
              <div className="space-y-1 text-xs text-stone-600">
                <div className="flex justify-between"><span>취득세 (1%)</span><span className="font-semibold tabular-nums">500만원</span></div>
                <div className="flex justify-between"><span>지방교육세 (취득세 × 10%)</span><span className="font-semibold tabular-nums">50만원</span></div>
                <div className="flex justify-between"><span>농어촌특별세 (85㎡ 이하 비과세)</span><span className="text-stone-400">—</span></div>
                <div className="flex justify-between pt-2 border-t border-stone-100 font-bold text-stone-800"><span>합계</span><span className="tabular-nums text-amber-600">550만원</span></div>
              </div>
            </div>
            <div className="border border-stone-100 rounded-xl p-4">
              <p className="text-xs font-semibold text-stone-700 mb-2">예시 ② 서울 강남구 아파트 8억원 취득 (2주택자, 조정대상지역, 85㎡ 초과)</p>
              <div className="space-y-1 text-xs text-stone-600">
                <div className="flex justify-between"><span>취득세 (8% 중과)</span><span className="font-semibold tabular-nums">6,400만원</span></div>
                <div className="flex justify-between"><span>지방교육세 (취득세 × 10%)</span><span className="font-semibold tabular-nums">640만원</span></div>
                <div className="flex justify-between"><span>농어촌특별세 (취득세 × 20%, 중과)</span><span className="font-semibold tabular-nums">1,280만원</span></div>
                <div className="flex justify-between pt-2 border-t border-stone-100 font-bold text-stone-800"><span>합계</span><span className="tabular-nums text-red-600">8,320만원</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">자주 묻는 질문</h2>
          <div className="space-y-2">
            {[
              {
                q: '취득세는 언제까지 납부해야 하나요?',
                a: '취득일로부터 60일 이내에 신고·납부해야 합니다(지방세법 제20조). 기한을 넘기면 신고불성실가산세 20%와 납부지연가산세(1일 0.022%)가 추가됩니다. 잔금일이 취득일 기준이므로 주의하세요.',
              },
              {
                q: '분양권을 매수하면 취득세가 바로 붙나요?',
                a: '분양권 자체에는 취득세가 붙지 않습니다. 실제 취득세는 아파트 준공 후 등기 시점에 납부합니다. 다만 2021년 1월 1일 이후 취득한 분양권은 주택 수 계산에 포함되어 다른 주택 취득 시 중과세율에 영향을 줍니다.',
              },
              {
                q: '생애최초 주택을 사면 세금이 줄어드나요?',
                a: '생애최초 주택 취득 시 최대 200만원까지 취득세를 감면받습니다(지방세특례제한법 제36조의3). 세대 전원이 주택을 소유한 적이 없어야 하고, 주택 취득가액이 12억원 이하여야 합니다. 취득 후 90일 이내 전입신고도 필요합니다.',
              },
              {
                q: '농어촌특별세는 어떤 경우에 안 내도 되나요?',
                a: '전용면적 85㎡ 이하이면서 취득가액 6억원 이하인 주택은 농어촌특별세가 비과세입니다. 이 두 조건을 모두 충족해야 면제됩니다. 중과세율(8·12%)이 적용되는 경우에는 면적·금액과 무관하게 취득세의 20%가 부과됩니다.',
              },
              {
                q: '부모님 집을 증여받을 때 취득세는 얼마인가요?',
                a: '증여 취득세율은 기본 3.5%입니다. 단, 조정대상지역에서 3억원 이상의 주택을 증여받는 경우 12% 중과세율이 적용됩니다(지방세법 제13조의2). 상속의 경우는 0.8%의 별도 세율이 적용됩니다.',
              },
              {
                q: '일시적 2주택인데 취득세 중과를 피할 수 있나요?',
                a: '일시적 2주택 취득세 중과 예외가 있습니다. 종전 주택 취득 후 1년 이상 지난 뒤 신규 주택을 취득하고, 신규 취득일로부터 3년 이내에 종전 주택을 처분하면 1~3% 일반세율이 적용됩니다(지방세법 제13조의2 제5항). 이 기한을 놓치면 차액을 추가 납부해야 합니다.',
              },
            ].map((item, i) => (
              <details key={i} className="group border border-stone-100 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer select-none hover:bg-stone-50 transition-colors">
                  <span className="text-xs font-semibold text-stone-700 pr-4">{item.q}</span>
                  <svg className="w-3.5 h-3.5 text-stone-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-3 text-xs text-stone-600 leading-relaxed border-t border-stone-50 pt-2.5">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        <AdBanner slot="acquisition-tax-bottom" className="my-8" />

        {/* 관련 글 */}
        <section className="mt-6">
          <h2 className="text-xs font-semibold text-stone-500 mb-3 uppercase tracking-wide">관련 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/blog/acquisition-tax-2026', title: '취득세율 총정리 2026', desc: '1·2·3주택 세율 한눈에 보기' },
              { href: '/blog/adjusted-area-acquisition-tax', title: '조정대상지역 취득세 중과', desc: '어떤 지역이 조정지역인가' },
              { href: '/blog/new-apartment-acquisition-tax', title: '신축 분양 아파트 취득세', desc: '분양가 기준 계산법' },
              { href: '/blog/first-home-acquisition-tax-reduction', title: '생애최초 취득세 감면', desc: '최대 200만원 감면 조건' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className="block border border-stone-100 rounded-lg p-3 hover:border-stone-300 transition-colors">
                <p className="text-xs font-medium text-stone-700 mb-0.5">{item.title}</p>
                <p className="text-xs text-stone-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap gap-2">
          {[
            { href: '/대출-계산기', label: '대출' },
            { href: '/양도소득세-계산기', label: '양도소득세' },
            { href: '/증여세-계산기', label: '증여세' },
            { href: '/종부세-계산기', label: '종부세' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="px-3 py-1.5 text-xs text-stone-500 border border-stone-200 rounded-lg hover:border-stone-400 hover:text-stone-700 transition-colors">
              {item.label} 계산기
            </Link>
          ))}
        </div>

        <p className="mt-6 text-[11px] text-stone-400 leading-relaxed">
          본 계산기는 참고용이며 실제 세액과 차이가 있을 수 있습니다. 정확한 세액은 관할 세무서 또는 세무사에게 확인하세요. 근거 법령: 지방세법 제7조·제11조·제13조의2
        </p>
      </div>
    </div>
  )
}
