import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from '../reducer';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;