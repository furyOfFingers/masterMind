import React from "react";
import s from "./style.styl";
import { useSelector, useDispatch } from "react-redux";

import IAppState from "../../Types/State";
import { getConfirmAction } from "../../Redux/Confirmer/Reducers";
import { AllColor, CircleArr } from "../../Constants/const";
import shuffleColorArr from "../../Utilits/shuffleColorArr";

import CalculationField from "../../Components/CalculationField/CalculationField";
import HitCount from "../../Components/HitCount/HitCount";
import Button from "../../Components/Button/Button";
import ColorHolder from "../../Components/ColorHolder/ColorHolder";

const Game = React.memo(
  (): JSX.Element => {

    shuffleColorArr(AllColor, CircleArr);

    const showConfirm: boolean = useSelector(
      (state: IAppState) => state.show.show
    );

    const colorInfo: number[] = useSelector(
      (state: IAppState) => state.color.correctColorInfo
    );

    const dispatch = useDispatch();

    const handleConfirm = () => {
      dispatch(getConfirmAction(false));
    };

    return (
      <div className={s["game"]}>
        <ColorHolder />

        <div className={s["playing-field"]}>
          <CalculationField number={colorInfo[0]} />
          <HitCount />
          <CalculationField number={colorInfo[1]} />
        </div>

        {showConfirm && <Button text="Confirm" onClick={handleConfirm} />}
      </div>
    );
  }
);

Game.displayName = "Game";
export default Game;
