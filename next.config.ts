import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      // URL-encoded Korean paths (browser sends these)
      { source: '/%EC%B7%A8%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0', destination: '/acquisition-tax' },
      { source: '/%EB%8C%80%EC%B6%9C-%EA%B3%84%EC%82%B0%EA%B8%B0', destination: '/loan' },
      { source: '/%EC%96%91%EB%8F%84%EC%86%8C%EB%93%9D%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0', destination: '/capital-gains-tax' },
      { source: '/%EC%A0%84%EC%84%B8-%EC%9B%94%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0', destination: '/rent' },
      { source: '/%EC%A6%9D%EC%97%AC%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0', destination: '/gift-tax' },
      { source: '/%EC%A2%85%EB%B6%80%EC%84%B8-%EA%B3%84%EC%82%B0%EA%B8%B0', destination: '/comprehensive-tax' },
      // Plain Korean paths (fallback)
      { source: '/취득세-계산기', destination: '/acquisition-tax' },
      { source: '/대출-계산기', destination: '/loan' },
      { source: '/양도소득세-계산기', destination: '/capital-gains-tax' },
      { source: '/전세-월세-계산기', destination: '/rent' },
      { source: '/증여세-계산기', destination: '/gift-tax' },
      { source: '/종부세-계산기', destination: '/comprehensive-tax' },
    ]
  },
}

export default nextConfig
