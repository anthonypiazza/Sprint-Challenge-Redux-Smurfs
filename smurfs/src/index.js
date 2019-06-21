import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

//created redux store, added createStore function
//passed in reducer representing state/data
//added middleware packages given above
const store = createStore(
  rootReducer, 
  applyMiddleware(logger, thunk)
);

//Provider wraps App to make app aware of redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
