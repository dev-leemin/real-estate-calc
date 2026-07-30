import type { Metadata } from 'next'
import LoanCalc from './LoanCalc'
import AdBanner from '@/components/AdBanner'
import LoanMethodCompare from '@/components/LoanMethodCompare'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '대출 상환 계산기 - 원리금균등·원금균등·만기일시 월 납입액 계산',
  description:
    '대출금액, 이자율, 기간을 입력하면 월 납입액과 총 이자를 즉시 계산합니다. 원리금균등·원금균등·만기일시상환 비교, 상환 일정표 제공.',
  alternates: { canonical: 'https://calc.friz.dev/%EB%8C%80%EC%B6%9C-%EA%B3%84%EC%82%B0%EA%B8%B0' },
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '대출 상환액 계산하는 방법',
  description: '대출금액, 금리, 기간을 기준으로 월 납입액과 총 이자를 계산하는 방법',
  step: [
    { '@type': 'HowToStep', name: '대출금액 입력', text: '실제 대출받을 금액을 입력합니다.' },
    { '@type': 'HowToStep', name: '연 이자율 입력', text: '은행에서 제시받은 연 이자율(%)을 입력합니다.' },
    { '@type': 'HowToStep', name: '대출 기간 입력', text: '상환 기간을 년 단위로 입력합니다.' },
    { '@type': 'HowToStep', name: '상환 방식 선택', text: '원리금균등, 원금균등, 만기일시상환 중 선택합니다.' },
    { '@type': 'HowToStep', name: '결과 확인', text: '월 납입액, 총 이자, 총 상환금액을 확인합니다.' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '원리금균등과 원금균등 중 어느 방식이 유리한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '총 이자 부담은 원금균등상환이 더 적습니다. 원리금균등은 매달 동일한 금액을 내므로 가계 계획이 쉽고, 원금균등은 초기 납입액이 크지만 원금이 빨리 줄어 이자를 절약할 수 있습니다. 예를 들어 3억원, 4%, 30년 기준으로 원리금균등은 총 이자 약 2억 1천만원, 원금균등은 약 1억 8천만원입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '변동금리 대출은 어떻게 계산하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '변동금리는 기준금리(COFIX, CD금리 등)에 가산금리를 더해 결정되며, 주로 6개월 또는 1년 단위로 재조정됩니다. 계산기에는 현재 금리를 입력하면 되고, 금리 변동에 따른 추가 이자는 별도로 감안해야 합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '중도상환을 하면 수수료가 얼마나 붙나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '중도상환수수료는 은행별·상품별로 다르지만 일반적으로 잔여 대출금의 0.5~2% 수준입니다. 대출 실행 후 3년이 지나면 대부분 면제됩니다. 금리 인하 기대가 있을 때는 수수료와 절감 이자를 비교해 결정해야 합니다.',
      },
    },
    {
      '@type': 'Question',
      name: 'DSR 규제로 대출 한도가 왜 줄어드나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DSR(총부채원리금상환비율)은 연간 원리금 상환액이 연소득의 일정 비율(2금융권 50%, 1금융권 40%)을 넘지 못하도록 제한합니다. 연소득 5천만원이라면 연간 원리금 상환액이 최대 2천만원(40% 기준), 월 167만원 이내여야 합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '주택담보대출 최대 기간은 몇 년인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '주택담보대출은 최대 40년까지 가능한 상품도 있습니다(장기모기지). 일반적으로 30~35년이 일반적이며, 대출자 나이 + 대출 기간이 80세를 넘지 않는 선에서 결정됩니다. 기간이 길수록 월 납입액은 줄지만 총 이자 부담은 크게 늘어납니다.',
      },
    },
    {
      '@type': 'Question',
      name: '전세 대출이자와 월세 중 어느 쪽이 유리한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '전세 대출이자 = 전세금 × 대출금리이고, 월세 부담 = 월세 × 12입니다. 전월세 전환율이 대출금리보다 높다면 전세가 유리하고, 낮다면 월세가 유리합니다. 2026년 기준 전월세 전환율 상한은 연 4~5%대이므로 대출금리와 비교해보세요.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://calc.friz.dev' },
    { '@type': 'ListItem', position: 2, name: '대출 계산기', item: 'https://calc.friz.dev/%EB%8C%80%EC%B6%9C-%EA%B3%84%EC%82%B0%EA%B8%B0' },
  ],
}

