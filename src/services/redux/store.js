import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(createSagaMiddleware)
);
