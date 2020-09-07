import React, { useState, useEffect } from 'react';
import s from './style.styl';
import so from '../../Assets/outerStyle.styl';
import { connect } from 'react-redux';

import { CircleArr } from '../../Constants/const';
import Circle from '../Circle/Circle';

interface IHitCountProps {}

/**
 * Middle component on which the color is chosen.
 */
const HitCount = ({ ...props }: IHitCountProps) => {
  const initialCircle = {
    extraClass: '',
    clicked: false,
  };

  const [circle, setCircle] = useState({} as any);

  // можно ли эту логику перенести в circleRender?
  useEffect(() => {
    const newCircle = {} as any;

    CircleArr.forEach((el, i: number) => {
      newCircle[i] = { ...initialCircle };
    });
    setCircle(newCircle);
  }, []);

  const handlePainting = (el: string, i: number) => {
    const newCircle = {...circle};

    newCircle[i].extraClass = props.color;
    setCircle(newCircle);
  };

  const circleRender = () => {
    const circleArray: JSX.Element[] = [];

    Object.keys(circle).map((el: string, i: number) => {
      circleArray.push(
        <React.Fragment key={i}>
          <Circle
            isColorSelected={props.color}
            active
            extraClass={[s[circle[el].extraClass]]}
            onClick={() => handlePainting(el, i)}
          />
        </React.Fragment>
      );
    });

    return circleArray;
  };

  return (
    <div className={so['hit-count']}>
      {props.color && <div className={s['left-bar']}></div>}

      <div className={s['circle-container']}>
        {circleRender()}
      </div>

      {props.color && <div className={s['right-bar']}></div>}
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  color: state.color.color,
});

export default connect(mapStateToProps, mapDispatchToProps)(HitCount);
