import { Action } from '@ngrx/store';
import { LOGIN, LOGOUT, REGISTER, LoginActions, LOGINADMIN } from '../actions/login.actions';

export interface State {
  isLoggedIn: boolean,
  isAdmin?: boolean,
  uuid: string,
  userName: string,
  userPhotoURL?: string
}

const INITIAL_USER_STATE: State = {
  isLoggedIn: false,
  isAdmin: false,
  uuid: null,
  userName : null,
}

export function userReducer(state = INITIAL_USER_STATE, action: LoginActions) {
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
  return state;
}
