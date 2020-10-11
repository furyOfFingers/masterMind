import React from "react";
import s from "./style.styl";
import { CircleArr } from "Constants/const";

import Circle from "Components/Circle/Circle";

interface ICalculationFieldProps {
  /** Number of repetitions of render. */
  number: number;
}

/**
 * Component displaying correct selection.
 */
const CalculationField = React.memo(
  ({ number }: ICalculationFieldProps): JSX.Element => {
    const circleRender = () => {
      const circleArr: JSX.Element[] = [];

      if (number) {
        for (let i = 0; i < number; i++) {
          circleArr.push(
            <Circle
              key={i}
              extraClass={[s[CircleArr[i]]]}
              size="small"
            />
          );
        }
      }

      return circleArr;
    };

    return <div className={s["calculation-field"]}>{circleRender()}</div>;
  });

CalculationField.displayName = "CalculationField";
export default CalculationField;
