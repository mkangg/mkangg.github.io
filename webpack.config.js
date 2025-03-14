const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Your main JavaScript file
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML template file
            filename: 'index.html', // Output filename (optional, defaults to index.html)
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 8080,
        open: true,
    },
};