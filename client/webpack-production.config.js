const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: [path.join(__dirname, '/src/app/app.js')],
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js', // Name of output file
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // suppresses warnings, usually from module minification
        warnings: false,
      },
    }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
        {from: 'src/www/css', to: 'css'},
        {from: 'src/www/images', to: 'images'},
        {from: 'src/www/index.html'},
    ]),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      {
          test: /\.json$/,
          loader: 'json-loader',
      },
      {
          test: /\.txt$/,
          loader: 'raw-loader',
          include: path.resolve(__dirname, 'src/app/components/raw-code'),
      },
      {
          test: /\.md$/,
          loader: 'raw-loader',
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
      },
    ],
  },
};

module.exports = config;
