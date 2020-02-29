import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../consts';

/** Interface полей компонента App. */
export interface IFieldState {
  firstName: any;
  secondName: any;
}

/** Interface для action поля firstName. */
interface FirstName {
  type: typeof ACTION_CHANGE_FIRST_NAME;
  payload: IFieldState;
}

/** Interface для action поля secondName. */
interface SecondName {
  type: typeof ACTION_CHANGE_SECOND_NAME;
  payload: IFieldState;
}

export type IFieldActionTypes = FirstName | SecondName;
