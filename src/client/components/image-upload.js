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
	constructor(props) {
		super(props);
	}

	addImage(file) {
		const { actions } = this.props;

		actions.addImage(file);
	}

	removeImage(indx) {
		const { actions } = this.props;

		actions.removeImage(indx);
	}

	loadFile(file, indx) {
		// validate indx argument
		if (!Number.isInteger(indx) || indx < 0 || indx > 3) return;

		const self = this;
		const reader = new FileReader();

		reader.onload = () => {
			const fileAsBinaryString = reader.result;
			return fileAsBinaryString;
		};
		reader.onabort = () => console.log('file reading was aborted');
		reader.onerror = () => console.log('file reading has failed');
		const binaryString = reader.readAsBinaryString(file);
		const arrayBuffer = reader.readAsArrayBuffer(file);
	}

	onDrop(acceptedFiles, rejectedFiles) {
		const { store, actions } = this.props;
		const { imageStore } = store;

		if (imageStore.images.length >= MAX_IMAGE_LENGTH) return;

		console.log('acceptedFiles:', acceptedFiles);
		console.log('rejectedFiles:', rejectedFiles);

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
					<p className="image-upload__text">drag and drop an image file here to upload</p>
					<p className="image-upload__text-reject">Invalid File Type</p>
				</Dropzone>

				{/* Add Image Previews */}
				{images.map((image, index) => (
					<div key={`preview-${index}`}>
						<StoreConsumer>
							<Preview image={image} index={index} />
						</StoreConsumer>
					</div>
				))}
			</div>
		);
	}
}

ImageUpload.propTypes = {
	store: PropTypes.object,
	actions: PropTypes.object
};

export default ImageUpload;
