'use client'

import { useState, useMemo } from 'react'
import { calcLoan, RepaymentType } from '@/lib/tax-calc'
import { formatKoreanWon, formatNumber } from '@/lib/format'

const QUICK_AMOUNTS = [100000000, 200000000, 300000000, 500000000, 700000000, 1000000000]
const QUICK_RATES = [3.0, 3.5, 4.0, 4.5, 5.0, 6.0]

export default function LoanCalc() {
  const [principalStr, setPrincipalStr] = useState('')
  const [rateStr, setRateStr] = useState('4.0')
  const [years, setYears] = useState(30)
  const [repaymentType, setRepaymentType] = useState<RepaymentType>('equal_payment')
  const [showFullSchedule, setShowFullSchedule] = useState(false)
  const [compareMode, setCompareMode] = useState(false)

  const principal = useMemo(() => parseFloat(principalStr.replace(/,/g, '')) || 0, [principalStr])
  const annualRate = useMemo(() => parseFloat(rateStr) / 100 || 0, [rateStr])
  const months = years * 12

  const result = useMemo(() => {
    if (principal <= 0 || annualRate <= 0) return null
    return calcLoan({ principal, annualRate, months, repaymentType })
  }, [principal, annualRate, months, repaymentType])

  // 비교용: 원리금균등
  const resultEqual = useMemo(() => {
    if (!compareMode || principal <= 0 || annualRate <= 0) return null
    return calcLoan({ principal, annualRate, months, repaymentType: 'equal_payment' })
  }, [compareMode, principal, annualRate, months])

  const resultPrincipal = useMemo(() => {
    if (!compareMode || principal <= 0 || annualRate <= 0) return null
    return calcLoan({ principal, annualRate, months, repaymentType: 'equal_principal' })
  }, [compareMode, principal, annualRate, months])

  const handlePrincipalInput = (val: string) => {
    const num = val.replace(/[^0-9]/g, '')
    setPrincipalStr(num ? parseInt(num).toLocaleString() : '')
  }

  const displaySchedule = result
    ? (showFullSchedule ? result.schedule : result.schedule.slice(0, 12))
    : []

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-stone-900 mb-5">대출 정보 입력</h2>

        {/* 대출금액 */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-stone-700 mb-2">대출금액</label>
          <div className="relative">
            <input
              type="text"
              value={principalStr}
              onChange={e => handlePrincipalInput(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
          </div>
          {principal > 0 && <p className="text-xs text-stone-500 mt-1">{formatKoreanWon(principal)}</p>}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {QUICK_AMOUNTS.map(amt => (
              <button
                key={amt}
                onClick={() => handlePrincipalInput(String(amt))}
                className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                  principal === amt
                    ? 'bg-amber-100 border-amber-400 text-amber-700 font-medium'
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-300'
                }`}
              >
                {formatKoreanWon(amt).replace('원', '')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {/* 이자율 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">연 이자율</label>
            <div className="relative">
              <input
                type="number"
                value={rateStr}
                onChange={e => setRateStr(e.target.value)}
                step="0.1"
                min="0.1"
                max="30"
                className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">%</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {QUICK_RATES.map(r => (
                <button
                  key={r}
                  onClick={() => setRateStr(String(r))}
                  className={`px-2 py-0.5 text-xs rounded-lg border transition-colors ${
                    parseFloat(rateStr) === r
                      ? 'bg-amber-100 border-amber-400 text-amber-700'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-300'
                  }`}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>

          {/* 대출기간 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">대출 기간: <strong>{years}년</strong></label>
            <input
              type="range"
              min={1}
              max={40}
              value={years}
              onChange={e => setYears(parseInt(e.target.value))}
              className="w-full accent-amber-600"
            />
            <div className="flex justify-between text-xs text-stone-400 mt-1">
              <span>1년</span>
              <span>40년</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {[10, 15, 20, 25, 30].map(y => (
                <button
                  key={y}
                  onClick={() => setYears(y)}
                  className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                    years === y
                      ? 'bg-amber-100 border-amber-400 text-amber-700'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-300'
                  }`}
                >
                  {y}년
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 상환방식 */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">상환 방식</label>
          <div className="grid grid-cols-3 gap-2">
            {([
              ['equal_payment', '원리금균등', '매월 동일 금액'],
              ['equal_principal', '원금균등', '원금 고정, 이자 감소'],
              ['bullet', '만기일시', '이자만 납부 후 일시상환'],
            ] as [RepaymentType, string, string][]).map(([val, label, desc]) => (
              <button
                key={val}
                onClick={() => setRepaymentType(val)}
                className={`p-3 rounded-xl border text-left transition-colors ${
                  repaymentType === val
                    ? 'bg-amber-50 border-amber-400'
                    : 'bg-white border-stone-200 hover:border-amber-200'
                }`}
              >
                <p className={`text-xs font-semibold mb-0.5 ${repaymentType === val ? 'text-amber-700' : 'text-stone-800'}`}>{label}</p>
                <p className="text-[10px] text-stone-400 leading-tight">{desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <>
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-bold text-stone-900 mb-5">계산 결과</h2>

            {/* 주요 수치 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                <p className="text-xs text-amber-700 font-medium mb-1">
                  {repaymentType === 'equal_payment' ? '매월 납입액' : '첫달 납입액'}
                </p>
                <p className="text-xl font-bold text-amber-700">{formatNumber(result.monthlyPayment)}원</p>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-center">
                <p className="text-xs text-red-600 font-medium mb-1">총 이자</p>
                <p className="text-xl font-bold text-red-600">{formatKoreanWon(result.totalInterest)}</p>
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center">
                <p className="text-xs text-stone-500 font-medium mb-1">총 상환금액</p>
                <p className="text-xl font-bold text-stone-800">{formatKoreanWon(result.totalPayment)}</p>
              </div>
            </div>

            {/* 비율 시각화 */}
            <div className="mb-6">
              <div className="flex text-xs mb-1.5">
                <span className="flex-1 text-stone-600">원금 {formatKoreanWon(principal)}</span>
                <span className="text-red-500">이자 {formatKoreanWon(result.totalInterest)}</span>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500"
                  style={{ width: `${(principal / result.totalPayment) * 100}%` }}
                />
                <div className="bg-red-400 flex-1" />
              </div>
              <div className="flex text-[10px] text-stone-400 mt-1">
                <span className="flex-1">{((principal / result.totalPayment) * 100).toFixed(1)}%</span>
                <span>{((result.totalInterest / result.totalPayment) * 100).toFixed(1)}%</span>
              </div>
            </div>

            {/* 상환 일정표 */}
            <div>
              <h3 className="text-sm font-semibold text-stone-800 mb-3">
                상환 일정 {showFullSchedule ? '전체' : '(첫 12개월)'}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-50">
                      <th className="border border-stone-200 px-2 py-2 text-center font-medium text-stone-600">회차</th>
                      <th className="border border-stone-200 px-2 py-2 text-right font-medium text-stone-600">납입액</th>
                      <th className="border border-stone-200 px-2 py-2 text-right font-medium text-stone-600">원금</th>
                      <th className="border border-stone-200 px-2 py-2 text-right font-medium text-stone-600">이자</th>
                      <th className="border border-stone-200 px-2 py-2 text-right font-medium text-stone-600">잔액</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displaySchedule.map(row => (
                      <tr key={row.month} className="hover:bg-stone-50">
                        <td className="border border-stone-100 px-2 py-1.5 text-center text-stone-600">{row.month}회</td>
                        <td className="border border-stone-100 px-2 py-1.5 text-right font-medium">{formatNumber(row.payment)}</td>
                        <td className="border border-stone-100 px-2 py-1.5 text-right text-amber-700">{formatNumber(row.principal)}</td>
                        <td className="border border-stone-100 px-2 py-1.5 text-right text-red-500">{formatNumber(row.interest)}</td>
                        <td className="border border-stone-100 px-2 py-1.5 text-right text-stone-500">{formatNumber(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {result.schedule.length > 12 && (
                <button
                  onClick={() => setShowFullSchedule(!showFullSchedule)}
                  className="mt-3 w-full py-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl hover:bg-amber-100 transition-colors"
                >
                  {showFullSchedule ? `접기 ↑` : `전체 ${result.schedule.length}회차 보기 ↓`}
                </button>
              )}
            </div>
          </div>

          {/* 상환방식 비교 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-stone-900">원리금균등 vs 원금균등 비교</h2>
              <button
                onClick={() => setCompareMode(!compareMode)}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                  compareMode
                    ? 'bg-amber-600 border-amber-600 text-white'
                    : 'border-stone-200 text-stone-600 hover:border-amber-300'
                }`}
              >
                {compareMode ? '비교 닫기' : '비교 열기'}
              </button>
            </div>
            {compareMode && resultEqual && resultPrincipal && (
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-stone-50">
                      <th className="border border-stone-200 px-3 py-2 text-left font-medium">항목</th>
                      <th className="border border-stone-200 px-3 py-2 text-center font-medium text-amber-700">원리금균등</th>
                      <th className="border border-stone-200 px-3 py-2 text-center font-medium text-green-700">원금균등</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-stone-100 px-3 py-2 font-medium">첫달 납입액</td>
                      <td className="border border-stone-100 px-3 py-2 text-center">{formatNumber(resultEqual.monthlyPayment)}원</td>
                      <td className="border border-stone-100 px-3 py-2 text-center">{formatNumber(resultPrincipal.monthlyPayment)}원</td>
                    </tr>
                    <tr className="bg-stone-50">
                      <td className="border border-stone-100 px-3 py-2 font-medium">총 이자</td>
                      <td className="border border-stone-100 px-3 py-2 text-center text-red-500">{formatKoreanWon(resultEqual.totalInterest)}</td>
                      <td className="border border-stone-100 px-3 py-2 text-center text-green-600">{formatKoreanWon(resultPrincipal.totalInterest)}</td>
                    </tr>
                    <tr>
                      <td className="border border-stone-100 px-3 py-2 font-medium">총 상환액</td>
                      <td className="border border-stone-100 px-3 py-2 text-center">{formatKoreanWon(resultEqual.totalPayment)}</td>
                      <td className="border border-stone-100 px-3 py-2 text-center">{formatKoreanWon(resultPrincipal.totalPayment)}</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-stone-100 px-3 py-2 font-medium text-green-700">원금균등 절약액</td>
                      <td className="border border-stone-100 px-3 py-2 text-center text-stone-400">—</td>
                      <td className="border border-stone-100 px-3 py-2 text-center text-green-700 font-bold">
                        {formatKoreanWon(resultEqual.totalInterest - resultPrincipal.totalInterest)} 절약
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[10px] text-stone-400 mt-2">
                  원금균등 방식은 초기 납입액이 높지만 총 이자를 줄일 수 있습니다.
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {!result && (
        <div className="text-center py-10 text-stone-400 text-sm">
          대출금액과 이자율을 입력하면 상환액이 자동으로 계산됩니다.
        </div>
      )}

      <p className="text-xs text-stone-400 text-center">
        본 계산기는 참고용입니다. 실제 대출 조건은 금융기관에 확인하세요.
      </p>
    </div>
  )
}
