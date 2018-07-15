import React, {Component} from 'react';
import StoreConsumer from '../store/StoreConsumer';
import Header from './header';
import MainPage from './mainPage';
import Footer from './footer';
import '../css/home.scss';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Header />
				<MainPage />
				<Footer />
			</div>
		);
	}
}

export default Home;
