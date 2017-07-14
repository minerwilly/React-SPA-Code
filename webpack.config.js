var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {

	context: __dirname,
	entry: [
		'./src/js/index.jsx',
	],
	output: {
		path: path.join(__dirname, 'build/js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules|bower_components/,
				query: {
					presets: ['react', 'es2015']
				}
			},			
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: ["css-loader", "sass-loader"]
		        })
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(jpg|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							output: '../img/',
							outputPath: '../img/'
						}
					}
				]
			}
		]
	},
	devServer: {
		host: "localhost",
		port: 9876,
		inline: true,
		contentBase: path.join(__dirname, './build')
	},
	plugins: [		
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new ExtractTextPlugin("../css/app.css"),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: "../index.html"
		}),
		// new CleanWebpackPlugin(['build'])		
	]

};


