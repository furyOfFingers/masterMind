import { GET_COLOR, GET_RANDOM_COLOR } from './Consts';

/**
 * Action to take a color from a circle.
 * 
 * @param {string} color Selected color.
 */
export function getColorAction(color) {
  return {
    type: GET_COLOR,
    color
  };
};

/**
 * Action to take a array with random colors.
 * 
 * @param {array} randomColor Array with random colors.
 */
export function getRandomColor(randomColor) {
  return {
    type: GET_RANDOM_COLOR,
    randomColor
  };
};