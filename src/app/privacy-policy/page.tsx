import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '개인정보처리방침 | 부동산계산기',
  alternates: { canonical: 'https://calc.lotto45.kr/privacy-policy' },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-xs text-stone-400 mb-5">
        <Link href="/" className="hover:text-amber-600">홈</Link>
        <span className="mx-1.5">/</span>
        <span className="text-stone-700">개인정보처리방침</span>
      </nav>

      <h1 className="text-2xl font-bold text-stone-900 mb-2">개인정보처리방침</h1>
      <p className="text-sm text-stone-400 mb-8">시행일: 2026년 1월 1일</p>

      <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">1. 수집하는 개인정보</h2>
          <p>
            부동산계산기(이하 "서비스")는 계산기 이용 시 사용자가 직접 입력한 금액, 기간 등의 수치 정보를 처리합니다.
            이 정보는 서버에 저장되지 않으며, 브라우저 내에서만 처리됩니다.
          </p>
          <p className="mt-2">
            Google AdSense를 통한 광고 제공 목적으로 Google이 쿠키를 사용할 수 있습니다.
            Google의 개인정보 처리방침은 <a href="https://policies.google.com/privacy" className="text-amber-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>에서 확인할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">2. 개인정보 보유·이용 기간</h2>
          <p>
            사용자가 입력한 계산 데이터는 서버에 저장되지 않습니다.
            브라우저를 닫으면 모든 입력 데이터가 삭제됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">3. 제3자 제공</h2>
          <p>
            서비스는 사용자의 개인정보를 제3자에게 제공하지 않습니다.
            단, Google AdSense는 광고 게재를 위해 Google의 정책에 따라 쿠키를 활용할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">4. 쿠키 사용</h2>
          <p>
            서비스는 Google AdSense를 통한 광고 관련 쿠키를 사용할 수 있습니다.
            브라우저 설정에서 쿠키를 거부할 수 있으나, 일부 기능이 제한될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">5. 개인정보 보호책임자</h2>
          <p>개인정보 관련 문의는 사이트 내 연락 채널을 통해 접수할 수 있습니다.</p>
        </section>
      </div>
    </div>
  )
}
