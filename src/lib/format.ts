/**
 * 숫자를 한국 회계 표기로 변환
 * 예) 123500000 → "1억 2,350만 원"
 */
export function formatKoreanWon(amount: number): string {
  if (amount === 0) return '0원'
  if (amount < 0) return `-${formatKoreanWon(-amount)}`

  const eok = Math.floor(amount / 100000000)
  const man = Math.floor((amount % 100000000) / 10000)
  const won = amount % 10000

  const parts: string[] = []
  if (eok > 0) parts.push(`${eok.toLocaleString()}억`)
  if (man > 0) parts.push(`${man.toLocaleString()}만`)
  if (won > 0) parts.push(`${won.toLocaleString()}`)

  return parts.join(' ') + '원'
}

/**
 * 숫자를 천 단위 콤마 표기 (원 단위까지)
 * 예) 123456789 → "123,456,789"
 */
export function formatNumber(amount: number): string {
  return Math.round(amount).toLocaleString('ko-KR')
}

/**
 * 퍼센트 포맷
 * 예) 0.0834 → "8.34%"
 */
export function formatPercent(rate: number, digits = 2): string {
  return `${(rate * 100).toFixed(digits)}%`
}

/**
 * 입력 문자열에서 숫자만 추출 (콤마 제거)
 */
export function parseAmount(str: string): number {
  const num = parseFloat(str.replace(/,/g, ''))
  return isNaN(num) ? 0 : num
}

/**
 * 만 단위로 표시 (입력 편의용)
 * 예) 500000000 → "5억"
 * 예) 123000000 → "1억 2,300만"
 */
export function formatAmountShort(amount: number): string {
  if (amount === 0) return '0'
  const eok = Math.floor(amount / 100000000)
  const man = Math.floor((amount % 100000000) / 10000)

  if (eok > 0 && man > 0) return `${eok}억 ${man.toLocaleString()}만`
  if (eok > 0) return `${eok}억`
  if (man > 0) return `${man.toLocaleString()}만`
  return `${amount.toLocaleString()}`
}
