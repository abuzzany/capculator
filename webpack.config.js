var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: "./src/scripts/main.js",
    output: {
        filename: "./dist/main.bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './dist/index.html'
        })
   ]
}
