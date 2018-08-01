import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostComponent } from "./components/post/post.component";
import { PostFormComponent } from "./components/post-form/post-form.component";

const routes: Routes = [
  { path: "edit/:id", component: PostFormComponent, pathMatch: "full" },
  { path: "new", component: PostFormComponent, pathMatch: "full" },
  { path: ":id", component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
