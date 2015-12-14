// MAIN DEPENDENCIES
import path from 'path';
import webpack from 'webpack';

import _ from 'lodash';

// base app dir
let root_dir = path.resolve(__dirname, '..');

// PLUGINS
// html / clean / extract css / stats
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Clean from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
let UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();

// Fixture to extract css
function extractForProduction(loaders) {
  return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}


// common configs
let config = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    //preLoaders: [
    //  {
    //    test: /\.js$/,
    //    exclude: /node_modules/,
    //    loader: 'eslint-loader'
    //  }
    //]
  }
};

module.exports = function(options) {
  let client = options.client,
      server = options.server,
      devserver = options.devserver,
      prod = options.production;

  config.devtool = prod ? false: "#inline-source-map";

  // STYLE LOADERS
  let cssLoaders = 'style-loader!css-loader',
      lessLoaders = 'style!css!less',
      sassLoaders = 'style!css!sass?indentedSyntax';

  // INIT PLUGINS
  let plugins = [new webpack.NoErrorsPlugin()];

  // directory cleaner
  let cleanDirectories = ['build', 'dist'];

  // html template
  let clientOut = path.join(root_dir, 'build');

  let processVars = {
    'process.env':{}
  };

  // PRODUCTION CASE
  if (prod) {

    // WRAP INTO CSS FILE
    cssLoaders = extractForProduction(cssLoaders);
    sassLoaders = extractForProduction(sassLoaders);
    lessLoaders = extractForProduction(lessLoaders);

    plugins.push(new webpack.PrefetchPlugin("react"));
    plugins.push(new ExtractTextPlugin("app-[hash].css"));
    processVars['process.env'].NODE_ENV = JSON.stringify('production');

    clientOut = path.join(root_dir, 'dist');

    //plugins.push(new webpack.optimize.UglifyJsPlugin({warnings: false, minimize: true, sourceMap: false}));
    //plugins.push(new webpack.optimize.AggressiveMergingPlugin())

  }

  // HTML TEMPLATE + ENV VARIABLE
  if (client) {

    processVars['process.env'].BROWSER = JSON.stringify(true);
    plugins.push(new Clean(cleanDirectories, root_dir));
    plugins.push(new webpack.DefinePlugin(processVars));
    plugins.push(new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'));
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurenceOrderPlugin(true));
    plugins.push(
        new HtmlWebpackPlugin({
          filename: prod? 'index-prod.html':'index.html',
          template: prod? 'template/index-prod.html':'template/index.html'
        })
    );


  }

  // small hash for production resources
  let hash = prod ? '-[hash]': '',
      publicPath = '/',
      devMainClientApp = prod? './app' : './app-dev';

  if (client) {
    // CLIENT
    return _.merge({}, config, {
      context: __dirname + path.sep + path.join('..', 'app'),
      entry: {
        app: devMainClientApp,
        vendors: ['classnames', 'iso', 'react', 'react-helmet', 'react-router', 'react-hot-loader', 'whatwg-fetch']
      },
      output: {
          path: clientOut,
          filename: 'app'+hash+'.js',
          publicPath: publicPath
      },
      target: 'web',
      module: {
        loaders: [
          { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: [/node_modules/, /__tests__/] },
          { test: /\.(jpe?g|png|gif|svg|woff(2|z)?|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
          { test: /\.sass$/, loader: sassLoaders },
          { test: /\.css$/, loader: cssLoaders },
          { test: /\.less$/,  loader: lessLoaders},
          { test: /\.json$/, loader: 'json'}
        ]
      },
      plugins: plugins,
      root: clientOut
    });
  }
  else {
    // SERVER

    let server = !devserver ? './server/server' : './server/flavor/server-dev';
    let serverOut = './dist/';

    let entry = [server];
    config.recordsPath = path.resolve(__dirname, '..', 'build/webpack.records.json');

    if (devserver) {
      plugins.push(new webpack.HotModuleReplacementPlugin());
      //entry.push('webpack/hot/signal.js');
      entry.push('webpack/hot/poll?1000');
    }
    if (!prod){
      plugins.push(new Clean(serverOut, root_dir));
    }

    return _.merge({}, config, {
      entry: entry,
       output: {
        path: serverOut,
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: publicPath
      },
      target: 'node',
      externals: /^[a-z][a-z\.\-0-9]*$/,
      node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true
      },
      module : {
        loaders: [
          { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: [/node_modules/, /__tests__/] },
          { test: /\.(jpe?g|png|gif|svg|woff(2|z)?|eot|ttf)$/, loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]' },
          { test: /\.sass$/, loader: sassLoaders },
          { test: /\.css$/, loader: cssLoaders },
          { test: /\.less$/,  loader: lessLoaders},
          { test: /\.json$/, loader: 'json'}
        ]
      },
      plugins: plugins
    });
  }
};
