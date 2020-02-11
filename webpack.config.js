const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
};