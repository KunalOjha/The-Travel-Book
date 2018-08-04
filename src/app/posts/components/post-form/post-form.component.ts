import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Store } from "@ngrx/store";
import { IAppState } from "../../../store/store";
import { PostsService } from "../../../posts/posts.service";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IBlogPost } from "../../../model/blogPost.model";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: [
    "./post-form.component.css",
    "./../../../shared/components/blog-card/blog-card.scss"
  ]
})
export class PostFormComponent implements OnInit, OnDestroy {
  mode$: Subscription;
  editMode: boolean;
  createMode: boolean;
  blog$: Observable<IBlogPost[]> = this.store.select("posts", "blogs");
  blogPost: IBlogPost;
  paramId: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.paramId = this.route.snapshot.params.id;

    this.mode$ = this.store.select("mode").subscribe(mode => {
      this.editMode = mode.edit;
      this.createMode = mode.create;
    });

    if (this.createMode) this.setDefaultValues();
    else {
      this.blog$
        .pipe(
          map(posts => {
            return posts.find(post => post.id == this.paramId);
          })
        )
        .subscribe(post => (this.blogPost = post));
    }
  }

  private setDefaultValues() {
    return (this.blogPost = {
      location: "Narnia",
      lat: 0,
      lng: 0,
      title: "Title of Blog Post",
      description: "A brief description of the blog post entry",
      imageUrl:
        "http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/w3css/img_mountains_wide.jpg"
    });
  }

  onSubmitForm(entry: NgForm) {
    if (!!this.paramId && confirm("Update this Blog Post?")) {
      console.log(entry.value);
      this.postsService.updatePost(this.blogPost.id, entry.value);
    } else if (this.createMode) this.postsService.createPost(entry);
    else return null;

    this.postsService.returnToMainView();
  }

  onDeletePost() {
    if (!confirm("Are you sure you want to delete this Post?")) return null;

    this.postsService.deletePost(this.blogPost.id);

    this.postsService.returnToMainView();
  }

  onCancel() {
    if (!confirm("Are you sure you want to cancel?")) return null;

    this.postsService.returnToMainView();
  }

  ngOnDestroy() {
    this.mode$.unsubscribe();
  }
}
