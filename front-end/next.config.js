/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'styles/pages')],
  },
  'fontawesome-svg-core': {
    license: 'free'
  }
}

module.exports = nextConfig
