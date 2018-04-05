import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './views/app.js';
import reducer from './actions/index.js';

const middleware = store => {
  return next => {
    return action => {
      console.log('before', store.getState());
      const reduced = next(action);
      console.log('after', store.getState());
      return reduced;
    };
  };
};

const store = createStore(reducer, applyMiddleware(middleware));
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
