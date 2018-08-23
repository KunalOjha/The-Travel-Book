import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogPost } from '../../../model/blogPost.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { map, combineLatest } from 'rxjs/operators';
import { IAppState } from '../../../store/store';
import { requestBlogPosts } from '../../../store/actions/blog.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  params$: Observable<ParamMap> = this.route.paramMap;
  paramId;
  blog$: Observable<IBlogPost[]> = this.store.select('posts', 'blogs');
  public blogPost: IBlogPost;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    if (!this.blogPost) {
      this.store.dispatch(new requestBlogPosts());
    }

    this.blog$
      .pipe(
        combineLatest(this.params$),
        map(([posts, params]) => {
          this.paramId = params.get('id');
          if (!posts) return null;
          return posts.find(post => post.id === params.get('id'));
        })
      )
      .subscribe(post => {
        this.blogPost = post;
      });

    this.store.select('mode').subscribe(mode => {
      if (mode.edit) this.router.navigate(['post', 'edit', this.paramId]);
      else if (mode.view) this.router.navigate(['post', this.paramId]);
    });
  }
}
