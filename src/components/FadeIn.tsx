'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function FadeIn({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -32px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
