import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from "@angular/forms";
import { deactivateEditMode } from "../store/actions/mode.actions";
import { Store } from "@ngrx/store";
import { IAppState } from "../store/store";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(
    private db: AngularFireDatabase,
    private store: Store<IAppState>,
    private router: Router
  ) {}

  returnToMainView() {
    this.store.dispatch(new deactivateEditMode());
    this.router.navigate(["/main"]);
  }

  createPost(f: NgForm) {
    this.db.list("/posts/").push({
      title: f.control.value.title,
      description: f.control.value.description,
      imageUrl: f.control.value.imageUrl,
      content: f.control.value.content
    });
  }

  getAllPosts() {
    return this.db
      .list("/posts")
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.val();
          const id = a.payload.key;
          return { id, ...data };
        });
      });
  }

  updatePost(blogId: string, post: NgForm) {
    this.db.object("/posts/" + blogId).update(post);
  }

  deletePost(blogId: string) {
    this.db.object("/posts/" + blogId).remove();
  }
}
