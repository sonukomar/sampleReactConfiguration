// var HTMLWebpackPlugin = require('html-webpack-plugin');
// 	var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
// 		template: __dirname + '/app/index.html',
// 		filename: 'index.html',
// 		inject: 'body'
// 	}); 
// 	module.exports = {
// 		entry: __dirname + '/app/index.js',
// 		module: {
// 			rules: [
// 				   {
// 				     test: /\.js$/,
// 				     exclude:/node_modules/,
//                      use:[
//                          {
//                             loader: 'babel-loader',
//                             options: {
//                                 camelcase: true
//                             }
//                          } 
//                      ],
// 				   }
// 				 ]
// 			},
// 		output: {
// 			  filename: 'transformed.js',
// 			  path: __dirname + '/build'
// 			},
// 			plugins: HTMLWebpackPluginConfig 
//     }
    

    const path = require('path');
    const webpack = require('webpack');

    var HTMLWebpackPlugin = require('html-webpack-plugin');
    var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
        template: __dirname + '/app/index.html',
        filename: 'index.html',
        inject: 'body'
    });

    module.exports = {
      entry: {
        app: __dirname+'/app/index.js'
      },
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
    
      module: {
        rules: [{
          test: /\.js$/, // include .js files
          enforce: "pre", // preload the jshint loader
          exclude: /node_modules/, // exclude any and all files in the node_modules folder
          use: [{
            loader: "babel-loader",
           
          }]
        }]
      },
      plugins: [
        HTMLWebpackPluginConfig
      ],
      devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        hot: true
    },
    };    
