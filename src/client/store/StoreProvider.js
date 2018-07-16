import React, { Component, createContext } from 'react';
import _ from 'lodash';
import mergeImg from 'merge-img';
import base64ArrayBuffer from '../../assets/lib/base64ArrayBuffer';
import Jimp from 'jimp';
import mergeImages from 'merge-images';
import PropTypes from 'prop-types';
import { Context } from '../store/store';
import Merged from '../components/merged';
import axios from 'axios';

const { Provider } = Context;

class StoreProvider extends Component {
	constructor(props) {
		super(props);

		this.state = window.__INITIAL_STATE;
	}

	loadFile(file, indx) {
		// if (!Number.isInteger(indx) || indx < 0 || indx > 3) return;

		const reader = new FileReader();

		return new Promise(resolve => {
			reader.onload = () => {
				const result = base64ArrayBuffer(reader.result);

				resolve(result);
			};
			reader.onabort = () => console.log('file reading was aborted');
			reader.onerror = () => console.log('file reading has failed');
			// const binaryString = reader.readAsBinaryString(file);
			reader.readAsArrayBuffer(file);
		});
	}

	render() {
		const { children } = this.props;
		const self = this;

		return (
			<Provider
				value={{
					store: this.state,
					actions: {
						addImage: image => {
							const { imageStore } = this.state;
							const newImageStore = _.merge({}, imageStore);

							newImageStore.images.push(image);
							this.setState({ imageStore: newImageStore });
						},
						merge: () => {
							const { imageStore } = this.state;
							const { images } = imageStore;
							const loadImage = this.loadFile;

							const promises = images.map((image, index) => {
								return new Promise((resolve, reject) => {
									return loadImage(image).then(base64 => resolve(base64));
								});
							});

							Promise.all(promises).then(values => {
								const updatedValues = values.map((value, indx) => {
									const type = images[indx].type;
									const src = `data:${type};base64,${value}`;

									// Start defining offset widths
									let width0 = 0;
									let width1 = 0;
									let width2 = 0;
									let width3 = 0;

									// Grab each image width from mounted image element
									// Each element's offset should equal the previous elements' widths
									if (indx > 0) width1 = document.querySelector(`#preview-0 img`).width;
									if (indx > 1) width2 = document.querySelector(`#preview-1 img`).width;
									if (indx > 2) width3 = document.querySelector(`#preview-2 img`).width;

									// x is offset
									const offset = width0 + width1 + width2 + width3;

									// widthX is the final image's width, used to calculate merged image width
									const widthX = document.querySelector(`#preview-${indx} img`).width;

									const mergedImageWidth = offset + widthX;

									return { src, x: offset, mergedImageWidth };
								});
								mergeImages(updatedValues, {
									width: updatedValues[updatedValues.length - 1].mergedImageWidth
								}).then(b64 => {
									const newImageStore = Object.assign({}, imageStore, { combinedImage: b64 });

									self.setState({ imageStore: newImageStore });
								});
							});
						},
						removeImage: indx => {
							const { imageStore } = this.state;
							const newImages = imageStore.images.filter((image, index) => index != indx);
							const newImageStore = Object.assign({}, imageStore, {
								images: newImages
							});

							this.setState({ imageStore: newImageStore });
						},
						resetImages: () => {
							const { imageStore } = this.state;
							const newImageStore = Object.assign({}, imageStore, {
								images: [],
								combinedImage: ''
							});

							this.setState({ imageStore: newImageStore });
						},
						toggleUploadReady: () => {
							const { imageStore } = this.state;
							const uploadReady = !imageStore.uploadReady;
							const newImageStore = _.merge({}, imageStore, { uploadReady });

							this.setState({ imageStore: newImageStore });
						}
					}
				}}
			>
				{children}
			</Provider>
		);
	}
}

StoreProvider.propTypes = {
	children: PropTypes.object
};

export default StoreProvider;
