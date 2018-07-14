import getTemplate from '../../assets/views/index';

const initialStateData = {
	testStore: {
		foo: 'bar',
		venture: ['Thaddeus', 'Dean', 'Hank', 'Brock Sampson', 'JJ', 'Helper']
	},
	mainStore: {
		title: 'Music Search'
	},
	imageStore: {
		images: [],
		combinedImage: ''
	}
};
const markup = 'Welcome to Image Combinator!';

/**
 * Sends home page
 * @param {obj} req - Express request
 * @param {obj} res - Express response
 */
export default (req, res) => {
	res.send(getTemplate(markup, initialStateData));
};
