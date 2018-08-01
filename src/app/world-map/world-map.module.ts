import { NgModule } from "@angular/core";
import { WorldMapRoutingModule } from "./world-map-routing.module";
import { SharedModule } from "../shared/shared.module";
import { WorldMapComponent } from './components/world-map/world-map.component';

@NgModule({
  imports: [SharedModule, WorldMapRoutingModule],
  declarations: [WorldMapComponent]
})
export class WorldMapModule {}
