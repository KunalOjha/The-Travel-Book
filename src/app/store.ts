import { IUserState, UserReducer } from "./shared/user.reducers";
import { IPostsState, PostsReducer } from "./posts/posts.reducers";

//the shape of the entire store
export interface IAppState {
  user: IUserState
  post: IPostsState
}

export const INITIAL_APP_STATE = {
  user: UserReducer,
  post: PostsReducer
}
