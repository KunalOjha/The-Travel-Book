import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

import { Store } from '@ngrx/store';
import { IAppState } from '../store/store';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  id: number;
  editMode$;
  preview: boolean = false;
  title: string ="Title of Blog Post";
  description: string ="A brief description of the blog post entry";
  imageUrl: string ="http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/w3css/img_mountains_wide.jpg";

  ngOnInit() {
    this.editMode$ = this.store.select('mode', "editMode");
    this.route.params
      .subscribe(params => this.id = params.id)
  }

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<IAppState>, private postsService: PostsService) {
  }

  onSubmitForm(entry) {
    this.postsService.createPost(entry);
    this.router.navigate(['/main']);
  }

}
