const webpack = require('webpack');
const path = require('path');
<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin');
=======
>>>>>>> dev

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
<<<<<<< HEAD
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        use: 'style-loader',
      },
      {
        test: /\.scss$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]_[local]_[hash:base64:5]',
          sourceMap: true,
          url: false,

        }
      },
      {
        test: /\.(sass|scss)$/,
        use: 'sass-loader',
      }
=======
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx|es6)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(sass|scss)$/, use: 'style-loader'},
      { test: /\.(sass|scss)$/, loader: 'css-loader',
        query: { modules: true, localIdentName: '[name]_[local]_[hash:base64:5]',
          sourceMap: true, url: false,}
      },
      { test: /\.(sass|scss)$/, use: 'sass-loader'},
      { test: /\.png$/, loader: 'file-loader'},
      { test: /\.(tff|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader'},
      { test: /\.(png|jpg|)$/, loader: 'url-loader?limit=200000' }
>>>>>>> dev
    ]
  },
  resolve: { extensions: ['.js', '.jsx']},
  devServer: { historyApiFallback: true, contentBase: './'},
  plugins: [
<<<<<<< HEAD
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
  },
};
=======
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ] 
}
>>>>>>> dev
