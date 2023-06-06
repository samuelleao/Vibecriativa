/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sobre',
        destination: '/about',
      },
      {
        source: '/contato',
        destination: '/contact',
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['vibecriativa.vercel.app', 'localhost'],
  },
}

module.exports = nextConfig
