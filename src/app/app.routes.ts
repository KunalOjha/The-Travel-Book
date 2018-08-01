import { Routes } from "../../node_modules/@angular/router";
import { PostFormComponent } from "./posts/components/post-form/post-form.component";
import { PostComponent } from "./posts/components/post/post.component";
import { MainDashboardComponent } from "./components/main-dashboard/main-dashboard.component";

export const routes: Routes = [
  { path: "post/edit/:id", component: PostFormComponent, pathMatch: "full" },
  { path: "post/new", component: PostFormComponent, pathMatch: "full" },
  { path: "post/:id", component: PostComponent },
  { path: "", component: MainDashboardComponent },
  { path: "**", redirectTo: "" }
];
