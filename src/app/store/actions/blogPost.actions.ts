import { Action } from "@ngrx/store";

export const REQUEST_BLOGPOSTS = 'REQUEST_BLOGPOSTS';
export const LOAD_BLOGPOSTS = 'LOAD_BLOGPOSTS';

export class requestBlogPosts implements Action {
  readonly type = REQUEST_BLOGPOSTS
}

export class loadBlogPosts implements Action {
  readonly type = LOAD_BLOGPOSTS;

  constructor(public payload: any[]) {}
}

export type BlogPostActions = requestBlogPosts | loadBlogPosts;
