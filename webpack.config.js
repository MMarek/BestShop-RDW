var path = require("path");

var Html = require('html-webpack-plugin');

module.exports = {
  entry: [
    "whatwg-fetch",
    "./www/js/Strona.js",
  ],
  output: {
    filename: "js/out.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    port: 3002,
  },
  module: {
    rules: [

      // js!
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },

      // scss
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")()
              ],
            },
          },
          'sass-loader',
        ]
      },

      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'images',
            outputPath: 'images',
          }
        }
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'fonts',
            outputPath: 'fonts',
          }
        }
      },
    ]
  },

  plugins: [
    new Html({
      filename: 'index.html',
      template: './www/index.html',
    })
  ]
};