// vue.config.js
const webpack = require('webpack')

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ],
    devServer: {
      proxy: 'http://localhost:8080/',
      headers: {
        'x-api-key': 'lnJTBRkwbm4Fxf5SWwCAi9l7OPV9pDTB7OvGpt6H',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
      },
    }
  }
};
