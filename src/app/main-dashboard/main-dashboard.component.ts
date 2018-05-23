import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { requestBlogPosts } from '../store/actions/blogPost.actions';

@Component({
  selector: 'main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css', '../../blog-card.css']
})
export class MainDashboardComponent implements OnInit{

  editMode$: Observable<any>;
  blogPosts$: Observable<any>;

  constructor(private router: Router, private store: Store<IAppState>) {}

  ngOnInit() {
    //fetch blog posts on start
    this.store.dispatch(new requestBlogPosts());

    this.editMode$ = this.store.select('mode', 'editMode');
    this.blogPosts$ = this.store.select('posts', 'blogs')
  }

  navToNewPostForm() {
    this.router.navigate(['/post']);
  }
}
