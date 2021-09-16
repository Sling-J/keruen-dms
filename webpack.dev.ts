import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import dotenv from 'dotenv'
import * as webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import * as path from 'path' // to get the current path

const htmlPlugin: HtmlWebPackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
})

const currentPath = path.join(__dirname)

// path to dev env
const finalPath = currentPath + '/.env.development'

// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: finalPath }).parsed

const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
  return prev
}, {})

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  mode: 'development',
  watch: true,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: 'minimal',
    lazy: false,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#8FC74A',
                  'link-color': '#8FC74A',
                  'border-radius-base': '2px',
                },
                javascriptEnabled: true,
              },
            },
          }],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['react-refresh/babel'],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { plugins: ['react-refresh/babel'] },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
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
    new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    htmlPlugin,
    new webpack.IgnorePlugin(/\/__tests__\//),
    new webpack.IgnorePlugin(/\/__mocks__\//),
    new webpack.DefinePlugin(envKeys),
  ],
}

export default config
