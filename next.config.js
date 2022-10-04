/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: `/${process.env.REACT_HASH}`,
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: `/${process.env.REACT_HASH}`,
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
