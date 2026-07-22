import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '부동산 세금 종류 한눈에 보기 - 취득·보유·처분 단계별 정리',
  description: '부동산을 취득, 보유, 처분할 때 각각 내는 세금의 종류와 시기를 한눈에 정리합니다. 취득세, 재산세, 종부세, 양도소득세, 증여세 설명.',
  alternates: { canonical: 'https://calc.friz.dev/guide' },
}

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-xs text-stone-400 mb-5">
        <Link href="/" className="hover:text-amber-600">홈</Link>
        <span className="mx-1.5">/</span>
        <span className="text-stone-700">세금 종류 안내</span>
      </nav>

      <h1 className="text-2xl font-bold text-stone-900 mb-2">부동산 세금 종류 한눈에 보기</h1>
      <p className="text-sm text-stone-500 mb-8 leading-relaxed">
        부동산은 취득·보유·처분 3단계에서 각기 다른 세금이 부과됩니다.
        단계별로 어떤 세금을 내는지 정리했습니다.
      </p>

      {/* 단계별 흐름 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          {
            stage: '취득 단계',
            icon: '🏠',
            color: 'border-amber-200 bg-amber-50',
            badgeColor: 'bg-amber-100 text-amber-700',
            taxes: [
              { name: '취득세', desc: '부동산 취득 시 납부 (잔금 후 60일 이내)', link: '/취득세-계산기' },
              { name: '지방교육세', desc: '취득세의 10%', link: '/취득세-계산기' },
              { name: '농어촌특별세', desc: '취득세의 10% (면적·가격 조건)', link: '/취득세-계산기' },
              { name: '인지세', desc: '매매계약서 작성 시 (1만~35만원)', link: null },
            ],
          },
          {
            stage: '보유 단계',
            icon: '📅',
            color: 'border-sky-200 bg-sky-50',
            badgeColor: 'bg-sky-100 text-sky-700',
            taxes: [
              { name: '재산세', desc: '매년 7월·9월 부과 (공시가격 기준)', link: null },
              { name: '종합부동산세', desc: '매년 12월 (1주택 12억, 다주택 9억 초과)', link: '/종부세-계산기' },
              { name: '임대소득세', desc: '임대수익 발생 시 (2천만원 이하 분리과세)', link: null },
            ],
          },
          {
            stage: '처분 단계',
            icon: '📝',
            color: 'border-red-200 bg-red-50',
            badgeColor: 'bg-red-100 text-red-700',
            taxes: [
              { name: '양도소득세', desc: '양도차익에 부과 (1주택 12억 이하 비과세)', link: '/양도소득세-계산기' },
              { name: '지방소득세', desc: '양도소득세의 10%', link: '/양도소득세-계산기' },
              { name: '증여세', desc: '증여 시 (배우자 6억, 자녀 5천만원 공제)', link: '/증여세-계산기' },
              { name: '상속세', desc: '상속 시 (10억 공제)', link: null },
            ],
          },
        ].map((phase) => (
          <div key={phase.stage} className={`rounded-2xl border p-5 ${phase.color}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{phase.icon}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${phase.badgeColor}`}>{phase.stage}</span>
            </div>
            <ul className="space-y-3">
              {phase.taxes.map(tax => (
                <li key={tax.name} className="bg-white rounded-xl p-3 border border-white/80">
                  <div className="flex items-start justify-between gap-1">
                    <p className="text-sm font-semibold text-stone-800">{tax.name}</p>
                    {tax.link && (
                      <Link href={tax.link} className="text-[10px] text-amber-600 hover:underline whitespace-nowrap">
                        계산기 →
                      </Link>
                    )}
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{tax.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 세율 요약표 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-stone-900 mb-4">2026년 주요 세율 요약</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="border border-stone-200 px-4 py-3 text-left font-semibold text-stone-700">세금</th>
                <th className="border border-stone-200 px-4 py-3 text-left font-semibold text-stone-700">세율 / 기준</th>
                <th className="border border-stone-200 px-4 py-3 text-left font-semibold text-stone-700">법적 근거</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['취득세 (1주택)', '1% ~ 3% (가격 구간별)', '지방세법 제11조'],
                ['취득세 (2주택 조정)', '8%', '지방세법 제13조의2'],
                ['취득세 (3주택+ 조정)', '12%', '지방세법 제13조의2'],
                ['재산세', '0.1% ~ 0.4%', '지방세법 제111조'],
                ['종합부동산세 (1주택)', '0.5% ~ 2.7%', '종합부동산세법 제9조'],
                ['양도소득세', '6% ~ 45% (누진)', '소득세법 제55조'],
                ['증여세', '10% ~ 50% (누진)', '상속·증여세법 제26조'],
                ['지방소득세', '소득세의 10%', '지방세법 제92조'],
              ].map(([tax, rate, law]) => (
                <tr key={tax} className="hover:bg-stone-50">
                  <td className="border border-stone-200 px-4 py-2.5 font-medium text-stone-800">{tax}</td>
                  <td className="border border-stone-200 px-4 py-2.5 text-red-600 font-semibold">{rate}</td>
                  <td className="border border-stone-200 px-4 py-2.5 text-stone-500 text-xs">{law}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 계산기 바로가기 */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-stone-900 mb-4">계산기 바로가기</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/취득세-계산기', label: '취득세 계산기', icon: '🏠' },
            { href: '/대출-계산기', label: '대출 상환 계산기', icon: '💰' },
            { href: '/양도소득세-계산기', label: '양도소득세 계산기', icon: '📈' },
            { href: '/전세-월세-계산기', label: '전세·월세 환산기', icon: '🔄' },
            { href: '/증여세-계산기', label: '증여세 계산기', icon: '🎁' },
            { href: '/종부세-계산기', label: '종합부동산세 계산기', icon: '🏛️' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="flex items-center gap-2 p-4 bg-white border border-stone-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium text-stone-800">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="bg-stone-100 border border-stone-200 rounded-xl px-5 py-4 text-xs text-stone-500">
        세율 정보는 2026년 기준이며, 개정 법령에 따라 변경될 수 있습니다.
        실제 납부세액은 개인 상황에 따라 다를 수 있으므로 세무사 또는 국세청에 문의하세요.
      </div>
    </div>
  )
}
