import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRandomColor } from "../Redux/Color/Reducers";

/** Randomly shuffle the array with the available colors */
const shuffleColorArr = (allColor: Array<string>, circleArr: number): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const shuffle: Array<string> = allColor.sort(() => Math.random() - 0.5);
    const colorArr = [] as Array<string>;

    for (let i = 0; i < circleArr; i++) {
      colorArr.push(shuffle[i]);
    }

    dispatch(getRandomColor(colorArr as Array<string>));
  }, []);
};

export default shuffleColorArr;
