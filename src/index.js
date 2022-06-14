import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import reducers from './reducers'

const container = document.getElementById('root');
const store = createStore(reducers)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container);
