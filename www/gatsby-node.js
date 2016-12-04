const Webpack = require('webpack')

exports.modifyWebpackConfig = function(config) {
  config.plugin(
    'defineplugin',
    Webpack.DefinePlugin,
    [{
      'process.env.BORING_SHARE_BUTTONS': JSON.stringify('false'),
    }]
  )

  return config
}
