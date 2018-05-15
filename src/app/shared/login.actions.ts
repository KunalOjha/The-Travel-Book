import { Action } from '@ngrx/store';
import { User } from 'firebase';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export class LoginUser implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {}
}

export class LogoutUser implements Action {
  readonly type = LOGOUT;
}

export class RegisterUser implements Action {
  readonly type = REGISTER;
}

export type LoginActions = LoginUser | LogoutUser | RegisterUser;
