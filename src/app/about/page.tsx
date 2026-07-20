import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '서비스 소개 - 세모아',
  description: '세모아(SEMOA)는 2026년 최신 세율을 반영한 취득세, 양도소득세, 종합부동산세, 증여세, 대출 상환, 전세·월세 환산 계산기를 무료로 제공합니다.',
  alternates: { canonical: 'https://calc.lotto45.kr/about' },
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-xs text-stone-400 mb-5">
        <Link href="/" className="hover:text-amber-600">홈</Link>
        <span className="mx-1.5">/</span>
        <span className="text-stone-700">사이트 소개</span>
      </nav>

      <h1 className="text-2xl font-bold text-stone-900 mb-6">세모아(SEMOA) 소개</h1>

      <div className="space-y-8">
        <section className="bg-white border border-stone-200 rounded-2xl p-6">
          <h2 className="text-base font-bold text-stone-900 mb-3">서비스 목적</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            부동산 거래에서 세금은 예상보다 복잡하고 금액도 큽니다.
            취득세 하나만 해도 주택 수, 조정대상지역 여부, 면적에 따라 세율이 크게 달라집니다.
            세모아(SEMOA)는 2026년 현행 세법을 반영해 누구나 쉽게 부동산 관련 세금을 계산할 수 있도록 만든 무료 서비스입니다.
          </p>
        </section>

        <section className="bg-white border border-stone-200 rounded-2xl p-6">
          <h2 className="text-base font-bold text-stone-900 mb-4">제공 서비스</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              '취득세 계산기', '대출 상환 계산기', '양도소득세 계산기',
              '전세·월세 환산기', '증여세 계산기', '종합부동산세 계산기',
            ].map(name => (
              <div key={name} className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 text-xs font-medium text-amber-700">
                {name}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-stone-200 rounded-2xl p-6">
          <h2 className="text-base font-bold text-stone-900 mb-3">세율 기준</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            모든 계산기는 2026년 현행 법령을 기준으로 합니다.
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">•</span>
              취득세: 지방세법 제11조, 제13조의2
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">•</span>
              양도소득세: 소득세법 제89조, 제95조, 제55조
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">•</span>
              증여세: 상속세 및 증여세법 제26조, 제53조
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">•</span>
              종합부동산세: 종합부동산세법 제8조, 제9조
            </li>
          </ul>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <h2 className="text-base font-bold text-stone-900 mb-3">면책 사항</h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            본 계산기는 <strong>참고용</strong>이며 세금 신고용으로 사용할 수 없습니다.
            실제 납부세액은 개인 거래 이력, 특례 적용 여부 등에 따라 달라질 수 있습니다.
            부동산 거래 전 반드시 공인 세무사 또는 국세청 홈택스(hometax.go.kr)를 통해 정확한 세액을 확인하시기 바랍니다.
          </p>
        </section>
      </div>
    </div>
  )
}
