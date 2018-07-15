import React, { Component, createContext } from 'react';
import ReactDOM from 'react-dom';
import StoreProvider from './store/StoreProvider';
import StoreConsumer from './store/StoreConsumer';
import Home from './components/home-component';
import './css/styles.scss';

/**
 * @param  {func} fn callback to run when DOM is ready
 */
function whenDOMIsReady(fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn);
	} else {
		document.attachEvent('onreadystatechange', () => {
			if (document.readyState !== 'loading') {
				fn();
			}
		});
	}
}

class App extends Component {
	render() {
		return (
			<div className="AppContainer">
				<Home />
			</div>
		);
	}
}

/**
 * start app when DOM is loaded
 */
function startApp() {
	const mainElement = document.getElementById('main');
	const initialState = window.__INITIAL_STATE;
	const renderElement = (
		<StoreProvider initialState={initialState}>
			<StoreConsumer>
				<App />
			</StoreConsumer>
		</StoreProvider>
	);

	ReactDOM.render(renderElement, mainElement);
}

whenDOMIsReady(startApp);
