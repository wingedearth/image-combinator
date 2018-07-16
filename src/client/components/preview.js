import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/preview.scss';

class Preview extends Component {
	onComponentDidUnmount() {
		window.URL.revokeObjectURL(this.props.image.preview);
	}

	removeImage(e, index) {
		const { actions } = this.props;

		actions.removeImage(index);
	}

	render() {
		const { index } = this.props;
		const id = `preview-${index}`;
		const image = this.props.image;

		return (
			<div id={id} className="preview">
				<p className="preview__text">Image: {index + 1}</p>
				<button className="preview__button-remove" onClick={e => this.removeImage(e, index)}>Remove</button>
				<img className="preview__natural" src={image.preview} />
				<img className="preview__img" src={image.preview} />
			</div>
		);
	}
}

Preview.propTypes = {
	index: PropTypes.number,
	image: PropTypes.object,
	actions: PropTypes.object
};

export default Preview;
