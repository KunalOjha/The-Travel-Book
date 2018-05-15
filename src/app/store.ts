import { loginReducer, IUserState } from "./shared/login.reducers";

//the shape of the entire store
export interface IAppState {
  user: IUserState
}

export const INITIAL_APP_STATE = {
  user: loginReducer
}
