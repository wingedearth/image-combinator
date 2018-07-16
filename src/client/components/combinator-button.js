import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/combinator-button.scss';

class CombinatorButton extends Component {
	render() {
		const { buttontext, clickhandler } = this.props;

		return (
			<div className="combinator-button" onClick={clickhandler}>
				<span className="combinator-button__container">
					<p className="combinator-button__text">{buttontext}</p>
				</span>
			</div>
		);
	}
}

CombinatorButton.propTypes = {
	buttontext: PropTypes.string,
	clickhandler: PropTypes.func
};

export default CombinatorButton;
