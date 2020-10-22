import { IInitialCircle, IInitialGameStatic } from "../Types/Types";
export const CircleArr = ["first", "second", "third", "fourth"];

export const AllColor = ["yellow", "white", "red", "green", "blue", "black"];

export const InitialCircle: IInitialCircle = {
  extraClass: "",
  clicked: false,
};

export const InitialGameStatic: IInitialGameStatic = {
  number: "",
  fillLine: false,
  editable: true
};
