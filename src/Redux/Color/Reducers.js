import { GET_COLOR, GET_RANDOM_COLOR } from './Consts';

const initialState = {
  color: '',
  randomColor: []
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLOR:
      return { ...state, color: action.color };
    case GET_RANDOM_COLOR:
      return { ...state, randomColor: action.randomColor };
    default:
      return state;
  }
};

export default colorReducer;
