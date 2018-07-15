import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/upload-button.scss';

class UploadButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { store, actions } = this.props;
		const { uploadReady } = store.imageStore;
		const buttontext = uploadReady ? 'Add Images' : 'Done Uploading';

		return (
			<div className="upload-button" onClick={actions.toggleUploadReady}>
				<span className="upload-button__container"><p className="upload-button__text">{buttontext}</p></span>
			</div>
		);
	}
}

UploadButton.propTypes = {
	store: PropTypes.object,
	actions: PropTypes.object
};

export default UploadButton;
