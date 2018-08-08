import { Routes } from "../../node_modules/@angular/router";
import { MainDashboardComponent } from "./components/main-dashboard/main-dashboard.component";

export const routes: Routes = [
  {
    path: "post",
    loadChildren: "../app/posts/posts.module#PostsModule"
  },
  {
    path: "world-map",
    loadChildren: "../app/world-map/world-map.module#WorldMapModule"
  },
  {
    path: "",
    component: MainDashboardComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];
