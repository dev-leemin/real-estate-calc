/**
 * 부동산 세금 계산 로직 (순수 함수)
 * 출처: 지방세법, 소득세법, 상속세 및 증여세법, 종합부동산세법
 */

// ─── 취득세 ───────────────────────────────────────────────

export type HousingType = 'apartment' | 'house' | 'officetel' | 'land'
export type OwnershipCount = 'one' | 'two' | 'three_plus' | 'corporation'

export interface AcquisitionTaxInput {
  price: number           // 취득가액 (원)
  housingType: HousingType
  ownershipCount: OwnershipCount
  isAdjusted: boolean     // 조정대상지역 여부
  area: number            // 면적 (㎡)
}

export interface AcquisitionTaxResult {
  acquisitionTax: number  // 취득세
  educationTax: number    // 지방교육세
  ruralTax: number        // 농어촌특별세
  total: number           // 합계
  effectiveRate: number   // 실효세율 (소수점)
  breakdown: {
    label: string
    amount: number
    rate: number
  }[]
}

export function calcAcquisitionTax(input: AcquisitionTaxInput): AcquisitionTaxResult {
  const { price, housingType, ownershipCount, isAdjusted, area } = input

  // 비주택(토지·상가): 단순 4%
  if (housingType === 'land') {
    const tax = price * 0.04
    const eduTax = tax * 0.1
    const ruralTax = tax * 0.2
    const total = tax + eduTax + ruralTax
    return {
      acquisitionTax: tax,
      educationTax: eduTax,
      ruralTax: ruralTax,
      total,
      effectiveRate: total / price,
      breakdown: [
        { label: '취득세', amount: tax, rate: 0.04 },
        { label: '지방교육세', amount: eduTax, rate: 0.004 },
        { label: '농어촌특별세', amount: ruralTax, rate: 0.008 },
      ],
    }
  }

  // 법인
  if (ownershipCount === 'corporation') {
    const rate = 0.12
    const tax = price * rate
    const eduTax = tax * 0.1
    const ruralTax = area > 85 ? tax * 0.1 : 0
    const total = tax + eduTax + ruralTax
    return {
      acquisitionTax: tax,
      educationTax: eduTax,
      ruralTax,
      total,
      effectiveRate: total / price,
      breakdown: [
        { label: '취득세 (법인)', amount: tax, rate },
        { label: '지방교육세', amount: eduTax, rate: rate * 0.1 },
        ...(ruralTax > 0 ? [{ label: '농어촌특별세', amount: ruralTax, rate: rate * 0.1 }] : []),
      ],
    }
  }

  // 3주택+
  if (ownershipCount === 'three_plus') {
    const rate = isAdjusted ? 0.12 : 0.08
    const tax = price * rate
    const eduTax = tax * 0.1
    const ruralTax = tax * 0.1
    const total = tax + eduTax + ruralTax
    return {
      acquisitionTax: tax,
      educationTax: eduTax,
      ruralTax,
      total,
      effectiveRate: total / price,
      breakdown: [
        { label: `취득세 (3주택+ ${isAdjusted ? '조정' : '비조정'})`, amount: tax, rate },
        { label: '지방교육세', amount: eduTax, rate: rate * 0.1 },
        { label: '농어촌특별세', amount: ruralTax, rate: rate * 0.1 },
      ],
    }
  }

  // 2주택
  if (ownershipCount === 'two') {
    // 2주택 조정: 8%, 비조정: 1~3%
    let rate: number
    let rateLabel: string
    if (isAdjusted) {
      rate = 0.08
      rateLabel = '8% (2주택 조정지역)'
    } else {
      rate = calcBaseHousingRate(price)
      rateLabel = `${(rate * 100).toFixed(1)}% (2주택 비조정)`
    }
    const tax = price * rate
    const eduTax = tax * 0.1
    // 농특세: 비과세 조건 (6억 이하 && 85㎡ 이하)
    const ruralTaxExempt = price <= 600000000 && area <= 85
    const ruralTax = ruralTaxExempt ? 0 : tax * 0.1
    const total = tax + eduTax + ruralTax
    return {
      acquisitionTax: tax,
      educationTax: eduTax,
      ruralTax,
      total,
      effectiveRate: total / price,
      breakdown: [
        { label: `취득세 (${rateLabel})`, amount: tax, rate },
        { label: '지방교육세', amount: eduTax, rate: rate * 0.1 },
        ...(!ruralTaxExempt ? [{ label: '농어촌특별세', amount: ruralTax, rate: rate * 0.1 }] : []),
      ],
    }
  }

  // 1주택
  const rate = calcBaseHousingRate(price)
  const tax = price * rate
  const eduTax = tax * 0.1
  const ruralTaxExempt = price <= 600000000 && area <= 85
  const ruralTax = ruralTaxExempt ? 0 : tax * 0.1
  const total = tax + eduTax + ruralTax

  const rateDesc =
    price <= 600000000 ? '1% (6억 이하)'
    : price <= 900000000 ? `${(rate * 100).toFixed(3)}% (6억~9억 구간)`
    : '3% (9억 초과)'

  return {
    acquisitionTax: tax,
    educationTax: eduTax,
    ruralTax,
    total,
    effectiveRate: total / price,
    breakdown: [
      { label: `취득세 (${rateDesc})`, amount: tax, rate },
      { label: '지방교육세', amount: eduTax, rate: rate * 0.1 },
      ...(!ruralTaxExempt ? [{ label: '농어촌특별세', amount: ruralTax, rate: rate * 0.1 }] : []),
    ],
  }
}

