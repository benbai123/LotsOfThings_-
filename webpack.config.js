const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/,
  },
  resolve: {
    alias: {
      // 讓任何地方的程式都可以用 @src 指到 src 目錄
      '@src': path.resolve(__dirname, 'src/'),
      'vue': '@vue/runtime-dom'
    },
  },
  entry: {
    // 進人點
    'index': './src/index.js'
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    // 輸入到 dist 目錄
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'
  },
  module: {
    // 各種資源對應的 loader
    // 順序很重要, 例如 vue 檔中會有 js/css
    // 那 vue 檔的 loader 就要放 js/css loader 的前面
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }, {
        test: /\.(js)$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }, {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]',
        },
      }, {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          // Disables attributes processing
          attributes: false,
        },
      }
    ]
  },  
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ]
};
