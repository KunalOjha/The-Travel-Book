import { Action } from "@ngrx/store";

export const EDIT_MODE_ON = 'EDIT_MODE_ON';
export const EDIT_MODE_OFF = 'EDIT_MODE_OFF';
export const CREATE_MODE_ON = 'CREATE_MODE_ON';
export const CREATE_MODE_OFF = 'CREATE_MODE_OFF';


export class activateEditMode implements Action {
  readonly type = EDIT_MODE_ON
};

export class deactivateEditMode implements Action {
  readonly type = EDIT_MODE_OFF
};

export class activateCreateMode implements Action {
  readonly type = CREATE_MODE_ON
};

export class deactivateCreateMode implements Action {
  readonly type = CREATE_MODE_OFF
};

export type modeActions = activateEditMode | deactivateEditMode | activateCreateMode | deactivateCreateMode;
