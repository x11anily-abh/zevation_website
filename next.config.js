/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/zevation_website/',
  basePath: '/zevation_website',
}

module.exports = nextConfig
