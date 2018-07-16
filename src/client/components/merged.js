import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import '../css/merged.scss';

class Merged extends Component {
	render() {
		const { image } = this.props;

		return (
			<div className="merged">
				<div className="merged__container">
					<p className="merged__text">Merged Image</p>
					<img className="merged__img" src={image} />
				</div>
			</div>
		);
	}
}

Merged.propTypes = {
	image: PropTypes.string
};

export default Merged;
