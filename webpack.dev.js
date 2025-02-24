const { merge } = require("webpack-merge");
const common = require("./webpack.common.js"); //I don't think i need to add a .js

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});
