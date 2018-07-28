import {
  BlogPostActions,
  LOAD_BLOGPOSTS_SUCCESS
} from "../actions/blog.actions";

export interface State {
  blogs: any;
  blogsLoaded: boolean;
}

const INITIAL_BLOG_STATE: State = {
  blogs: null,
  blogsLoaded: false
};

export function blogReducer(
  state = INITIAL_BLOG_STATE,
  action: BlogPostActions
) {
  switch (action.type) {
    case LOAD_BLOGPOSTS_SUCCESS:
      return {
        ...state,
        blogsLoaded: true,
        blogs: [...action.payload]
      };
  }
  return state;
}
