const path = require("path");
// const webpack = require("webpack");

module.exports = {
  entry: {
    app: ["./src/index.ts"]
  },

  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js"
  },

  resolve: {
    extensions: [".js", ".json", ".ts"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
