/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.steampowered.com',
      },
    ]
  }
};

module.exports = nextConfig;
