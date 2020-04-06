import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";
import webpackDevMiddleware from "webpack-dev-middleware";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
