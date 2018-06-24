import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "../store/store";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { requestBlogPosts } from "../store/actions/blogPost.actions";
import { activateCreateMode } from "../store/actions/mode.actions";

@Component({
  selector: "main-dashboard",
  templateUrl: "./main-dashboard.component.html",
  styleUrls: ["./main-dashboard.component.css", "../../blog-card.css"]
})
export class MainDashboardComponent implements OnInit, OnDestroy {
  blogPosts$: Observable<any>;
  editMode$: Observable<boolean>;
  viewMode: boolean = true;
  viewMode$ = this.store
    .select("mode", "view")
    .subscribe(viewMode => (this.viewMode = viewMode));

  constructor(private router: Router, private store: Store<IAppState>) {}

  ngOnInit() {
    //fetch blog posts on start
    this.store.dispatch(new requestBlogPosts());
    this.blogPosts$ = this.store.select("posts", "blogs");

    this.editMode$ = this.store.select("mode", "edit");
  }

  selectBlogCard(uid: string) {
    if (this.viewMode) {
      this.router.navigate(["post", uid]);
      return;
    }
    this.router.navigate(["post", "edit", uid]);
  }

  navToNewPostForm() {
    this.store.dispatch(new activateCreateMode());
    this.router.navigate(["/post"]);
  }

  ngOnDestroy() {
    this.viewMode$.unsubscribe();
  }
}
