import React from 'react';
import s from './style.styl';

import CalculationField from '../../Components/CalculationField/CalculationField';
import HitCount from '../../Components/HitCount/HitCount';
import ColorHolder from '../../Components/ColorHolder/ColorHolder';

interface IGameProps {}

const Game = ({}: IGameProps) => {

  return (
    <>
      <div className={s['game']}>
        <ColorHolder/>

        <div className={s['playing-field']}>
          <CalculationField/>
          <HitCount/>
          <CalculationField/>
        </div>
      </div>
    </>
  );
};

export default Game;
