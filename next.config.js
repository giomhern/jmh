/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "docs.material-tailwind.com",
      },
    ],
  },
};

module.exports = nextConfig
