import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ImageUpload from './image-upload';
import Nav from './nav';
import Preview from './preview';
import Merged from './merged';
import StoreConsumer from '../store/StoreConsumer';
import '../css/mainPage.scss';

class MainPage extends Component {
	render() {
		const { store } = this.props;
		const { imageStore } = store;
		const { combinedImage, images } = imageStore;

		return (
			<div className="mainpage">
				<StoreConsumer>
					<Nav />
				</StoreConsumer>

				{/* Merged Image */}
				{combinedImage ? <Merged image={combinedImage} /> : ''}

				<StoreConsumer>
					<ImageUpload />
				</StoreConsumer>

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

MainPage.propTypes = {
	store: PropTypes.object
};

export default MainPage;
