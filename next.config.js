/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['cloudflare-ipfs.com', 'loremflickr.com'],
  },
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
