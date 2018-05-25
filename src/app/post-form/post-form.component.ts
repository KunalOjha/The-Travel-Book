import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

import { Store } from '@ngrx/store';
import { IAppState } from '../store/store';
import { PostsService } from '../posts/posts.service';
import { Subscription, Observable } from 'rxjs';
import { map, tap, withLatestFrom, startWith, share } from 'rxjs/operators';
import { IBlogPost } from '../model/blogPost.model';
import { deactivateEditMode } from '../store/actions/mode.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnDestroy {

  mode$: Subscription;
  editMode: boolean;
  createMode: boolean;
  blog$: Subscription;
  blogPost: IBlogPost;


  constructor(private router: Router, private route: ActivatedRoute, private store: Store < IAppState > , private postsService: PostsService) {}

  ngOnInit() {
    this.mode$ = this.store.select('mode').subscribe(mode => {
      this.editMode = mode.edit,
      this.createMode = mode.create
    });

      if (this.createMode) this.setDefaultValues()

      else {
          this.blog$ = this.store.select('posts', 'blogs').pipe(
              withLatestFrom(this.route.params),
              map(([blogs, params]) => this.blogPost = blogs[params.id])
          ).subscribe()
      }
  }

  private setDefaultValues() {
    return this.blogPost = {
      title: "Title of Blog Post",
      description: "A brief description of the blog post entry",
      imageUrl: "http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/w3css/img_mountains_wide.jpg"
  }
  }

  onSubmitForm(entry) {
      this.postsService.createPost(entry);
      this.router.navigate(['/main']);
  }

  ngOnDestroy() {
      this.mode$.unsubscribe();
  }
}
