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
const CalculationField = ({ number }: ICalculationFieldProps): JSX.Element => {
  const circleRender = () => {
    if (!number) return null;

    return [...Array(number)].map((_, i) => (
      <Circle key={i} extraClass={[s[CircleArr[i]]]} size="small" />
    ));
  };

  return <div className={s["calculation-field"]}>{circleRender()}</div>;
};

export default React.memo(CalculationField);