/** 주택 기본 세율 계산 (지방세법 제11조) */
function calcBaseHousingRate(price: number): number {
  if (price <= 600000000) return 0.01
  if (price <= 900000000) {
    // [(취득가액 × 2 / 3억) - 3] / 100
    return ((price * 2) / 300000000 - 3) / 100
  }
  return 0.03
}

// ─── 대출 상환 ────────────────────────────────────────────

export type RepaymentType = 'equal_payment' | 'equal_principal' | 'bullet'

export interface LoanInput {
  principal: number       // 대출금액
  annualRate: number      // 연 이자율 (소수점, 예: 0.04)
  months: number          // 대출기간 (개월)
  repaymentType: RepaymentType
}

export interface LoanMonthRow {
  month: number
  payment: number         // 납입액
  principal: number       // 원금
  interest: number        // 이자
  balance: number         // 잔액
}

export interface LoanResult {
  monthlyPayment: number  // 월 납입액 (원리금균등만 고정)
  totalPayment: number    // 총 상환금액
  totalInterest: number   // 총 이자
  schedule: LoanMonthRow[]
}

export function calcLoan(input: LoanInput): LoanResult {
  const { principal, annualRate, months, repaymentType } = input
  const monthlyRate = annualRate / 12
  const schedule: LoanMonthRow[] = []

  if (repaymentType === 'bullet') {
    const monthlyInterest = principal * monthlyRate
    for (let m = 1; m <= months; m++) {
      schedule.push({
        month: m,
        payment: m === months ? principal + monthlyInterest : monthlyInterest,
        principal: m === months ? principal : 0,
        interest: monthlyInterest,
        balance: m === months ? 0 : principal,
      })
    }
    const totalInterest = monthlyInterest * months
    return {
      monthlyPayment: monthlyInterest,
      totalPayment: principal + totalInterest,
      totalInterest,
      schedule,
    }
  }

  if (repaymentType === 'equal_payment') {
    // 원리금균등 공식: P * r * (1+r)^n / ((1+r)^n - 1)
    const payment = monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)

    let balance = principal
    let totalInterest = 0
    for (let m = 1; m <= months; m++) {
      const interest = balance * monthlyRate
      const princ = payment - interest
      balance -= princ
      if (m === months) balance = 0
      totalInterest += interest
      schedule.push({
        month: m,
        payment,
        principal: princ,
        interest,
        balance: Math.max(0, balance),
      })
    }
    return {
      monthlyPayment: payment,
      totalPayment: payment * months,
      totalInterest,
      schedule,
    }
  }

  // 원금균등
  const principalPerMonth = principal / months
  let balance = principal
  let totalPayment = 0
  let totalInterest = 0

  for (let m = 1; m <= months; m++) {
    const interest = balance * monthlyRate
    const payment = principalPerMonth + interest
    balance -= principalPerMonth
    if (m === months) balance = 0
    totalPayment += payment
    totalInterest += interest
    schedule.push({
      month: m,
      payment,
      principal: principalPerMonth,
      interest,
      balance: Math.max(0, balance),
    })
  }
  return {
    monthlyPayment: schedule[0]?.payment ?? 0,
    totalPayment,
    totalInterest,
    schedule,
  }
}

// ─── 양도소득세 ───────────────────────────────────────────

export interface CapitalGainsTaxInput {
  acquisitionPrice: number   // 취득가액
  transferPrice: number      // 양도가액
  acquisitionCost: number    // 취득 부대비용 (중개수수료, 법무사비 등)
  transferCost: number       // 양도 부대비용
  holdingYears: number       // 보유기간 (년)
  residenceYears: number     // 거주기간 (년)
  ownershipCount: 'one' | 'two_plus'
  isAdjusted: boolean
}

