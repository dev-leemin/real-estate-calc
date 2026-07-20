import Link from 'next/link'

const calcLinks = [
  { href: '/취득세-계산기', label: '취득세 계산기' },
  { href: '/대출-계산기', label: '대출 상환 계산기' },
  { href: '/양도소득세-계산기', label: '양도소득세 계산기' },
  { href: '/전세-월세-계산기', label: '전세·월세 환산기' },
  { href: '/증여세-계산기', label: '증여세 계산기' },
  { href: '/종부세-계산기', label: '종합부동산세 계산기' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-amber-500 rounded-md flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="font-bold text-stone-100 text-sm">부동산계산기</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-500">
              2026년 최신 세율 기준의 부동산 세금 계산기입니다.
              본 계산기는 참고용이며, 정확한 세금은 세무사 또는 국세청 홈택스를 통해 확인하시기 바랍니다.
            </p>
          </div>

          {/* 계산기 목록 */}
          <div>
            <h3 className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-3">계산기</h3>
            <ul className="space-y-2">
              {calcLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 링크 */}
          <div>
            <h3 className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-3">안내</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-xs hover:text-amber-400 transition-colors">부동산 세금 블로그</Link></li>
              <li><Link href="/guide" className="text-xs hover:text-amber-400 transition-colors">세금 종류 한눈에 보기</Link></li>
              <li><Link href="/about" className="text-xs hover:text-amber-400 transition-colors">사이트 소개</Link></li>
              <li><Link href="/privacy-policy" className="text-xs hover:text-amber-400 transition-colors">개인정보처리방침</Link></li>
              <li>
                <a href="https://www.hometax.go.kr" target="_blank" rel="noopener noreferrer"
                   className="text-xs hover:text-amber-400 transition-colors">
                  국세청 홈택스 →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-stone-600">© 2026 부동산계산기. 본 서비스는 세금 신고용이 아닌 참고용입니다.</p>
          <p className="text-xs text-stone-600">세율 출처: 지방세법, 소득세법, 종합부동산세법, 상속·증여세법</p>
        </div>
      </div>
    </footer>
  )
}
