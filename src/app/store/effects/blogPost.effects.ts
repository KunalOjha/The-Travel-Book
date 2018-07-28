import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import {
  REQUEST_BLOGPOSTS,
  loadBlogPostsSuccess
} from "../actions/blog.actions";
import { PostsService } from "../../posts/posts.service";

@Injectable()
export class BlogEffects {
  // Listen for the 'REQUEST' action
  @Effect()
  loadBlog$ = this.actions$.pipe(
    ofType(REQUEST_BLOGPOSTS),
    switchMap(() => {
      return this.postsService.getAllPosts().pipe(
        map(result => {
          return new loadBlogPostsSuccess(result);
        })
      );
    })
  );

  constructor(private postsService: PostsService, private actions$: Actions) {}
}
