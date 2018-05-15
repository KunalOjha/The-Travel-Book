import { Action } from '@ngrx/store';
import { LOGIN, LOGOUT, REGISTER, LoginActions } from './login.actions';

export interface IUserState {
  isLoggedIn: boolean,
  uuid: string,
  userName: string,
  userPhotoURL?: string
}

const initialState: IUserState = {
  isLoggedIn: false,
  uuid: null,
  userName : null,
}

export function loginReducer(state = initialState, action: LoginActions) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        uuid: action.payload.uid,
        userName: action.payload.displayName,
        userPhotoURL: action.payload.photoURL
      }
    case LOGOUT:
      return {
        ...initialState
      }
    case REGISTER:
      return {
        ...state
      }
  }
  return state
}
