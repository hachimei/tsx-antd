const webpack = require('webpack');
const config = require('./webpack.common.config.js');

config.devServer = {
    hot: true,
    publicPath: '/dist/',
    port: '8080',
    proxy: {
        "/api": "http://localhost:3000"
    }
}

config.plugins.push(new webpack.HotModuleReplacementPlugin())

config.mode = 'development'

module.exports = config;