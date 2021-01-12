import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default store;