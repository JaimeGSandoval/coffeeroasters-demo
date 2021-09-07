/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/index.js'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      favicon: './src/favicon.ico',
      inject: 'body',
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].bundle.css',
    }),

    new CopyPlugin({
      patterns: [
        // Home
        {
          from: 'src/assets/images/home/desktop',
          to: 'images/desktop',
        },
        {
          from: 'src/assets/images/home/tablet',
          to: 'images/tablet',
        },
        {
          from: 'src/assets/images/home/mobile',
          to: 'images/mobile',
        },

        // About
        {
          from: 'src/assets/images/about/desktop',
          to: 'images/desktop',
        },
        {
          from: 'src/assets/images/about/tablet',
          to: 'images/tablet',
        },
        {
          from: 'src/assets/images/about/mobile',
          to: 'images/mobile',
        },

        // Plan
        {
          from: 'src/assets/images/plan/desktop',
          to: 'images/desktop',
        },
        {
          from: 'src/assets/images/plan/tablet',
          to: 'images/tablet',
        },
        {
          from: 'src/assets/images/plan/mobile',
          to: 'images/mobile',
        },

        // Coffee
        {
          from: 'src/assets/images/coffee',
          to: 'images/coffee',
        },

        { from: 'src/assets/icons', to: 'icons' },
        // { from: 'src/assets/html-icons', to: 'html-icons' },
      ],
    }),

    // new PreloadWebpackPlugin({
    //   rel: 'preload',
    //   include: 'allAssets',
    //   fileBlacklist: [/\.(js|png|jpe?g|css|webp|ico)/],
    // }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },

          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },

          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },

      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: true,
        },
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]',
        },
      },

      {
        test: /\.(?:svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'html-icons/[name].[hash][ext]',
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },
};
