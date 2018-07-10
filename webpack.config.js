const path  = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const paths = {
	appBuild: resolveApp('build'),
	appJS: resolveApp('src/index.js'),
	appSrc: resolveApp('src'),
	appHtml: resolveApp('public/index.html')
}

module.exports = {
	entry: [
		'babel-polyfill', 
		'react-hot-loader/patch',
		paths.appJS,		
	],
	output: {
		path: paths.appBuild,
		filename: 'app.bundle.js',
		publicPath: '/'
	},
	devServer: {
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: paths.appHtml,
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				],
			},
		],
	},
	resolve: {
		plugins: [
			new DirectoryNamedWebpackPlugin(),
		],
		extensions: ['.js', '.jsx'],
	}
}