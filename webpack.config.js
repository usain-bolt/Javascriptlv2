const path = require('path') // Библиотека
const Terser = require("terser-webpack-plugin")

module.exports = {
    entry: './src/main.js', // Точка входа для построения main.js
    output: {
        path: path.resolve(__dirname, 'public/js'), // путь, куда мы хотим положить файл с результатом сборки
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader'},
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'}, // инжектит стили из js модуля в тэги <style></style>
                    {loader: 'css-loader'}, // трансформирует css файл в js модуль
                ]
            }
        ]
    },
    optimization:{
        minimizer: [
          new Terser({
            terserOptions: {
              keep_classnames: true,
              keep_fnames: true
          }
          })
        ]
    }
}
