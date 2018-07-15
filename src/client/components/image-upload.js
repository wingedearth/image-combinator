import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import '../../assets/images/upload-arrow.jpg';
import '../css/image-upload.scss';

class ImageUpload extends Component {
	render() {
		const { store } = this.props;
		const uploadReady = _.get(store.imageStore, 'uploadReady');
		console.log('uploadReady:', uploadReady);

		return (
			<div className="image-upload">
				{uploadReady ? (
					''
				) : (
					<div className="image-upload__container">
						<img className="image-upload__icon" src="images/upload-arrow.jpg" />
						<p className="image-upload__text">drag and drop an image file here to upload</p>
					</div>
				)}
			</div>
		);
	}
}

ImageUpload.propTypes = {
	store: PropTypes.object
};

export default ImageUpload;
