const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: ["./ui/src/sass/index.scss", "./ui/src/react/index.js"],
  output: {
    path: path.resolve(__dirname, "ui"),
    filename: "js/main.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [path.resolve(__dirname, "node_modules")],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "css/[name].css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=css/[name].[ext]",
      },
    ],
  },
};
