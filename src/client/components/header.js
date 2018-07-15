import React, {Component} from 'react';
import {MAIN_TITLE} from '../../assets/constants';
import '../css/header.scss';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header__content">
					<div className="header__title">
						<p className="header__title-text">{MAIN_TITLE}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
