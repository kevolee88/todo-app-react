import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './App';
import reducers from './reducers'

const container = document.getElementById('root');
const store = createStore(reducers, applyMiddleware(thunk))
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container);
