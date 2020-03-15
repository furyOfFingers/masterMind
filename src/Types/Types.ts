import {
  ACTION_REVERT_ALL_FIELD,
  ACTION_CHANGE_FIRST_NAME,
  ACTION_CHANGE_SECOND_NAME
} from '../consts';

/** Interface полей компонента App. */
export interface IFieldState {
  firstName: any;
  secondName: any;
};

/** Interface для action поля firstName. */
export interface IFirstNameProps {
  type: typeof ACTION_CHANGE_FIRST_NAME;
  payload: IFieldState;
};

/** Interface для action поля secondName. */
export interface ISecondNameProps {
  type: typeof ACTION_CHANGE_SECOND_NAME;
  payload: IFieldState;
};

/** Interface для action снопки "Cancel". */
export interface InitialState {
  type: typeof ACTION_REVERT_ALL_FIELD;
  payload: IFieldState;
};

export type IFieldActionTypes = IFirstNameProps | ISecondNameProps | InitialState;
