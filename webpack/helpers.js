/**
 * isProd
 * @returns {bool} true if production environment is set
 */
function isProd () {
	return process.env.ENVIRONMENT === 'production' || process.env.ENVIRONMENT === 'prod';
}

module.exports = {
	isProd
};
