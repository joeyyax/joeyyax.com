// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  images: {
    domains: ["static.joeyyax.com", "www.joeyyax.com"],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // async rewrites() {
  // return []
  // },
  // async redirects() {
  // 	return []
  // },
}

module.exports = withBundleAnalyzer(nextConfig)
