var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack') 

module.exports = {
    context: __dirname,
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist') // this is safer given filesystems differences
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                use: 'babel-loader'
            },
            {
                test: /\.scss$$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader"}
                    // needed: react module
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hola Flashcards',
            filename: 'flashcards.html'
        })/*,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2
        })*/
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './src')  // New
    }
}