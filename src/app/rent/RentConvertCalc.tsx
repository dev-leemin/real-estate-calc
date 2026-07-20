'use client'

import { useState, useMemo } from 'react'
import { calcRentConvert } from '@/lib/tax-calc'
import { formatKoreanWon, formatNumber } from '@/lib/format'

export default function RentConvertCalc() {
  const [mode, setMode] = useState<'jeonse_to_monthly' | 'monthly_to_jeonse'>('jeonse_to_monthly')
  const [jeonseStr, setJeonseStr] = useState('')
  const [depositStr, setDepositStr] = useState('')
  const [monthlyRentStr, setMonthlyRentStr] = useState('')
  const [conversionRateStr, setConversionRateStr] = useState('5.0')
  const [loanRateStr, setLoanRateStr] = useState('4.0')

  const fmtInput = (val: string, setter: (v: string) => void) => {
    const num = val.replace(/[^0-9]/g, '')
    setter(num ? parseInt(num).toLocaleString() : '')
  }
  const parseAmt = (s: string) => parseFloat(s.replace(/,/g, '')) || 0

  const result = useMemo(() => {
    const conversionRate = parseFloat(conversionRateStr) / 100
    const loanRate = parseFloat(loanRateStr) / 100

    if (mode === 'jeonse_to_monthly') {
      const jeonseAmount = parseAmt(jeonseStr)
      if (jeonseAmount <= 0) return null
      return calcRentConvert({ mode, jeonseAmount, deposit: 0, monthlyRent: 0, conversionRate, loanRate })
    } else {
      const deposit = parseAmt(depositStr)
      const monthlyRent = parseAmt(monthlyRentStr)
      if (deposit < 0 || monthlyRent <= 0) return null
      return calcRentConvert({ mode, jeonseAmount: 0, deposit, monthlyRent, conversionRate, loanRate })
    }
  }, [mode, jeonseStr, depositStr, monthlyRentStr, conversionRateStr, loanRateStr])

  return (
    <div className="space-y-6">
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-stone-900 mb-5">전·월세 환산 계산</h2>

        {/* 모드 선택 */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-stone-700 mb-2">계산 방향</label>
          <div className="flex gap-2">
            {([
              ['jeonse_to_monthly', '전세 → 월세', '전세금을 월세로 환산'],
              ['monthly_to_jeonse', '월세 → 전세', '월세를 전세금으로 환산'],
            ] as [typeof mode, string, string][]).map(([val, label, desc]) => (
              <button key={val} onClick={() => setMode(val)}
                className={`flex-1 p-3 rounded-xl border text-left transition-colors ${
                  mode === val ? 'bg-amber-50 border-amber-400' : 'bg-white border-stone-200 hover:border-amber-200'
                }`}>
                <p className={`text-sm font-semibold ${mode === val ? 'text-amber-700' : 'text-stone-800'}`}>{label}</p>
                <p className="text-xs text-stone-400 mt-0.5">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 입력 필드 */}
        {mode === 'jeonse_to_monthly' ? (
          <div className="mb-5">
            <label className="block text-sm font-medium text-stone-700 mb-2">전세금</label>
            <div className="relative">
              <input type="text" value={jeonseStr}
                onChange={e => fmtInput(e.target.value, setJeonseStr)}
                placeholder="0"
                className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
            </div>
            {parseAmt(jeonseStr) > 0 && <p className="text-xs text-stone-400 mt-1">{formatKoreanWon(parseAmt(jeonseStr))}</p>}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[100000000, 200000000, 300000000, 500000000].map(amt => (
                <button key={amt} onClick={() => setJeonseStr(amt.toLocaleString())}
                  className="px-2.5 py-1 text-xs rounded-lg border border-stone-200 text-stone-500 hover:border-amber-300 hover:bg-amber-50">
                  {formatKoreanWon(amt).replace('원', '')}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">보증금</label>
              <div className="relative">
                <input type="text" value={depositStr}
                  onChange={e => fmtInput(e.target.value, setDepositStr)}
                  placeholder="0"
                  className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">월세</label>
              <div className="relative">
                <input type="text" value={monthlyRentStr}
                  onChange={e => fmtInput(e.target.value, setMonthlyRentStr)}
                  placeholder="0"
                  className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">전월세 전환율</label>
            <div className="relative">
              <input type="number" value={conversionRateStr}
                onChange={e => setConversionRateStr(e.target.value)}
                step="0.1" min="1" max="20"
                className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">%</span>
            </div>
            <p className="text-[10px] text-stone-400 mt-1">한국은행 기준금리 + 2~3%p 수준</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">전세 대출금리 (비교용)</label>
            <div className="relative">
              <input type="number" value={loanRateStr}
                onChange={e => setLoanRateStr(e.target.value)}
                step="0.1" min="1" max="15"
                className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
          <h2 className="text-base font-bold text-stone-900 mb-5">환산 결과</h2>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-center">
            <p className="text-xs text-amber-700 font-medium mb-1">
              {mode === 'jeonse_to_monthly' ? '환산 월세' : '환산 전세금'}
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-amber-700">
              {mode === 'jeonse_to_monthly'
                ? `월 ${formatNumber(result.convertedAmount)}원`
                : formatKoreanWon(result.convertedAmount)}
            </p>
          </div>

          {/* 전세 vs 월세 비교 */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-stone-800 mb-3">전세 대출이자 vs 월세 월 비용 비교</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className={`p-4 rounded-xl border text-center ${
                result.recommendation === 'jeonse' ? 'border-green-400 bg-green-50' : 'border-stone-200 bg-stone-50'
              }`}>
                <p className="text-xs font-medium text-stone-600 mb-2">전세 대출이자</p>
                <p className={`text-lg font-bold ${result.recommendation === 'jeonse' ? 'text-green-700' : 'text-stone-700'}`}>
                  월 {formatNumber(result.jeonseLoanInterest)}원
                </p>
                {result.recommendation === 'jeonse' && (
                  <p className="text-[10px] text-green-600 mt-1 font-medium">✓ 더 유리</p>
                )}
              </div>
              <div className={`p-4 rounded-xl border text-center ${
                result.recommendation === 'monthly' ? 'border-green-400 bg-green-50' : 'border-stone-200 bg-stone-50'
              }`}>
                <p className="text-xs font-medium text-stone-600 mb-2">월세 납부액</p>
                <p className={`text-lg font-bold ${result.recommendation === 'monthly' ? 'text-green-700' : 'text-stone-700'}`}>
                  월 {formatNumber(result.monthlyTotal)}원
                </p>
                {result.recommendation === 'monthly' && (
                  <p className="text-[10px] text-green-600 mt-1 font-medium">✓ 더 유리</p>
                )}
              </div>
            </div>
            <div className="mt-3 p-3 bg-stone-50 rounded-xl text-xs text-stone-600 text-center">
              {result.recommendation === 'jeonse'
                ? `전세가 월 ${formatNumber(result.savingAmount)}원 더 저렴합니다.`
                : result.recommendation === 'monthly'
                ? `월세가 월 ${formatNumber(result.savingAmount)}원 더 저렴합니다.`
                : '전세와 월세 비용이 비슷합니다.'}
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-100 rounded-xl p-3.5 text-xs text-sky-700 leading-relaxed">
            <strong className="block mb-1">참고사항</strong>
            전세는 목돈이 필요하고 보증금 보호(전세보증보험)가 중요합니다.
            월세는 현금 유동성이 높지만 월 비용이 확정됩니다.
            개인 자금 상황과 거주 기간을 고려해 선택하세요.
          </div>
        </div>
      )}

      {!result && (
        <div className="text-center py-10 text-stone-400 text-sm">
          금액을 입력하면 환산 결과가 자동으로 표시됩니다.
        </div>
      )}

      <p className="text-xs text-stone-400 text-center">
        본 계산기는 참고용입니다. 실제 전환율은 임대인·임차인 합의에 따라 다를 수 있습니다.
      </p>
    </div>
  )
}
