import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '이용약관 | 세모아',
  alternates: { canonical: 'https://calc.lotto45.kr/terms' },
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-xs text-stone-400 mb-5">
        <Link href="/" className="hover:text-amber-600">홈</Link>
        <span className="mx-1.5">/</span>
        <span className="text-stone-700">이용약관</span>
      </nav>

      <h1 className="text-2xl font-bold text-stone-900 mb-2">이용약관</h1>
      <p className="text-sm text-stone-400 mb-8">시행일: 2026년 1월 1일</p>

      <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">제1조 (목적)</h2>
          <p>본 약관은 세모아(SEMOA, 이하 "서비스")의 이용 조건 및 절차에 관한 사항을 규정합니다.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">제2조 (서비스 내용)</h2>
          <p>서비스는 부동산 관련 세금 계산 기능을 제공합니다. 제공되는 계산 결과는 참고용이며, 실제 세금 납부액과 다를 수 있습니다.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">제3조 (면책 사항)</h2>
          <p>
            서비스에서 제공하는 세금 계산 결과는 정보 제공 목적의 참고 자료입니다.
            본 서비스를 이용한 세금 계산 결과를 근거로 발생한 손해에 대해 서비스 운영자는 책임을 지지 않습니다.
            실제 세금 신고 및 납부는 반드시 공인 세무사 또는 국세청을 통해 확인하시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">제4조 (저작권)</h2>
          <p>서비스 내 모든 콘텐츠의 저작권은 서비스 운영자에게 있습니다. 무단 복제 및 배포를 금지합니다.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-stone-900 mb-2">제5조 (약관 변경)</h2>
          <p>약관은 사전 고지 없이 변경될 수 있으며, 변경된 약관은 서비스 화면에 공지합니다.</p>
        </section>
      </div>
    </div>
  )
}
