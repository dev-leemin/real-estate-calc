import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
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
