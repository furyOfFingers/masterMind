import { GET_COLOR } from './Consts';

/**
 * Action to take a color from a circle
 * 
 * @param {string} color Selected color.
 */
export function getColorAction(color) {
  return {
    type: GET_COLOR,
    color
  };
};