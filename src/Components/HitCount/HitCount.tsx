import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import c from "classnames";

import IAppState from "Types/State";
import { IInitialCircle } from "Types/Types";
import { getConfirmAction } from "Redux/Confirmer/Reducers";
import { getRoundStatics } from "Redux/Color/Reducers";
import Circle from "Components/Circle/Circle";
import { CircleArr, InitialCircle } from "Constants/const";
import s from "./style.styl";
import so from "Assets/outerStyle.styl";

interface IHitCountProps {
  /** Attribute of editable component Circle. */
  isEditable: boolean;
  /** Sign of finished painting. */
  filled: boolean;
}

/**
 * Middle component on which the color is chosen.
 */
const HitCount = React.memo(({isEditable, filled}: IHitCountProps): JSX.Element => {

  const color: string = useSelector((state: IAppState) => state.color.color);
  const randomColor: string[] = useSelector(
    (state: IAppState) => state.color.randomColor
  );

  const dispatch = useDispatch();

  const [circle, setCircle] = useState({} as IInitialCircle[]);
  const [filledAll, setFilledAll] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const newCircle = {} as IInitialCircle[];

    CircleArr.forEach((_: string, i: number) => {
      newCircle[i] = { ...InitialCircle };
    });

    setCircle(newCircle);
  }, []);

  const checkingColorBlocks = () => {
    const allColorsFromBlock = [] as string[];

    Object.keys(circle).forEach((el: string, i: number) => {
      circle[i].extraClass && allColorsFromBlock.push(circle[el].extraClass);
    });

    if (allColorsFromBlock.length === 4) {
      const correctColorCount = [] as string[];
      const correctColorPlace = [] as string[];
      const randomUniqColorSet = new Set<string>();
      let correctColorInfo = "";

      /** Checks the correct location of the correct color. */
      randomColor.forEach((el: string, i: number) => {
        randomUniqColorSet.add(el);

        if (randomColor[i] === allColorsFromBlock[i]) {
          correctColorPlace.push(el);
        }
      });

      const randomUniqColorArr = [...(randomUniqColorSet)];

      /** Checks for a color from the array. */
      randomUniqColorArr.forEach((el: string) => {
        if (allColorsFromBlock.indexOf(el) >= 0) {
          correctColorCount.push(el);
        }
      });

      /** All colors are revealed. */
      if (correctColorPlace.length === 4) {
        console.log("congrat");
      }

      correctColorInfo = correctColorCount.length.toString();
      correctColorInfo += correctColorPlace.length.toString();
      dispatch(getRoundStatics(correctColorInfo));
    }
  };

  /** Checks if all blocks are filled */
  const filledBlockCounter = () => {
    let showConfirm = true;

    if(filledAll.indexOf(0) >= 0) {
      showConfirm = false;
    }

    if (showConfirm) {
      dispatch(getConfirmAction(true));
    }
  };

  /** Fills the Circle component with color. */
  const handlePainting = (_: string, i: number) => {
    if(isEditable) {
      const newCircle = { ...circle };
      const newFilledAll = filledAll;

      newFilledAll[i] = 1;
      setFilledAll(newFilledAll);

      newCircle[i].extraClass = color;
      setCircle(newCircle);

      color && filledBlockCounter();
      checkingColorBlocks();
    }
  };

  /** Render side string block. */
  const sideString = (filled: boolean) => {
    const style = c(s["side-string"], { [s["filled"]]: filled });

    return <div className={style} />;
  };

  /** Render circle components. */
  const circleRender = () => {
    const circleArray: JSX.Element[] = [];

    Object.keys(circle).forEach((el: string, i: number) => {
      circleArray.push(
        <Circle
          key={i}
          isColorSelected={!!color && !circle[i].extraClass}
          active={isEditable}
          extraClass={[s[circle[i].extraClass as string]]}
          onClick={() => handlePainting(el, i)}
        />
      );
    });

    return circleArray;
  };

  return (
    <div className={so["hit-count"]}>
      {sideString(filled)}

      <div className={s["circle-container"]}>{circleRender()}</div>

      {sideString(filled)}
    </div>
  );
});

HitCount.displayName = "HitCount";
export default HitCount;
