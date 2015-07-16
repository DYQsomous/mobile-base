// 'use strict';

var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
    devServer: {
        contentBase: "./",
        noInfo: true,
        hot: true,
        inline: true
    },
    //    devtool: 'source-map',
    entry: ['./node_modules/zepto/zepto.min.js', './entry.js'],
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].bundle.js'
            //        chunkFilename: '[id]_[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css!autoprefixer")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!autoprefixer!sass")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
			}
		]
    },
    plugins: [
		new ExtractTextPlugin('[name].bundle.css'),
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
		new webpack.HotModuleReplacementPlugin()
//        new ProvidePlugin({
            //            '$': 'zepto'
            //        })

	]
}
