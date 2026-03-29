/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['64.227.37.208'], // Add your IP address here
  },
  async rewrites() {
    return [
      {
        source: '/cognitive-sql',
        destination: '/cognitive',
      },
      {
        source: '/ontlogy-views',
        destination: '/cognitive',
      },
      {
        source: '/use-cases',
        destination: '/cognitive',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/', // The root URL
        destination: '/cognitive', // Redirect to /testhome
        permanent: true, // Use true for a 308 redirect (permanent), false for 307 (temporary)
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
