import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
	createStore,
	compose,
	combineReducers,
	applyMiddleware,
	Store,
	Reducer,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import loginReducer from './components/containers/LoginComponent/store/loginReducer';
import calculatorReducer from './components/containers/Calculator/store/calculatorReducer';

// Enabling the Redux Dev tools for development mode:
const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer: Reducer = combineReducers({
	login: loginReducer,
	calculator: calculatorReducer
});

const store: Store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
