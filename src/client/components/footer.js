import React from 'react';
import '../css/footer.scss';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footer">
				<div className="footer__textblock">
					<p className="footer__textblock-text">created by Andrew A. Anissi</p>
				</div>
			</div>
		);
	}
}