export interface CapitalGainsTaxResult {
  gain: number               // 양도차익
  lthdDeduction: number      // 장기보유특별공제
  basicDeduction: number     // 기본공제 (250만원)
  taxBase: number            // 과세표준
  incomeTax: number          // 양도소득세
  localTax: number           // 지방소득세 (10%)
  total: number              // 합계
  effectiveRate: number
  lthRate: number            // 장기보유특별공제율
  taxRate: number            // 적용 세율
  isNonTaxable: boolean      // 1주택 비과세 여부
}

export function calcCapitalGainsTax(input: CapitalGainsTaxInput): CapitalGainsTaxResult {
  const {
    acquisitionPrice, transferPrice, acquisitionCost, transferCost,
    holdingYears, residenceYears, ownershipCount, isAdjusted,
  } = input

  const gain = transferPrice - acquisitionPrice - acquisitionCost - transferCost
  if (gain <= 0) {
    return {
      gain, lthdDeduction: 0, basicDeduction: 0, taxBase: 0,
      incomeTax: 0, localTax: 0, total: 0, effectiveRate: 0,
      lthRate: 0, taxRate: 0, isNonTaxable: false,
    }
  }

  // 1주택 비과세 판단 (2년 보유 + 조건 충족 시)
  // 실거래가 12억 이하 1주택 비과세 (소득세법 제89조)
  const isNonTaxable =
    ownershipCount === 'one' &&
    holdingYears >= 2 &&
    (residenceYears >= 2 || !isAdjusted) &&
    transferPrice <= 1200000000

  if (isNonTaxable) {
    return {
      gain, lthdDeduction: 0, basicDeduction: 0, taxBase: 0,
      incomeTax: 0, localTax: 0, total: 0, effectiveRate: 0,
      lthRate: 0, taxRate: 0, isNonTaxable: true,
    }
  }

  // 장기보유특별공제율 계산
  let lthRate = 0
  if (holdingYears >= 3) {
    if (ownershipCount === 'one' && residenceYears >= 2) {
      // 1주택 거주: 보유 4% + 거주 4% = 최대 80%
      const holdingRate = Math.min(holdingYears, 10) * 0.04
      const residenceRate = Math.min(residenceYears, 10) * 0.04
      lthRate = Math.min(holdingRate + residenceRate, 0.80)
    } else if (ownershipCount === 'one') {
      // 1주택 비거주: 연 2%, 최대 30%
      lthRate = Math.min(holdingYears * 0.02, 0.30)
    } else {
      // 다주택: 연 2%, 최대 30% (단 조정지역 중과 시 적용 불가)
      lthRate = isAdjusted ? 0 : Math.min(holdingYears * 0.02, 0.30)
    }
  }

  const lthdDeduction = gain * lthRate
  const basicDeduction = 2500000 // 250만원
  const taxBase = Math.max(0, gain - lthdDeduction - basicDeduction)

  if (taxBase <= 0) {
    return {
      gain, lthdDeduction, basicDeduction, taxBase: 0,
      incomeTax: 0, localTax: 0, total: 0, effectiveRate: 0,
      lthRate, taxRate: 0, isNonTaxable: false,
    }
  }

  // 다주택 중과세율
  let surcharge = 0
  if (ownershipCount === 'two_plus' && isAdjusted && holdingYears < 1) {
    surcharge = 0.10 // 단기 + 조정지역 중과
  }

  const taxRate = calcIncomeTaxRate(taxBase) + surcharge
  const incomeTax = calcIncomeTax(taxBase) + taxBase * surcharge
  const localTax = incomeTax * 0.1
  const total = incomeTax + localTax

  return {
    gain, lthdDeduction, basicDeduction, taxBase,
    incomeTax, localTax, total,
    effectiveRate: total / gain,
    lthRate, taxRate, isNonTaxable: false,
  }
}

/** 소득세 누진세율 구간 계산 (소득세법 제55조, 2026년 기준) */
function calcIncomeTax(taxBase: number): number {
  const brackets = [
    { limit: 14000000,  rate: 0.06, deduction: 0 },
    { limit: 50000000,  rate: 0.15, deduction: 1260000 },
    { limit: 88000000,  rate: 0.24, deduction: 5760000 },
    { limit: 150000000, rate: 0.35, deduction: 15440000 },
    { limit: 300000000, rate: 0.38, deduction: 19940000 },
    { limit: 500000000, rate: 0.40, deduction: 25940000 },
    { limit: 1000000000,rate: 0.42, deduction: 35940000 },
    { limit: Infinity,  rate: 0.45, deduction: 65940000 },
  ]
  for (const b of brackets) {
    if (taxBase <= b.limit) {
      return taxBase * b.rate - b.deduction
    }
  }
  return 0
}

