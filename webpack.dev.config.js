const { merge } = require('webpack-merge')
const base = require('./webpack.config') // наша базовая конфигурация, которую мы написали выше

module.exports = merge(base, { // экспортирование старой конфигурации и надстройка
      // тут будет конфигурация devServer
    devServer: {
        publicPath: '/js',
        contentBase: './public',
        host: 'localhost',
        port: 8080,
        hot: true,
    },
    output: {
        publicPath: '/js',
    },
})