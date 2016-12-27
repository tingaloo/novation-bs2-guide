'use strict';
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/src",
  devtool: "source-map",
  entry: {
    app: "./index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath: "/dist",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3000,
    // watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-airbnb"],
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: '8192'
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      // },

      // {
      //   test: /\.scss$/,
      //   // loader: 'style-loader!css-loader!sass-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      //   use: [
      //     {
      //       loader: "style-loader"
      //     },
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //         localIdentName: '[name]__[local]___[hash:base64:5]'
      //       }
      //     },
      //     {
      //       loader: "sass-loader"
      //     }
      //   ]
      // },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        // test: /\.scss$/,
        // exclude: /node_modules/,
        // loader: ExtractTextPlugin.extract({
        //   loader: 'css-loader!sass-loader'
        // }),
        // options: {
        //   localIdentName: '[name]__[local]___[hash:base64:5]'
        // }
      },

    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
  ],
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve(__dirname, "src")
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
};
