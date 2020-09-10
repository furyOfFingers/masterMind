import { GET_CONFIRM } from './Consts';

/**
 * Action to take a confirm sign of filling all blocks.
 * 
 * @param {boolean} show Confirm sign.
 */
export function getConfirmAction(show) {
  return {
    type: GET_CONFIRM,
    show
  };
};