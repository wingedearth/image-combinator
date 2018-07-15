const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsRule = {
	use: {
		loader: 'babel-loader'
	},
	test: /\.(js|jsx)$/,
	exclude: [/node_modules/]
};

const scssRule = {
	test: /\.scss$/,
	use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
};

const imageRule = {
	test: /\.(png|jp(e*)g|svg)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: '/images/[name].[ext]'
			}
		}
	]
};

const rules = [jsRule, scssRule, imageRule];

module.exports = rules;
