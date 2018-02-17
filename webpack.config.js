var PATH = require('path');
var webpack = require('webpack');

var baseSrcPath = PATH.resolve(__dirname + '/app/src');
var outputPath = PATH.resolve(__dirname + '/public/');


module.exports = {
    entry : {
        app: baseSrcPath + '/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: outputPath
    }
}

