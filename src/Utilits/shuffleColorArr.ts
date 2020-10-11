import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRandomColor } from "../Redux/Color/Reducers";

/** Randomly shuffle the array with the available colors */
const shuffleColorArr = (allColor: string[], circleArr: string[]): void => {
  const dispatch = useDispatch();

  useEffect(() =>{
    const randomIndex = [];
    let possible = "";
    const colorArr = [] as string[];

    for (const el in circleArr) {
      possible = possible + el;
    }

    for (let i = 0; i < possible.length; i++) {
      randomIndex.push(
        possible[Math.floor(Math.random() * possible.length)]
      );
    }

    randomIndex.forEach((el: string) => {
      if (allColor.indexOf(el)) {
        colorArr.push(allColor[el as any]);
      }
    });

    dispatch(getRandomColor(colorArr as []));
  }, []);
};

export default shuffleColorArr;
