/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = mode => require(`./build-utils/webpack.${mode}.js`)(mode);
// const BrotliPlugin = require("brotli-webpack-plugin");
const BrotliGzipPlugin = require("brotli-gzip-webpack-plugin");
module.exports = (
  { mode } = {
    mode: ""
  }
) => {
  return webpackMerge(
    {
      mode,
      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          filename: "index.html",
          hash: true
        }),
        new BrotliGzipPlugin({
          asset: "[path].br[query]",
          algorithm: "brotli",
          test: /\.(ts|tsx|js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
          quality: 11
        }),
        new BrotliGzipPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(ts|tsx|js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8
        })
      ],
      entry: ["./src/index.tsx"],
      output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
      },
      externals: {
        react: "React",
        "react-dom": "ReactDOM"
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
              presets: [
                "@babel/preset-env",
                "@babel/react",
                "@babel/preset-typescript"
              ],
              plugins: ["transform-class-properties"]
            }
          },
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: true
                }
              }
            ]
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: "url-loader?limit=100000"
          }
        ]
      },
      resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts", ".json"]
      }
    },
    modeConfig(mode)
  );
};