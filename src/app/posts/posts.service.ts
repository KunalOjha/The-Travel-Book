import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private db: AngularFireDatabase) { }

  createPost(f: NgForm) {
    this.db.list('/posts/').push({
      title: f.control.value.title,
      description: f.control.value.description,
      imageUrl: f.control.value.imageUrl
    })
  }

  updatePost(blogId: number, post: NgForm) {
    this.db.object('/posts/'+ blogId).update(post);
  }

  deletePost(blogId: number) {
    this.db.object('/posts/'+ blogId).remove();
  }

  getAllPosts() {
    return this.db.list('/posts').valueChanges();
  }
}
