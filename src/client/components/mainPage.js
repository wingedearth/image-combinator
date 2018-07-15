import React, { Component } from 'react';
import ImageUpload from './image-upload';
import UploadButton from './upload-button';
import StoreConsumer from '../store/StoreConsumer';
import '../css/mainPage.scss';

class MainPage extends Component {
	render() {
		return (
			<div className="mainpage">
				<StoreConsumer><UploadButton /></StoreConsumer>
				<StoreConsumer><ImageUpload /></StoreConsumer>
			</div>
		);
	}
}

export default MainPage;
