'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const port = 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  // hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log(`Listening on http://localhost:${port}`)
})
