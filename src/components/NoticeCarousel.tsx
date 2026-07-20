'use client'

const items = [
  '2026 취득세 · 생애최초 감면 200만원 한도 유지 확정',
  '2026 양도세 · 1주택 비과세 실거래가 12억 원 기준 유지',
  '2026 종부세 · 1주택 공제 12억 원 / 다주택 9억 원 동일 적용',
  'DSR 2단계 · 은행권 총부채원리금상환비율 40% 한도 유지',
  '2026 증여세 · 직계존속 10년 합산 공제 5천만 원 (미성년 2천만 원)',
  '2026 취득세 · 법인 취득세 12% / 3주택 이상 조정지역 12% 유지',
]

const ticker = [...items, ...items].join('      ——      ')

export default function NoticeCarousel() {
  return (
    <div className="bg-[#111111] border-b-2 border-[#111111] overflow-hidden">
      <div className="flex items-center h-9">
        <div className="flex-shrink-0 bg-amber-400 h-full flex items-center px-3 border-r-2 border-[#111111]">
          <span className="text-[10px] font-black text-[#111111] tracking-widest uppercase whitespace-nowrap">2026 공지</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: 'ticker-scroll 40s linear infinite' }}
          >
            <span className="text-xs text-zinc-300 px-6 font-medium">{ticker}</span>
            <span className="text-xs text-zinc-300 px-6 font-medium" aria-hidden="true">{ticker}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
