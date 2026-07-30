import type { Metadata } from 'next'
import ComprehensiveTaxCalc from './ComprehensiveTaxCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '종합부동산세(종부세) 계산기 - 2026년 공시가격 기준 자동 계산',
  description:
    '공시가격, 주택 수(1주택 12억·다주택 9억 공제), 고령자·장기보유 세액공제를 반영한 종합부동산세를 즉시 계산합니다.',
  alternates: { canonical: 'https://calc.friz.dev/%EC%A2%85%EB%B6%80%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '종합부동산세는 누가 납부하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '매년 6월 1일 기준으로 주택 공시가격 합계가 1주택자는 12억원, 다주택자는 9억원을 초과하는 경우 납부 대상입니다. 납부 기간은 매년 12월 1일~15일이며(종합부동산세법 제16조), 고지서가 발송됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '공시가격과 시세는 어떻게 다른가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '공시가격(공동주택공시가격)은 국토부가 매년 4월 말 발표하는 공식 가격으로, 시세(실거래가)의 약 60~80% 수준입니다. 종부세·재산세·건강보험료 등 각종 세금의 기준으로 사용됩니다. 공시가격은 부동산공시가격알리미(www.realtyprice.kr)에서 확인할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '고령자 세액공제는 얼마나 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1주택자 고령자 세액공제는 만 60세 이상 20%, 만 65세 이상 30%, 만 70세 이상 40%가 적용됩니다. 장기보유 공제(5년 이상 20%, 10년 이상 40%, 15년 이상 50%)와 합산 적용되며, 두 공제의 합산 한도는 80%입니다(종합부동산세법 제9조).',
      },
    },
    {
      '@type': 'Question',
      name: '1세대 1주택자 특례란 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '세대원 전원이 1주택만 보유한 경우 공제금액이 12억원으로 높아지고, 고령자·장기보유 세액공제가 적용됩니다. 부부 공동명의 1주택자는 각 6억원씩 총 12억원 공제를 받거나, 단독명의 1주택자 특례를 선택할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '종부세를 분납할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '납부할 세액이 250만원을 초과하는 경우 납부 기간 종료일 다음날부터 6개월 이내에 분납할 수 있습니다. 500만원 초과 시 50% 이하 분납, 250만원~500만원은 250만원 초과분 분납이 가능합니다(종합부동산세법 제20조).',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.friz.dev' },
    { '@type': 'ListItem', position: 2, name: '종합부동산세 계산기', item: 'https://calc.friz.dev/%EC%A2%85%EB%B6%80%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function ComprehensiveTaxPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>종합부동산세 계산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">종합부동산세 계산기</h1>
          <p className="mt-1 text-sm text-stone-500">공시가격 기준 · 고령자·장기보유 세액공제 자동 반영</p>
        </div>

        <ComprehensiveTaxCalc />

        <AdBanner slot="comprehensive-tax-mid" className="my-8" />

        {/* 세율표 */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">2026년 종합부동산세 세율표</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-semibold text-stone-600 mb-2">1주택자 · 조정지역 외 2주택자</p>
              <div className="overflow-x-auto rounded-xl border border-stone-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-stone-50 text-stone-500">
                      <th className="text-left px-3 py-2 font-semibold">과세표준</th>
                      <th className="text-center px-3 py-2 font-semibold">세율</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-50">
                    {[
                      ['3억 이하', '0.5%'],
                      ['3억~6억', '0.7%'],
                      ['6억~12억', '1.0%'],
                      ['12억~25억', '1.3%'],
                      ['25억~50억', '1.5%'],
                      ['50억~94억', '2.0%'],
                      ['94억 초과', '2.7%'],
                    ].map(([range, rate], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-stone-50/50' : ''}>
                        <td className="px-3 py-2 text-stone-600">{range}</td>
                        <td className="px-3 py-2 text-center font-semibold text-stone-800">{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-600 mb-2">2주택 이상 (조정지역 2주택 포함)</p>
              <div className="overflow-x-auto rounded-xl border border-stone-100">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-stone-50 text-stone-500">
                      <th className="text-left px-3 py-2 font-semibold">과세표준</th>
                      <th className="text-center px-3 py-2 font-semibold">세율</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-50">
                    {[
                      ['3억 이하', '0.5%'],
                      ['3억~6억', '0.7%'],
                      ['6억~12억', '1.0%'],
                      ['12억~25억', '1.3%'],
                      ['25억~50억', '1.5%'],
                      ['50억~94억', '2.0%'],
                      ['94억 초과', '2.7%'],
                    ].map(([range, rate], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-stone-50/50' : ''}>
                        <td className="px-3 py-2 text-stone-600">{range}</td>
                        <td className="px-3 py-2 text-center font-semibold text-red-600">{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-stone-400">근거: 종합부동산세법 제9조 / 공정시장가액비율 60% 적용 / 농어촌특별세: 종부세의 20% 추가</p>
        </section>

        {/* 계산 구조 */}
        <section className="mt-6">
          <h2 className="text-sm font-bold text-stone-800 mb-3">종부세 계산 구조</h2>
          <div className="border border-stone-100 rounded-xl divide-y divide-stone-50">
            {[
              { step: '①', label: '주택 공시가격 합산', desc: '보유 주택 전체의 공동주택공시가격 합계' },
              { step: '②', label: '공제금액 차감', desc: '1주택자 12억원 / 다주택자 9억원 공제' },
              { step: '③', label: '공정시장가액비율 적용', desc: '60% 곱하기 → 과세표준' },
              { step: '④', label: '세율 적용 → 산출세액', desc: '과세표준 구간별 세율 × 누진공제' },
              { step: '⑤', label: '세액공제 차감', desc: '고령자 공제(최대 40%) + 장기보유 공제(최대 50%)' },
              { step: '⑥', label: '최종 납부세액', desc: '농어촌특별세(종부세의 20%) 별도 추가' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3">
                <span className="text-xs font-bold text-amber-600 shrink-0 w-5">{item.step}</span>
                <div>
                  <p className="text-xs font-semibold text-stone-700">{item.label}</p>
                  <p className="text-[11px] text-stone-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">자주 묻는 질문</h2>
          <div className="space-y-2">
            {[
              {
                q: '종합부동산세는 언제 납부하나요?',
                a: '종부세 납부 기간은 매년 12월 1일~15일입니다. 고지서는 11월에 발송됩니다. 6월 1일 기준 주택 보유자가 대상이므로, 5월 31일 이전에 매도하면 그 해 종부세는 납부하지 않아도 됩니다.',
              },
              {
                q: '공시가격은 어디서 확인하나요?',
                a: '부동산공시가격알리미(www.realtyprice.kr) 또는 국토교통부 공동주택공시가격 시스템에서 확인할 수 있습니다. 매년 4월 말에 고시되며, 이의신청 기간(5월 중)에 이의를 제기할 수 있습니다.',
              },
              {
                q: '고령자와 장기보유 공제를 동시에 받을 수 있나요?',
                a: '네, 두 공제를 합산 적용할 수 있습니다. 단, 합산 한도는 80%입니다. 예를 들어 만 70세(고령자 40%) + 보유 15년(장기보유 50%)이면 두 공제 합계 90%지만, 한도 80%까지만 적용됩니다.',
              },
              {
                q: '부부 공동명의 아파트는 어떻게 계산되나요?',
                a: '부부 공동명의 1주택의 경우 각자가 지분만큼 보유한 것으로 보아 각각 6억원을 공제받습니다(합산 12억원 효과). 또는 단독명의 1주택자 특례(12억원 공제 + 고령자·장기보유 공제)를 선택할 수도 있습니다. 어느 쪽이 유리한지는 나이와 보유 기간에 따라 다릅니다.',
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

        <AdBanner slot="comprehensive-tax-bottom" className="my-8" />

        <section className="mt-6">
          <h2 className="text-xs font-semibold text-stone-500 mb-3 uppercase tracking-wide">관련 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/blog/comprehensive-tax-guide', title: '종합부동산세 계산법', desc: '세율과 절세 포인트 정리' },
              { href: '/blog/gift-vs-inheritance', title: '부동산 증여 vs 상속', desc: '종부세 절감을 위한 선택' },
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
            { href: '/양도소득세-계산기', label: '양도소득세' },
            { href: '/증여세-계산기', label: '증여세' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="px-3 py-1.5 text-xs text-stone-500 border border-stone-200 rounded-lg hover:border-stone-400 hover:text-stone-700 transition-colors">
              {item.label} 계산기
            </Link>
          ))}
        </div>

        <p className="mt-6 text-[11px] text-stone-400 leading-relaxed">
          본 계산기는 참고용이며 실제 세액과 다를 수 있습니다. 정확한 세액은 국세청 홈택스 또는 세무사에게 확인하세요. 근거: 종합부동산세법 제9조·제16조·제20조
        </p>
      </div>
    </div>
  )
}
