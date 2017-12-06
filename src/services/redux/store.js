import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import history from './history.js';
// import { routerMiddleware } from 'react-router-redux'
import reducers from './reducers';

export default createStore(
  reducers
);