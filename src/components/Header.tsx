'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/취득세-계산기', label: '취득세' },
  { href: '/대출-계산기', label: '대출' },
  { href: '/양도소득세-계산기', label: '양도세' },
  { href: '/전세-월세-계산기', label: '전·월세' },
  { href: '/증여세-계산기', label: '증여세' },
  { href: '/종부세-계산기', label: '종부세' },
]

export default function Header() {
  const pathname = usePathname()
  const isCalcPage = navItems.some(item => pathname.startsWith(item.href.replace('/', '/')))

  return (
    <header className="sticky top-0 z-50 bg-[#F3F0EB] border-b-2 border-[#111111]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-6 h-13">
          <Link href="/" className="flex items-center gap-1.5 flex-shrink-0">
            <span className="inline-block w-5 h-5 bg-amber-400 border border-[#111111] rounded-sm" />
            <span className="font-black text-sm tracking-tight text-[#111111]">부동산계산기</span>
          </Link>

          <nav className="flex items-center gap-0 overflow-x-auto scrollbar-hide flex-1">
            {navItems.map(item => {
              const active = pathname === item.href || pathname.includes(item.href.replace('/취득세-계산기', 'acquisition').replace('/대출-계산기', 'loan').replace('/양도소득세-계산기', 'capital').replace('/전세-월세-계산기', 'rent').replace('/증여세-계산기', 'gift').replace('/종부세-계산기', 'comprehensive'))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1 text-xs font-bold whitespace-nowrap transition-all border-b-2 ${
                    active
                      ? 'border-[#111111] text-[#111111]'
                      : 'border-transparent text-stone-500 hover:text-[#111111] hover:border-stone-400'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <Link
            href="/blog"
            className={`text-xs font-bold flex-shrink-0 border-b-2 pb-0 transition-all ${
              pathname.startsWith('/blog')
                ? 'border-[#111111] text-[#111111]'
                : 'border-transparent text-stone-400 hover:text-[#111111]'
            }`}
          >
            블로그
          </Link>
        </div>
      </div>
    </header>
  )
}
