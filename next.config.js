/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'development',
  images: {
    domains: ['134.209.180.241'], // Add your IP address here
  },
  async redirects() {
    return [
      {
        source: '/admin', // When the /admin URL is accessed
        destination: 'http://134.209.180.241:1337/admin', // Redirect to your Strapi admin
        permanent: true, // Use true for a 308 redirect (permanent)
      },
      {
        source: '/', // The root URL
        destination: '/cognitive', // Redirect to /home
        permanent: true, // Use true for a 308 redirect (permanent)
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
