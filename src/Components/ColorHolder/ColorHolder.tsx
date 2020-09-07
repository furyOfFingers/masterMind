import React,{ useState, useEffect } from 'react';
import s from './style.styl';
import { connect } from 'react-redux';

import { AllColor } from '../../Constants/const';
import { getColorAction } from '../../Redux/Color/Actions';
import Circle from '../Circle/Circle';

interface IColorHolderProps {}

/**
 * Component containing all colors.
 */
// to-do resolve any
const ColorHolder = ({...props}: IColorHolderProps) => {
  const initialCircle = {
    extraClass: '',
    clicked: false
  };

  const [circle, setCircle] = useState({} as any);

  useEffect(() => {
    const newCircle = {} as any;

    AllColor.forEach((el, i) => {
      newCircle[i] = {...initialCircle}
      newCircle[i].extraClass = el
    });

    setCircle(newCircle);
  }, []);

  const handleColorPick = (el: string, i: number) => {
    let newCircle = {} as any;
    newCircle = {...circle};

    for(let el in newCircle){
      newCircle[el].clicked = false;
    }
    newCircle[i].clicked = true;
    props.getColorAction(circle[el].extraClass);

    setCircle(newCircle);
  };

  const circleRender= () => {
    const circleArray: JSX.Element[] = [];

    Object.keys(circle).map((el: string, i: number) => {
      circleArray.push(
        <React.Fragment key={i}>
          <Circle
            clicked = {circle[el].clicked}
            active
            extraClass={[s[circle[el].extraClass]]}
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

const mapDispatchToProps = {
  getColorAction,
};

const mapStateToProps = (state: any) => ({
  color: state.color.color
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorHolder);
