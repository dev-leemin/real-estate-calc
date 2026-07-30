import type { Metadata } from 'next'
import GiftTaxCalc from './GiftTaxCalc'
import AdBanner from '@/components/AdBanner'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '증여세 계산기 - 배우자·자녀·기타 관계별 공제액 자동 적용',
  description:
    '증여재산가액과 관계(배우자 6억, 자녀 5천만원, 미성년 2천만원)를 선택하면 증여세를 즉시 계산합니다. 2026년 상속·증여세법 기준.',
  alternates: { canonical: 'https://calc.friz.dev/%EC%A6%9D%EC%97%AC%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '자녀에게 증여할 때 공제 한도가 얼마인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '성인 자녀에게는 10년간 5,000만원까지 공제됩니다. 미성년 자녀는 10년간 2,000만원입니다. 2024년 세법 개정으로 혼인·출산 시 추가 1억원 공제(합산 최대 1억 5,000만원)가 신설됐습니다(상속세 및 증여세법 제53조).',
      },
    },
    {
      '@type': 'Question',
      name: '10년마다 증여 공제가 초기화되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 증여재산공제는 동일인(직계존속끼리는 합산)으로부터 10년간 받은 증여액의 합계를 기준으로 합니다. 따라서 10년이 경과하면 공제 한도가 다시 적용됩니다. 이를 활용한 사전 증여 절세 전략이 많이 활용됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '배우자에게 아파트를 증여하면 세금이 얼마나 나오나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '배우자 증여 공제 한도는 6억원으로, 6억원 이하 증여는 세금이 없습니다. 예를 들어 시가 5억원짜리 아파트를 배우자에게 증여하면 증여세는 0원입니다. 다만 취득세(3.5%)와 증여 후 종부세 등 보유세 변화를 별도로 검토해야 합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '증여세 신고는 언제까지 해야 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '증여받은 날이 속하는 달의 말일로부터 3개월 이내에 신고·납부해야 합니다(상속세 및 증여세법 제68조). 예를 들어 5월 10일 증여라면 8월 31일까지입니다. 기한 내 신고하면 납부세액의 3%를 공제해주는 신고세액공제도 있었으나 2023년부터 폐지됐습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '증여와 상속 중 어느 쪽이 세금이 적나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '일반적으로 재산이 많고 예상 수명이 길다면 사전 증여가 유리합니다. 상속세는 피상속인 사망 시 전체 재산을 일시에 과세하지만, 증여는 10년 단위로 나눠 낮은 세율을 적용할 수 있습니다. 단 사망 전 10년 이내 상속인에게 증여한 재산은 상속세 과세가액에 합산됩니다.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.friz.dev' },
    { '@type': 'ListItem', position: 2, name: '증여세 계산기', item: 'https://calc.friz.dev/%EC%A6%9D%EC%97%AC%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function GiftTaxPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <div className="mb-5">
          <nav className="text-xs text-stone-400 mb-3">
            <Link href="/" className="hover:text-stone-600">홈</Link>
            <span className="mx-1.5">/</span>
            <span>증여세 계산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">증여세 계산기</h1>
          <p className="mt-1 text-sm text-stone-500">관계별 공제 한도 자동 적용 · 2026년 상속·증여세법 기준</p>
        </div>

        <GiftTaxCalc />

        <AdBanner slot="gift-tax-mid" className="my-8" />

        {/* 공제 한도 & 세율표 */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">관계별 증여재산공제 한도 (10년 기준)</h2>
          <div className="overflow-x-auto rounded-xl border border-stone-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-500">
                  <th className="text-left px-3 py-2.5 font-semibold">증여자 관계</th>
                  <th className="text-center px-3 py-2.5 font-semibold">공제 한도</th>
                  <th className="text-left px-3 py-2.5 font-semibold">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                <tr>
                  <td className="px-3 py-2.5 text-stone-700">배우자</td>
                  <td className="px-3 py-2.5 text-center font-bold text-green-700">6억원</td>
                  <td className="px-3 py-2.5 text-stone-500">법률혼 기준</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="px-3 py-2.5 text-stone-700">직계존속 → 성인 자녀</td>
                  <td className="px-3 py-2.5 text-center font-bold text-stone-800">5,000만원</td>
                  <td className="px-3 py-2.5 text-stone-500">부모·조부모 합산</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5 text-stone-700">직계존속 → 미성년 자녀</td>
                  <td className="px-3 py-2.5 text-center font-bold text-stone-800">2,000만원</td>
                  <td className="px-3 py-2.5 text-stone-500">만 19세 미만</td>
                </tr>
                <tr className="bg-amber-50/60">
                  <td className="px-3 py-2.5 text-stone-700">혼인·출산 추가공제</td>
                  <td className="px-3 py-2.5 text-center font-bold text-amber-700">1억원</td>
                  <td className="px-3 py-2.5 text-stone-500">2024년 신설, 합산 최대 1.5억</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="px-3 py-2.5 text-stone-700">직계비속 (자녀 → 부모)</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-stone-800">5,000만원</td>
                  <td className="px-3 py-2.5 text-stone-500"></td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5 text-stone-700">기타 친족 (형제자매 등)</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-stone-800">1,000만원</td>
                  <td className="px-3 py-2.5 text-stone-500">6촌 이내 혈족</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-stone-400">근거: 상속세 및 증여세법 제53조 / 10년 내 동일인 증여액 합산 적용</p>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-bold text-stone-800 mb-3">증여세 세율표</h2>
          <div className="overflow-x-auto rounded-xl border border-stone-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-500">
                  <th className="text-left px-3 py-2.5 font-semibold">과세표준 (공제 후 금액)</th>
                  <th className="text-center px-3 py-2.5 font-semibold">세율</th>
                  <th className="text-center px-3 py-2.5 font-semibold">누진공제</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {[
                  ['1억원 이하', '10%', '—'],
                  ['1억원 ~ 5억원', '20%', '1,000만원'],
                  ['5억원 ~ 10억원', '30%', '6,000만원'],
                  ['10억원 ~ 30억원', '40%', '1억 6,000만원'],
                  ['30억원 초과', '50%', '4억 6,000만원'],
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
          <p className="mt-2 text-[11px] text-stone-400">근거: 상속세 및 증여세법 제56조</p>
        </section>

        {/* 계산 예시 */}
        <section className="mt-6">
          <h2 className="text-sm font-bold text-stone-800 mb-3">계산 예시</h2>
          <div className="border border-stone-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-stone-700 mb-2">예시: 부모가 성인 자녀에게 현금 1억원 증여 (이전 10년간 증여 없음)</p>
            <div className="space-y-1 text-xs text-stone-600">
              <div className="flex justify-between"><span>증여재산가액</span><span className="font-semibold tabular-nums">1억원</span></div>
              <div className="flex justify-between"><span>증여재산공제 (직계존속→성인자녀)</span><span className="tabular-nums text-green-700">— 5,000만원</span></div>
              <div className="flex justify-between"><span>과세표준</span><span className="font-semibold tabular-nums">5,000만원</span></div>
              <div className="flex justify-between"><span>산출세액 (5,000만원 × 20% — 1,000만원)</span><span className="font-semibold tabular-nums">0원</span></div>
              <div className="flex justify-between pt-2 border-t border-stone-100 font-bold text-stone-800">
                <span>납부세액</span>
                <span className="tabular-nums text-amber-600">0원</span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-stone-400">※ 5,000만원 × 20% = 1,000만원 — 누진공제 1,000만원 = 0원</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">자주 묻는 질문</h2>
          <div className="space-y-2">
            {[
              {
                q: '10년마다 증여 공제가 다시 적용되나요?',
                a: '네. 증여재산공제는 10년 단위로 누적 증여액을 합산합니다. 10년이 지나면 새로운 공제 한도가 다시 적용됩니다. 예를 들어 부모가 자녀에게 2015년에 5천만원, 2025년에 다시 5천만원을 증여하면 두 번 모두 세금 없이 증여가 가능합니다.',
              },
              {
                q: '미성년 자녀에게 2천만원 초과해서 증여하면 어떻게 되나요?',
                a: '미성년 자녀 공제 한도(2천만원) 초과분에 대해 증여세가 부과됩니다. 예를 들어 5천만원을 증여하면 3천만원에 대해 10% = 300만원의 증여세가 나옵니다. 단, 성인(만 19세)이 된 이후 10년 단위로 추가 증여 시 성인 기준 5천만원 공제가 다시 적용됩니다.',
              },
              {
                q: '증여 후 해당 부동산을 바로 팔면 문제가 되나요?',
                a: '증여 받은 부동산을 5년 이내에 매도하면 이월과세가 적용될 수 있습니다. 이 경우 수증자의 취득가액이 아닌 증여자의 취득가액 기준으로 양도소득세가 계산되어 세금이 오히려 많아질 수 있습니다. 5년 이상 보유 후 매도하거나 전문가 상담이 필요합니다.',
              },
              {
                q: '증여세 신고를 안 하면 어떻게 되나요?',
                a: '증여일로부터 3개월 내 신고 의무가 있습니다. 신고하지 않으면 무신고가산세(납부세액의 20%)와 납부지연가산세(1일 0.022%)가 부과됩니다. 공제 한도 이하여서 납부세액이 0원이더라도 신고는 하는 것이 안전합니다. 미신고 시 향후 조사 시 불이익이 생길 수 있습니다.',
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

        <AdBanner slot="gift-tax-bottom" className="my-8" />

        <section className="mt-6">
          <h2 className="text-xs font-semibold text-stone-500 mb-3 uppercase tracking-wide">관련 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
        </section>

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

        <p className="mt-6 text-[11px] text-stone-400 leading-relaxed">
          본 계산기는 참고용이며 실제 세액과 다를 수 있습니다. 증여 계획은 세무사 상담을 권장합니다. 근거: 상속세 및 증여세법 제53조·제56조·제68조
        </p>
      </div>
    </div>
  )
}
