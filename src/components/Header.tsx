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
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-6 h-12">
          <Link href="/" className="font-semibold text-stone-900 text-sm flex-shrink-0">
            부동산계산기
          </Link>

          <nav className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  pathname === item.href
                    ? 'bg-stone-100 text-stone-900'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/blog"
            className={`ml-auto text-xs flex-shrink-0 transition-colors ${
              pathname.startsWith('/blog')
                ? 'text-stone-900'
                : 'text-stone-400 hover:text-stone-700'
            }`}
          >
            블로그
          </Link>
        </div>
      </div>
    </header>
  )
}
