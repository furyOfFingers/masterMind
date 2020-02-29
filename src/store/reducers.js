import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../index';

const InitialState = {
  firstName: 'Oleg',
  secondName: 'Olegov'
};

export const rootReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload }

    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload }

    default:
      return { ...state }
  }
}