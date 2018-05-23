import { IBlogPost } from "../../model/blogPost.model";
import { BlogPostActions, LOAD_BLOGPOSTS } from "../actions/blogPost.actions";

export interface State {
  blogs: any;
}

const INITIAL_BLOG_STATE: State = {
  blogs: null
}

export function blogReducer(state = INITIAL_BLOG_STATE, action: BlogPostActions) {
  switch(action.type) {
    case LOAD_BLOGPOSTS:
      return {
        ...state,
        blogs: [...action.payload]
      }
  }
  return state;
}
