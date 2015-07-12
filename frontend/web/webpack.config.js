module.exports = {
  debug: true,
  entry: {
    app: "./app.es6"
  },
  output: {
    path: "../../backend/.tmp/public/js/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.es6$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }, {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loader: "file-loader",
        query: {
          name: "img/[name].[ext]"
        }
      }
    ]
  },
  devtool: "cheap-source-map"
};