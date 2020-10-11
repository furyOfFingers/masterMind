
interface IColorState {
  color: string;
  randomColor: string[];
  correctColorInfo: number[];
}
interface IConfirmState {
  show: boolean
}

interface IAppState {
  color: IColorState;
  show: IConfirmState;
}

export default IAppState;