function calcIncomeTaxRate(taxBase: number): number {
  const brackets = [14000000, 50000000, 88000000, 150000000, 300000000, 500000000, 1000000000]
  const rates = [0.06, 0.15, 0.24, 0.35, 0.38, 0.40, 0.42, 0.45]
  for (let i = 0; i < brackets.length; i++) {
    if (taxBase <= brackets[i]) return rates[i]
  }
  return 0.45
}

// ─── 전세/월세 환산 ───────────────────────────────────────

export interface RentConvertInput {
  mode: 'jeonse_to_monthly' | 'monthly_to_jeonse'
  jeonseAmount: number    // 전세금 (mode=jeonse_to_monthly)
  deposit: number         // 보증금 (mode=monthly_to_jeonse)
  monthlyRent: number     // 월세 (mode=monthly_to_jeonse)
  conversionRate: number  // 전월세 전환율 (소수점, 예: 0.05)
  loanRate: number        // 전세 대출 이자율 (비교용)
}

export interface RentConvertResult {
  convertedAmount: number   // 환산 결과
  jeonseLoanInterest: number // 전세 대출이자 월액
  monthlyTotal: number      // 월세 총액 (보증금 이자 포함)
  recommendation: 'jeonse' | 'monthly' | 'similar'
  savingAmount: number
}

export function calcRentConvert(input: RentConvertInput): RentConvertResult {
  const { mode, jeonseAmount, deposit, monthlyRent, conversionRate, loanRate } = input

  if (mode === 'jeonse_to_monthly') {
    // 전세 → 월세: (전세금 - 보증금) × 전환율 / 12
    const convertedMonthlyRent = (jeonseAmount * conversionRate) / 12
    const jeonseLoanInterest = (jeonseAmount * loanRate) / 12
    const monthlyTotal = convertedMonthlyRent

    return {
      convertedAmount: convertedMonthlyRent,
      jeonseLoanInterest,
      monthlyTotal,
      recommendation: jeonseLoanInterest <= monthlyTotal ? 'jeonse' : 'monthly',
      savingAmount: Math.abs(jeonseLoanInterest - monthlyTotal),
    }
  } else {
    // 월세 → 전세: 보증금 + (월세 / 전환율 × 12)
    const convertedJeonse = deposit + (monthlyRent / conversionRate) * 12
    const jeonseLoanInterest = (convertedJeonse * loanRate) / 12
    const monthlyTotal = monthlyRent + (deposit * loanRate) / 12

    return {
      convertedAmount: convertedJeonse,
      jeonseLoanInterest,
      monthlyTotal,
      recommendation: jeonseLoanInterest <= monthlyTotal ? 'jeonse' : 'monthly',
      savingAmount: Math.abs(jeonseLoanInterest - monthlyTotal),
    }
  }
}

// ─── 증여세 ───────────────────────────────────────────────

export type RelationshipType = 'spouse' | 'lineal_ascendant' | 'lineal_descendant' | 'minor_child' | 'other'

export interface GiftTaxInput {
  giftAmount: number
  relationship: RelationshipType
}

export interface GiftTaxResult {
  giftAmount: number
  deduction: number        // 증여재산공제
  taxBase: number          // 과세표준
  giftTax: number          // 증여세
  total: number
  effectiveRate: number
}

export function calcGiftTax(input: GiftTaxInput): GiftTaxResult {
  const { giftAmount, relationship } = input

  // 10년 합산 증여재산공제 (상속세 및 증여세법 제53조)
  const deductions: Record<RelationshipType, number> = {
    spouse: 600000000,            // 배우자: 6억
    lineal_ascendant: 50000000,   // 직계존속(부모→자녀): 5천만
    lineal_descendant: 50000000,  // 직계비속(자녀→부모): 5천만
    minor_child: 20000000,        // 미성년 자녀: 2천만
    other: 10000000,              // 기타 친족: 1천만
  }

  const deduction = deductions[relationship]
  const taxBase = Math.max(0, giftAmount - deduction)

  const giftTax = calcGiftTaxAmount(taxBase)
  return {
    giftAmount,
    deduction,
    taxBase,
    giftTax,
    total: giftTax,
    effectiveRate: giftAmount > 0 ? giftTax / giftAmount : 0,
  }
}

