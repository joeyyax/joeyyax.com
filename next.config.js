/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: true,
	experimental: {
		scrollRestoration: true,
	},
	images: {
		domains: ['static.joeyyax.com', 'www.joeyyax.com'],
	},
	// async rewrites() {
	// return [
	// {
	// 	source: '/sitemap.xml',
	// 	destination: '/api/sitemap',
	// },
	// {
	// 	source: '/health',
	// 	destination: '/api/health',
	// },
	// ]
	// },
	// async redirects() {
	// 	return []
	// },
}

module.exports = withBundleAnalyzer(nextConfig)
