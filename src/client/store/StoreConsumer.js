import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/store';

class StoreConsumer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children } = this.props;

		return (
			<Context.Consumer>
				{({ store, actions }) =>
					React.Children.map(children, child =>
						cloneElement(child, {
							store,
							actions
						})
					)
				}
			</Context.Consumer>
		);
	}
}

StoreConsumer.propTypes = {
	children: PropTypes.object
};

export default StoreConsumer;
