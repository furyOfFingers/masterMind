import {
  GET_CONFIRM
} from './Consts';

const initialState = {
  show: false
};

const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONFIRM:
      return { ...state, show: action.show };
    default:
      return state;
  }
};

export default confirmReducer;
