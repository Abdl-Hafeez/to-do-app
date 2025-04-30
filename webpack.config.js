const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanPlugin } = require("webpack");
const { type } = require("os");

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devServer: {
        watchFiles: ["./src/index.html"],
        open: true,
    }
}