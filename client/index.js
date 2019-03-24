import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  "contacts": [
    {
      "name": "Miguel Camilo",
      "phone": "123456789"
    },
    {
      "name": "Peter",
      "phone": "883292300348"
    },
    {
      "name": "Jessica",
      "phone": "8743847638473"
    },
    {
      "name": "Michael",
      "phone": "0988765553"
    }
  ],
  "activeContact": null
};

const composeEnhancers = composeWithDevTools({});
ReactDOM.render(
  <Provider store={ createStore(reducers, initialState, composeEnhancers(
  )) }>
   <App />
  </Provider>
, document.querySelector('.container'));