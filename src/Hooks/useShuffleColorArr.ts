import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRandomColor } from "../Redux/Color/Reducers";

/** Randomly shuffle the array with the available colors */
const useShuffleColorArr = (
  allColor: Array<string>,
  circleArr: number
): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const shuffle: Array<string> = allColor
      .sort(() => Math.random() - 0.5)
      .slice(0, circleArr);

    dispatch(getRandomColor(shuffle as Array<string>));
  }, []);
};

export default useShuffleColorArr;
