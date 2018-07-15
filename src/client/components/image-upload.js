import React, { Component } from 'react';
import _ from 'lodash';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import '../../assets/images/upload-arrow.jpg';
import '../css/image-upload.scss';

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
		const { store, actions } = this.props;
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
		const { store } = this.props;
		const { imageStore } = store;

		if (imageStore.images.length >= 4) return;

		console.log('acceptedFiles:', acceptedFiles);
		console.log('rejectedFiles:', rejectedFiles);
		const file = acceptedFiles[0];
	}

	render() {
		const { store } = this.props;
		const uploadReady = _.get(store.imageStore, 'uploadReady');
		const images = _.get(store.imageStore, 'images');
		const maxImages = images.length === 4;
		// const maxImages = true;

		return (
			<div className="image-upload">
				{maxImages && !uploadReady ? (
					<p className="image-upload__maxmessage">Maximum of Four (4) Images Reached</p>
				) : (
					''
				)}
				<Dropzone
					type="file"
					accept="image/jpeg, image/png"
					disabled={maxImages || uploadReady}
					className="image-upload__container"
					activeClassName="image-upload__container-active"
					rejectClassName="image-upload__container-reject"
					onDrop={this.onDrop.bind(this)}
				>
					<img className="image-upload__icon" src="images/upload-arrow.jpg" />
					<p className="image-upload__text">drag and drop an image file here to upload</p>
					<p className="image-upload__text-reject">Invalid File Type</p>
				</Dropzone>
			</div>
		);
	}
}

ImageUpload.propTypes = {
	store: PropTypes.object
};

export default ImageUpload;
