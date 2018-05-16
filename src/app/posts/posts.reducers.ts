import { PostActions, EDIT_MODE_ON, EDIT_MODE_OFF } from "./posts.actions";

export interface IPostsState {
  editMode: boolean
}

export const INITIAL_POSTS_STATE: IPostsState = {
  editMode: false
}

export function PostsReducer(state = INITIAL_POSTS_STATE, action: PostActions) {
  switch(action.type) {
    case EDIT_MODE_ON:
      return {
        ...state,
        editMode: true
      }

    case EDIT_MODE_OFF:
      return {
        ...state,
        editMode: false
      }

  }
  return state;
}
