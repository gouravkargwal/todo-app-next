/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: `https://he-ide.hackerearth.com/${process.env.REACT_HASH}`,
};

module.exports = nextConfig;
