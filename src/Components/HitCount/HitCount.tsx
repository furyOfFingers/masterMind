import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import IAppState from '../../Types/State';
import { IInitialCircle } from '../../Types/Types';
import { getConfirmAction } from '../../Redux/Confirmer/Actions';
import s from './style.styl';
import so from '../../Assets/outerStyle.styl';

import { CircleArr } from '../../Constants/const';
import Circle from '../Circle/Circle';

/**
 * Middle component on which the color is chosen.
 */
const HitCount = (): JSX.Element => {
  const initialCircle: IInitialCircle = {
    extraClass: '',
    clicked: false,
  };

  const color: string = useSelector((state: IAppState) => state.color.color);
  const dispatch = useDispatch();

  const [circle, setCircle] = useState({} as IInitialCircle[]);
  let [clickCounter, setClickCounter] = useState(0);

  useEffect(() => {
    const newCircle = {} as IInitialCircle[];

    CircleArr.forEach((el: string, i: number) => {
      newCircle[i] = { ...initialCircle };
    });
    setCircle(newCircle);
  }, []);

  /** Checks if all blocks are filled */
  const filledBlockCounter = () => {
    setClickCounter(clickCounter+=1);

    if(clickCounter === CircleArr.length) {
      dispatch(getConfirmAction(true));
    }
  };

  /** Fills the Circle component with color. */
  const handlePainting = (el: string, i: number) => {
    const newCircle = { ...circle };

    newCircle[i].extraClass = color;
    setCircle(newCircle);

    color && filledBlockCounter();
  };

  /** Render circle components. */
  const circleRender = () => {
    const circleArray: JSX.Element[] = [];

    Object.keys(circle).map((el: string, i: number) => {
      circleArray.push(
        <React.Fragment key={i}>
          <Circle
            isColorSelected={!!color && !circle[i].extraClass}
            active
            extraClass={[s[circle[i].extraClass as string]]}
            onClick={() => handlePainting(el, i)}
          />
        </React.Fragment>
      );
    });

    return circleArray;
  };

  return (
    <div className={so['hit-count']}>
      {color && <div className={s['left-bar']}></div>}

      <div className={s['circle-container']}>{circleRender()}</div>

      {color && <div className={s['right-bar']}></div>}
    </div>
  );
};

export default HitCount;
