// 취득세 세율 비교 — 토스 스타일 데이터 카드
const scenarios = [
  {
    label: '1주택',
    sub: '전국 공통',
    rate: '1~3%',
    rateNum: 1,
    maxRate: 12,
    example: '5억 취득 시',
    amount: '550만원',
    amountSub: '취득세 + 지방교육세',
    muted: false,
  },
  {
    label: '2주택',
    sub: '조정대상지역',
    rate: '8%',
    rateNum: 8,
    maxRate: 12,
    example: '5억 취득 시',
    amount: '4,400만원',
    amountSub: '취득세 + 부가세',
    muted: false,
    highlight: true,
  },
  {
    label: '3주택+',
    sub: '조정대상지역',
    rate: '12%',
    rateNum: 12,
    maxRate: 12,
    example: '5억 취득 시',
    amount: '6,600만원',
    amountSub: '취득세 + 부가세',
    muted: false,
  },
]

export default function TaxRateCompare() {
  return (
    <section className="mt-8" aria-label="취득세율 시나리오 비교">
      <h2 className="text-sm font-bold text-stone-800 mb-1">같은 집, 주택 수에 따라 세금이 이렇게 달라진다</h2>
      <p className="text-xs text-stone-400 mb-4">5억원 아파트 취득 기준 · 조정대상지역</p>

      <div className="grid grid-cols-3 gap-3">
        {scenarios.map((s) => (
          <div
            key={s.label}
            className={`rounded-2xl p-4 border transition-all ${
              s.highlight
                ? 'border-amber-200 bg-amber-50/60'
                : 'border-stone-100 bg-white'
            }`}
          >
            {/* 주택 수 레이블 */}
            <p className={`text-[10px] font-bold tracking-wide uppercase mb-0.5 ${s.highlight ? 'text-amber-600' : 'text-stone-400'}`}>
              {s.label}
            </p>
            <p className="text-[10px] text-stone-400 mb-3">{s.sub}</p>

            {/* 세율 대형 표시 */}
            <p className={`text-2xl sm:text-3xl font-black tabular-nums leading-none mb-3 ${s.highlight ? 'text-amber-600' : 'text-stone-800'}`}>
              {s.rate}
            </p>

            {/* 바 */}
            <div className="h-1.5 rounded-full bg-stone-100 mb-4 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${s.highlight ? 'bg-amber-400' : 'bg-stone-300'}`}
                style={{ width: `${(s.rateNum / s.maxRate) * 100}%` }}
              />
            </div>

            {/* 예시 금액 */}
            <p className="text-[10px] text-stone-400 mb-0.5">{s.example}</p>
            <p className={`text-sm font-bold tabular-nums ${s.highlight ? 'text-amber-700' : 'text-stone-700'}`}>
              {s.amount}
            </p>
            <p className="text-[10px] text-stone-400 mt-0.5">{s.amountSub}</p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[11px] text-stone-400">
        2주택 비조정지역은 1~3% 일반세율 적용 · 근거: 지방세법 제13조의2
      </p>
    </section>
  )
}
