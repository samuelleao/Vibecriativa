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
      {
        source: '/servico/softhouse',
        destination: '/service/softhouse',
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['vibecriativa.vercel.app', 'localhost'],
  },
  compiler: {
    relay: {
      // This should match relay.config.js
      src: './',
      artifactDirectory: './__generated__',
      language: 'typescript',
      eagerEsModules: false,
    },
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
