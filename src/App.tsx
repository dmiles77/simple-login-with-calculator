import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/containers/Layout/Layout';
import LoginComponent from './components/containers/LoginComponent/LoginComponent';
import Footer from './components/display/Footer/Footer';
import './App.css';
import LazyLoader from './utilities/hoc/LazyLoader';

// Lazy loading imports:
const Calculator = lazy(() => import('./components/containers/Calculator/Calculator'));

export const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<Layout>
					<div className="content-wrapper">
						<Switch>
							<Route path="/login" component={LoginComponent} />
							<Route path="/" component={LazyLoader(Calculator)} />
						</Switch>
					</div>
					<Footer />
				</Layout>
			</Router>
		</div>
	);
};

// Redux setup:
const mapDispatchToProps = (dispatch: any) => {
	return {
	};
};

export default connect(
	null,
	mapDispatchToProps
)(App);
