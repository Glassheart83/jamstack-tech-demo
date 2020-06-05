const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/js/index.js',
    },
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
                    'sass-loader', // compiles Sass to CSS
                ],
            },
        ],
    },
    output: {
        filename: 'bundle.js'
    },
};
