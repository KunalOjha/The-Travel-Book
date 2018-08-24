import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: [
    './main-dashboard.component.scss',
    './../../shared/components/blog-card/blog-card.scss'
  ]
})
export class MainDashboardComponent implements OnInit, OnDestroy {
  color = 'warn';
  mode = 'indeterminate';
  blogsLoaded$: Observable<boolean>;
  blogPosts$: Observable<any>;
  editMode$: Observable<boolean>;
  viewMode: boolean = true;
  viewMode$ = this.store
    .select('mode', 'view')
    .subscribe(viewMode => (this.viewMode = viewMode));

  constructor(
    private router: Router,
    private store: Store<IAppState>,
    private postService: PostsService
  ) {}

  ngOnInit() {
    this.blogsLoaded$ = this.store.select('posts', 'blogsLoaded');
    this.blogPosts$ = this.store.select('posts', 'blogs');

    this.editMode$ = this.store.select('mode', 'edit');
  }

  selectBlogCard(uid: string) {
    if (this.viewMode) {
      this.router.navigate(['post', uid]);
      return;
    }
    this.router.navigate(['post', 'edit', uid]);
  }

  onNewPost() {
    this.postService.navToNewPostForm();
  }

  ngOnDestroy() {
    this.viewMode$.unsubscribe();
  }
}
