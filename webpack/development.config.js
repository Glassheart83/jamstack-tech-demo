const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./assets'),
        publicPath: '/assets/',
    }
};
