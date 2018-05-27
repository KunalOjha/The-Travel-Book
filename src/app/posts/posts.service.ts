import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';


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

  getAllPosts() {
    return this.db.list('/posts').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.val();
        const id = a.payload.key;
        return { id, ...data };
      });
    });
  }

  updatePost(blogId: string, post: NgForm) {
    this.db.object('/posts/'+ blogId).update(post);
  }

  deletePost(blogId: string) {
    this.db.object('/posts/'+ blogId).remove();
  }
}
