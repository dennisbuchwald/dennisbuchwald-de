/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      // Flinkform has its own website now - pass rankings and links on
      {
        source: "/apps/flinkform",
        destination: "https://flinkform.de/",
        permanent: true,
      },
      {
        source: "/apps/flinkform-pro",
        destination: "https://flinkform.de/pro",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

module.exports = nextConfig;
