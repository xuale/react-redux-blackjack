import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import Game from './components/Game';
import './index.css';
const store = createStore(counter)
const rootEl = document.getElementById('root')

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Game/>
  </Provider>,
  document.getElementById('root')
);