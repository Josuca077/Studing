const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        
    }
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/, // $ é para procurar esse texto no final dos arquivos, \ é para escapar o . e procurar ele como caracter, e não como função
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}
