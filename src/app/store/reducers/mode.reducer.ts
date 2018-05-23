import { modeActions, EDIT_MODE_ON, EDIT_MODE_OFF } from "../actions/mode.actions";

export interface State {
  editMode: boolean;
}

export const INITIAL_MODE_STATE: State = {
  editMode: false
}

export function modeReducer(state = INITIAL_MODE_STATE, action: modeActions) {
  switch(action.type) {
    case EDIT_MODE_ON:
      return {
        editMode: true
      }
    case EDIT_MODE_OFF:
      return {
        editMode: false
      }
  }
  return state;
}
