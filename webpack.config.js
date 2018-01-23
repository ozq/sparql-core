const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
    entry: {
        SparqlFormatter: './src/scripts/SparqlFormatter.js',
        WSparql: './src/scripts/WSparql',
        LightEditor: './src/scripts/LightEditor.js',
        SparqlClient: './src/scripts/SparqlClient.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/js/',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: require.resolve('lodash'),
                use: [{
                    loader: 'expose-loader',
                    options: '_'
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(gif|jpeg|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: [{
                    loader: 'url-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    }
};
