import { IInitialCircle } from "Types/Types";
import { CircleArr } from "Constants/const";
import { InitialCircle } from "./initialData";

const hitCountInitial = (): IInitialCircle[] => {
  const newCircle = {} as IInitialCircle[];

  CircleArr.forEach((_: string, i: number) => {
    newCircle[i] = { ...InitialCircle };
  });

  return newCircle;
};

export default hitCountInitial;
