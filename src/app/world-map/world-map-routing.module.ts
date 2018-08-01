import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorldMapComponent } from "./components/world-map/world-map.component";

const routes: Routes = [
  {
    path: "",
    component: WorldMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldMapRoutingModule {}