function calcGiftTaxAmount(taxBase: number): number {
  if (taxBase <= 0) return 0
  // 상속세 및 증여세법 제26조 세율
  const brackets = [
    { limit: 100000000,  rate: 0.10, deduction: 0 },
    { limit: 500000000,  rate: 0.20, deduction: 10000000 },
    { limit: 1000000000, rate: 0.30, deduction: 60000000 },
    { limit: 3000000000, rate: 0.40, deduction: 160000000 },
    { limit: Infinity,   rate: 0.50, deduction: 460000000 },
  ]
  for (const b of brackets) {
    if (taxBase <= b.limit) {
      return taxBase * b.rate - b.deduction
    }
  }
  return 0
}

// ─── 종합부동산세 ─────────────────────────────────────────

export interface ComprehensiveTaxInput {
  publicPrice: number     // 공시가격 (원)
  ownershipCount: 'one' | 'multi'
  isElderly: boolean      // 고령자 여부 (60세 이상)
  holdingYears: number    // 보유기간
}

export interface ComprehensiveTaxResult {
  taxableBase: number     // 과세표준
  comprehensiveTax: number // 종부세
  ruralTax: number        // 농어촌특별세
  total: number
  fairMarketRatio: number // 공정시장가액비율
  deduction: number       // 공제금액
  seniorDiscount: number  // 고령자 공제율
  holdingDiscount: number // 장기보유 공제율
  combinedDiscount: number // 합산 공제율 (최대 80%)
}

export function calcComprehensiveTax(input: ComprehensiveTaxInput): ComprehensiveTaxResult {
  const { publicPrice, ownershipCount, isElderly, holdingYears } = input

  // 공정시장가액비율 (2024년 기준: 60%)
  const fairMarketRatio = 0.60

  // 공제금액: 1주택 12억, 다주택 9억 (종합부동산세법 제8조)
  const deduction = ownershipCount === 'one' ? 1200000000 : 900000000

  const taxableBase = Math.max(0, publicPrice * fairMarketRatio - deduction)

  if (taxableBase <= 0) {
    return {
      taxableBase: 0, comprehensiveTax: 0, ruralTax: 0, total: 0,
      fairMarketRatio, deduction,
      seniorDiscount: 0, holdingDiscount: 0, combinedDiscount: 0,
    }
  }

  // 세율 (종합부동산세법 제9조)
  const comprehensiveTax = ownershipCount === 'one'
    ? calcSingleHousingTax(taxableBase)
    : calcMultiHousingTax(taxableBase)

  // 고령자 공제 (60세 이상)
  const seniorDiscount =
    isElderly ? (holdingYears >= 10 ? 0.40 : holdingYears >= 5 ? 0.30 : 0.20) : 0

  // 장기보유 공제
  const holdingDiscount =
    holdingYears >= 15 ? 0.50
    : holdingYears >= 10 ? 0.40
    : holdingYears >= 5  ? 0.20
    : 0

  // 합산 공제 (최대 80%)
  const combinedDiscount = Math.min(seniorDiscount + holdingDiscount, 0.80)
  const finalTax = comprehensiveTax * (1 - combinedDiscount)
  const ruralTax = finalTax * 0.20 // 농어촌특별세: 종부세의 20%

  return {
    taxableBase,
    comprehensiveTax: finalTax,
    ruralTax,
    total: finalTax + ruralTax,
    fairMarketRatio,
    deduction,
    seniorDiscount,
    holdingDiscount,
    combinedDiscount,
  }
}

function calcSingleHousingTax(base: number): number {
  const brackets = [
    { limit: 300000000,  rate: 0.005, deduction: 0 },
    { limit: 600000000,  rate: 0.007, deduction: 600000 },
    { limit: 1200000000, rate: 0.010, deduction: 2400000 },
    { limit: 2500000000, rate: 0.013, deduction: 6000000 },
    { limit: 9400000000, rate: 0.020, deduction: 23500000 },
    { limit: Infinity,   rate: 0.027, deduction: 89300000 },
  ]
  for (const b of brackets) {
    if (base <= b.limit) return base * b.rate - b.deduction
  }
  return 0
}

function calcMultiHousingTax(base: number): number {
  const brackets = [
    { limit: 300000000,  rate: 0.005, deduction: 0 },
    { limit: 600000000,  rate: 0.007, deduction: 600000 },
    { limit: 1200000000, rate: 0.010, deduction: 2400000 },
    { limit: 2500000000, rate: 0.020, deduction: 14400000 },
    { limit: 9400000000, rate: 0.030, deduction: 39400000 },
    { limit: Infinity,   rate: 0.050, deduction: 227800000 },
  ]
  for (const b of brackets) {
    if (base <= b.limit) return base * b.rate - b.deduction
  }
  return 0
}
