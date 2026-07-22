'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

function calcTax(priceWon: number) {
  let rate: number
  if (priceWon <= 600_000_000) {
    rate = 0.01
  } else if (priceWon <= 900_000_000) {
    rate = ((priceWon * 2) / 300_000_000 - 3) / 100
  } else {
    rate = 0.03
  }
  const acq = priceWon * rate
  const edu = acq * 0.1
  return { ratePct: (rate * 100).toFixed(2).replace(/\.?0+$/, ''), acq, edu, total: acq + edu }
}

function fmt(won: number) {
  const m = Math.round(won / 10000)
  if (m >= 10000) {
    const e = Math.floor(m / 10000)
    const r = m % 10000
    return r > 0 ? `${e}억 ${r.toLocaleString()}만원` : `${e}억원`
  }
  return `${m.toLocaleString()}만원`
}

export default function MiniAcquisitionCalc() {
  const [raw, setRaw] = useState('')
  const priceM = parseInt(raw.replace(/[^0-9]/g, ''), 10) || 0
  const result = useMemo(() => (priceM >= 100 ? calcTax(priceM * 10000) : null), [priceM])

  return (
    <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden max-w-xs">
      <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
        <p className="text-[11px] font-bold text-slate-500">취득세 간편 계산</p>
        <span className="text-[10px] text-slate-400">1주택 · 비조정지역</span>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            inputMode="numeric"
            placeholder="취득가액"
            value={priceM > 0 ? priceM.toLocaleString() : ''}
            onChange={e => setRaw(e.target.value.replace(/[^0-9]/g, ''))}
            className="flex-1 text-sm font-semibold text-[#0B1623] border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 placeholder:text-slate-300 placeholder:font-normal bg-white"
          />
          <span className="text-xs text-slate-400 shrink-0">만원</span>
        </div>

        {result ? (
          <div className="mt-3">
            <div className="space-y-1.5 mb-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">취득세 ({result.ratePct}%)</span>
                <span className="tabular font-semibold text-slate-600">{fmt(result.acq)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">지방교육세</span>
                <span className="tabular font-semibold text-slate-600">{fmt(result.edu)}</span>
              </div>
            </div>
            <div className="flex justify-between pt-2.5 border-t border-slate-100">
              <span className="text-xs font-bold text-[#0B1623]">총 납부세액</span>
              <span className="text-base font-black text-amber-500 tabular">{fmt(result.total)}</span>
            </div>
            <Link
              href="/취득세-계산기"
              className="mt-2.5 block text-[11px] font-semibold text-amber-600 hover:text-amber-700 transition-colors"
            >
              주택 수·조정지역 반영해서 정확히 계산 →
            </Link>
          </div>
        ) : (
          <p className="mt-3 text-[10px] text-slate-400 leading-relaxed">
            취득가액을 입력하면 즉시 계산됩니다.<br />
            정확한 결과는 주택 수, 조정지역 여부도 반영합니다.
          </p>
        )}
      </div>
    </div>
  )
}
