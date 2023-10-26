const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js",
    clean: true,
  },
  devServer: {
    // publicPath: "/assets/", // here's the change
    // contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    // hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/homePage.html"),
      filename: "index.html",
    }),
    // new HtmlWebpackPlugin({
    //   filename: "categoryPage.html",
    //   template: "src/pages/categoryPage.html",
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "articlePage.html",
    //   template: "src/pages/articlePage.html",
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "contactPage.html",
    //   template: "src/pages/contactPage.html",
    // }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new FaviconsWebpackPlugin("src/assets/img/favicon.png"),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // {
      //   test: /(\.css)$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif|ico|gif)$/i,
        //   use: ["file-loader"],
        // },
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //   type: "asset/resource",
        //   generator: {
        //     filename: "images/[hash][text]",
        //   },
      },
    ],
  },
};
