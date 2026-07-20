'use client'

import { useState, useMemo } from 'react'
import { calcGiftTax, RelationshipType } from '@/lib/tax-calc'
import { formatKoreanWon, formatNumber } from '@/lib/format'

const QUICK_AMOUNTS = [50000000, 100000000, 300000000, 500000000, 700000000, 1000000000]

export default function GiftTaxCalc() {
  const [amountStr, setAmountStr] = useState('')
  const [relationship, setRelationship] = useState<RelationshipType>('lineal_ascendant')

  const amount = useMemo(() => parseFloat(amountStr.replace(/,/g, '')) || 0, [amountStr])

  const result = useMemo(() => {
    if (amount <= 0) return null
    return calcGiftTax({ giftAmount: amount, relationship })
  }, [amount, relationship])

  const handleInput = (val: string) => {
    const num = val.replace(/[^0-9]/g, '')
    setAmountStr(num ? parseInt(num).toLocaleString() : '')
  }

  const relationshipInfo: Record<RelationshipType, { label: string; deduction: number; desc: string }> = {
    spouse: { label: '배우자', deduction: 600000000, desc: '혼인관계의 배우자' },
    lineal_ascendant: { label: '직계존속 (부모→자녀)', deduction: 50000000, desc: '부모, 조부모가 자녀·손자녀에게' },
    lineal_descendant: { label: '직계비속 (자녀→부모)', deduction: 50000000, desc: '자녀가 부모, 조부모에게' },
    minor_child: { label: '미성년 자녀', deduction: 20000000, desc: '만 19세 미만 미성년 자녀에게' },
    other: { label: '기타 친족', deduction: 10000000, desc: '6촌 이내 혈족, 4촌 이내 인척' },
  }

  return (
    <div className="space-y-6">
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-stone-900 mb-5">증여 정보 입력</h2>

        {/* 증여재산가액 */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-stone-700 mb-2">증여재산가액</label>
          <div className="relative">
            <input type="text" value={amountStr}
              onChange={e => handleInput(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
          </div>
          {amount > 0 && <p className="text-xs text-stone-400 mt-1">{formatKoreanWon(amount)}</p>}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {QUICK_AMOUNTS.map(amt => (
              <button key={amt} onClick={() => handleInput(String(amt))}
                className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                  amount === amt ? 'bg-amber-100 border-amber-400 text-amber-700' : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-300'
                }`}>
                {formatKoreanWon(amt).replace('원', '')}
              </button>
            ))}
          </div>
        </div>

        {/* 관계 선택 */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">증여자와 수증자 관계</label>
          <div className="space-y-2">
            {(Object.entries(relationshipInfo) as [RelationshipType, typeof relationshipInfo[RelationshipType]][]).map(([key, info]) => (
              <button key={key} onClick={() => setRelationship(key)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-colors ${
                  relationship === key ? 'bg-amber-50 border-amber-400' : 'bg-white border-stone-200 hover:border-amber-200'
                }`}>
                <div>
                  <p className={`text-sm font-medium ${relationship === key ? 'text-amber-700' : 'text-stone-800'}`}>{info.label}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{info.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-500">10년 공제</p>
                  <p className={`text-sm font-semibold ${relationship === key ? 'text-amber-700' : 'text-stone-700'}`}>
                    {formatKoreanWon(info.deduction)}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <p className="text-xs text-stone-400 mt-2">
            ※ 증여재산공제는 수증자 기준으로 10년간 합산 적용됩니다 (상속·증여세법 제53조)
          </p>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
          <h2 className="text-base font-bold text-stone-900 mb-5">계산 결과</h2>

          {result.taxBase <= 0 ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-3xl mb-2">✅</p>
              <p className="text-base font-bold text-green-700 mb-1">증여세 없음</p>
              <p className="text-sm text-green-600">
                증여재산이 10년 공제 한도({formatKoreanWon(result.deduction)}) 이내입니다.
              </p>
              <p className="text-xs text-stone-400 mt-2">단, 10년 이내 동일인으로부터의 합산 증여액 기준</p>
            </div>
          ) : (
            <>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
                <p className="text-xs text-red-600 font-medium mb-1">납부 예상 증여세</p>
                <p className="text-2xl sm:text-3xl font-bold text-red-600">{formatKoreanWon(result.giftTax)}</p>
                <p className="text-xs text-stone-500 mt-1">
                  실효세율 {(result.effectiveRate * 100).toFixed(2)}%
                </p>
              </div>

              <div className="space-y-2 mb-5">
                {[
                  { label: '증여재산가액', value: result.giftAmount, note: '' },
                  { label: '증여재산공제', value: -result.deduction, note: `10년 한도 (${relationshipInfo[relationship].label})` },
                  { label: '과세표준', value: result.taxBase, note: '', bold: true },
                  { label: '증여세', value: result.giftTax, note: '누진세율 적용' },
                ].map(({ label, value, note, bold }) => (
                  <div key={label} className={`flex items-center justify-between py-2 border-b border-stone-100 ${bold ? 'font-bold border-t-2 border-stone-200 pt-3 mt-1' : ''}`}>
                    <div>
                      <p className="text-sm text-stone-700">{label}</p>
                      {note && <p className="text-xs text-stone-400">{note}</p>}
                    </div>
                    <p className={`text-sm font-semibold ${value < 0 ? 'text-green-600' : 'text-stone-800'}`}>
                      {value < 0 ? `-${formatNumber(-value)}` : formatNumber(value)} 원
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="bg-sky-50 border border-sky-100 rounded-xl p-3.5 text-xs text-sky-700 leading-relaxed">
            <strong className="block mb-1">신고·납부 기한</strong>
            증여일이 속하는 달의 말일부터 <strong>3개월 이내</strong>에 신고·납부해야 합니다.
            기한 내 신고 시 산출세액의 3%를 공제받을 수 있습니다.
            <br /><span className="text-stone-400 mt-1 block">출처: 상속세 및 증여세법 제68조</span>
          </div>
        </div>
      )}

      {!result && (
        <div className="text-center py-10 text-stone-400 text-sm">
          증여재산가액을 입력하면 세금이 자동으로 계산됩니다.
        </div>
      )}

      {/* 세율표 */}
      <details className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
        <summary className="px-5 py-4 text-sm font-medium text-stone-700 cursor-pointer list-none flex items-center justify-between select-none hover:bg-stone-50">
          <span>2026년 증여세 세율표</span>
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-5 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-stone-50">
                  <th className="border border-stone-200 px-3 py-2 text-left font-medium">과세표준</th>
                  <th className="border border-stone-200 px-3 py-2 text-center font-medium">세율</th>
                  <th className="border border-stone-200 px-3 py-2 text-right font-medium">누진공제</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1억 이하', '10%', '0'],
                  ['5억 이하', '20%', '1,000만원'],
                  ['10억 이하', '30%', '6,000만원'],
                  ['30억 이하', '40%', '1억 6,000만원'],
                  ['30억 초과', '50%', '4억 6,000만원'],
                ].map(([range, rate, ded]) => (
                  <tr key={range} className="hover:bg-stone-50">
                    <td className="border border-stone-100 px-3 py-1.5 font-medium text-stone-700">{range}</td>
                    <td className="border border-stone-100 px-3 py-1.5 text-center text-red-600 font-semibold">{rate}</td>
                    <td className="border border-stone-100 px-3 py-1.5 text-right text-stone-500">{ded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-stone-400 mt-2">출처: 상속세 및 증여세법 제26조</p>
        </div>
      </details>

      <p className="text-xs text-stone-400 text-center">
        본 계산기는 참고용입니다. 정확한 세액은 세무사 또는 국세청 홈택스를 통해 확인하세요.
      </p>
    </div>
  )
}
