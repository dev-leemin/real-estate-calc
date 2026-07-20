'use client'

const items = [
  { tag: '취득세', tagColor: 'text-amber-400', text: '생애최초 감면 200만원 한도 유지 확정' },
  { tag: '양도세', tagColor: 'text-sky-400', text: '1주택 비과세 실거래가 12억 원 기준 유지' },
  { tag: '종부세', tagColor: 'text-emerald-400', text: '1주택 공제 12억 원 / 다주택 9억 원 동일 적용' },
  { tag: 'DSR', tagColor: 'text-teal-400', text: '은행권 총부채원리금상환비율 40% 한도 유지' },
  { tag: '증여세', tagColor: 'text-rose-400', text: '직계존속 10년 합산 공제 5천만 원 (미성년 2천만 원)' },
  { tag: '취득세', tagColor: 'text-amber-400', text: '법인 12% / 3주택 이상 조정지역 12% 유지' },
]

function TickerItems() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2.5 mr-10">
          <span className={`text-[10px] font-black ${item.tagColor} tracking-wider`}>{item.tag}</span>
          <span className="w-px h-3 bg-white/15 flex-shrink-0" aria-hidden="true" />
          <span className="text-[11px] text-white/60 font-medium">{item.text}</span>
        </span>
      ))}
    </>
  )
}

export default function NoticeCarousel() {
  return (
    <div className="bg-[#0B1623] border-b border-white/8 overflow-hidden">
      <div className="flex items-center h-9">
        <div className="flex-shrink-0 bg-amber-400 h-full flex items-center px-3 gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#0B1623] rounded-full opacity-60" />
          <span className="text-[10px] font-black text-[#0B1623] tracking-widest uppercase whitespace-nowrap">2026 업데이트</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: 'ticker-scroll 50s linear infinite' }}
          >
            <span className="px-8 inline-flex items-center"><TickerItems /></span>
            <span className="px-8 inline-flex items-center" aria-hidden="true"><TickerItems /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
