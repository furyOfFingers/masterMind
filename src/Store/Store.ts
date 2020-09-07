import { createStore, compose } from 'redux';
import rootReducer from '../Redux/rootReducer';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
