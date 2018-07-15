const _ = require('lodash');
const config = require('./config');
const plugins = require('./plugins');

const frontend = _.merge({}, config, {
	name: 'frontend',
	entry: {
		app: ['./src/client/app.js', './src/client/css/styles.scss']
	},
	target: 'web',
	plugins: plugins
});

module.exports = frontend;
