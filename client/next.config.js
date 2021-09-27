const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  exportTrailingSlash: true,
  images: {
    disableStaticImages: true,
    domains: ['https:/m.media-amazon.com']
  },
  reactStrictMode: true,
}

module.exports = withPlugins([[withImages]], nextConfig)