/** @type {import('next').NextConfig} */
const nextConfig = {}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  // your Next.js configuration
  async rewrites() {
    return [
      {
        source: '/about/:path',
        destination: '/product', // The :path parameter isn't used here so will be automatically passed in the query
      },
    ]
  },
})

