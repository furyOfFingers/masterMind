import {
  GET_COLOR
} from './Consts';

const initialState = {
  color: ''
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLOR:
      return { ...state, color: action.color };
    default:
      return state;
  }
};

export default colorReducer;
