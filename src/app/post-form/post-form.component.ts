import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  title: string;
  description: string;
  imageUrl: string;

  ngOnInit() {
  }

  constructor(private router: Router) {}

}
