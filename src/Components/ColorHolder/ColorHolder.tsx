import React, { useState, useEffect, useCallback } from "react";
import s from "./style.styl";
import { useDispatch } from "react-redux";

import { IInitialCircle } from "Types/Types";

import { AllColor, InitialCircle } from "Constants/const";
import { getColor } from "Redux/Color/Reducers";
import Circle from "Components/Circle/Circle";

/**
 * Component containing all colors.
 */
const ColorHolder = React.memo(
  (): JSX.Element => {
    const dispatch = useDispatch();
    const [circle, setCircle] = useState({} as IInitialCircle[]);

    useEffect(() => {
      const newCircle = {} as IInitialCircle[];

      AllColor.forEach((el, i) => {
        newCircle[i] = { ...InitialCircle };
        newCircle[i].extraClass = el;
      });

      setCircle(newCircle);
    }, []);

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
      const circleArray: JSX.Element[] = [];

      Object.keys(circle).forEach((el: string, i: number) => {
        circleArray.push(
          <Circle
            key={i}
            clicked={circle[i].clicked as boolean}
            active
            extraClass={[s[circle[i].extraClass as string]]}
            size="normal"
            onClick={() => handleColorPick(el, i)}
          />
        );
      });

      return circleArray;
    };

    return <div className={s["color-holder"]}>{circleRender()}</div>;
  }
);

export default ColorHolder;
