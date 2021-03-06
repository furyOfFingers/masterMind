import React, { useState, useCallback } from "react";
import s from "./style.styl";
import { useDispatch } from "react-redux";

import { IInitialCircle } from "Types/Types";

import { getColor } from "Redux/Color/Reducers";
import Circle from "Components/Circle/Circle";
import colorHolder from "InitialData/colorHolder";

/**
 * Component containing all colors.
 */
const ColorHolder = (): JSX.Element => {
  const dispatch = useDispatch();
  const [circle, setCircle] = useState(colorHolder());

  const handleColorPick = useCallback(
    (_: string, i: number) => {
      const newCircle = { ...circle } as IInitialCircle[];

      for (const el in newCircle) {
        newCircle[el].clicked = false;
      }
      newCircle[i].clicked = true;
      dispatch(getColor(circle[i].extraClass as string));

      setCircle(newCircle);
    },
    [circle]
  );

  const circleRender = () => {
    return Object.keys(circle).map((el: string, i: number) => (
      <Circle
        key={i}
        clicked={circle[i].clicked as boolean}
        active
        extraClass={[s[circle[i].extraClass as string]]}
        size="normal"
        onClick={() => handleColorPick(el, i)}
      />
    ));
  };

  return <div className={s["color-holder"]}>{circleRender()}</div>;
};

export default React.memo(ColorHolder);
