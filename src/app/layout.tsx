import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBottomNav from '@/components/MobileBottomNav'

const siteUrl = 'https://calc.friz.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '세모아 - 부동산 세금 계산기 | 2026년 최신 세율 반영',
    template: '%s | 세모아',
  },
  description:
    '취득세, 양도소득세, 종합부동산세, 증여세, 대출 상환, 전세·월세 환산까지. 2026년 최신 지방세법·소득세법 기준으로 정확하게 계산하세요.',
  keywords: [
    '취득세 계산기', '양도소득세 계산기', '종합부동산세 계산기',
    '증여세 계산기', '대출 계산기', '전세 월세 계산기',
    '부동산 세금', '취득세율', '양도세율', '종부세',
  ],
  authors: [{ name: '세모아' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: '세모아',
    title: '세모아 - 부동산 세금 계산기 | 2026년 최신 세율 반영',
    description: '취득세·양도세·종부세·증여세·대출·전월세 환산을 한 곳에서 계산하세요.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '세모아 - 부동산 세금 계산기 | 2026년 최신 세율 반영',
    description: '취득세·양도세·종부세·증여세·대출·전월세 환산을 한 곳에서 계산하세요.',
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '세모아',
  url: siteUrl,
  description: '취득세, 양도소득세, 종합부동산세, 증여세, 대출, 전세·월세 환산 계산기',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '세모아',
  url: siteUrl,
  description: '부동산 세금 계산 서비스',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard Variable — 한국 스타트업 표준 폰트 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="bg-white text-[#0B1623] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  )
}
