const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/_js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./src/assets'),
        publicPath: '/src/assets/',
    }
};
