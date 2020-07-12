var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/scripts/main.js",
    output: {
        filename: "main.bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html' //relative to root of the application
        })
   ]
}
