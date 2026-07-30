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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '전월세 전환율이란 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '전월세 전환율은 전세금을 월세로 환산할 때 적용하는 연간 수익률입니다. 예를 들어 전환율 5%라면 전세금 1억원은 연 500만원, 월 약 42만원의 월세에 해당합니다. 주택임대차보호법 제7조의2에 따라 법정 전환율 상한이 있으며, 2026년 기준 한국은행 기준금리 + 3.5%포인트 이내입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '전세와 월세 중 어느 쪽이 유리한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '전세 대출금리가 전월세 전환율보다 낮으면 전세가 유리합니다. 반대로 전환율이 대출금리보다 낮다면 월세가 나을 수 있습니다. 예를 들어 전세 대출금리 3.5%, 전환율 5%라면 전세 쪽 이자 부담(3.5%)이 월세 환산 금리(5%)보다 낮아 전세가 유리합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '반전세(보증금 + 월세)를 전세로 환산하려면 어떻게 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '반전세를 전세로 환산하는 공식: 전세 환산가 = 보증금 + (월세 × 12 ÷ 전환율). 예를 들어 보증금 1억원, 월세 50만원, 전환율 5%라면 전세 환산가 = 1억 + (50만 × 12 ÷ 0.05) = 1억 + 1억 2천만 = 2억 2천만원입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '집주인이 전환율을 마음대로 올릴 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '아니요. 주택임대차보호법 제7조의2에 따라 법정 전환율 상한이 있습니다. 상한을 초과하는 전환율로 월세를 올리면 임차인은 이를 거부하고 법정 상한율 기준으로 월세를 낼 수 있습니다. 2026년 상한은 한국은행 기준금리에 3.5%포인트를 더한 값입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '전세 대출이자가 월세보다 쌀 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 가능합니다. 전세 대출금리가 낮을 때는 전세 대출이자 부담이 월세보다 쌀 수 있습니다. 예시: 전세금 3억원, 대출금리 3%, 월세 75만원이라면 전세 대출이자 = 3억 × 3% ÷ 12 = 월 75만원으로 동일합니다. 대출금리가 3% 이하라면 전세가 유리합니다.',
      },
    },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>전세·월세 환산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">전세·월세 환산 계산기</h1>
          <p className="mt-1 text-sm text-stone-500">전월세 전환율 기준 · 전세 대출이자 vs 월세 비용 비교</p>
        </div>

        <RentConvertCalc />

        <AdBanner slot="rent-mid" className="my-8" />

        {/* 전환율 설명 */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">전월세 전환 공식</h2>
          <div className="space-y-3">
            <div className="border border-stone-100 rounded-xl p-4">
              <p className="text-xs font-bold text-stone-700 mb-2">전세 → 월세 환산</p>
              <div className="bg-stone-50 rounded-lg px-4 py-3 font-mono text-xs text-stone-700 mb-2">
                월세 = (전세금 − 보증금) × 전환율 ÷ 12
              </div>
              <p className="text-xs text-stone-600">예) 전세 3억원을 보증금 5천만원 + 월세로 전환, 전환율 5% → 월세 = (3억 − 5천만) × 5% ÷ 12 = 104만원</p>
            </div>
            <div className="border border-stone-100 rounded-xl p-4">
              <p className="text-xs font-bold text-stone-700 mb-2">월세 → 전세 환산</p>
              <div className="bg-stone-50 rounded-lg px-4 py-3 font-mono text-xs text-stone-700 mb-2">
                전세 환산가 = 보증금 + 월세 × 12 ÷ 전환율
              </div>
              <p className="text-xs text-stone-600">예) 보증금 5천만원, 월세 80만원, 전환율 5% → 전세 환산가 = 5천만 + 80만 × 12 ÷ 0.05 = 2억 4,200만원</p>
            </div>
          </div>
        </section>

        {/* 전세 vs 월세 비교표 */}
        <section className="mt-6">
          <h2 className="text-sm font-bold text-stone-800 mb-3">전세 대출이자 vs 월세 비용 비교 (전세 3억원 기준)</h2>
          <div className="overflow-x-auto rounded-xl border border-stone-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-500">
                  <th className="text-left px-3 py-2.5 font-semibold">전세 대출금리</th>
                  <th className="text-center px-3 py-2.5 font-semibold">월 이자 부담</th>
                  <th className="text-center px-3 py-2.5 font-semibold">동일 전환율 5% 월세</th>
                  <th className="text-center px-3 py-2.5 font-semibold">유리한 쪽</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {[
                  ['2.5%', '62만원', '125만원', '전세'],
                  ['3.5%', '88만원', '125만원', '전세'],
                  ['5.0%', '125만원', '125만원', '동일'],
                  ['6.5%', '163만원', '125만원', '월세'],
                ].map(([rate, interest, rent, winner], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-stone-50/50' : ''}>
                    <td className="px-3 py-2.5 text-stone-700">{rate}</td>
                    <td className="px-3 py-2.5 text-center tabular-nums text-stone-600">{interest}</td>
                    <td className="px-3 py-2.5 text-center tabular-nums text-stone-600">{rent}</td>
                    <td className={`px-3 py-2.5 text-center font-semibold ${winner === '전세' ? 'text-green-700' : winner === '월세' ? 'text-amber-700' : 'text-stone-500'}`}>
                      {winner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-stone-400">* 전세 3억원 전액 대출 기준 / 전환율 5% 기준 / 실제 상황과 다를 수 있음</p>
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">자주 묻는 질문</h2>
          <div className="space-y-2">
            {[
              {
                q: '전월세 전환율이란 무엇인가요?',
                a: '전세금을 월세로 환산할 때 적용하는 연간 수익률입니다. 예를 들어 전환율 5%라면 전세금 1억원은 연 500만원 = 월 약 42만원의 월세에 해당합니다. 주택임대차보호법 제7조의2에 따라 법정 상한이 있으며 2026년 기준 한국은행 기준금리 + 3.5%포인트 이내입니다.',
              },
              {
                q: '전세와 월세 중 어느 쪽이 실제로 유리한가요?',
                a: '전세 대출금리 < 전월세 전환율이면 전세가 유리, 반대면 월세가 유리합니다. 단, 전세는 목돈이 필요하고 전세 사기 리스크가 있습니다. 월세는 목돈 부담은 없지만 매월 고정 지출이 생깁니다. 상황에 따라 달리 판단해야 합니다.',
              },
              {
                q: '집주인이 전환율을 법정 상한 이상으로 요구하면 어떻게 하나요?',
                a: '법정 상한을 초과하는 전환율은 무효입니다. 임차인은 상한율 기준으로만 납부할 권리가 있고, 초과분을 부당이득으로 반환 청구할 수 있습니다. 분쟁 시 주택임대차분쟁조정위원회(국토부)에 조정을 신청할 수 있습니다.',
              },
              {
                q: '전세 계약 중 월세로 전환할 수 있나요?',
                a: '임대인과 합의하면 계약 중에도 전환이 가능합니다. 다만 법정 전환율 상한을 초과할 수 없으며, 계약서 변경(갱신) 형태로 진행합니다. 임차인의 동의 없이는 전환할 수 없습니다.',
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

        <AdBanner slot="rent-bottom" className="my-8" />

        <section className="mt-6">
          <h2 className="text-xs font-semibold text-stone-500 mb-3 uppercase tracking-wide">관련 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
        </section>

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

        <p className="mt-6 text-[11px] text-stone-400 leading-relaxed">
          본 계산기는 참고용이며 실제 조건과 다를 수 있습니다. 근거: 주택임대차보호법 제7조의2 / 법정 전환율 상한: 한국은행 기준금리 + 3.5%포인트
        </p>
      </div>
    </div>
  )
}
