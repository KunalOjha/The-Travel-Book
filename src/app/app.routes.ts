import { Routes } from "../../node_modules/@angular/router";
import { WorldMapComponent } from "./world-map/components/world-map/world-map.component";
import { MainDashboardComponent } from "./components/main-dashboard/main-dashboard.component";

export const routes: Routes = [
  {
    path: "post",
    loadChildren: "../app/posts/posts.module#PostsModule"
  },
  {
    path: "world-map",
    component: WorldMapComponent
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
