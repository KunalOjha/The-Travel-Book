import { Action } from '@ngrx/store';
import { LOGIN, LOGOUT, REGISTER, LoginActions, LOGINADMIN } from './login.actions';

export interface IUserState {
  isLoggedIn: boolean,
  isAdmin?: boolean,
  uuid: string,
  userName: string,
  userPhotoURL?: string
}

const INITIAL_USER_STATE: IUserState = {
  isLoggedIn: false,
  isAdmin: false,
  uuid: null,
  userName : null,
}

export function UserReducer(state = INITIAL_USER_STATE, action: LoginActions) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: false,
        uuid: action.payload.uid,
        userName: action.payload.displayName,
        userPhotoURL: action.payload.photoURL
      }

    case LOGINADMIN:
      return {
        ...state,
        isAdmin : true
      }

    case LOGOUT:
      return {
        ...INITIAL_USER_STATE
      }
    case REGISTER:
      return {
        ...state
      }
  }
  return state
}
