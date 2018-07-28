import { Action } from "@ngrx/store";

export const REQUEST_BLOGPOSTS = "REQUEST_BLOGPOSTS";
export const LOAD_BLOGPOSTS_SUCCESS = "LOAD_BLOGPOSTS_SUCCESS";

export class requestBlogPosts implements Action {
  readonly type = REQUEST_BLOGPOSTS;
}

export class loadBlogPostsSuccess implements Action {
  readonly type = LOAD_BLOGPOSTS_SUCCESS;

  constructor(public payload: any[]) {}
}

export type BlogPostActions = requestBlogPosts | loadBlogPostsSuccess;
