import { Component, OnInit, Input } from "@angular/core";
import { IBlogPost } from "../../../model/blogPost.model";

@Component({
  selector: "blog-card",
  templateUrl: "./blog-card.component.html",
  styleUrls: ["./blog-card.component.css", "./blog-card.scss"]
})
export class BlogCardComponent implements OnInit {
  @Input() post: IBlogPost;

  constructor() {}

  ngOnInit() {}
}
