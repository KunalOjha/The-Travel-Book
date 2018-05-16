import { Action } from "@ngrx/store";

export const EDIT_MODE_ON = 'EDIT_MODE_ON'
export const EDIT_MODE_OFF = 'EDIT_MODE_OFF'

export class activateEditMode implements Action{
  readonly type = EDIT_MODE_ON
}

export class deactivateEditMode implements Action{
  readonly type = EDIT_MODE_OFF
}
export type PostActions = activateEditMode | deactivateEditMode;
