/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ['scontent.cdninstagram.com', 'scontent.cdninstagram.com'],
    path: '/**'
  },
};

export default nextConfig;
