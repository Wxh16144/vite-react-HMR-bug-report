/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');  

const nextConfig = {
  reactStrictMode: true,
  ...withAntdLess({}),
}

module.exports = nextConfig
