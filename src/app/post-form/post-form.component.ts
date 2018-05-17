import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

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

  onSubmitForm(f) {
    console.log(f);
  }

  constructor(private router: Router) {}

}
