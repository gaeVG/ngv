/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const DotEnv = require("dotenv-webpack");

const buildPath = path.resolve(__dirname, "../../dist/client");

module.exports = {
  entry: "./client/main.ts",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false }),
    new ESLintPlugin(),
    new DotEnv(),
  ],
  optimization: {
    minimize: false,
  },
  resolve: {
    plugins: [
      // Resolve paths from tsconfig.json
      new TsconfigPathsPlugin({
        configFile: path.resolve("./client/tsconfig.json"),
      }),
    ],
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  output: {
    filename: "main.js",
    path: path.resolve(buildPath),
  },

  target: "node",
};
