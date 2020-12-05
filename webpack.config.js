const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/shop.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'shop.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [
      //     { loader: 'babel-loader' },
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader', // инжектит стили из js модуля в тэги <style></style>
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }, // трансформирует css файл в js модуль
        ]
      },
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' },
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
