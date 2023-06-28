const deps = require("./package.json").dependencies;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

  // const CopyPlugin = require("copy-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

const modulePlugin = new ModuleFederationPlugin({
  name: "remoteHome",
  filename: "remoteEntry.js",
  exposes: {
    "./Home": "./src/Home",
  },
  remotes: {
    host_react_module: "host_react_module@http://localhost:3000/remoteEntry.js",
  },

  shared: {
    react: { singleton: true, requiredVersion: deps.react, eager: true },
  },
});

// const copyPlugin = new CopyPlugin({});

module.exports = {
  mode: "development",
  plugins: [modulePlugin, htmlPlugin],
  output: {
    uniqueName: "remoteReact",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
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
  devServer: {
    port: "3002",
    open: true,
    hot: true,
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
      // {
      //   test: /@?(frete.com).*\.(ts|js)x?$/,
      //   loader: "babel-loader",
      // },
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
};
