/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? '/next_md_blog' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
