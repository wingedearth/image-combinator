import getTemplate from '../../assets/views/index';

const initialStateData = {
	testStore: {
		foo: 'bar',
		venture: ['Thaddeus', 'Dean', 'Hank', 'Brock Sampson', 'JJ', 'Helper']
	},
	mainStore: {
		title: 'Image Combinator'
	},
	imageStore: {
		images: [],
		combinedImage: '',
		uploadReady: true
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
