import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  preview: boolean = false;
  title: string ="Title of Blog Post";
  description: string ="A brief description of the blog post entry";
  imageUrl: string ="http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/w3css/img_mountains_wide.jpg";

  ngOnInit() {
  }

  constructor(private router: Router, private postsService: PostsService) {
  }

  onSubmitForm(entry) {
    this.postsService.createPost(entry);
    this.router.navigate(['/main']);
  }

}
