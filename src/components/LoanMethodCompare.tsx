// 대출 상환 방식 비교 — 토스 스타일
// 3억 · 4% · 30년 기준

const methods = [
  {
    label: '원금균등',
    tag: '이자 절약',
    tagColor: 'bg-green-100 text-green-700',
    firstPayment: '183만원',
    lastPayment: '84만원',
    totalInterest: 1_800,   // 만원 단위
    totalMax: 3_600,
    color: 'bg-green-400',
    textColor: 'text-green-700',
    desc: '초기 납입액이 높지만 총 이자가 가장 적음',
  },
  {
    label: '원리금균등',
    tag: '일반적 선택',
    tagColor: 'bg-amber-100 text-amber-700',
    firstPayment: '143만원',
    lastPayment: '143만원',
    totalInterest: 2_100,
    totalMax: 3_600,
    color: 'bg-amber-400',
    textColor: 'text-amber-700',
    desc: '매달 동일한 금액 납부. 가장 많이 선택',
    highlight: true,
  },
  {
    label: '만기일시',
    tag: '이자 가장 많음',
    tagColor: 'bg-red-100 text-red-600',
    firstPayment: '100만원',
    lastPayment: '3억 100만원',
    totalInterest: 3_600,
    totalMax: 3_600,
    color: 'bg-red-300',
    textColor: 'text-red-600',
    desc: '매달 이자만 납부, 만기에 원금 일시 상환',
  },
]

function fmt(n: number) {
  if (n >= 10000) return `${n / 10000}억원`
  return `${n.toLocaleString()}만원`
}

export default function LoanMethodCompare() {
  const max = Math.max(...methods.map(m => m.totalInterest))

  return (
    <section className="mt-8" aria-label="대출 상환 방식별 총 이자 비교">
      <h2 className="text-sm font-bold text-stone-800 mb-1">같은 대출, 방식에 따라 이자가 이렇게 다르다</h2>
      <p className="text-xs text-stone-400 mb-5">3억원 · 금리 4% · 30년 기준 총 이자 비교</p>

      <div className="space-y-4">
        {methods.map((m) => (
          <div
            key={m.label}
            className={`rounded-2xl border p-4 ${m.highlight ? 'border-amber-200 bg-amber-50/40' : 'border-stone-100 bg-white'}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-stone-800">{m.label}</span>
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${m.tagColor}`}>{m.tag}</span>
              </div>
              <span className={`text-lg font-black tabular-nums ${m.textColor}`}>
                {fmt(m.totalInterest)}
              </span>
            </div>

            {/* 총 이자 바 */}
            <div className="h-2 rounded-full bg-stone-100 mb-3 overflow-hidden">
              <div
                className={`h-full rounded-full ${m.color}`}
                style={{ width: `${(m.totalInterest / max) * 100}%` }}
              />
            </div>

            {/* 납입액 */}
            <div className="flex gap-4 text-[11px] text-stone-500">
              <span>초기 월납입 <span className="font-semibold text-stone-700">{m.firstPayment}</span></span>
              <span>말기 월납입 <span className="font-semibold text-stone-700">{m.lastPayment}</span></span>
            </div>
            <p className="text-[10px] text-stone-400 mt-1">{m.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[11px] text-stone-400">
        * 이자 절약액 기준: 원금균등이 원리금균등보다 약 3천만원 적음
      </p>
    </section>
  )
}
