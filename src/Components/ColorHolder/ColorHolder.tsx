import React,{ useState, useEffect } from 'react';
import s from './style.styl';
import { useDispatch } from 'react-redux';

import { IInitialCircle } from '../../Types/Types';

import { AllColor } from '../../Constants/const';
import { getColorAction } from '../../Redux/Color/Actions';
import Circle from '../Circle/Circle';

/**
 * Component containing all colors.
 */
const ColorHolder = (): JSX.Element => {
  const initialCircle = {
    extraClass: '',
    clicked: false
  };

  const dispatch = useDispatch();

  const [circle, setCircle] = useState({} as IInitialCircle[]);

  useEffect(() => {
    const newCircle = {} as IInitialCircle[];

    AllColor.forEach((el, i) => {
      newCircle[i] = {...initialCircle}
      newCircle[i].extraClass = el
    });

    setCircle(newCircle);
  }, []);

  const handleColorPick = (el: string, i: number) => {
    let newCircle = {} as IInitialCircle[];
    newCircle = {...circle};

    for(let el in newCircle){
      newCircle[el].clicked = false;
    };

    newCircle[i].clicked = true;
    dispatch(getColorAction(circle[i].extraClass as string));

    setCircle(newCircle);
  };

  const circleRender= () => {
    const circleArray: JSX.Element[] = [];

    Object.keys(circle).map((el: string, i: number) => {
      circleArray.push(
        <React.Fragment key={i}>
          <Circle
            clicked = {circle[i].clicked as boolean}
            active
            extraClass={[s[circle[i].extraClass as string]]}
            size="normal"
            onClick={() => handleColorPick(el, i)}
          />
        </React.Fragment>
      );
    });

    return circleArray;
  };

  return (
    <div className={s['color-holder']}>
      {circleRender()}
    </div>
  );
};

export default ColorHolder;
