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

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '양도소득세 계산하는 방법',
  description: '부동산 매도 시 납부해야 할 양도소득세를 계산하는 방법',
  step: [
    { '@type': 'HowToStep', name: '취득가액·양도가액 입력', text: '부동산을 취득했을 때와 매도할 때의 가격을 입력합니다.' },
    { '@type': 'HowToStep', name: '보유기간·거주기간 입력', text: '실제 보유한 기간과 거주한 기간을 입력합니다.' },
    { '@type': 'HowToStep', name: '주택 수·지역 선택', text: '매도 시점의 주택 수와 조정대상지역 여부를 선택합니다.' },
    { '@type': 'HowToStep', name: '결과 확인', text: '양도차익, 장기보유공제, 과세표준, 납부세액을 확인합니다.' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '1주택 비과세 조건이 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1주택 비과세는 ① 2년 이상 보유, ② 양도가액 12억원 이하, ③ 매도 시점에 1주택자일 것의 세 가지 조건을 충족해야 합니다. 2017년 8월 3일 이후 조정대상지역에서 취득한 주택은 2년 거주 요건이 추가됩니다(소득세법 제89조).',
      },
    },
    {
      '@type': 'Question',
      name: '장기보유특별공제 최대 80%는 어떻게 받나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1주택자가 보유 10년 이상, 거주 10년 이상이면 장기보유특별공제 80%를 받을 수 있습니다. 보유기간 공제(연 4%, 최대 40%)와 거주기간 공제(연 4%, 최대 40%)를 합산합니다. 보유만 하고 거주하지 않은 경우 연 2%, 최대 30%까지만 공제됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '일시적 2주택이면 양도세가 비과세되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '일시적 2주택 비과세 특례가 있습니다. 신규 주택 취득 후 3년 이내에 종전 주택을 매도하면 비과세 혜택을 받을 수 있습니다. 다만 조정대상지역에서는 2년 이내 처분 조건이 적용될 수 있으므로 취득 시점과 지역을 확인해야 합니다(소득세법 시행령 제155조).',
      },
    },
    {
      '@type': 'Question',
      name: '양도소득세 신고는 언제까지 해야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '양도소득세는 양도일이 속하는 달의 말일로부터 2개월 이내에 예정신고·납부해야 합니다(소득세법 제105조). 예를 들어 6월 15일에 잔금을 받았다면 8월 31일까지 신고해야 합니다. 기한을 넘기면 무신고가산세 20%와 납부지연가산세가 부과됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '필요경비로 인정받을 수 있는 항목은 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '양도소득세 계산 시 취득가액 외에 필요경비로 공제받을 수 있는 항목은 ① 취득 시 중개수수료, ② 취득세·등록세, ③ 법무사 비용, ④ 자본적 지출(발코니 확장, 샷시 교체 등 구조 변경 비용), ⑤ 양도 시 중개수수료 등입니다. 단순 수선비(도배, 장판 교체)는 필요경비로 인정되지 않습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '다주택자는 양도세가 얼마나 더 높나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '조정대상지역 내 다주택자는 중과세율이 적용됩니다. 2주택자는 기본세율 + 20%p, 3주택 이상은 기본세율 + 30%p가 가산됩니다. 기본세율 최고 45%에 가산세율까지 더하면 최대 75%에 달할 수 있습니다. 또한 장기보유특별공제도 적용되지 않습니다.',
      },
    },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>양도소득세 계산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">양도소득세 계산기</h1>
          <p className="mt-1 text-sm text-stone-500">1주택 비과세 판별 · 장기보유특별공제 최대 80% 자동 반영</p>
        </div>

        <CapitalGainsTaxCalc />

        <AdBanner slot="capital-gains-mid" className="my-8" />

        {/* 과세표준 세율표 */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">2026년 양도소득세 세율표</h2>
          <div className="overflow-x-auto rounded-xl border border-stone-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-500">
                  <th className="text-left px-3 py-2.5 font-semibold">과세표준</th>
                  <th className="text-center px-3 py-2.5 font-semibold">세율</th>
                  <th className="text-center px-3 py-2.5 font-semibold">누진공제</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {[
                  ['1,400만원 이하', '6%', '—'],
                  ['1,400만원 ~ 5,000만원', '15%', '126만원'],
                  ['5,000만원 ~ 8,800만원', '24%', '576만원'],
                  ['8,800만원 ~ 1.5억원', '35%', '1,544만원'],
                  ['1.5억원 ~ 3억원', '38%', '1,994만원'],
                  ['3억원 ~ 5억원', '40%', '2,594만원'],
                  ['5억원 ~ 10억원', '42%', '3,594만원'],
                  ['10억원 초과', '45%', '6,594만원'],
                ].map(([range, rate, deduction], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-stone-50/50' : ''}>
                    <td className="px-3 py-2.5 text-stone-700">{range}</td>
                    <td className="px-3 py-2.5 text-center font-semibold text-stone-800">{rate}</td>
                    <td className="px-3 py-2.5 text-center text-stone-500">{deduction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-stone-400">근거: 소득세법 제104조 / 지방소득세 10% 별도 (위 세율의 10% 추가 납부)</p>
        </section>

        {/* 장기보유특별공제율 */}
        <section className="mt-6">
          <h2 className="text-sm font-bold text-stone-800 mb-3">장기보유특별공제율 (1주택자)</h2>
          <div className="overflow-x-auto rounded-xl border border-stone-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-500">
                  <th className="text-left px-3 py-2.5 font-semibold">보유기간</th>
                  <th className="text-center px-3 py-2.5 font-semibold">거주 2년 미만</th>
                  <th className="text-center px-3 py-2.5 font-semibold">거주 2년 이상</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {[
                  ['3년', '6%', '24%'],
                  ['4년', '8%', '32%'],
                  ['5년', '10%', '40%'],
                  ['6년', '12%', '48%'],
                  ['7년', '14%', '56%'],
                  ['8년', '16%', '64%'],
                  ['9년', '18%', '72%'],
                  ['10년 이상', '20~30%', '80% (최대)'],
                ].map(([period, noRes, withRes], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-stone-50/50' : ''}>
                    <td className="px-3 py-2.5 text-stone-700">{period}</td>
                    <td className="px-3 py-2.5 text-center text-stone-600">{noRes}</td>
                    <td className="px-3 py-2.5 text-center font-semibold text-green-700">{withRes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-stone-400">근거: 소득세법 제95조 / 다주택자는 장기보유특별공제 미적용</p>
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">자주 묻는 질문</h2>
          <div className="space-y-2">
            {[
              {
                q: '1주택 비과세 조건이 무엇인가요?',
                a: '① 2년 이상 보유, ② 양도가액 12억원 이하, ③ 매도 시점에 1주택자. 이 세 가지를 모두 충족해야 합니다. 2017년 8월 3일 이후 조정대상지역에서 취득한 주택은 2년 거주 요건이 추가됩니다. 12억원 초과분에 대해서는 비례 과세가 됩니다.',
              },
              {
                q: '장기보유특별공제 80%를 받으려면 어떻게 해야 하나요?',
                a: '1주택자로서 보유 10년 이상 + 거주 10년 이상이어야 합니다. 보유기간 공제(연 4%, 최대 40%)와 거주기간 공제(연 4%, 최대 40%)를 합산해 최대 80%를 공제받습니다. 단, 거주하지 않고 보유만 한 경우 최대 30%까지만 적용됩니다.',
              },
              {
                q: '일시적 2주택 비과세 특례 조건은?',
                a: '신규 주택 취득 후 3년 이내에 종전 주택을 매도하면 1주택 비과세 적용이 가능합니다. 조정대상지역에서는 지역별 기한이 다를 수 있으므로 취득 시점과 지역을 확인하세요. 이 기한 내 처분하지 못하면 양도세가 발생합니다.',
              },
              {
                q: '양도소득세 신고 기한은 언제까지인가요?',
                a: '양도일(잔금일)이 속하는 달의 말일부터 2개월 이내에 예정신고·납부해야 합니다. 예를 들어 6월 15일 잔금이라면 8월 31일까지입니다. 기한 초과 시 무신고가산세 20%와 납부지연가산세가 부과됩니다.',
              },
              {
                q: '수리비나 인테리어 비용도 필요경비가 되나요?',
                a: '자본적 지출(발코니 확장, 샷시 교체, 주방 리모델링 등 구조·기능 향상 비용)은 필요경비로 인정됩니다. 반면 단순 수선비(도배, 장판, 싱크대 교체 등)는 인정되지 않습니다. 자본적 지출은 반드시 영수증을 보관해야 합니다.',
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

        <AdBanner slot="capital-gains-bottom" className="my-8" />

        <section className="mt-6">
          <h2 className="text-xs font-semibold text-stone-500 mb-3 uppercase tracking-wide">관련 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
        </section>

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

        <p className="mt-6 text-[11px] text-stone-400 leading-relaxed">
          본 계산기는 참고용이며 실제 세액과 다를 수 있습니다. 정확한 세액은 세무사 상담을 권장합니다. 근거: 소득세법 제89조·제94조·제95조·제104조
        </p>
      </div>
    </div>
  )
}
