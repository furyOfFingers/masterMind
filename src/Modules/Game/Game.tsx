import React, { useEffect, useState } from 'react';
import s from './style.styl';
import { useSelector, useDispatch } from 'react-redux';

import IAppState from '../../Types/State';
import { getConfirmAction } from '../../Redux/Confirmer/Actions';

import CalculationField from '../../Components/CalculationField/CalculationField';
import HitCount from '../../Components/HitCount/HitCount';
import Button from '../../Components/Button/Button';
import ColorHolder from '../../Components/ColorHolder/ColorHolder';

const Game = () => {

  const showConfirm: boolean = useSelector(
    (state: IAppState) => state.show.show
  );
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(getConfirmAction(false));
  };

  return (
    <div className={s['game']}>
      <ColorHolder />

      <div className={s['playing-field']}>
        <CalculationField />
        <HitCount />
        <CalculationField />
      </div>

      {showConfirm && <Button text='Confirm' onClick={handleConfirm} />}
    </div>
  );
};

export default Game;
