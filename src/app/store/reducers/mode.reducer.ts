import {
  modeActions,
  EDIT_MODE_ON,
  EDIT_MODE_OFF,
  CREATE_MODE_ON,
  CREATE_MODE_OFF
} from '../actions/mode.actions';

export interface State {
  edit: boolean;
  view: boolean;
  create: boolean;
}

export const INITIAL_MODE_STATE: State = {
  edit: false,
  view: true,
  create: false
};

export function modeReducer(state = INITIAL_MODE_STATE, action: modeActions) {
  switch (action.type) {
    case EDIT_MODE_ON:
      return {
        edit: true,
        view: false,
        create: false
      };
    case EDIT_MODE_OFF:
      return {
        edit: false,
        view: true,
        create: false
      };
    case CREATE_MODE_ON:
      return {
        edit: true,
        view: false,
        create: true
      };
    case CREATE_MODE_OFF:
      return {
        edit: false,
        view: false,
        create: false
      };
  }
  return state;
}
