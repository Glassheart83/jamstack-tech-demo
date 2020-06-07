const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/js/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/default.html',
            filename: '../_layouts/default.html',
        }),
        new FaviconsWebpackPlugin({
            logo: './src/images/logo.png',
            inject: true,
            mode: 'webapp', // optional can be 'webapp' or 'light' - 'webapp' by default
            devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default 
            favicons: {
                appName: 'jamstack-tech-demo',
                appDescription: 'JAMStack Tech Demo',
                background: '#ddd',
                theme_color: '#333',
                icons: {
                    coast: false,
                    yandex: false,
                },
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader', // inject CSS to page
                    'css-loader', // translates CSS into CommonJS modules
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins: function () {
                                // post css plugins, can be exported to postcss.config.js
                                return [
                                    require('precss'),
                                    require('autoprefixer'),
                                ];
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
};