export default function LoanPage() {
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
            <span>대출 상환 계산기</span>
          </nav>
          <h1 className="text-lg font-semibold text-stone-900">대출 상환 계산기</h1>
          <p className="mt-1 text-sm text-stone-500">원리금균등 · 원금균등 · 만기일시상환 월 납입액 비교</p>
        </div>

        <LoanCalc />

        <AdBanner slot="loan-mid" className="my-8" />

        <LoanMethodCompare />

        {/* 계산 공식 */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">상환 방식별 계산 원리</h2>
          <div className="space-y-3">
            <div className="border border-stone-100 rounded-xl p-4">
              <p className="text-xs font-bold text-stone-700 mb-2">원리금균등상환 (PMT 공식)</p>
              <div className="bg-stone-50 rounded-lg px-4 py-3 font-mono text-xs text-stone-700 mb-2">
                월납입액 = P × [r(1+r)^n] ÷ [(1+r)^n − 1]
              </div>
              <p className="text-[11px] text-stone-500">P: 대출원금 / r: 월이자율(연이율÷12) / n: 상환개월수</p>
              <p className="mt-2 text-xs text-stone-600">매달 동일한 금액을 납부. 초기에는 이자 비중이 크고 갈수록 원금 비중이 높아집니다.</p>
            </div>
            <div className="border border-stone-100 rounded-xl p-4">
              <p className="text-xs font-bold text-stone-700 mb-2">원금균등상환</p>
              <div className="bg-stone-50 rounded-lg px-4 py-3 font-mono text-xs text-stone-700 mb-2">
                월납입액 = (P ÷ n) + 잔여원금 × r
              </div>
              <p className="text-xs text-stone-600">매달 동일한 원금을 상환하고 이자는 줄어드는 방식. 초기 납입액이 크지만 총 이자가 적습니다.</p>
            </div>
          </div>
        </section>

        {/* 상환 방식 비교 */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">3억원 · 4% · 30년 기준 비교</h2>
          <div className="overflow-x-auto rounded-xl border border-stone-100">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-stone-50 text-stone-500">
                  <th className="text-left px-3 py-2.5 font-semibold">구분</th>
                  <th className="text-center px-3 py-2.5 font-semibold">원리금균등</th>
                  <th className="text-center px-3 py-2.5 font-semibold">원금균등</th>
                  <th className="text-center px-3 py-2.5 font-semibold">만기일시</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                <tr>
                  <td className="px-3 py-2.5 text-stone-600">초기 월 납입액</td>
                  <td className="px-3 py-2.5 text-center font-semibold tabular-nums">143만원</td>
                  <td className="px-3 py-2.5 text-center font-semibold tabular-nums">183만원</td>
                  <td className="px-3 py-2.5 text-center font-semibold tabular-nums">100만원</td>
                </tr>
                <tr className="bg-stone-50/50">
                  <td className="px-3 py-2.5 text-stone-600">말기 월 납입액</td>
                  <td className="px-3 py-2.5 text-center tabular-nums text-stone-500">143만원</td>
                  <td className="px-3 py-2.5 text-center tabular-nums text-stone-500">84만원</td>
                  <td className="px-3 py-2.5 text-center tabular-nums text-stone-500">3억 100만원</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5 text-stone-600">총 이자</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-amber-700 tabular-nums">약 2.1억원</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-green-700 tabular-nums">약 1.8억원</td>
                  <td className="px-3 py-2.5 text-center font-semibold text-red-600 tabular-nums">약 3.6억원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-stone-400">* 계산 예시로 실제 이자와 다를 수 있습니다.</p>
        </section>

        {/* FAQ */}
        <section className="mt-8">
          <h2 className="text-sm font-bold text-stone-800 mb-3">자주 묻는 질문</h2>
          <div className="space-y-2">
            {[
              {
                q: '원리금균등과 원금균등 중 어느 방식이 유리한가요?',
                a: '총 이자 부담은 원금균등이 더 적습니다. 3억원, 4%, 30년 기준으로 원리금균등은 총 이자 약 2.1억원, 원금균등은 약 1.8억원으로 약 3천만원 차이가 납니다. 다만 원금균등은 초기 납입액이 커서 초기 현금흐름이 부담될 수 있습니다.',
              },
              {
                q: '변동금리와 고정금리 중 어느 쪽을 선택해야 하나요?',
                a: '금리 인상기에는 고정금리, 금리 인하기나 안정기에는 변동금리가 유리한 경향이 있습니다. 혼합금리(5년 고정 후 변동)는 두 방식의 중간 성격입니다. 본인의 금리 상승 리스크 허용 수준과 상환 계획에 따라 선택하세요.',
              },
              {
                q: '중도상환을 하면 수수료가 얼마나 붙나요?',
                a: '중도상환수수료는 통상 잔여 대출금의 0.5~2% 수준이며 대출 실행 후 3년이 지나면 대부분 면제됩니다. 예를 들어 잔여 1억원, 수수료율 1.5%라면 150만원입니다. 이자 절감액과 비교해 중도상환 여부를 결정하세요.',
              },
              {
                q: 'DSR 40%면 얼마까지 빌릴 수 있나요?',
                a: 'DSR 40% 기준으로 연소득이 5천만원이면 연간 원리금 상환액이 2천만원(월 167만원) 이내여야 합니다. 금리 4%, 30년 기준 원리금균등 방식으로 환산하면 대출 한도는 약 3억 5천만원입니다. 기존 부채가 있으면 그만큼 한도가 줄어듭니다.',
              },
              {
                q: '30년 대출 기간이 길면 이자가 얼마나 더 나오나요?',
                a: '같은 금액·금리라면 기간이 길수록 총 이자가 크게 늘어납니다. 3억원 4% 기준으로 20년은 총 이자 약 1.3억원, 30년은 약 2.1억원, 40년은 약 2.9억원입니다. 월 납입액과 총 이자 부담을 함께 고려해 기간을 설정하세요.',
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

        <AdBanner slot="loan-bottom" className="my-8" />

        <section className="mt-6">
          <h2 className="text-xs font-semibold text-stone-500 mb-3 uppercase tracking-wide">관련 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { href: '/blog/equal-payment-vs-equal-principal', title: '원리금균등 vs 원금균등', desc: '총 이자 차이와 선택 기준' },
              { href: '/blog/ltv-dti-dsr-guide', title: 'LTV DTI DSR 완벽 이해', desc: '2026년 대출 규제 기준' },
              { href: '/blog/mortgage-rate-types', title: '주담대 금리 유형 비교', desc: '고정 vs 변동 vs 혼합' },
              { href: '/blog/prepayment-penalty', title: '중도상환수수료 계산법', desc: '면제 조건과 절약 방법' },
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
            { href: '/전세-월세-계산기', label: '전세·월세' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="px-3 py-1.5 text-xs text-stone-500 border border-stone-200 rounded-lg hover:border-stone-400 hover:text-stone-700 transition-colors">
              {item.label} 계산기
            </Link>
          ))}
        </div>

        <p className="mt-6 text-[11px] text-stone-400 leading-relaxed">
          본 계산기는 참고용이며 실제 납입액과 차이가 있을 수 있습니다. 정확한 대출 조건은 금융기관에 직접 확인하세요.
        </p>
      </div>
    </div>
  )
}
