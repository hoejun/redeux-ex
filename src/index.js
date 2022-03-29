import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import './index.css';
import App from './App';

//1. 스토어
//createStore에는 state를 직접 넣는 것이 아니라 state를 변경시키는 함수를 넣어야함
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
