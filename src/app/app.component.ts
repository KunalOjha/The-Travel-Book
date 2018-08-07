import { Component, OnInit } from "@angular/core";
import { IAppState } from "./store/store";
import { Store } from "../../node_modules/@ngrx/store";
import { requestBlogPosts } from "./store/actions/blog.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Travellist.io";

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new requestBlogPosts());
  }
}
