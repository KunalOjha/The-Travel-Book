import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";
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
          return new loadBlogPostsSuccess(result || []);
        }),
        catchError(error => {
          console.error('Error loading blog posts:', error);
          return of(new loadBlogPostsSuccess([]));
        })
      );
    })
  );

  constructor(private postsService: PostsService, private actions$: Actions) {}
}
