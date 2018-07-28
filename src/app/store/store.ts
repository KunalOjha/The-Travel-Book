import * as fromUser from "./reducers/login.reducer";
import * as fromBlogs from "./reducers/blog.reducer";
import * as fromMode from "./reducers/mode.reducer";
import {
  ActionReducerMap,
  ActionReducer,
  createSelector,
  combineReducers
} from "@ngrx/store";

export interface IAppState {
  user: fromUser.State;
  posts: fromBlogs.State;
  mode: fromMode.State;
}

export const reducers: ActionReducerMap<IAppState> = {
  user: fromUser.userReducer,
  posts: fromBlogs.blogReducer,
  mode: fromMode.modeReducer
};
