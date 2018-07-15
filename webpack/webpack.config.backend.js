const _ = require('lodash');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const config = require('./config');
const plugins = require('./plugins');

plugins.push(new NodemonPlugin());

const backend = _.merge({}, config, {
	name: 'backend',
	entry: {
		server: './src/server/server.js'
	},
	target: 'node',
	output: {
		libraryTarget: 'commonjs2'
	},
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false
	},
	externals: [nodeExternals()],
	plugins: plugins
});

module.exports = backend;
