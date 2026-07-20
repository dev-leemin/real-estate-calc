'use client'

import { useState, useEffect } from 'react'

const notices = [
  { tag: '취득세', text: '생애최초 주택 취득세 감면 200만원 한도 — 2026년에도 유지 확정' },
  { tag: '양도세', text: '1주택 비과세 기준 실거래가 12억 원 유지, 조정지역 2년 거주 요건 존속' },
  { tag: '종부세', text: '1주택자 공제 12억 원 · 다주택자 합산 9억 원 기준 2026년 동일 적용' },
  { tag: '대출', text: 'DSR 2단계 지속 — 은행권 총부채원리금상환비율 40% 한도 유지' },
  { tag: '증여세', text: '직계존속 10년 합산 공제 5천만 원 (미성년 2천만 원) · 배우자 6억 원' },
]

export default function NoticeCarousel() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % notices.length)
        setVisible(true)
      }, 250)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const n = notices[idx]

  return (
    <div className="bg-stone-900 border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-4 h-9 flex items-center gap-3">
        <span className="text-[10px] font-bold tracking-wide bg-amber-500 text-stone-900 px-2 py-0.5 rounded flex-shrink-0">
          2026 · {n.tag}
        </span>
        <p className={`text-xs text-stone-300 truncate flex-1 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {n.text}
        </p>
        <div className="flex gap-1 flex-shrink-0">
          {notices.map((_, i) => (
            <button
              key={i}
              onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true) }, 150) }}
              className={`w-1 h-1 rounded-full transition-all ${i === idx ? 'bg-amber-400 w-3' : 'bg-stone-600 hover:bg-stone-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
