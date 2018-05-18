import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store';
import { Router } from '@angular/router';
import { IUserState } from '../shared/user.reducers';
import { Observable } from 'rxjs/Observable';
import { IPostsState } from '../posts/posts.reducers';
import { PostsService } from '../posts.service';

@Component({
  selector: 'main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css', '../../blog-card.css']
})
export class MainDashboardComponent implements OnInit{

  blogPosts$: Observable<any>;
  editMode$: Observable<any>;

  constructor(private router: Router, private store: Store<IAppState>, private postsService: PostsService) {}

  ngOnInit() {
    this.editMode$ = this.store.select('post', 'editMode');
    this.blogPosts$ = this.postsService.getAllPosts();
  }

  navToNewPostForm() {
    this.router.navigate(['/post']);
  }
}
