import { useDispatch } from 'react-redux';
import { getRandomColor } from '../Redux/Color/Actions';

/** Randomly shuffle the array with the available colors */
const shuffleColorArr = (allColor: string[], circleArr: string[]) => {
  const dispatch = useDispatch();
  let randomIndex = [];
  let possible = '';
  let colorArr = [] as string[];

  for (let el in circleArr) {
    possible = possible + el;
  }

  for (let i = 0; i < possible.length; i++) {
    randomIndex.push(
      possible.charAt(Math.floor(Math.random() * possible.length))
    );
  }

  randomIndex.forEach((el: any) => {
    if (allColor.indexOf(el)) {
      colorArr.push(allColor[el]);
    }
  });

  dispatch(getRandomColor(colorArr));
};

export default shuffleColorArr;
