var PATH = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var baseSrcPath = PATH.resolve(__dirname + '/app/src');
var outputPath = PATH.resolve(__dirname + '/public/');


module.exports = {
    entry: {
        app: ['babel-polyfill', PATH.join(baseSrcPath + '/app.js')]
    },
    output: {
        filename: '[name].bundle.js',
        path: PATH.join(outputPath + '/build/')
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                compact: true
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}

