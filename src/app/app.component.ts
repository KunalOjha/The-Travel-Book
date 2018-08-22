import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IAppState } from './store/store';
import { Store } from '../../node_modules/@ngrx/store';
import { requestBlogPosts } from './store/actions/blog.actions';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Travellist.io';

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.store.dispatch(new requestBlogPosts());
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.cd.detectChanges();
    //   }
    // });
  }
}
