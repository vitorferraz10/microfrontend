const deps = require("./package.json").dependencies;
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const modulePlugin = new ModuleFederationPlugin({
  name: "remoteFooter",
  filename: "remoteEntry.js",
  exposes: {
    "./Footer": "./src/Footer",
  },
  remotes: {
    host_react_module: "host_react_module@http://localhost:3000/remoteEntry.js",
  },
  shared: {
    ...deps,
    react: {
      eager: true,
    },
    "react-dom": { eager: true },
    "react-router": { eager: true },
    "react-router-dom": { eager: true },
  },
});

const htmlPlugin = new HTMLWebpackPlugin({
  template: "./public/index.html",
});

module.exports = {
  mode: "development",
  devServer: {
    port: "3003",
    hot: true,
  },
  output: {
    uniqueName: "headerRemote",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      public: path.resolve(__dirname, "public/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js|jsx|tsx|ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /@?(frete.com).*\.(ts|js)x?$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "file-loader",
      },
    ],
  },
  plugins: [modulePlugin, htmlPlugin],
};
