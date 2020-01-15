const webpack = require('webpack')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery',
      })
    );

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
  
    return config;
  },
};
