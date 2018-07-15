import React, { Component, createContext } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Context } from '../store/store';

const { Provider } = Context;
const config = { headers: { 'content-type': 'application/json' } };

class StoreProvider extends Component {
	constructor(props) {
		super(props);

		this.state = window.__INITIAL_STATE;
	}

	render() {
		const { children } = this.props;

		return (
			<Provider
				value={{
					store: this.state,
					actions: {
						addImage: image => {
							const {imageStore} = this.state;
							const newImageStore = _.merge({}, imageStore);

							newImageStore.images.push(image);
							this.setState({ imageStore: newImageStore });
						}
					}
				}}
			>
				{children}
			</Provider>
		);
	}
}

StoreProvider.propTypes = {
	children: PropTypes.object
};

export default StoreProvider;