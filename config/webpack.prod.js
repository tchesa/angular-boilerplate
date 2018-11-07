
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/',
  },
  module: {
    rules: [
      { // eslint
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
      { // babel
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      { // sass
        test: /\.(s?[ac]ss|css)$/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.html$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[name].html',
          //   },
          // },
          // {
          //   loader: 'extract-loader',
          // },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src'],
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
