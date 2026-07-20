'use client'

import { useState, useMemo } from 'react'
import { calcComprehensiveTax } from '@/lib/tax-calc'
import { formatKoreanWon, formatNumber } from '@/lib/format'

const QUICK_AMOUNTS = [800000000, 1000000000, 1200000000, 1500000000, 2000000000, 3000000000]

export default function ComprehensiveTaxCalc() {
  const [priceStr, setPriceStr] = useState('')
  const [ownershipCount, setOwnershipCount] = useState<'one' | 'multi'>('one')
  const [isElderly, setIsElderly] = useState(false)
  const [holdingYears, setHoldingYears] = useState(5)

  const price = useMemo(() => parseFloat(priceStr.replace(/,/g, '')) || 0, [priceStr])

  const result = useMemo(() => {
    if (price <= 0) return null
    return calcComprehensiveTax({ publicPrice: price, ownershipCount, isElderly, holdingYears })
  }, [price, ownershipCount, isElderly, holdingYears])

  const handleInput = (val: string) => {
    const num = val.replace(/[^0-9]/g, '')
    setPriceStr(num ? parseInt(num).toLocaleString() : '')
  }

  const deduction = ownershipCount === 'one' ? 1200000000 : 900000000

  return (
    <div className="space-y-6">
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-stone-900 mb-5">주택 정보 입력</h2>

        {/* 공시가격 */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-stone-700 mb-2">
            공시가격
            <span className="text-stone-400 font-normal ml-1 text-xs">국토교통부 공시 기준</span>
          </label>
          <div className="relative">
            <input type="text" value={priceStr}
              onChange={e => handleInput(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
          </div>
          {price > 0 && <p className="text-xs text-stone-400 mt-1">{formatKoreanWon(price)}</p>}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {QUICK_AMOUNTS.map(amt => (
              <button key={amt} onClick={() => handleInput(String(amt))}
                className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                  price === amt ? 'bg-amber-100 border-amber-400 text-amber-700' : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-300'
                }`}>
                {formatKoreanWon(amt).replace('원', '')}
              </button>
            ))}
          </div>
          <div className="mt-2 p-3 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-700">
            종부세 과세 기준: 1주택 {formatKoreanWon(1200000000)} / 다주택 {formatKoreanWon(900000000)} 초과분
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* 주택 수 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">주택 수</label>
            <div className="flex gap-2">
              {([['one', '1주택'], ['multi', '다주택']] as ['one' | 'multi', string][]).map(([val, label]) => (
                <button key={val} onClick={() => setOwnershipCount(val)}
                  className={`flex-1 py-2.5 text-sm font-medium rounded-xl border transition-colors ${
                    ownershipCount === val ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-200 text-stone-600 hover:border-amber-300'
                  }`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 고령자 여부 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">고령자 (만 60세 이상)</label>
            <div className="flex gap-2">
              {([[true, '해당'], [false, '미해당']] as [boolean, string][]).map(([val, label]) => (
                <button key={String(val)} onClick={() => setIsElderly(val)}
                  className={`flex-1 py-2.5 text-sm font-medium rounded-xl border transition-colors ${
                    isElderly === val ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-200 text-stone-600 hover:border-amber-300'
                  }`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 보유기간 */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">보유기간: <strong>{holdingYears}년</strong></label>
          <input type="range" min={0} max={20} value={holdingYears}
            onChange={e => setHoldingYears(parseInt(e.target.value))}
            className="w-full accent-amber-600"
          />
          <div className="flex justify-between text-xs text-stone-400 mt-1"><span>0년</span><span>20년</span></div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {[3, 5, 10, 15].map(y => (
              <button key={y} onClick={() => setHoldingYears(y)}
                className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                  holdingYears === y ? 'bg-amber-100 border-amber-400 text-amber-700' : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-300'
                }`}>
                {y}년
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 결과 */}
      {result ? (
        result.taxableBase <= 0 ? (
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-3xl mb-2">✅</p>
              <p className="text-base font-bold text-green-700 mb-1">종합부동산세 없음</p>
              <p className="text-sm text-green-600">
                공시가격 {formatKoreanWon(price)}이 {ownershipCount === 'one' ? '1주택' : '다주택'} 공제 기준({formatKoreanWon(deduction)}) 이하입니다.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold text-stone-900 mb-5">계산 결과</h2>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
              <p className="text-xs text-red-600 font-medium mb-1">납부 예상 종부세 합계</p>
              <p className="text-2xl sm:text-3xl font-bold text-red-600">{formatKoreanWon(result.total)}</p>
              <p className="text-xs text-stone-400 mt-1">종합부동산세 + 농어촌특별세(20%)</p>
            </div>

            <div className="space-y-2 mb-5">
              {[
                { label: '공시가격', value: price, note: '' },
                { label: '× 공정시장가액비율', value: null, note: `60% 적용` },
                { label: '공시가격 × 60%', value: price * result.fairMarketRatio, note: '' },
                { label: '− 공제금액', value: -result.deduction, note: `${ownershipCount === 'one' ? '1주택 12억' : '다주택 9억'}` },
                { label: '과세표준', value: result.taxableBase, note: '', bold: true },
                { label: '종합부동산세', value: result.comprehensiveTax, note: '' },
                ...(result.combinedDiscount > 0 ? [{ label: `세액공제`, value: null, note: `고령자 ${(result.seniorDiscount * 100).toFixed(0)}% + 장기보유 ${(result.holdingDiscount * 100).toFixed(0)}% = ${(result.combinedDiscount * 100).toFixed(0)}%` }] : []),
                { label: '농어촌특별세', value: result.ruralTax, note: '종부세의 20%' },
              ].filter(Boolean).map(({ label, value, note, bold }) => (
                <div key={label} className={`flex items-center justify-between py-2 border-b border-stone-100 ${bold ? 'font-bold border-t-2 border-stone-200 pt-3' : ''}`}>
                  <div>
                    <p className={`text-sm ${bold ? 'text-stone-900' : 'text-stone-700'}`}>{label}</p>
                    {note && <p className="text-xs text-stone-400">{note}</p>}
                  </div>
                  {value !== null && (
                    <p className={`text-sm font-semibold ${value < 0 ? 'text-green-600' : 'text-stone-800'}`}>
                      {value < 0 ? `-${formatNumber(-value)}` : formatNumber(value)} 원
                    </p>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between py-2.5 font-bold border-t-2 border-stone-200 mt-2 pt-3">
                <p className="text-sm text-stone-900">최종 납부 세금</p>
                <p className="text-base text-red-600">{formatNumber(result.total)} 원</p>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-xl p-3.5 text-xs text-sky-700 leading-relaxed">
              <strong className="block mb-1">납부 기한</strong>
              종합부동산세는 매년 <strong>12월 1일~12월 15일</strong>에 납부합니다.
              과세 기준일은 6월 1일이며, 분납이 가능합니다(납부세액 500만원 초과 시).
              <br /><span className="text-stone-400 mt-1 block">출처: 종합부동산세법 제16조</span>
            </div>
          </div>
        )
      ) : (
        <div className="text-center py-10 text-stone-400 text-sm">
          공시가격을 입력하면 종부세가 자동으로 계산됩니다.
        </div>
      )}

      <p className="text-xs text-stone-400 text-center">
        본 계산기는 참고용입니다. 다주택 합산 공시가격 기준이므로 정확한 세액은 세무사를 통해 확인하세요.
      </p>
    </div>
  )
}
