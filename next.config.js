const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProduction = process.env.NODE_ENV === 'production';


module.exports = withBundleAnalyzer({
  basePath: isProduction ? '/portfolio' : '',
  assetPrefix: isProduction ? '/portfolio' : '',
  images: {
    deviceSizes: [428, 540, 640, 768, 1024, 1120],
    unoptimized: true,
    path: '/portfolio'
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'utils'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: ['@svgr/webpack'],
    })
    return config
  },
})
