import { combineReducers } from "redux";
import colorReducer from "./Color/Reducers";
import confirmReducer from "./Confirmer/Reducers";

const rootReducer = combineReducers({
  color: colorReducer,
  show: confirmReducer,
});

export default rootReducer;
