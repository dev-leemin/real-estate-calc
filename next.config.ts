import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  // 한국어 URL 인코딩 허용
  experimental: {
    // Next.js 15 이상에서는 기본적으로 지원
  },
}

export default nextConfig
