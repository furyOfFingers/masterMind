import { IInitialCircle } from "Types/Types";
import { AllColor } from "Constants/const";
import { InitialCircle } from "./initialData";

const colorHolder = (): IInitialCircle[] => {
  const newCircle = {} as IInitialCircle[];

  AllColor.forEach((el, i) => {
    newCircle[i] = { ...InitialCircle };
    newCircle[i].extraClass = el;
  });

  return newCircle;
};

export default colorHolder;
