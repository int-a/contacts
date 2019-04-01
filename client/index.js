import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getContacts } from './server/api';

// const initialState = {
//   "contacts": [
//     {
//       "name": "Miguel Camilo",
//       "phone": "123456789"
//     },
//     {
//       "name": "Peter",
//       "phone": "883292300348"
//     },
//     {
//       "name": "Jessica",
//       "phone": "8743847638473"
//     },
//     {
//       "name": "Michael",
//       "phone": "0988765553"
//     }
//   ],
//   "activeContact": null
// };

const initialState = getContacts()
  .then((body) => {
    console.log('body: ');
    console.log(body);
    return body;
  }).catch(err => console.log(err));

console.log('initial state: ');
console.log(initialState);

const composeEnhancers = composeWithDevTools({});
ReactDOM.render(
  <Provider store={ createStore(reducers, initialState, composeEnhancers(
  )) }>
   <App />
  </Provider>
, document.querySelector('.container'));