import React, { Component } from 'react';
import _ from 'lodash';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import Preview from './preview';
import StoreConsumer from '../store/StoreConsumer';
import '../../assets/images/upload-arrow.jpg';
import '../css/image-upload.scss';
import { MAX_IMAGE_LENGTH } from '../../assets/constants';

class ImageUpload extends Component {
	addImage(file) {
		const { actions } = this.props;

		actions.addImage(file);
	}

	onDrop(acceptedFiles, rejectedFiles) {
		const { store, actions } = this.props;
		const { imageStore } = store;

		if (imageStore.images.length >= MAX_IMAGE_LENGTH) return;

		actions.addImage(acceptedFiles[0]);
	}

	render() {
		const { store } = this.props;
		const uploadReady = _.get(store.imageStore, 'uploadReady');
		const images = _.get(store.imageStore, 'images');
		const maxImagesReached = images.length === MAX_IMAGE_LENGTH;

		return (
			<div className="image-upload">
				{maxImagesReached && !uploadReady ? (
					<p className="image-upload__maxmessage">Maximum of {MAX_IMAGE_LENGTH} Images Reached</p>
				) : (
					''
				)}
				<Dropzone
					type="file"
					accept="image/jpeg, image/png"
					disabled={maxImagesReached || uploadReady}
					className="image-upload__container"
					activeClassName="image-upload__container-active"
					rejectClassName="image-upload__container-reject"
					onDrop={this.onDrop.bind(this)}
				>
					<img className="image-upload__icon" src="images/upload-arrow.jpg" />
					<p className="image-upload__text">Click or drop an image file here to upload</p>
					<p className="image-upload__text-reject">Invalid File Type</p>
				</Dropzone>
			</div>
		);
	}
}

ImageUpload.propTypes = {
	store: PropTypes.object,
	actions: PropTypes.object
};

export default ImageUpload;
