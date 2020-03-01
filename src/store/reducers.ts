import {
  ACTION_REVERT_ALL_FIELD,
  ACTION_CHANGE_FIRST_NAME,
  ACTION_CHANGE_SECOND_NAME
} from '../consts';
import { IFieldState, IFieldActionTypes } from '../Types/Types';

/** Начальное состояние полей. */
export const InitialState: IFieldState = {
  firstName: 'Oleg',
  secondName: 'Olegov'
};

/** Редюсер для полей компонента App. */
export const rootReducer = (
  state = InitialState,
  action: IFieldActionTypes
) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };

    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload };

    case ACTION_REVERT_ALL_FIELD:
      return { ...InitialState };

    default:
      return { ...state };
  };
};
