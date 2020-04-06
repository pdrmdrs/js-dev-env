import path from "path";

export default {
  devtool: "source-map",
  devServer: {
    quiet: true,
    noInfo: true,
  },
  entry: [path.resolve(__dirname, "src/index")],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src"),
  },
  target: "web",
};
