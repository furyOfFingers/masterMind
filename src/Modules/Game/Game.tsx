import React, { useState } from "react";
import s from "./style.styl";
import { useSelector, useDispatch } from "react-redux";

import IAppState from "Types/State";
import { getConfirmAction } from "Redux/Confirmer/Reducers";

import { InitialGameStatic } from "InitialData/initialData";
import { AllColor, CircleArr } from "Constants/const";
import shuffleColorArr from "Hooks/useShuffleColorArr";

import CalculationField from "Components/CalculationField/CalculationField";
import HitCount from "Components/HitCount/HitCount";
import Button from "Components/Button/Button";
import ColorHolder from "Components/ColorHolder/ColorHolder";
import HowToPlay from "Modules/HowToPlay/HowToPlay";

const Game = (): JSX.Element => {
  shuffleColorArr(AllColor, CircleArr.length);
  const [gameStatic, setGameStatic] = useState([InitialGameStatic]);
  const [victory, setVictory] = useState(false);

  const randomColor: string[] = useSelector(
    (state: IAppState) => state.color.randomColor
  );

  const showConfirm: boolean = useSelector(
    (state: IAppState) => state.show.show
  );

  const colorInfo: string = useSelector(
    (state: IAppState) => state.color.roundStatic
  );

  const dispatch = useDispatch();

  const handleConfirm = () => {
    if (colorInfo === "44") {
      setVictory(true);
    } else {
      const newGameStatic = { ...gameStatic };
      const l = Object.keys(newGameStatic).length;

      newGameStatic[l - 1].number = colorInfo;
      newGameStatic[l - 1].editable = false;
      newGameStatic[l] = {
        number: "",
        fillLine: false,
        editable: true,
      };

      dispatch(getConfirmAction(false));
      setGameStatic(newGameStatic);
    }
  };

  const gameStageRender = () => {
    const newGameStage = [] as JSX.Element[];

    Object.keys(gameStatic).forEach((_: string, i: number) => {
      newGameStage.push(
        <div key={i} className={s["playing-field"]}>
          <CalculationField number={parseInt(gameStatic[i].number.charAt(0))} />

          <HitCount
            randomColor={randomColor}
            filled={!!gameStatic[i].number.charAt(0)}
            isEditable={gameStatic[i].editable}
          />

          <CalculationField number={parseInt(gameStatic[i].number.charAt(1))} />
        </div>
      );
    });

    return newGameStage;
  };

  const gameRender = () => {
    if (victory) {
      return (
        <div className={s["victory"]}>
          <span>you figured out the code</span>
          <span>{randomColor.join("-")}</span>
        </div>
      );
    } else {
      if (Object.keys(gameStatic).length === 8) {
        return (
          <div className={s["lose"]}>
            <span>you lose</span>
            <span>{randomColor.join("-")}</span>
          </div>
        );
      } else {
        return gameStageRender();
      }
    }
  };

  return (
    <div className={s["game"]}>
      <ColorHolder />

      <HowToPlay />

      {gameRender()}

      {showConfirm && !victory && (
        <Button text="Confirm" onClick={handleConfirm} />
      )}
    </div>
  );
};
export default React.memo(Game);
