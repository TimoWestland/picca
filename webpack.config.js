var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        PATHS.app + '/app.js'
    ],

    output: {
        path: PATHS.build,
        filename: 'js/bundle.js',
        publicPath: '/build/'
    },

    cache: true,
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                loader: ['babel'],
                query: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-0'
                    ]
                }
            },

            // SASS
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?sourceMap',
                    'sass?sourceMap',
                    'postcss'
                ]
            }
        ]
    },

    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ],

    resolve: {
        root: PATHS.app,
        extensions: [
            '',
            '.js',
            '.jsx',
            '.css',
            '.scss'
        ],
        modulesDirectories: [
            PATHS.app + '/js/pages',
            PATHS.app + '/scss',
            'node_modules'
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: PATHS.app + '/index.html'
        })
    ],

    devServer: {
        contentBase: './build/'
    }
};

module.exports = config;
