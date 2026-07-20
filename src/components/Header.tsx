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

  return (
    <header className="sticky top-0 z-50 bg-[#0B1623] border-b border-white/8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-5 h-14">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="w-7 h-7 bg-amber-400 rounded-lg flex items-center justify-center group-hover:bg-amber-300 transition-colors">
              <span className="text-[#0B1623] text-[11px] font-black select-none">세</span>
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="font-black text-sm text-white tracking-tight">세모아</span>
              <span className="text-[8px] text-white/30 tracking-[0.2em] font-medium">SEMOA</span>
            </div>
          </Link>

          {/* 네비게이션 */}
          <nav className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide flex-1">
            {navItems.map(item => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap rounded-lg transition-all duration-150 ${
                    active
                      ? 'bg-amber-400 text-[#0B1623]'
                      : 'text-white/55 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* 블로그 */}
          <Link
            href="/blog"
            className={`text-xs font-semibold flex-shrink-0 px-3 py-1.5 rounded-lg transition-all duration-150 ${
              pathname.startsWith('/blog')
                ? 'bg-amber-400 text-[#0B1623]'
                : 'text-white/55 hover:text-white hover:bg-white/10'
            }`}
          >
            블로그
          </Link>
        </div>
      </div>
    </header>
  )
}
