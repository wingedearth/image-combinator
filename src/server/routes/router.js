import express from 'express';
import Controller from '../controllers/controller';
import mergeImg from 'merge-img';

const router = express.Router({ strict: true });

// Get Main Page
router.post('/merged', function(req, res) {
	const { images } = req.body;
	console.log('about to merge');

	mergeImg(images).then((img) => {
		console.log('img:', img);

		// Save image as file
		// img.write('out.png', () => console.log('done'));

		// // Get image as `Buffer`
		// img.getBuffer(img.getMIME(), (err, buf) => {
		// 	if (err) throw err;

		// 	res.send(buf);
		// });
	});
});
router.get('/', Controller);
router.get('*', Controller);

export default router;
