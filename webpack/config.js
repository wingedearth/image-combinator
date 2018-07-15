const path = require('path');
const helpers = require('./helpers');
const rules = require('./rules');

const config = {
	mode: helpers.isProd() ? 'production' : 'development',
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	output: {
		publicPath: path.resolve(__dirname, '..', 'build'),
		filename: '[name].js',
		path: path.resolve(__dirname, '..', 'build')
	},
	resolve: {
		modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
		extensions: ['.js', '.es6', '.json', '.css']
	},
	module: {
		rules: rules
	},
	watchOptions: {
		ignored: /node_modules/,
		poll: true
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'initial'
				}
			}
		}
	}
};

module.exports = config;
