import { combineReducers } from 'redux';
import colorReducer from './Color/Reducers';

const rootReducer = combineReducers({
  color: colorReducer,
});

export default rootReducer;
