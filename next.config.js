/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  experimental: {
    // runtime: 'nodejs',
    // serverComponents: true,
    scrollRestoration: true,
  },
  images: {
    domains: ["static.joeyyax.com", "www.joeyyax.com"],
  },
  // async rewrites() {
  // return [
  // {
  // 	source: '/sitemap.xml',
  // 	destination: '/api/sitemap',
  // },
  // ]
  // },
  // async redirects() {
  // 	return []
  // },
}

module.exports = withBundleAnalyzer(nextConfig)
