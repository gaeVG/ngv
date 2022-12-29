/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const buildPath = path.resolve(__dirname, '../../dist/server');

module.exports = {
  entry: './server/main.ts',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    plugins: [
      // Resolve paths from tsconfig.json
      new TsconfigPathsPlugin({
        configFile: path.resolve('./server/tsconfig.json'),
      }),
    ],

    extensions: ['.ts'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(buildPath),
  },
};
