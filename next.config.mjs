/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://scontent.cdninstagram.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
  },
};

export default nextConfig;
