import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IBlogPost } from "../model/blogPost.model";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { IAppState } from "../store/store";
import { Store } from "@ngrx/store";
import { map, combineLatest } from "rxjs/operators";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  params$: Observable<ParamMap> = this.route.paramMap;
  paramId;
  blog$: Observable<IBlogPost[]> = this.store.select("posts", "blogs");
  public blogPost: IBlogPost;

  constructor(private route: ActivatedRoute, private store: Store<IAppState>) {}

  ngOnInit() {
    this.blog$
      .pipe(
        combineLatest(this.params$),
        map(([posts, params]) => {
          return posts.find(post => post.id === params.get("id"));
        })
      )
      .subscribe(post => (this.blogPost = post));
  }
}
