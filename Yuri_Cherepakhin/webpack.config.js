const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    /*modules: {

    }*/
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html"), })
    ]

}