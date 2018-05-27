import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { IAppState } from './store/store';
import { IBlogPost } from './model/blogPost.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts$;
  blogCast = new Subject<IBlogPost[]>();

  constructor(private store: Store<IAppState>) {
    this.blogPosts$ = this.store.select('posts', 'blogs');
  }

  emitBlogPosts(data:IBlogPost[]) {
    this.blogCast.next(data);
  }
}
