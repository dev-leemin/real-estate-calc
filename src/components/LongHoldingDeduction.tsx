// 장기보유특별공제율 타임라인 — 토스 스타일
// 1주택자 기준: 보유 + 거주 각 4%씩, 최대 80%

const milestones = [
  { year: 3,  pct: 24,  label: '3년', sub: '보유 12% + 거주 12%' },
  { year: 5,  pct: 40,  label: '5년', sub: '보유 20% + 거주 20%' },
  { year: 7,  pct: 56,  label: '7년', sub: '보유 28% + 거주 28%' },
  { year: 10, pct: 80,  label: '10년+', sub: '최대 공제', max: true },
]

export default function LongHoldingDeduction() {
  return (
    <section className="mt-8" aria-label="장기보유특별공제율 보유기간별 타임라인">
      <h2 className="text-sm font-bold text-stone-800 mb-1">오래 살수록 세금이 줄어든다</h2>
      <p className="text-xs text-stone-400 mb-6">1주택자 · 거주 요건 충족 시 장기보유특별공제율</p>

      {/* 타임라인 */}
      <div className="relative">
        {/* 연결선 */}
        <div className="absolute top-5 left-5 right-5 h-px bg-stone-100" aria-hidden="true" />

        <div className="grid grid-cols-4 gap-2 relative">
          {milestones.map((m) => (
            <div key={m.year} className="flex flex-col items-center text-center">
              {/* 노드 */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 relative z-10 transition-all ${
                m.max
                  ? 'bg-amber-500 shadow-md shadow-amber-200'
                  : 'bg-white border-2 border-stone-200'
              }`}>
                <span className={`text-xs font-black tabular-nums ${m.max ? 'text-white' : 'text-stone-500'}`}>
                  {m.pct}%
                </span>
              </div>

              {/* 레이블 */}
              <p className={`text-xs font-bold mb-0.5 ${m.max ? 'text-amber-600' : 'text-stone-700'}`}>
                {m.label}
              </p>
              <p className="text-[10px] text-stone-400 leading-tight">{m.sub}</p>

              {/* 최대 배지 */}
              {m.max && (
                <span className="mt-1.5 text-[9px] font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">
                  최대 80%
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 실제 절세 예시 */}
      <div className="mt-6 rounded-2xl border border-stone-100 bg-stone-50/50 p-4">
        <p className="text-xs font-semibold text-stone-700 mb-3">
          양도차익 3억원일 때 공제율에 따른 과세표준 차이
        </p>
        <div className="space-y-2.5">
          {[
            { label: '2년 보유 (공제 없음)', taxBase: 300_000_000, pct: 0 },
            { label: '5년 보유 · 거주 (40% 공제)', taxBase: 180_000_000, pct: 40 },
            { label: '10년 보유 · 거주 (80% 공제)', taxBase: 60_000_000, pct: 80 },
          ].map((row) => {
            const maxBase = 300_000_000
            return (
              <div key={row.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] text-stone-600">{row.label}</span>
                  <span className="text-[11px] font-semibold tabular-nums text-stone-800">
                    과세표준 {(row.taxBase / 100_000_000).toFixed(1)}억원
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${row.pct === 80 ? 'bg-amber-400' : row.pct === 40 ? 'bg-stone-400' : 'bg-stone-300'}`}
                    style={{ width: `${(row.taxBase / maxBase) * 100}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-3 text-[10px] text-stone-400">
          과세표준이 낮을수록 낮은 세율 구간 적용 → 세금이 지수적으로 감소
        </p>
      </div>

      <p className="mt-3 text-[11px] text-stone-400">
        근거: 소득세법 제95조 / 거주 요건 미충족 시 보유기간 공제만 적용 (연 2%, 최대 30%)
      </p>
    </section>
  )
}
