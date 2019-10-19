const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = prod => {
    return ({
        entry: './src/index.js',
    
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            library: 'MDCVue',
            libraryTarget: 'umd'
        },
    
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: prod ? CssExtractPlugin.loader : 'vue-style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [autoprefixer]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [path.resolve('node_modules')]
                            }
                        }
                    ]
                }
            ]
        },
    
        resolve: {
            extensions: ['.js', '.json', '.jsx', '.vue', '*']
        },
    
        plugins: [
            new VueLoaderPlugin(),
            new CssExtractPlugin({
                filename: 'index.css'
            })
        ],
    
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false
                        }
                    }
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
    
        externals: {
            'vue': 'Vue'
        }
    })
};