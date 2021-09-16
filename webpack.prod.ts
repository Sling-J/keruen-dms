import dotenv from 'dotenv'
import * as webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import * as path from 'path' // to get the current path
import CompressionPlugin from 'compression-webpack-plugin'
import VersionFile from 'webpack-version-file'

const htmlPlugin: HtmlWebPackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
})

const env = dotenv.config().parsed

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      settings: path.join(__dirname, 'src/settings'),
      modules: path.join(__dirname, 'src/modules'),
      store: path.join(__dirname, 'src/store'),
      assets: path.join(__dirname, 'assets'),
      ui: path.join(__dirname, 'src/ui'),
      src: path.join(__dirname, 'src'),
      lib: path.join(__dirname, 'lib'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    htmlPlugin,
    new webpack.IgnorePlugin(/\/__tests__\//),
    new webpack.IgnorePlugin(/\/__mocks__\//),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, './public'),
        to: './',
      },
    ]),
    new webpack.DefinePlugin({
      ...envKeys,
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    }),
    new CompressionPlugin({
      filename: `[path].gz`,
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.json$|\.html$/,
      deleteOriginalAssets: false,
    }),
    new VersionFile({
      output: './public/version.json',
      template: './version.ejs',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}

export default config
