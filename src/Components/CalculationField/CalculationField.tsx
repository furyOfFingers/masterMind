import React from 'react';
import s from './style.styl';

import { CircleArr } from '../../Constants/const';
import Circle from '../Circle/Circle';

interface ICalculationFieldProps {}

/**
 * Component displaying correct selection.
 */
const CalculationField = ({}: ICalculationFieldProps) => {

  const circleRender= () => {
    return CircleArr.map((el: string, i: number) => {
      return (
        <React.Fragment key={i}>
          <Circle extraClass={[s[el]]} size="small" ></Circle>
        </React.Fragment>
      )
    });
  };

  return (
    <div className={s['calculation-field']}>
      {circleRender()}
    </div>
  );
};

export default CalculationField;
