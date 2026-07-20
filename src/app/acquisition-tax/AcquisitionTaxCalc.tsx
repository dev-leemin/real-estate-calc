'use client'

import { useState, useMemo } from 'react'
import { calcAcquisitionTax, HousingType, OwnershipCount } from '@/lib/tax-calc'
import { formatKoreanWon, formatNumber } from '@/lib/format'

const QUICK_AMOUNTS = [100000000, 300000000, 500000000, 700000000, 900000000, 1500000000]

export default function AcquisitionTaxCalc() {
  const [priceStr, setPriceStr] = useState('')
  const [housingType, setHousingType] = useState<HousingType>('apartment')
  const [ownershipCount, setOwnershipCount] = useState<OwnershipCount>('one')
  const [isAdjusted, setIsAdjusted] = useState(false)
  const [areaStr, setAreaStr] = useState('85')

  const price = useMemo(() => parseFloat(priceStr.replace(/,/g, '')) || 0, [priceStr])
  const area = useMemo(() => parseFloat(areaStr) || 0, [areaStr])

  const result = useMemo(() => {
    if (price <= 0) return null
    return calcAcquisitionTax({ price, housingType, ownershipCount, isAdjusted, area })
  }, [price, housingType, ownershipCount, isAdjusted, area])

  const handlePriceInput = (val: string) => {
    const num = val.replace(/[^0-9]/g, '')
    setPriceStr(num ? parseInt(num).toLocaleString() : '')
  }

  return (
    <div className="space-y-6">
      {/* 입력 섹션 */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-stone-900 mb-5">취득 정보 입력</h2>

        {/* 취득가액 */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-stone-700 mb-2">
            취득가액 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={priceStr}
              onChange={e => handlePriceInput(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">원</span>
          </div>
          {price > 0 && (
            <p className="text-xs text-stone-500 mt-1">{formatKoreanWon(price)}</p>
          )}
          {/* 빠른 입력 버튼 */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {QUICK_AMOUNTS.map(amt => (
              <button
                key={amt}
                onClick={() => handlePriceInput(String(amt))}
                className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                  price === amt
                    ? 'bg-amber-100 border-amber-400 text-amber-700 font-medium'
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-amber-300 hover:bg-amber-50'
                }`}
              >
                {formatKoreanWon(amt).replace('원', '')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {/* 주택 유형 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">주택 유형</label>
            <div className="grid grid-cols-2 gap-1.5">
              {([
                ['apartment', '아파트'],
                ['house', '단독·다가구'],
                ['officetel', '오피스텔'],
                ['land', '토지·상가'],
              ] as [HousingType, string][]).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setHousingType(val)}
                  className={`py-2 text-xs font-medium rounded-lg border transition-colors ${
                    housingType === val
                      ? 'bg-amber-600 border-amber-600 text-white'
                      : 'bg-white border-stone-200 text-stone-600 hover:border-amber-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 주택 수 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">취득 후 주택 수</label>
            <div className="grid grid-cols-2 gap-1.5">
              {([
                ['one', '1주택'],
                ['two', '2주택'],
                ['three_plus', '3주택+'],
                ['corporation', '법인'],
              ] as [OwnershipCount, string][]).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setOwnershipCount(val)}
                  className={`py-2 text-xs font-medium rounded-lg border transition-colors ${
                    ownershipCount === val
                      ? 'bg-amber-600 border-amber-600 text-white'
                      : 'bg-white border-stone-200 text-stone-600 hover:border-amber-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 조정대상지역 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">조정대상지역 여부</label>
            <div className="flex gap-2">
              {[
                [true, '조정대상지역'],
                [false, '비조정지역'],
              ].map(([val, label]) => (
                <button
                  key={String(val)}
                  onClick={() => setIsAdjusted(val as boolean)}
                  className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-colors ${
                    isAdjusted === val
                      ? 'bg-amber-600 border-amber-600 text-white'
                      : 'bg-white border-stone-200 text-stone-600 hover:border-amber-300'
                  }`}
                >
                  {label as string}
                </button>
              ))}
            </div>
          </div>

          {/* 면적 */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              주거전용면적 (㎡)
              <span className="text-stone-400 font-normal ml-1">— 농특세 기준</span>
            </label>
            <div className="relative">
              <input
                type="number"
                value={areaStr}
                onChange={e => setAreaStr(e.target.value)}
                placeholder="85"
                className="w-full px-4 py-3 pr-8 border border-stone-300 rounded-xl text-stone-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 transition-colors"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">㎡</span>
            </div>
            <p className="text-xs text-stone-400 mt-1">85㎡ 초과 시 농어촌특별세 부과</p>
          </div>
        </div>
      </div>

      {/* 결과 섹션 */}
      {result && (
        <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
          <h2 className="text-base font-bold text-stone-900 mb-5">계산 결과</h2>

          {/* 합계 강조 */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
            <p className="text-xs text-amber-700 font-medium mb-1">납부 예상 세금 합계</p>
            <p className="text-2xl sm:text-3xl font-bold text-amber-700">
              {formatKoreanWon(result.total)}
            </p>
            <p className="text-xs text-stone-500 mt-1">
              실효세율 {(result.effectiveRate * 100).toFixed(3)}%
              &nbsp;(취득가액 {formatKoreanWon(price)} 기준)
            </p>
          </div>

          {/* 세목별 내역 */}
          <div className="space-y-2 mb-5">
            {result.breakdown.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-stone-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-stone-800">{item.label}</p>
                  <p className="text-xs text-stone-400">{(item.rate * 100).toFixed(3)}%</p>
                </div>
                <p className="text-sm font-semibold text-stone-900">{formatNumber(item.amount)} 원</p>
              </div>
            ))}
            <div className="flex items-center justify-between py-2.5 font-bold border-t-2 border-stone-200 mt-2 pt-3">
              <p className="text-sm text-stone-900">합계</p>
              <p className="text-base text-amber-700">{formatNumber(result.total)} 원</p>
            </div>
          </div>

          {/* 세율 시각화 바 */}
          <div className="mb-5">
            <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
              <span>실효세율</span>
              <span className="font-medium text-stone-700">{(result.effectiveRate * 100).toFixed(3)}%</span>
            </div>
            <div className="w-full bg-stone-100 rounded-full h-2.5">
              <div
                className="bg-amber-500 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(result.effectiveRate * 100 / 15 * 100, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-stone-400 mt-1">
              <span>0%</span>
              <span>15%+</span>
            </div>
          </div>

          {/* 납부 안내 */}
          <div className="bg-sky-50 border border-sky-100 rounded-xl p-3.5 text-xs text-sky-700 leading-relaxed">
            <strong className="block mb-1">납부 기한 안내</strong>
            잔금 지급일 또는 등기 접수일 중 빠른 날로부터 <strong>60일 이내</strong>에 납부해야 합니다.
            기한 초과 시 무신고가산세 20%가 부과될 수 있습니다.
            <br /><span className="text-stone-400 mt-1 block">출처: 지방세법 제20조</span>
          </div>
        </div>
      )}

      {!result && (
        <div className="text-center py-10 text-stone-400 text-sm">
          취득가액을 입력하면 세금이 자동으로 계산됩니다.
        </div>
      )}

      {/* 세율 참고표 */}
      <details className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
        <summary className="px-5 py-4 text-sm font-medium text-stone-700 cursor-pointer list-none flex items-center justify-between select-none hover:bg-stone-50 transition-colors">
          <span>2026년 취득세율 참고표</span>
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-5 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-stone-50">
                  <th className="border border-stone-200 px-3 py-2 text-left font-medium text-stone-700">구분</th>
                  <th className="border border-stone-200 px-3 py-2 text-center font-medium text-stone-700">취득세율</th>
                  <th className="border border-stone-200 px-3 py-2 text-center font-medium text-stone-700">지방교육세</th>
                  <th className="border border-stone-200 px-3 py-2 text-center font-medium text-stone-700">농어촌특별세</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['주택 6억 이하', '1%', '취득세의 10%', '면제 (85㎡·6억 이하)'],
                  ['주택 6~9억', '1~3% (점진적)', '취득세의 10%', '취득세의 10%'],
                  ['주택 9억 초과', '3%', '취득세의 10%', '취득세의 10%'],
                  ['2주택 조정지역', '8%', '취득세의 10%', '취득세의 10%'],
                  ['3주택+ 조정지역', '12%', '취득세의 10%', '취득세의 10%'],
                  ['법인', '12%', '취득세의 10%', '취득세의 10%'],
                  ['토지·상가', '4%', '취득세의 10%', '취득세의 20%'],
                ].map(([구분, 취득세, 교육세, 농특세]) => (
                  <tr key={구분} className="hover:bg-stone-50">
                    <td className="border border-stone-200 px-3 py-2 font-medium text-stone-700">{구분}</td>
                    <td className="border border-stone-200 px-3 py-2 text-center text-red-600 font-semibold">{취득세}</td>
                    <td className="border border-stone-200 px-3 py-2 text-center text-stone-600">{교육세}</td>
                    <td className="border border-stone-200 px-3 py-2 text-center text-stone-600">{농특세}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-stone-400 mt-2">출처: 지방세법 제11조, 제151조 / 농어촌특별세법 제5조</p>
        </div>
      </details>

      {/* 면책 */}
      <p className="text-xs text-stone-400 text-center leading-relaxed">
        본 계산기는 참고용입니다. 실제 세액은 개인 상황에 따라 달라질 수 있으니
        세무사 또는 국세청 홈택스를 통해 확인하세요.
      </p>
    </div>
  )
}
