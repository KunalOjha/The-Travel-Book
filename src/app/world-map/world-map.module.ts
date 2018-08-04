import { NgModule } from "@angular/core";
import { WorldMapRoutingModule } from "./world-map-routing.module";
import { SharedModule } from "../shared/shared.module";
import { WorldMapComponent } from "./components/world-map/world-map.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { StoreModule } from "../../../node_modules/@ngrx/store";
import { routes } from "../app.routes";

@NgModule({
  imports: [SharedModule, WorldMapRoutingModule, LeafletModule],
  declarations: [WorldMapComponent]
})
export class WorldMapModule {}
