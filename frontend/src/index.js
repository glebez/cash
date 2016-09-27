import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cashApp from './reducers';
import App from './App';

const initialState = {
	transactions: [{
		sum: 1000,
		category: 'stuff'
	}]
};
const store = createStore(
	cashApp, //root reducer
	initialState,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
