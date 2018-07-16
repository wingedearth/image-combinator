import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CombinatorButton from './combinator-button';
import '../css/nav.scss';

class Nav extends Component {
	render() {
		const { store, actions } = this.props;
		const { imageStore } = store;
		const { merge, resetImages, toggleUploadReady } = actions;
		const { combinedImage, images, uploadReady } = imageStore;
		const uploadButtonText = uploadReady ? 'Add Images' : 'Done Uploading';
		const mergeButtonText = 'Merge Images';
		const resetButtonText = 'Reset';

		return (
			<div className="nav">
				<div className="nav__container">
					{/* Button to Upload Box */}
					<CombinatorButton buttontext={uploadButtonText} clickhandler={toggleUploadReady} />

					{/* Button to Reset App */}
					{images.length > 0 ? (
						<CombinatorButton buttontext={resetButtonText} clickhandler={resetImages} />
					) : (
						''
					)}

					{/* Button to Merge Images */}
					{images.length > 1 && !combinedImage ? (
						<CombinatorButton buttontext={mergeButtonText} clickhandler={merge} />
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

Nav.propTypes = {
	store: PropTypes.object,
	actions: PropTypes.object
};

export default Nav;
