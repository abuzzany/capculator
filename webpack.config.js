var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/scripts/main.js",
    output: {
        filename: "main.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
   ]
}
