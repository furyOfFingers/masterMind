
interface ColorState {
  color: string
}
interface ConfirmState {
  show: boolean
}

export default interface IAppState {
  color: ColorState;
  show: ConfirmState
}