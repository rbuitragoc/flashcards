const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack') 

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.[hash].js',

        path: path.resolve(__dirname, 'dist') // this is safer given filesystems differences
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader' },
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
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hola Flashcards',
            filename: 'index.html'
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