
interface IColorState {
  color: string;
  randomColor: Array<string>;
  roundStatic: string;
}
interface IConfirmState {
  show: boolean
}

interface IAppState {
  color: IColorState;
  show: IConfirmState;
}

export default IAppState;