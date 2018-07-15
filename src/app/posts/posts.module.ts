import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostFormComponent } from "../post-form/post-form.component";
import { RouterModule } from "@angular/router";
import { QuillModule } from "ngx-quill";
import { MaterialsModule } from "../materials.module";
import { FormsModule } from "@angular/forms";
import { PostsService } from "./posts.service";
import { PostComponent } from "../post/post.component";
import { BlogCardComponent } from "../blog-card/blog-card.component";

@NgModule({
  declarations: [PostFormComponent, PostComponent, BlogCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    QuillModule,
    MaterialsModule
  ],
  exports: [PostFormComponent, BlogCardComponent],
  providers: [PostsService]
})
export class PostsModule {}
