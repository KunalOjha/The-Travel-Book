import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store';
import { Router } from '@angular/router';
import { IUserState } from '../shared/user.reducers';
import { Observable } from 'rxjs/Observable';
import { IPostsState } from '../posts/posts.reducers';

@Component({
  selector: 'main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css', '../../blog-card.css']
})
export class MainDashboardComponent implements OnInit{

  editMode$ : Observable<any>;

  cards = [
    { title: 'Card 1', cols: 1, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 1 }
  ];

  constructor(private router: Router, private store: Store<IAppState>) {}

  ngOnInit() {
    this.editMode$ = this.store.select('post', 'editMode');
  }

  newPost() {
    this.router.navigate(['/post']);
  }
}
