const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    initial: [path.resolve(__dirname, "./src/initial.scss")],
    "hb-input": [path.resolve(__dirname, "./src/components/hb-input/index.ts")],
    "hb-dialog": [
      path.resolve(__dirname, "./src/components/hb-dialog/index.ts"),
    ],
    "hb-select": [
      path.resolve(__dirname, "./src/components/hb-select/index.ts"),
    ],
  },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ["@babel/preset-env"],
      //       },
      //     },
      //     "ts-loader",
      //   ],
      // },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: [path.resolve(__dirname, "./src/initial.scss")],
        // use: ["css-loader", "sass-loader"],
        use: [
          {
            loader: "lit-scss-loader",
            options: {
              minify: true, // defaults to false
            },
          },
          "extract-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, "./src/initial.scss")],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  // plugins: [new FixStyleOnlyEntriesPlugin(), new MiniCssExtractPlugin()],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    library: "@uprise-fin/heybit-ui-styled-components",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
};
// module.exports = {
//   mode: "production",
//   entry: {
//     index: [path.resolve(__dirname, "./src/index.ts")],
//     "hb-input": [path.resolve(__dirname, "./src/hb-input/index.ts")],
//   },
//   module: {
//     rules: [
//       { test: /\.hbs$/, loader: "handlebars-loader" },
//       {
//         test: /\.ts$/,
//         exclude: /(node_modules|bower_components)/,
//         use: [
//           {
//             loader: "babel-loader",
//             options: {
//               presets: ["@babel/preset-env"],
//             },
//           },
//           {
//             loader: "ts-loader",
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ["css-modules-typescript-loader", "css-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".hbs"],
//   },
//   output: {
//     path: path.resolve(__dirname, "./dist"),
//     filename: "[name].js",
//     library: "@uprise-fin/heybit-ui-components",
//     libraryTarget: "umd",
//     globalObject: "this",
//     umdNamedDefine: true,
//   },
// };
