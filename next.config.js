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
      {
        protocol: 'https',
        hostname: '**.steamstatic.com',
      },
    ]
  },
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/home"
      }
    ]
  }
};

module.exports = nextConfig;
