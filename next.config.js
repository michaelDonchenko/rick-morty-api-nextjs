/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.hollywoodreporter.com', 'cdn.pocket-lint.com', 'static.wikia.nocookie.net', 'rickandmortyapi.com'],
  },
}

module.exports = nextConfig
