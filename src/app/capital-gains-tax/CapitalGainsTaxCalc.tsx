'use client'

import { useState, useMemo } from 'react'
import { calcCapitalGainsTax } from '@/lib/tax-calc'
import { formatKoreanWon, formatNumber } from '@/lib/format'

const QUICK_AMOUNTS = [100000000, 300000000, 500000000, 700000000, 900000000, 1500000000]

export default function CapitalGainsTaxCalc() {
  const [acquisitionStr, setAcquisitionStr] = useState('')
  const [transferStr, setTransferStr] = useState('')
  const [acquisitionCostStr, setAcquisitionCostStr] = useState('')
  const [transferCostStr, setTransferCostStr] = useState('')
  const [holdingYears, setHoldingYears] = useState(3)
  const [residenceYears, setResidenceYears] = useState(0)
  const [ownershipCount, setOwnershipCount] = useState<'one' | 'two_plus'>('one')
  const [isAdjusted, setIsAdjusted] = useState(false)

  const parseAmt = (s: string) => parseFloat(s.replace(/,/g, '')) || 0
  const fmtInput = (val: string, setter: (v: string) => void) => {
    const num = val.replace(/[^0-9]/g, '')
    setter(num ? parseInt(num).toLocaleString() : '')
  }

  const result = useMemo(() => {
    const acquisitionPrice = parseAmt(acquisitionStr)
    const transferPrice = parseAmt(transferStr)
    if (acquisitionPrice <= 0 || transferPrice <= 0) return null
    return calcCapitalGainsTax({
      acquisitionPrice,
      transferPrice,
      acquisitionCost: parseAmt(acquisitionCostStr),
      transferCost: parseAmt(transferCostStr),
      holdingYears,
      residenceYears,
      ownershipCount,
      isAdjusted,
    })
  }, [acquisitionStr, transferStr, acquisitionCostStr, transferCostStr, holdingYears, residenceYears, ownershipCount, isAdjusted])

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-stone-900 mb-5">양도 정보 입력</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* 취득가액 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">취득가액</label>
            <div className="relative">
              <input
                type="text" value={acquisitionStr}
                onChange={e => fmtInput(e.target.value, setAcquisitionStr)}
                placeholder="0"
                className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
            </div>
            {parseAmt(acquisitionStr) > 0 && <p className="text-xs text-stone-400 mt-1">{formatKoreanWon(parseAmt(acquisitionStr))}</p>}
            <div className="flex flex-wrap gap-1 mt-1.5">
              {QUICK_AMOUNTS.slice(0, 4).map(amt => (
                <button key={amt} onClick={() => setAcquisitionStr(amt.toLocaleString())}
                  className="px-2 py-0.5 text-[11px] rounded-lg border border-stone-200 text-stone-500 hover:border-amber-300 hover:bg-amber-50">
                  {formatKoreanWon(amt).replace('원', '')}
                </button>
              ))}
            </div>
          </div>

          {/* 양도가액 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">양도가액</label>
            <div className="relative">
              <input
                type="text" value={transferStr}
                onChange={e => fmtInput(e.target.value, setTransferStr)}
                placeholder="0"
                className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
            </div>
            {parseAmt(transferStr) > 0 && <p className="text-xs text-stone-400 mt-1">{formatKoreanWon(parseAmt(transferStr))}</p>}
            <div className="flex flex-wrap gap-1 mt-1.5">
              {QUICK_AMOUNTS.slice(1, 5).map(amt => (
                <button key={amt} onClick={() => setTransferStr(amt.toLocaleString())}
                  className="px-2 py-0.5 text-[11px] rounded-lg border border-stone-200 text-stone-500 hover:border-amber-300 hover:bg-amber-50">
                  {formatKoreanWon(amt).replace('원', '')}
                </button>
              ))}
            </div>
          </div>

          {/* 취득 부대비용 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              취득 부대비용
              <span className="text-stone-400 font-normal ml-1 text-xs">중개수수료, 법무사비 등</span>
            </label>
            <div className="relative">
              <input type="text" value={acquisitionCostStr}
                onChange={e => fmtInput(e.target.value, setAcquisitionCostStr)}
                placeholder="0"
                className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
            </div>
          </div>

          {/* 양도 비용 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              양도 부대비용
              <span className="text-stone-400 font-normal ml-1 text-xs">중개수수료 등</span>
            </label>
            <div className="relative">
              <input type="text" value={transferCostStr}
                onChange={e => fmtInput(e.target.value, setTransferCostStr)}
                placeholder="0"
                className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* 보유기간 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">보유기간: <strong>{holdingYears}년</strong></label>
            <input type="range" min={0} max={30} value={holdingYears}
              onChange={e => setHoldingYears(parseInt(e.target.value))}
              className="w-full accent-amber-600"
            />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>0년</span><span>30년</span></div>
          </div>

          {/* 거주기간 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">거주기간: <strong>{residenceYears}년</strong></label>
            <input type="range" min={0} max={holdingYears} value={residenceYears}
              onChange={e => setResidenceYears(parseInt(e.target.value))}
              className="w-full accent-amber-600"
            />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>0년</span><span>{holdingYears}년</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 주택 수 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">양도 시 주택 수</label>
            <div className="flex gap-2">
              {([['one', '1주택'], ['two_plus', '2주택 이상']] as ['one' | 'two_plus', string][]).map(([val, label]) => (
                <button key={val} onClick={() => setOwnershipCount(val)}
                  className={`flex-1 py-2 text-xs font-medium rounded-xl border transition-colors ${
                    ownershipCount === val ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-200 text-stone-600 hover:border-amber-300'
                  }`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 조정대상지역 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">조정대상지역</label>
            <div className="flex gap-2">
              {([[true, '조정지역'], [false, '비조정지역']] as [boolean, string][]).map(([val, label]) => (
                <button key={String(val)} onClick={() => setIsAdjusted(val)}
                  className={`flex-1 py-2 text-xs font-medium rounded-xl border transition-colors ${
                    isAdjusted === val ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-200 text-stone-600 hover:border-amber-300'
                  }`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
          <h2 className="text-base font-bold text-stone-900 mb-5">계산 결과</h2>

          {result.isNonTaxable ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <p className="text-3xl mb-2">✅</p>
              <p className="text-base font-bold text-green-700 mb-1">비과세 대상입니다</p>
              <p className="text-sm text-green-600">1주택 2년 보유 요건 충족 + 양도가액 12억 이하</p>
              <p className="text-xs text-stone-400 mt-2">소득세법 제89조 제1항 제3호</p>
            </div>
          ) : (
            <>
              {/* 합계 강조 */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
                <p className="text-xs text-red-600 font-medium mb-1">납부 예상 세금 합계</p>
                <p className="text-2xl sm:text-3xl font-bold text-red-600">{result.total > 0 ? formatKoreanWon(result.total) : '0원'}</p>
                {result.gain > 0 && (
                  <p className="text-xs text-stone-500 mt-1">
                    실효세율 {(result.effectiveRate * 100).toFixed(2)}%
                    &nbsp;(양도차익 {formatKoreanWon(result.gain)} 기준)
                  </p>
                )}
              </div>

              {/* 계산 과정 */}
              <div className="space-y-2 mb-5">
                {[
                  { label: '양도차익', value: result.gain, note: '양도가액 - 취득가액 - 필요경비' },
                  { label: '장기보유특별공제', value: -result.lthdDeduction, note: `${(result.lthRate * 100).toFixed(0)}% 적용 (보유 ${holdingYears}년)` },
                  { label: '기본공제', value: -result.basicDeduction, note: '연 250만원' },
                  { label: '과세표준', value: result.taxBase, note: '', bold: true },
                  { label: '양도소득세', value: result.incomeTax, note: `세율 ${(result.taxRate * 100).toFixed(1)}%` },
                  { label: '지방소득세', value: result.localTax, note: '양도소득세의 10%' },
                ].map(({ label, value, note, bold }) => (
                  <div key={label} className={`flex items-center justify-between py-2 border-b border-stone-100 ${bold ? 'font-bold border-t-2 border-stone-300 pt-3' : ''}`}>
                    <div>
                      <p className={`text-sm ${bold ? 'text-stone-900' : 'text-stone-700'}`}>{label}</p>
                      {note && <p className="text-xs text-stone-400">{note}</p>}
                    </div>
                    <p className={`text-sm font-semibold ${
                      value < 0 ? 'text-green-600' : bold ? 'text-stone-900' : 'text-stone-800'
                    }`}>
                      {value < 0 ? `-${formatNumber(-value)}` : formatNumber(value)} 원
                    </p>
                  </div>
                ))}
                <div className="flex items-center justify-between py-2.5 font-bold border-t-2 border-stone-200 mt-2 pt-3">
                  <p className="text-sm text-stone-900">최종 납부 세금</p>
                  <p className="text-base text-red-600">{formatNumber(result.total)} 원</p>
                </div>
              </div>

              {result.gain <= 0 && (
                <div className="bg-sky-50 border border-sky-100 rounded-xl p-3.5 text-xs text-sky-700">
                  양도차익이 없거나 손실이 발생했습니다. 양도소득세는 부과되지 않습니다.
                </div>
              )}
            </>
          )}

          {/* 1주택 비과세 안내 */}
          {!result.isNonTaxable && ownershipCount === 'one' && holdingYears < 2 && (
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-700">
              <strong>TIP:</strong> 2년 이상 보유하면 실거래가 12억 이하 1주택 비과세가 가능합니다.
              조정대상지역은 2년 거주 요건도 충족해야 합니다.
            </div>
          )}
        </div>
      )}

      {!result && (
        <div className="text-center py-10 text-stone-400 text-sm">
          취득가액과 양도가액을 입력하면 세금이 자동으로 계산됩니다.
        </div>
      )}

      {/* 세율 참고표 */}
      <details className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
        <summary className="px-5 py-4 text-sm font-medium text-stone-700 cursor-pointer list-none flex items-center justify-between select-none hover:bg-stone-50">
          <span>2026년 양도소득세 세율 참고표</span>
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-5 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-stone-50">
                  <th className="border border-stone-200 px-2 py-2 text-left font-medium">과세표준</th>
                  <th className="border border-stone-200 px-2 py-2 text-center font-medium">세율</th>
                  <th className="border border-stone-200 px-2 py-2 text-right font-medium">누진공제</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1,400만원 이하', '6%', '0'],
                  ['5,000만원 이하', '15%', '126만원'],
                  ['8,800만원 이하', '24%', '576만원'],
                  ['1.5억 이하', '35%', '1,544만원'],
                  ['3억 이하', '38%', '1,994만원'],
                  ['5억 이하', '40%', '2,594만원'],
                  ['10억 이하', '42%', '3,594만원'],
                  ['10억 초과', '45%', '6,594만원'],
                ].map(([range, rate, ded]) => (
                  <tr key={range} className="hover:bg-stone-50">
                    <td className="border border-stone-100 px-2 py-1.5 font-medium text-stone-700">{range}</td>
                    <td className="border border-stone-100 px-2 py-1.5 text-center text-red-600 font-semibold">{rate}</td>
                    <td className="border border-stone-100 px-2 py-1.5 text-right text-stone-500">{ded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-stone-400 mt-2">출처: 소득세법 제55조 / 지방소득세는 소득세의 10% 추가</p>
        </div>
      </details>

      <p className="text-xs text-stone-400 text-center">
        본 계산기는 참고용입니다. 실제 세액은 개인 거래 이력에 따라 달라질 수 있습니다.
      </p>
    </div>
  )
}
