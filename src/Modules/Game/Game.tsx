import React, { useState } from "react";
import s from "./style.styl";
import { useSelector, useDispatch } from "react-redux";

import IAppState from "Types/State";
import { getConfirmAction } from "Redux/Confirmer/Reducers";
import { AllColor, CircleArr, InitialGameStatic } from "Constants/const";
import shuffleColorArr from "Utilits/shuffleColorArr";

import CalculationField from "Components/CalculationField/CalculationField";
import HitCount from "Components/HitCount/HitCount";
import Button from "Components/Button/Button";
import ColorHolder from "Components/ColorHolder/ColorHolder";

const Game = React.memo(
  (): JSX.Element => {

    shuffleColorArr(AllColor, CircleArr.length);
    const [gameStatic, setGameStatic] = useState([InitialGameStatic]);

    const showConfirm: boolean = useSelector(
      (state: IAppState) => state.show.show
    );

    const colorInfo: string = useSelector(
      (state: IAppState) => state.color.roundStatic
    );

    const dispatch = useDispatch();

    const handleConfirm = () => {
      console.log(Object.keys(gameStatic).length);
      const newGameStatic = {...gameStatic};
      const l = Object.keys(newGameStatic).length;

      newGameStatic[l - 1].number = colorInfo;
      newGameStatic[l - 1].editable = false;
      newGameStatic[l] = {
        number: "",
        fillLine: false,
        editable: true
      };

      dispatch(getConfirmAction(false));
      setGameStatic(newGameStatic);
    };

    const gameStageRender = () => {
      const newGameStage = [] as JSX.Element[];

      Object.keys(gameStatic).forEach((_: string, i: number) => {
        newGameStage.push(
          <div key={i} className={s["playing-field"]}>
            <CalculationField number={parseInt(gameStatic[i].number.charAt(0))} />
            <HitCount filled={!!gameStatic[i].number.charAt(0)} isEditable={gameStatic[i].editable} />
            <CalculationField number={parseInt(gameStatic[i].number.charAt(1))} />
          </div>
        );
      });

      return newGameStage;
    };

    const gameRender = () => {
      if(Object.keys(gameStatic).length === 10) {
        return <div className={s["lose"]}> you lose </div>;
      } else {
        return gameStageRender();
      }
    };

    return (
      <div className={s["game"]}>
        <ColorHolder />

        {gameRender()}

        {showConfirm && <Button text="Confirm" onClick={handleConfirm} />}
      </div>
    );
  }
);

Game.displayName = "Game";
export default Game;
