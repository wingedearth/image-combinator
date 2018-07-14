const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const OmitJSforCSSPlugin = require('webpack-omit-js-for-css-plugin');

const plugins = [
	new MiniCssExtractPlugin({ filename: '[name].css' }),
	new WebpackAssetsManifest({
		output: '../build/webpack.manifest.json',
		publicPath: '../build'
	}),
	new OmitJSforCSSPlugin({verbose: true})
];

module.exports = plugins;
