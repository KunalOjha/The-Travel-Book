import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { REQUEST_BLOGPOSTS, loadBlogPosts } from '../actions/blogPost.actions'
import { PostsService } from '../../posts/posts.service';

@Injectable()
export class BlogEffects {
  // Listen for the 'REQUEST' action
  @Effect()
  loadBlog$ = this.actions$.pipe(
    ofType(REQUEST_BLOGPOSTS),
    switchMap((action: Action) => {
      return this.postsService.getAllPosts().pipe(
          map(result => {
            return new loadBlogPosts(result)
          }))
    })
  );

  constructor(private postsService: PostsService, private actions$: Actions) {}
}
