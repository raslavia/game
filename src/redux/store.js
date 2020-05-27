import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import appReducer from './reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = createStore(appReducer, applyMiddleware(...middlewares));
